/**
 * Scrape academias de oposiciones en Bizkaia/Bilbao via Google Places API
 */
const fs = require('fs');
const https = require('https');
const path = require('path');

const API_KEY = 'AIzaSyAsxB_Gpi_QyD3j84uohYaK6ftyuyj0U-g';

function searchPlaces(query, pageToken = null) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      textQuery: query,
      languageCode: 'es',
      regionCode: 'ES',
      ...(pageToken ? { pageToken } : {})
    });
    const req = https.request({
      hostname: 'places.googleapis.com',
      path: '/v1/places:searchText',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.nationalPhoneNumber,places.internationalPhoneNumber,places.websiteUri,places.rating,places.userRatingCount,places.businessStatus,places.types,places.googleMapsUri,nextPageToken'
      }
    }, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try { resolve(JSON.parse(d)); } catch { resolve({ raw: d }); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

const QUERIES = [
  'academia oposiciones Bilbao',
  'academia oposiciones Bizkaia',
  'preparador oposiciones Bilbao',
  'academia oposiciones Barakaldo',
  'academia oposiciones Getxo',
  'academia oposiciones Durango',
  'centro de estudios oposiciones Bilbao',
  'preparar oposiciones Diputación Foral Bizkaia',
  'academia oposiciones administrativo Bilbao',
  'academia oposiciones auxiliar Bilbao'
];

(async () => {
  const all = new Map();
  for (const q of QUERIES) {
    console.log(`🔍 ${q}`);
    let pageToken = null;
    let pages = 0;
    while (pages < 3) {
      const r = await searchPlaces(q, pageToken);
      if (!r.places) break;
      for (const p of r.places) {
        const key = p.displayName?.text + '|' + (p.formattedAddress || '');
        if (!all.has(key) && p.businessStatus === 'OPERATIONAL') {
          all.set(key, {
            nombre: p.displayName?.text,
            direccion: p.formattedAddress,
            telefono: p.nationalPhoneNumber || p.internationalPhoneNumber,
            web: p.websiteUri,
            rating: p.rating,
            reviews: p.userRatingCount,
            maps: p.googleMapsUri,
            tipos: p.types
          });
        }
      }
      pageToken = r.nextPageToken;
      if (!pageToken) break;
      pages++;
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  const list = [...all.values()].filter(a => {
    const n = (a.nombre || '').toLowerCase();
    return n.includes('academ') || n.includes('estudio') || n.includes('preparac') || n.includes('oposi') || n.includes('centro') || n.includes('formac');
  });

  list.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));

  fs.writeFileSync(path.join(__dirname, 'academias-bizkaia.json'), JSON.stringify(list, null, 2));

  // CSV para Josu
  const csv = ['Nombre;Direccion;Telefono;Web;Rating;Reviews;Maps'];
  for (const a of list) {
    csv.push([a.nombre, a.direccion, a.telefono || '', a.web || '', a.rating || '', a.reviews || '', a.maps || ''].map(v => String(v).replace(/;/g, ',')).join(';'));
  }
  fs.writeFileSync(path.join(__dirname, 'academias-bizkaia.csv'), csv.join('\n'));

  console.log(`\n✅ ${list.length} academias encontradas`);
  console.log(`💾 academias-bizkaia.json + .csv`);
  console.log('\n🏆 TOP 15 por reviews:');
  list.slice(0, 15).forEach((a, i) => {
    console.log(`${String(i+1).padStart(2)}. ${a.nombre} · ⭐${a.rating || '?'} (${a.reviews || 0}) · ${a.telefono || 'sin tel'} · ${a.web || 'sin web'}`);
  });
})().catch(e => { console.error('❌', e); process.exit(1); });

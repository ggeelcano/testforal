/**
 * Scrapea las webs de las academias del top para encontrar emails de contacto.
 */
const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const academias = JSON.parse(fs.readFileSync(path.join(__dirname, 'academias-bizkaia.json'), 'utf-8'));

// Top objetivo - excluir cadenas nacionales
const EXCLUIR = ['campus training', 'masterd', 'davante', 'cef', 'adams'];
const top = academias.filter(a => {
  const n = (a.nombre || '').toLowerCase();
  return a.web && !EXCLUIR.some(e => n.includes(e));
}).slice(0, 20);

function fetchUrl(url, redirs = 0) {
  return new Promise((resolve) => {
    if (redirs > 5) return resolve('');
    try {
      const u = new URL(url);
      const lib = u.protocol === 'https:' ? https : http;
      const req = lib.get(url, {
        timeout: 10000,
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Bot/1.0)' }
      }, (res) => {
        if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
          const next = new URL(res.headers.location, url).toString();
          res.destroy();
          return resolve(fetchUrl(next, redirs + 1));
        }
        let d = '';
        res.on('data', c => d += c);
        res.on('end', () => resolve(d));
      });
      req.on('error', () => resolve(''));
      req.on('timeout', () => { req.destroy(); resolve(''); });
    } catch { resolve(''); }
  });
}

function extractEmails(html) {
  const emails = new Set();
  const re = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  const matches = html.match(re) || [];
  for (const m of matches) {
    const lower = m.toLowerCase();
    if (lower.includes('wix') || lower.includes('sentry') || lower.includes('example') || lower.includes('@2x') || lower.endsWith('.png') || lower.endsWith('.jpg') || lower.endsWith('.svg') || lower.endsWith('.gif')) continue;
    emails.add(lower);
  }
  return [...emails];
}

async function crawl(baseUrl) {
  const emails = new Set();
  const toTry = [
    baseUrl,
    baseUrl.replace(/\/$/, '') + '/contacto',
    baseUrl.replace(/\/$/, '') + '/contact',
    baseUrl.replace(/\/$/, '') + '/es/contacto',
    baseUrl.replace(/\/$/, '') + '/aviso-legal'
  ];
  for (const u of toTry) {
    const html = await fetchUrl(u);
    if (html) extractEmails(html).forEach(e => emails.add(e));
    if (emails.size > 0 && toTry.indexOf(u) > 0) break;
  }
  return [...emails];
}

(async () => {
  console.log(`🔍 Escaneando ${top.length} webs...\n`);
  const results = [];
  for (const a of top) {
    process.stdout.write(`• ${a.nombre}... `);
    const emails = await crawl(a.web);
    const best = emails.find(e => /info|contact|admin|secreta|oposi|academ|hola/.test(e)) || emails[0] || '';
    results.push({ ...a, emails, email: best });
    console.log(best ? `✉ ${best}` : `(sin email)`);
  }

  fs.writeFileSync(path.join(__dirname, 'academias-con-email.json'), JSON.stringify(results, null, 2));

  const conEmail = results.filter(r => r.email);
  console.log(`\n✅ ${conEmail.length}/${top.length} con email\n`);
  conEmail.forEach(a => console.log(`  ${a.email} → ${a.nombre}`));
})();

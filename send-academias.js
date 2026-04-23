/**
 * Envía los correos personalizados a academias via Gmail API (info@ggelcano.com).
 *
 * Uso:
 *   node send-academias.js --dry         → muestra qué enviaría, NO envía
 *   node send-academias.js --send N=6    → envía hasta N correos (default 6)
 *   node send-academias.js --send-all    → ignora rate limit (cuidado)
 *
 * Tracking en .sent-academias.json (no reenvía a quien ya se envió).
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const os = require('os');

const CONFIG = {
  FROM_NAME: 'Josu García · G&G Elcano',
  FROM_EMAIL: 'raul@ggelcano.com',             // cuenta autorizada OAuth
  REPLY_TO: 'josugarciandia@ggelcano.com',     // respuestas van a Josu
  PHONE: '614 752 539',
  LANDING: 'https://ggeelcano.github.io/testforal/academias.html?utm_source=email&utm_medium=outreach&utm_campaign=academias_fase1',
  DAILY_LIMIT: 6,
  DELAY_MS: 90000                    // 90s entre envíos (1,5 min)
};

const ACADEMIAS = [
  { email: 'inatec@centroinatec.com',       nombre: 'Centro de Estudios Inatec',      subdom: 'inatec',        intro: 'Inatec es una de las academias mejor valoradas de la ciudad en oposiciones y pensamos que puede encajaros lo que estamos lanzando.' },
  { email: 'info@bilbaoformacion.com',      nombre: 'Bilbao Formación',               subdom: 'bilbaoformacion', intro: 'Veo que Bilbao Formación tiene un catálogo amplio de preparación de oposiciones y esto puede sumar a vuestra oferta sin desarrollar nada por vuestra parte.' },
  { email: 'info@juritecnia.com',           nombre: 'Juritecnia',                     subdom: 'juritecnia',    intro: 'Juritecnia tiene un foco claro en oposiciones jurídicas (A1, A2, auxiliares judiciales) y creo que encaja perfecto con lo que estamos lanzando.', especial: 'Para Técnico Jurídico A1 y Gestión A2 tenemos más de 1.500 preguntas revisadas + simulacros cronometrados.' },
  { email: 'informacion@mikeldi.com',       nombre: 'Centro Estudios Mikeldi',        subdom: 'mikeldi',       intro: 'Llevamos tiempo viendo cómo las academias pequeñas y medianas de Bilbao pierden alumnos jóvenes que se van a las cadenas grandes (Adams, MasterD). La razón: ellos tienen tests online y la mayoría seguís con PDFs.' },
  { email: 'bilbao@academiasedison.com',    nombre: 'Academia Edison',                subdom: 'edison',        intro: 'Edison tiene una valoración excelente y os escribo con una propuesta directa.' },
  { email: 'info@luaoposiciones.es',        nombre: 'Lua Oposiciones',                subdom: 'lua',           intro: 'Lua tiene un posicionamiento muy claro en Ertzaintza y Policía Local con 5 estrellas, y tenemos algo que encaja perfecto.', especial: 'Nuestro temario incluye específicamente tests de Ertzaintza y Policía Local de Bizkaia.' },
  { email: 'info@academialorono.com',       nombre: 'Academia Loroño',                subdom: 'lorono',        intro: 'Loroño tiene una reputación excelente (5 estrellas) y una trayectoria sólida. Os escribo con una propuesta que puede ayudaros a mantener ese nivel frente a las cadenas grandes.' },
  { email: 'ikas.barakaldo@gmail.com',      nombre: 'Academia Ikas Barakaldo',        subdom: 'ikasbarakaldo', intro: 'Ikas Barakaldo es una de las academias mejor valoradas de la margen izquierda y pensamos que puede encajaros perfecto.' },
  { email: 'info@opebask.com',              nombre: 'OpeBask',                        subdom: 'opebask',       intro: 'OpeBask tiene nombre y posicionamiento claro en oposiciones del País Vasco.' },
  { email: 'info@opebide.com',              nombre: 'Opebide',                        subdom: 'opebide',       intro: 'Opebide está especializada en oposiciones y pensamos que puede encajaros muy bien lo que estamos ofreciendo a academias de la zona.' },
  { email: 'basauri@ikasleku.com',          nombre: 'Academia Ikasleku Barakaldo',    subdom: 'ikasleku',      intro: 'Ikasleku Barakaldo tiene 5 estrellas y una trayectoria muy sólida. Os contacto con una propuesta que puede daros ventaja diferencial.' },
  { email: 'info@academiadeltabilbao.com',  nombre: 'Academia Delta Bilbao',          subdom: 'delta',         intro: 'Os escribo con una propuesta que puede encajaros muy bien.' },
  { email: 'albia@albia.org',               nombre: 'Academia Albia',                 subdom: 'albia',         intro: 'Albia tiene posicionamiento claro en oposiciones y os escribo con una propuesta concreta.' },
  { email: 'newtonurquijo@hotmail.com',     nombre: 'Academia Newton',                subdom: 'newton',        intro: 'Os contacto con una propuesta para Newton.' },
  { email: 'academiabizkaia2012@gmail.com', nombre: 'Centro de Estudios BILBAO',      subdom: 'cebilbao',      intro: 'Os contacto con algo que creo puede encajar bien en vuestro catálogo.' }
];

function renderBody(a) {
  return `Hola,

Soy Josu García, de G&G Elcano (Bilbao).

${a.intro}

Hemos montado TestForal, una plataforma online de tests específica para las oposiciones de la Diputación Foral de Bizkaia (Administrativo C1, Auxiliar, Bombero Foral, Agente Forestal, Técnico Jurídico A1, Gestión A2, Ertzaintza, Policía Local).

Lo licenciamos en modo white-label: vuestros alumnos entran en tests.${a.subdom}.com, con vuestro logo y colores, y hacen simulacros cronometrados con el temario foral actualizado cada convocatoria BOB.

${a.especial ? a.especial + '\n\n' : ''}Qué incluye:
• Plataforma con VUESTRA marca, vuestro dominio y vuestros colores
• 5.000+ preguntas actualizadas con cada convocatoria BOB
• Panel admin para altas/bajas de alumnos y seguimiento
• Informes por alumno para personalizar vuestras clases
• Setup en 48h, sin desarrollo por vuestra parte

Precios: 99€/mes hasta 30 alumnos (Starter) · 199€/mes hasta 100 (Pro). Primer mes GRATIS. Sin permanencia.

Más info y demo visual: ${CONFIG.LANDING}

¿Os cuadra una demo de 15 minutos esta semana? Puedo enseñaros la plataforma en vivo con vuestra marca simulada.

Un saludo,
Josu García
G&G Elcano · Bilbao
${CONFIG.REPLY_TO} · ${CONFIG.PHONE}
`;
}

function makeMime(a) {
  const subject = `Plataforma de tests white-label para ${a.nombre} · 1er mes gratis`;
  const body = renderBody(a);
  const encoded = Buffer.from(subject, 'utf-8').toString('base64');
  const mime = [
    `From: ${CONFIG.FROM_NAME} <${CONFIG.FROM_EMAIL}>`,
    `To: ${a.email}`,
    `Reply-To: ${CONFIG.REPLY_TO}`,
    `Subject: =?utf-8?B?${encoded}?=`,
    `MIME-Version: 1.0`,
    `Content-Type: text/plain; charset=utf-8`,
    `Content-Transfer-Encoding: base64`,
    ``,
    Buffer.from(body, 'utf-8').toString('base64')
  ].join('\r\n');
  return Buffer.from(mime).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function refreshToken() {
  return new Promise((resolve, reject) => {
    const CREDS_DIR = path.join(os.homedir(), '.gmail-mcp');
    const keys = JSON.parse(fs.readFileSync(path.join(CREDS_DIR, 'gcp-oauth-workspace.keys.json'), 'utf-8'));
    const creds = JSON.parse(fs.readFileSync(path.join(CREDS_DIR, 'credentials-workspace.json'), 'utf-8'));
    const body = new URLSearchParams({
      client_id: keys.installed.client_id,
      client_secret: keys.installed.client_secret,
      refresh_token: creds.refresh_token,
      grant_type: 'refresh_token'
    }).toString();
    const req = https.request({
      hostname: 'oauth2.googleapis.com',
      path: '/token',
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        const j = JSON.parse(d);
        if (j.access_token) resolve(j.access_token);
        else reject(new Error(d));
      });
    });
    req.on('error', reject);
    req.write(body); req.end();
  });
}

function gmailSend(token, raw) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ raw });
    const req = https.request({
      hostname: 'gmail.googleapis.com',
      path: '/gmail/v1/users/me/messages/send',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    }, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(d) }); }
        catch { resolve({ status: res.statusCode, body: d }); }
      });
    });
    req.on('error', reject);
    req.write(data); req.end();
  });
}

function gmailDraft(token, raw) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ message: { raw } });
    const req = https.request({
      hostname: 'gmail.googleapis.com',
      path: '/gmail/v1/users/me/drafts',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    }, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(d) }); }
        catch { resolve({ status: res.statusCode, body: d }); }
      });
    });
    req.on('error', reject);
    req.write(data); req.end();
  });
}

(async () => {
  const args = process.argv.slice(2);
  const dry = args.includes('--dry') || args.length === 0;
  const asDraft = args.includes('--draft') || args.some(a => a.startsWith('--draft='));
  const sendAll = args.includes('--send-all');
  const sendArg = args.find(a => a.startsWith('--send') || a.startsWith('--draft'));
  const limit = sendAll ? Infinity : (sendArg && sendArg.includes('=') ? parseInt(sendArg.split('=')[1]) : CONFIG.DAILY_LIMIT);

  const trackFile = path.join(__dirname, '.sent-academias.json');
  const sent = fs.existsSync(trackFile) ? JSON.parse(fs.readFileSync(trackFile, 'utf-8')) : [];
  const pendientes = ACADEMIAS.filter(a => !sent.find(s => s.email === a.email));

  console.log(`📊 Total academias: ${ACADEMIAS.length}`);
  console.log(`✅ Ya enviados: ${sent.length}`);
  console.log(`📬 Pendientes: ${pendientes.length}`);
  const modeLabel = dry ? 'DRY RUN (no hace nada)' : (asDraft ? `CREAR BORRADORES (${limit === Infinity ? 'todos' : 'hasta ' + limit})` : `ENVIAR hasta ${limit === Infinity ? 'ILIMITADO' : limit}`);
  console.log(`🎯 Modo: ${modeLabel}\n`);

  if (dry) {
    console.log('━'.repeat(70));
    console.log('PREVIEW PRIMER CORREO:');
    console.log('━'.repeat(70));
    const a = pendientes[0];
    console.log(`To: ${a.email}`);
    console.log(`Subject: Plataforma de tests white-label para ${a.nombre} · 1er mes gratis\n`);
    console.log(renderBody(a));
    console.log('━'.repeat(70));
    console.log(`\n⚠️  Para enviar: node send-academias.js --send`);
    console.log(`    Opcional:   --send=N (N correos max, default ${CONFIG.DAILY_LIMIT})\n`);
    return;
  }

  const token = await refreshToken();
  console.log('🔑 Token OK\n');

  let count = 0;
  for (const a of pendientes) {
    if (count >= limit) {
      console.log(`\n⏸  Alcanzado límite de ${limit}. Ejecuta de nuevo mañana para continuar.`);
      break;
    }
    process.stdout.write(`→ ${a.nombre} <${a.email}>... `);
    try {
      const res = asDraft ? await gmailDraft(token, makeMime(a)) : await gmailSend(token, makeMime(a));
      if (res.status === 200) {
        const verb = asDraft ? 'borrador creado' : 'enviado';
        console.log(`✅ ${verb} (id: ${res.body.id})`);
        sent.push({ email: a.email, nombre: a.nombre, ts: new Date().toISOString(), messageId: res.body.id, draft: !!asDraft });
        fs.writeFileSync(trackFile, JSON.stringify(sent, null, 2));
        count++;
        if (!asDraft && count < limit && count < pendientes.length) {
          console.log(`   ⏳ Esperando ${CONFIG.DELAY_MS/1000}s antes del siguiente...`);
          await new Promise(r => setTimeout(r, CONFIG.DELAY_MS));
        }
      } else {
        console.log(`❌ error ${res.status}:`, JSON.stringify(res.body).slice(0, 200));
      }
    } catch (e) {
      console.log(`❌ excepción:`, e.message);
    }
  }

  console.log(`\n✅ Enviados en esta sesión: ${count}`);
  console.log(`📊 Total acumulado: ${sent.length}/${ACADEMIAS.length}`);
})().catch(e => { console.error('❌', e); process.exit(1); });

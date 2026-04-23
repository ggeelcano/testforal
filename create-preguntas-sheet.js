/**
 * Crea el Google Sheet "TestForal - Banco de Preguntas" con todas las preguntas
 * actuales migradas de preguntas.js. Lo deja público read-only para que la app
 * lo consuma sin auth.
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const os = require('os');

const CREDS_DIR = path.join(os.homedir(), '.gmail-mcp');

function refreshToken() {
  return new Promise((resolve, reject) => {
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
      let d = ''; res.on('data', c => d += c);
      res.on('end', () => {
        const j = JSON.parse(d);
        if (j.access_token) resolve(j.access_token); else reject(new Error(d));
      });
    });
    req.on('error', reject); req.write(body); req.end();
  });
}

function req(method, host, urlPath, token, body) {
  return new Promise((resolve, reject) => {
    const r = https.request({
      hostname: host, path: urlPath, method,
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
    }, (res) => {
      let d = ''; res.on('data', c => d += c);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: d ? JSON.parse(d) : {} }); }
        catch { resolve({ status: res.statusCode, body: d }); }
      });
    });
    r.on('error', reject);
    if (body) r.write(typeof body === 'string' ? body : JSON.stringify(body));
    r.end();
  });
}

// Cargar las preguntas del archivo JS (ejecutarlo en un scope sandboxed)
const preguntasJs = fs.readFileSync(path.join(__dirname, 'preguntas.js'), 'utf-8');
const BANCO_PREGUNTAS = (() => {
  const sandbox = {};
  const fn = new Function(preguntasJs + '\nreturn BANCO_PREGUNTAS;');
  return fn();
})();

(async () => {
  const token = await refreshToken();
  console.log('✅ Token OK');

  // 1. Crear el sheet
  const createRes = await req('POST', 'sheets.googleapis.com', '/v4/spreadsheets', token, {
    properties: { title: 'TestForal - Banco de Preguntas' },
    sheets: [{
      properties: { title: 'Preguntas', gridProperties: { frozenRowCount: 1, columnCount: 10, rowCount: 500 } }
    }]
  });
  if (createRes.status !== 200) { console.error('❌', createRes.body); return; }
  const sheetId = createRes.body.spreadsheetId;
  console.log('✅ Sheet creado:', sheetId);

  // 2. Preparar filas
  const header = ['oposicion', 'oposicion_nombre', 'oposicion_icon', 'pregunta', 'opt_A', 'opt_B', 'opt_C', 'opt_D', 'correcta', 'explicacion', 'activa'];
  const rows = [header];
  for (const [oid, data] of Object.entries(BANCO_PREGUNTAS)) {
    for (const p of data.preguntas) {
      rows.push([
        oid, data.nombre, data.icon,
        p.q, p.opts[0], p.opts[1], p.opts[2], p.opts[3],
        String(p.correcta), p.explicacion, 'TRUE'
      ]);
    }
  }
  console.log(`📋 Total filas: ${rows.length - 1} preguntas`);

  // 3. Insertar datos
  const valRes = await req('PUT', 'sheets.googleapis.com',
    `/v4/spreadsheets/${sheetId}/values/Preguntas!A1?valueInputOption=RAW`,
    token, { values: rows });
  console.log('Values:', valRes.status);

  // 4. Formatear cabecera (bold + fondo azul)
  await req('POST', 'sheets.googleapis.com', `/v4/spreadsheets/${sheetId}:batchUpdate`, token, {
    requests: [
      {
        repeatCell: {
          range: { sheetId: 0, startRowIndex: 0, endRowIndex: 1 },
          cell: {
            userEnteredFormat: {
              backgroundColor: { red: 0.04, green: 0.31, blue: 0.63 },
              textFormat: { foregroundColor: { red: 1, green: 1, blue: 1 }, bold: true },
              horizontalAlignment: 'CENTER'
            }
          },
          fields: 'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment)'
        }
      },
      {
        updateDimensionProperties: {
          range: { sheetId: 0, dimension: 'COLUMNS', startIndex: 3, endIndex: 10 },
          properties: { pixelSize: 200 },
          fields: 'pixelSize'
        }
      }
    ]
  });

  // 5. Hacer el sheet público (anyone with link can view)
  const permRes = await req('POST', 'www.googleapis.com',
    `/drive/v3/files/${sheetId}/permissions?supportsAllDrives=true`,
    token, { role: 'reader', type: 'anyone' });
  console.log('Permissions public:', permRes.status);

  fs.writeFileSync(path.join(__dirname, '.preguntas-sheet-id.txt'), sheetId);

  console.log('\n🎉 SHEET PÚBLICO LISTO');
  console.log('📝 Edita aquí:       https://docs.google.com/spreadsheets/d/' + sheetId + '/edit');
  console.log('📤 CSV para la app:  https://docs.google.com/spreadsheets/d/' + sheetId + '/export?format=csv&gid=0');
})().catch(e => { console.error('❌', e); process.exit(1); });

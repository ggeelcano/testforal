/**
 * Crea Google Sheet "Waitlist TestForal" en Drive de info@ggelcano.com
 * Devuelve el ID para usar en Apps Script
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const os = require('os');

const CREDS_DIR = path.join(os.homedir(), '.gmail-mcp');
const creds = JSON.parse(fs.readFileSync(path.join(CREDS_DIR, 'credentials-workspace.json'), 'utf-8'));

function refreshToken() {
  return new Promise((resolve, reject) => {
    const keys = JSON.parse(fs.readFileSync(path.join(CREDS_DIR, 'gcp-oauth-workspace.keys.json'), 'utf-8'));
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
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        const j = JSON.parse(data);
        if (j.access_token) resolve(j.access_token);
        else reject(new Error(data));
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function apiRequest(method, hostname, path, token, body) {
  return new Promise((resolve, reject) => {
    const opts = {
      hostname,
      path,
      method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };
    const req = https.request(opts, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: data ? JSON.parse(data) : {} });
        } catch (e) {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

(async () => {
  const token = await refreshToken();
  console.log('✅ Token OK');

  const createRes = await apiRequest('POST', 'sheets.googleapis.com', '/v4/spreadsheets', token, {
    properties: { title: 'Waitlist TestForal - Oposiciones Bizkaia' },
    sheets: [{
      properties: { title: 'Emails' },
      data: [{
        startRow: 0, startColumn: 0,
        rowData: [{
          values: [
            { userEnteredValue: { stringValue: 'Fecha' }, userEnteredFormat: { textFormat: { bold: true }, backgroundColor: { red: 0.1, green: 0.2, blue: 0.4 }, horizontalAlignment: 'CENTER' } },
            { userEnteredValue: { stringValue: 'Email' }, userEnteredFormat: { textFormat: { bold: true }, backgroundColor: { red: 0.1, green: 0.2, blue: 0.4 }, horizontalAlignment: 'CENTER' } },
            { userEnteredValue: { stringValue: 'Oposicion' }, userEnteredFormat: { textFormat: { bold: true }, backgroundColor: { red: 0.1, green: 0.2, blue: 0.4 }, horizontalAlignment: 'CENTER' } },
            { userEnteredValue: { stringValue: 'Origen' }, userEnteredFormat: { textFormat: { bold: true }, backgroundColor: { red: 0.1, green: 0.2, blue: 0.4 }, horizontalAlignment: 'CENTER' } },
            { userEnteredValue: { stringValue: 'IP' }, userEnteredFormat: { textFormat: { bold: true }, backgroundColor: { red: 0.1, green: 0.2, blue: 0.4 }, horizontalAlignment: 'CENTER' } }
          ]
        }]
      }]
    }]
  });

  if (createRes.status !== 200) {
    console.error('❌ Error creando sheet:', createRes.body);
    process.exit(1);
  }

  const sheetId = createRes.body.spreadsheetId;
  console.log('✅ Sheet creado:', sheetId);
  console.log('📎 URL:', `https://docs.google.com/spreadsheets/d/${sheetId}/edit`);

  fs.writeFileSync(path.join(__dirname, '.waitlist-sheet-id.txt'), sheetId);
  console.log('💾 ID guardado en .waitlist-sheet-id.txt');
})().catch(e => { console.error('❌', e); process.exit(1); });

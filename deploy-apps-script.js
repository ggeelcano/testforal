/**
 * Crea un Apps Script bound al Sheet y deja el código listo.
 * Usa Drive API para crear el archivo tipo "application/vnd.google-apps.script"
 * y Apps Script API para inyectar el código fuente.
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const os = require('os');

const CREDS_DIR = path.join(os.homedir(), '.gmail-mcp');
const creds = JSON.parse(fs.readFileSync(path.join(CREDS_DIR, 'credentials-workspace.json'), 'utf-8'));
const SHEET_ID = fs.readFileSync(path.join(__dirname, '.waitlist-sheet-id.txt'), 'utf-8').trim();

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
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        const j = JSON.parse(d);
        if (j.access_token) resolve(j.access_token);
        else reject(new Error(d));
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function req(method, host, urlPath, token, body, extraHeaders = {}) {
  return new Promise((resolve, reject) => {
    const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', ...extraHeaders };
    const r = https.request({ hostname: host, path: urlPath, method, headers }, (res) => {
      let d = '';
      res.on('data', c => d += c);
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

const APPS_SCRIPT_CODE = `
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('${SHEET_ID}').getSheetByName('Emails');
    const data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date(),
      data.email || '',
      data.oposicion || '',
      data.origen || 'landing',
      data.ip || ''
    ]);
    return ContentService.createTextOutput(JSON.stringify({ok: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok: false, error: err.message}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
function doGet() {
  return ContentService.createTextOutput('TestForal Waitlist Endpoint OK')
    .setMimeType(ContentService.MimeType.TEXT);
}
`.trim();

(async () => {
  const token = await refreshToken();

  // 1. Crear Apps Script via Drive API
  const createRes = await req('POST', 'www.googleapis.com', '/drive/v3/files', token, {
    name: 'TestForal Waitlist Endpoint',
    mimeType: 'application/vnd.google-apps.script'
  });

  if (createRes.status !== 200) {
    console.error('❌ Drive create fail:', createRes.status, createRes.body);
    console.log('\n⚠️  Probando con Apps Script API directamente...\n');
  } else {
    console.log('✅ Script creado via Drive:', createRes.body.id);
    fs.writeFileSync(path.join(__dirname, '.apps-script-id.txt'), createRes.body.id);
  }

  // 2. Intentar crear via Apps Script API (requiere scope script.projects)
  const projRes = await req('POST', 'script.googleapis.com', '/v1/projects', token, {
    title: 'TestForal Waitlist Endpoint'
  });
  console.log('Apps Script API projects create:', projRes.status, JSON.stringify(projRes.body).slice(0, 200));

  if (projRes.status === 200) {
    const scriptId = projRes.body.scriptId;
    fs.writeFileSync(path.join(__dirname, '.apps-script-id.txt'), scriptId);
    console.log('✅ Script ID:', scriptId);

    // 3. Update content
    const updRes = await req('PUT', 'script.googleapis.com', `/v1/projects/${scriptId}/content`, token, {
      files: [
        { name: 'Code', type: 'SERVER_JS', source: APPS_SCRIPT_CODE },
        { name: 'appsscript', type: 'JSON', source: JSON.stringify({
          timeZone: 'Europe/Madrid',
          dependencies: {},
          exceptionLogging: 'STACKDRIVER',
          runtimeVersion: 'V8',
          webapp: { access: 'ANYONE_ANONYMOUS', executeAs: 'USER_DEPLOYING' }
        }) }
      ]
    });
    console.log('Update content:', updRes.status, JSON.stringify(updRes.body).slice(0, 200));

    // 4. Create deployment
    const versRes = await req('POST', 'script.googleapis.com', `/v1/projects/${scriptId}/versions`, token, {
      description: 'v1 waitlist'
    });
    console.log('Create version:', versRes.status, JSON.stringify(versRes.body).slice(0, 200));

    if (versRes.status === 200) {
      const deployRes = await req('POST', 'script.googleapis.com', `/v1/projects/${scriptId}/deployments`, token, {
        versionNumber: versRes.body.versionNumber,
        manifestFileName: 'appsscript',
        description: 'Production waitlist endpoint'
      });
      console.log('Create deploy:', deployRes.status, JSON.stringify(deployRes.body).slice(0, 300));
      if (deployRes.body.entryPoints) {
        const webApp = deployRes.body.entryPoints.find(ep => ep.entryPointType === 'WEB_APP');
        if (webApp && webApp.webApp && webApp.webApp.url) {
          console.log('\n🎉 WEBHOOK URL:', webApp.webApp.url);
          fs.writeFileSync(path.join(__dirname, '.webhook-url.txt'), webApp.webApp.url);
        }
      }
    }
  } else {
    console.log('\n⚠️  Apps Script API no accesible (falta scope script.projects).');
    console.log('Código Apps Script guardado en apps-script-code.gs para deploy manual.');
    fs.writeFileSync(path.join(__dirname, 'apps-script-code.gs'), APPS_SCRIPT_CODE);
  }
})().catch(e => { console.error('❌', e); process.exit(1); });

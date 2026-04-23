// TestForal - Cargador de preguntas desde Google Sheet público (CMS)
// Con cache en localStorage + fallback a preguntas.js hardcoded si offline.

const SHEET_ID = '1ergqP9PB0FVhaN0bI8hIjYlxlT006fHLJL1WC3aGmnE';
const SHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`;
const CACHE_KEY = 'tf_banco_v1';
const CACHE_TS_KEY = 'tf_banco_ts';
const CACHE_TTL_MS = 1000 * 60 * 60 * 6; // 6h

function parseCSV(text) {
  const rows = [];
  let cur = [], field = '', inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i], n = text[i + 1];
    if (inQuotes) {
      if (c === '"' && n === '"') { field += '"'; i++; }
      else if (c === '"') { inQuotes = false; }
      else { field += c; }
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ',') { cur.push(field); field = ''; }
      else if (c === '\n') { cur.push(field); rows.push(cur); cur = []; field = ''; }
      else if (c === '\r') { /* skip */ }
      else { field += c; }
    }
  }
  if (field.length || cur.length) { cur.push(field); rows.push(cur); }
  return rows.filter(r => r.length > 1);
}

function rowsToBanco(rows) {
  if (!rows.length) return {};
  const header = rows[0].map(h => h.trim());
  const idx = (n) => header.indexOf(n);
  const banco = {};
  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    if (!r[idx('pregunta')] || r[idx('activa')]?.toUpperCase() === 'FALSE') continue;
    const oid = r[idx('oposicion')].trim();
    if (!oid) continue;
    if (!banco[oid]) {
      banco[oid] = {
        nombre: r[idx('oposicion_nombre')] || oid,
        icon: r[idx('oposicion_icon')] || '📚',
        preguntas: []
      };
    }
    banco[oid].preguntas.push({
      q: r[idx('pregunta')],
      opts: [r[idx('opt_A')], r[idx('opt_B')], r[idx('opt_C')], r[idx('opt_D')]],
      correcta: parseInt(r[idx('correcta')]) || 0,
      explicacion: r[idx('explicacion')] || ''
    });
  }
  return banco;
}

async function cargarPreguntas() {
  // 1. Si hay cache reciente, devolverlo inmediatamente
  const cached = localStorage.getItem(CACHE_KEY);
  const cachedTs = parseInt(localStorage.getItem(CACHE_TS_KEY) || '0');
  const age = Date.now() - cachedTs;

  if (cached && age < CACHE_TTL_MS) {
    try {
      const parsed = JSON.parse(cached);
      setTimeout(() => refrescarEnBackground(), 2000);
      console.log(`[TestForal] Banco cargado de caché (hace ${Math.round(age/60000)} min)`);
      return parsed;
    } catch {}
  }

  // 2. Intentar fetch del sheet
  try {
    const res = await fetch(SHEET_CSV_URL, { cache: 'no-cache' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const text = await res.text();
    const banco = rowsToBanco(parseCSV(text));
    const total = Object.values(banco).reduce((s, d) => s + d.preguntas.length, 0);
    if (total > 0) {
      localStorage.setItem(CACHE_KEY, JSON.stringify(banco));
      localStorage.setItem(CACHE_TS_KEY, String(Date.now()));
      console.log(`[TestForal] Banco actualizado desde Sheet: ${total} preguntas`);
      return banco;
    }
  } catch (e) {
    console.warn('[TestForal] No se pudo cargar el sheet:', e.message);
  }

  // 3. Fallback: cache antigua si existe
  if (cached) {
    console.log('[TestForal] Usando caché antigua (sin conexión)');
    try { return JSON.parse(cached); } catch {}
  }

  // 4. Último fallback: BANCO_PREGUNTAS hardcoded en preguntas.js
  if (window.BANCO_PREGUNTAS) {
    console.log('[TestForal] Usando preguntas locales (modo offline)');
    return window.BANCO_PREGUNTAS;
  }

  return {};
}

async function refrescarEnBackground() {
  try {
    const res = await fetch(SHEET_CSV_URL, { cache: 'no-cache' });
    if (!res.ok) return;
    const text = await res.text();
    const banco = rowsToBanco(parseCSV(text));
    const total = Object.values(banco).reduce((s, d) => s + d.preguntas.length, 0);
    if (total > 0) {
      localStorage.setItem(CACHE_KEY, JSON.stringify(banco));
      localStorage.setItem(CACHE_TS_KEY, String(Date.now()));
      console.log(`[TestForal] Background refresh OK: ${total} preguntas`);
    }
  } catch {}
}

window.cargarPreguntas = cargarPreguntas;

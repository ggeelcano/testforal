// TestForal — lógica de la app de tests

const state = {
  oposicion: null,
  mode: { mode: 'rapido', n: 10, t: 600 },
  preguntas: [],
  current: 0,
  answers: [],
  startTs: 0,
  timerInterval: null,
  locked: false,
  elapsedTotal: 0
};

const $ = (id) => document.getElementById(id);

// --- Home ---
function renderOpoPicker() {
  const picker = $('opoPicker');
  picker.innerHTML = '';
  const all = [
    { id: 'administrativo-c1',      ready: true },
    { id: 'auxiliar-administrativo', ready: true },
    { id: 'bombero-foral',          ready: true },
    { id: 'agente-forestal',        ready: false, nombre: 'Agente Forestal',     icon: '🌲' },
    { id: 'tecnico-juridico-a1',    ready: false, nombre: 'Técnico Jurídico A1', icon: '⚖️' },
    { id: 'gestion-a2',             ready: false, nombre: 'Gestión A2',          icon: '💼' },
    { id: 'peon',                   ready: false, nombre: 'Peón / Oficial',      icon: '🔧' },
    { id: 'conductor',              ready: false, nombre: 'Conductor',           icon: '🚗' }
  ];
  for (const o of all) {
    const b = document.createElement('button');
    b.className = 'opo-btn';
    if (o.ready) {
      const data = window.BANCO_PREGUNTAS[o.id];
      b.innerHTML = `<span class="icon">${data.icon}</span><span class="n">${data.nombre}</span><span class="c">${data.preguntas.length} preguntas</span>`;
      b.onclick = () => selectOpo(o.id, b);
    } else {
      b.disabled = true;
      b.innerHTML = `<span class="icon">${o.icon}</span><span class="n">${o.nombre}</span><span class="soon">Próximamente</span>`;
    }
    picker.appendChild(b);
  }
}

function selectOpo(id, btn) {
  state.oposicion = id;
  document.querySelectorAll('.opo-btn').forEach(b => b.style.borderColor = '');
  btn.style.borderColor = '#00d9ff';
  btn.style.background = 'rgba(0,217,255,.08)';
  $('startBtn').disabled = false;
  $('startBtn').textContent = `Empezar test · ${window.BANCO_PREGUNTAS[id].nombre}`;
}

document.querySelectorAll('.mode').forEach(m => {
  m.addEventListener('click', () => {
    document.querySelectorAll('.mode').forEach(x => x.classList.remove('sel'));
    m.classList.add('sel');
    state.mode = { mode: m.dataset.mode, n: parseInt(m.dataset.n), t: parseInt(m.dataset.t) };
  });
});

$('startBtn').addEventListener('click', startTest);

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startTest() {
  if (!state.oposicion) return;
  const data = window.BANCO_PREGUNTAS[state.oposicion];
  state.preguntas = shuffle(data.preguntas).slice(0, Math.min(state.mode.n, data.preguntas.length));
  state.current = 0;
  state.answers = [];
  state.startTs = Date.now();
  state.locked = false;
  showScreen('quiz');
  startTimer(state.mode.t);
  renderQuestion();
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
}

// --- Timer ---
function startTimer(seconds) {
  $('timer').style.display = 'block';
  const end = Date.now() + seconds * 1000;
  const update = () => {
    const left = Math.max(0, Math.floor((end - Date.now()) / 1000));
    const m = String(Math.floor(left / 60)).padStart(2, '0');
    const s = String(left % 60).padStart(2, '0');
    $('timer').textContent = `⏱ ${m}:${s}`;
    $('timer').classList.toggle('warn', left < seconds * 0.3 && left >= seconds * 0.1);
    $('timer').classList.toggle('danger', left < seconds * 0.1);
    if (left === 0) { stopTimer(); finishTest(); }
  };
  update();
  state.timerInterval = setInterval(update, 1000);
}
function stopTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = null;
  $('timer').style.display = 'none';
  $('timer').classList.remove('warn', 'danger');
}

// --- Quiz ---
function renderQuestion() {
  const q = state.preguntas[state.current];
  const total = state.preguntas.length;
  const acc = state.answers.filter(a => a.correct).length;
  $('qNum').textContent = `PREGUNTA ${state.current + 1} / ${total}`;
  $('qText').textContent = q.q;
  $('progressTxt').textContent = `Pregunta ${state.current + 1} / ${total}`;
  $('progressScore').textContent = `${acc} ${acc === 1 ? 'acierto' : 'aciertos'}`;
  $('barFill').style.width = `${(state.current / total) * 100}%`;
  $('qExplain').classList.remove('show');
  $('nextBtn').disabled = true;
  $('nextBtn').textContent = state.current === total - 1 ? 'Ver resultado →' : 'Siguiente →';

  const opts = $('qOpts');
  opts.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.opts.forEach((opt, i) => {
    const div = document.createElement('button');
    div.className = 'opt';
    div.innerHTML = `<span class="letter">${letters[i]}</span><span>${opt}</span>`;
    div.onclick = () => selectAnswer(i, div);
    opts.appendChild(div);
  });
  state.locked = false;
}

function selectAnswer(idx, el) {
  if (state.locked) return;
  state.locked = true;
  const q = state.preguntas[state.current];
  const correct = idx === q.correcta;
  state.answers.push({ idx, correct, q });

  document.querySelectorAll('.opt').forEach((o, i) => {
    o.classList.add('locked');
    if (i === q.correcta) o.classList.add('correct');
    else if (i === idx) o.classList.add('wrong');
  });

  const exp = $('qExplain');
  exp.innerHTML = `<b>${correct ? '✓ Correcto.' : '✗ Incorrecto.'}</b> ${q.explicacion}`;
  exp.classList.add('show');
  $('nextBtn').disabled = false;
}

$('nextBtn').addEventListener('click', () => {
  if (state.current < state.preguntas.length - 1) {
    state.current++;
    renderQuestion();
  } else {
    finishTest();
  }
});

$('quitBtn').addEventListener('click', () => {
  if (confirm('¿Salir del test? Perderás el progreso.')) {
    stopTimer();
    showScreen('home');
  }
});

// --- Result ---
function finishTest() {
  stopTimer();
  state.elapsedTotal = Math.floor((Date.now() - state.startTs) / 1000);
  const total = state.preguntas.length;
  const ok = state.answers.filter(a => a.correct).length;
  const bad = state.answers.length - ok;
  const pct = total ? Math.round((ok / total) * 100) : 0;

  $('scorePct').textContent = `${pct}%`;
  const ring = $('scoreRing');
  const circ = 2 * Math.PI * 88;
  ring.style.strokeDasharray = circ;
  setTimeout(() => ring.style.strokeDashoffset = circ * (1 - pct / 100), 100);

  let title = 'Sigue entrenando 💪';
  let msg = 'Los opositores que aprueban suelen rondar el 80% de acierto en los simulacros.';
  if (pct >= 80) { title = '¡Excelente! 🏆'; msg = 'Nota de aprobado probable. Sigue así con otros simulacros para mantener el nivel.'; }
  else if (pct >= 60) { title = 'Vas por buen camino 🎯'; msg = 'Por encima de la media, pero necesitas afinar los temas donde fallas.'; }
  else if (pct >= 40) { title = 'Hay que reforzar 📚'; msg = 'Revisa los temas de las preguntas falladas y repite el test.'; }
  else { title = 'Empezamos por los fundamentos 🌱'; msg = 'Repasa el temario base antes de volver a intentarlo.'; }
  $('resultTitle').textContent = title;
  $('resultMsg').textContent = msg;
  $('sOk').textContent = ok;
  $('sBad').textContent = bad;
  const m = String(Math.floor(state.elapsedTotal / 60)).padStart(2, '0');
  const s = String(state.elapsedTotal % 60).padStart(2, '0');
  $('sTime').textContent = `${m}:${s}`;

  const review = $('review');
  review.innerHTML = '<h3>Revisión de respuestas</h3>';
  state.answers.forEach((a, i) => {
    const div = document.createElement('div');
    div.className = 'r-item ' + (a.correct ? 'ok' : 'bad');
    div.innerHTML = `
      <div class="mark">${a.correct ? '✅' : '❌'}</div>
      <div>
        <div class="qtxt"><b>${i+1}.</b> ${a.q.q}</div>
        <div class="atxt">Correcta: <b>${a.q.opts[a.q.correcta]}</b>${!a.correct ? ` · Tu respuesta: ${a.q.opts[a.idx]}` : ''}</div>
      </div>`;
    review.appendChild(div);
  });

  showScreen('result');

  // Guardar en localStorage historial
  const hist = JSON.parse(localStorage.getItem('tf_history') || '[]');
  hist.push({
    oposicion: state.oposicion,
    mode: state.mode.mode,
    total, ok, bad, pct,
    tiempo: state.elapsedTotal,
    ts: new Date().toISOString()
  });
  localStorage.setItem('tf_history', JSON.stringify(hist));
}

$('againBtn').addEventListener('click', startTest);
$('homeBtn').addEventListener('click', () => showScreen('home'));

function actualizarUISync(banco, label) {
  const syncEl = $('syncStatus');
  const btn = $('syncBtn');
  const total = banco ? Object.values(banco).reduce((s, d) => s + d.preguntas.length, 0) : 0;
  const ts = parseInt(localStorage.getItem('tf_banco_ts') || '0');
  const ageMin = ts ? Math.round((Date.now() - ts) / 60000) : null;
  if (syncEl) syncEl.textContent = label || `${total} preguntas`;
  if (btn) btn.title = ts ? `Actualizado hace ${ageMin} min · Click para sincronizar` : 'Click para sincronizar con el servidor';
}

async function sincronizarAhora() {
  const btn = $('syncBtn');
  const icon = $('syncIcon');
  const syncEl = $('syncStatus');
  if (btn.dataset.busy === '1') return;
  btn.dataset.busy = '1';
  icon.style.animation = 'spin 1s linear infinite';
  syncEl.textContent = 'Sincronizando...';
  try {
    const banco = await window.forzarSincronizacion();
    if (banco && Object.keys(banco).length > 0) {
      window.BANCO_PREGUNTAS = banco;
      renderOpoPicker();
      actualizarUISync(banco, '✓ Actualizado');
      setTimeout(() => actualizarUISync(banco), 2000);
    } else {
      syncEl.textContent = '⚠ Sin cambios';
    }
  } catch (e) {
    syncEl.textContent = '⚠ Error';
  } finally {
    icon.style.animation = '';
    btn.dataset.busy = '0';
  }
}

// init
(async () => {
  const btn = $('syncBtn');
  if (btn) btn.addEventListener('click', sincronizarAhora);
  const syncEl = $('syncStatus');
  if (syncEl) syncEl.textContent = 'Cargando...';
  try {
    const banco = await window.cargarPreguntas();
    if (banco && Object.keys(banco).length > 0) {
      window.BANCO_PREGUNTAS = banco;
      actualizarUISync(banco);
    }
  } catch (e) {
    console.warn('Usando preguntas locales:', e);
    if (syncEl) syncEl.textContent = '⚠ Offline';
  }
  renderOpoPicker();
  initCalendario();
  if (typeof initFiscalIA === 'function') initFiscalIA();
})();

// --- Calendario de convocatorias ---
const calState = { filtro: 'todas' };

function initCalendario() {
  const openBtn = $('openCalBtn');
  const backBtn = $('backCalBtn');
  if (openBtn) openBtn.addEventListener('click', () => { showScreen('calendar'); renderCalendario(); });
  if (backBtn) backBtn.addEventListener('click', () => showScreen('home'));
  renderFiltros();
}

function renderFiltros() {
  const cont = $('calFilters');
  if (!cont) return;
  const filtros = [
    { id: 'todas', label: 'Todas' },
    { id: 'abierta', label: '🟢 Inscripción abierta' },
    { id: 'examen-proximo', label: '🟡 Examen próximo' },
    { id: 'prevista', label: '🔵 Previstas' }
  ];
  cont.innerHTML = '';
  filtros.forEach(f => {
    const chip = document.createElement('button');
    chip.className = 'cal-chip' + (calState.filtro === f.id ? ' active' : '');
    chip.textContent = f.label;
    chip.onclick = () => { calState.filtro = f.id; renderFiltros(); renderCalendario(); };
    cont.appendChild(chip);
  });
}

function fmtFecha(iso) {
  if (!iso) return '—';
  const [y, m, d] = iso.split('-');
  const meses = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  return `${parseInt(d)} ${meses[parseInt(m)-1]} ${y}`;
}

function diasHasta(iso) {
  if (!iso) return null;
  const hoy = new Date();
  hoy.setHours(0,0,0,0);
  const target = new Date(iso + 'T00:00:00');
  return Math.floor((target - hoy) / 86400000);
}

function countdownHtml(iso) {
  const d = diasHasta(iso);
  if (d === null) return '';
  if (d < 0) return `<span class="countdown urgent">Finalizado</span>`;
  if (d === 0) return `<span class="countdown urgent">¡HOY!</span>`;
  if (d <= 7) return `<span class="countdown urgent">En ${d} ${d===1?'día':'días'}</span>`;
  if (d <= 30) return `<span class="countdown soon">En ${d} días</span>`;
  return `<span class="countdown">En ${d} días</span>`;
}

function renderCalendario() {
  const list = $('calList');
  if (!list) return;
  const items = [...window.CONVOCATORIAS].sort((a, b) => {
    const da = a.fechaExamen || '9999';
    const db = b.fechaExamen || '9999';
    return da.localeCompare(db);
  });
  const filtradas = calState.filtro === 'todas'
    ? items
    : items.filter(c => c.estado === calState.filtro);

  list.innerHTML = '';
  if (filtradas.length === 0) {
    list.innerHTML = '<div style="text-align:center;padding:40px;color:#a0a8b8">No hay convocatorias en esta categoría.</div>';
    return;
  }

  filtradas.forEach(c => {
    const estado = window.ESTADOS_CONVOCATORIA[c.estado] || { label: c.estado, color: '#a0a8b8' };
    const card = document.createElement('div');
    card.className = `cal-card ${c.estado}`;
    const tieneTest = window.BANCO_PREGUNTAS && window.BANCO_PREGUNTAS[c.id];
    const plazoHtml = c.plazoInscripcion
      ? `<div class="cal-date"><div class="cal-date-lbl">Fin inscripción</div><div class="cal-date-val ${c.estado==='abierta'?'highlight':''}">${fmtFecha(c.plazoInscripcion.fin)}</div></div>`
      : '';
    card.innerHTML = `
      <div class="cal-top">
        <div class="cal-name"><span class="cal-icon">${c.icon}</span>${c.nombre}</div>
        <div class="cal-status" style="background:${estado.color}22;color:${estado.color}">${estado.label}</div>
      </div>
      <div class="cal-dates">
        ${plazoHtml}
        <div class="cal-date">
          <div class="cal-date-lbl">Examen</div>
          <div class="cal-date-val ${c.estado==='examen-proximo'?'warn':''}">${fmtFecha(c.fechaExamen)}${countdownHtml(c.fechaExamen)}</div>
        </div>
        <div class="cal-date">
          <div class="cal-date-lbl">Plazas</div>
          <div class="cal-date-val">${c.plazas}</div>
        </div>
      </div>
      <div class="cal-meta">
        <div>📚 <strong>${c.tipoExamen}</strong></div>
        <div>🎓 Grupo <strong>${c.grupo}</strong></div>
        <div>✅ ${c.requisitos}</div>
      </div>
      <div class="cal-actions">
        ${tieneTest ? `<button class="cal-btn cal-btn-primary" data-opo="${c.id}">▶ Empezar test</button>` : `<button class="cal-btn cal-btn-ghost" disabled>Tests próximamente</button>`}
        <a class="cal-btn cal-btn-ghost" href="${c.enlaceOficial}" target="_blank" rel="noopener">🔗 Info oficial</a>
      </div>
    `;
    list.appendChild(card);
  });

  list.querySelectorAll('[data-opo]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.opo;
      state.oposicion = id;
      showScreen('home');
      const opoBtn = [...document.querySelectorAll('.opo-btn')].find(b => b.innerHTML.includes(window.BANCO_PREGUNTAS[id].nombre));
      if (opoBtn) selectOpo(id, opoBtn);
      $('startBtn').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
}

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
      const data = BANCO_PREGUNTAS[o.id];
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
  $('startBtn').textContent = `Empezar test · ${BANCO_PREGUNTAS[id].nombre}`;
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
  const data = BANCO_PREGUNTAS[state.oposicion];
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

// init
renderOpoPicker();

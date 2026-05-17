// TestForal · Oposiciones DFB (Diputación Foral de Bizkaia)
// Cada oposición tiene 6 secciones estandarizadas que agrupan las unidades temáticas
// del banco de preguntas. Las unidades se prefijan con el id de la oposición.
//
// Bloques estándar:
//   organizacion     · Constitucional, EAPV, organización foral, Concierto, UE
//   derecho-publico  · Procedimiento, contratos, función pública, igualdad,
//                       transparencia, protección de datos
//   nfgt             · Norma Foral General Tributaria (todos sus apartados)
//   directos         · IRPF, IS, ISD
//   indirectos       · IVA, ITP-AJD, Haciendas Locales
//   presupuestos     · NF presupuestaria, contabilidad, matemática, estadística,
//                       macro/micro y política económica

(function(){
  // Mínimo de preguntas para que una sección se muestre en el árbol.
  var MIN_PREG = 5;

  // Cuenta preguntas en window.PREGUNTAS para una unidad concreta.
  function count(unitId) {
    var P = window.PREGUNTAS || [];
    var n = 0;
    for (var i=0; i<P.length; i++) if (P[i].unidad === unitId) n++;
    return n;
  }

  // Definición común de las 6 secciones por oposición.
  // Solo se devuelven las que tengan al menos MIN_PREG preguntas.
  function build(opId) {
    var all = [
      { sec: 'sec1', uid: 'organizacion',     nom: 'Constitucional y organización foral',
        sub: 'CE, EAPV, NF 3/1987, LTH, Concierto Económico, UE',
        color: '#1E3A8A', emoji: '🏛️' },
      { sec: 'sec2', uid: 'derecho-publico',  nom: 'Derecho público transversal',
        sub: 'Procedimiento (39/2015 y 40/2015), LCSP, función pública, igualdad, transparencia y datos',
        color: '#1E40AF', emoji: '📋' },
      { sec: 'sec3', uid: 'nfgt',             nom: 'Norma Foral General Tributaria',
        sub: 'NFGT 2/2005 · principios, obligados, deuda, procedimientos, recaudación, inspección, sanciones y revisión',
        color: '#3B82F6', emoji: '📚' },
      { sec: 'sec4', uid: 'directos',         nom: 'Impuestos directos',
        sub: 'IRPF (NF 13/2013), IS (NF 11/2013), Sucesiones y Donaciones (NF 4/2015)',
        color: '#2563EB', emoji: '👨‍💼' },
      { sec: 'sec5', uid: 'indirectos',       nom: 'Impuestos indirectos y locales',
        sub: 'IVA (NF 7/1994), ITP-AJD (NF 1/2011), Haciendas Locales (NF 9/2005, IBI, IAE, IVTM, IIEE)',
        color: '#1D4ED8', emoji: '🏪' },
      { sec: 'sec6', uid: 'presupuestos',     nom: 'Presupuestos y contabilidad',
        sub: 'NF General Presupuestaria, contabilidad pública (PGCPF), matemática financiera, estadística, política económica',
        color: '#F59E0B', emoji: '📊' }
    ];
    var out = [];
    for (var i=0; i<all.length; i++) {
      var s = all[i];
      var fullId = opId + '-' + s.uid;
      var n = count(fullId);
      if (n < MIN_PREG) continue;
      out.push({
        id: opId + '-' + s.sec,
        nombre: s.nom,
        color: s.color, emoji: s.emoji,
        unidades: [
          { id: fullId, nombre: s.sub + ' (' + n + ' preguntas)', icono: s.emoji }
        ]
      });
    }
    return out;
  }

  window.OPOSICIONES = [
    {
      id: 'subinspector-tributos',
      nombre: 'Subinspector/a de Tributos',
      organismo: 'Diputación Foral de Bizkaia',
      plazas: 10,
      convocatoria: '2022 (BOB 30/12/2022)',
      estado: 'activa',
      descripcion: 'Subescala Técnica DFB. Examen tipo test + supuestos prácticos + contabilidad y matemática financiera.',
      examen: { preguntas: 50, tiempo_min: 90, respuestas: 4, penaliza_errores: true },
      secciones: build('sub')
    },
    {
      id: 'administrativo-foral',
      nombre: 'Administrativo/a Foral',
      organismo: 'Diputación Foral de Bizkaia',
      plazas: 132,
      convocatoria: '2022 (BOB 30/12/2022)',
      estado: 'activa',
      descripcion: 'Grupo C1. Procedimiento administrativo, organización foral, función pública vasca y nociones tributarias.',
      examen: { preguntas: 70, tiempo_min: 90, respuestas: 4, penaliza_errores: true },
      secciones: build('adm')
    },
    {
      id: 'liquidador-tmgaf',
      nombre: 'Liquidador/a (TMGAF)',
      organismo: 'Diputación Foral de Bizkaia',
      plazas: 44,
      convocatoria: '2022 + 2025 (BOB)',
      estado: 'activa',
      descripcion: 'Técnico Medio de Gestión Administrativa Financiera. Liquidación de tributos forales.',
      examen: { preguntas: 100, tiempo_min: 120, respuestas: 4, penaliza_errores: true },
      secciones: build('tmgaf')
    },
    {
      id: 'agente-fiscal-censal',
      nombre: 'Agente Fiscal Censal',
      organismo: 'Diputación Foral de Bizkaia',
      plazas: 7,
      convocatoria: '2024 (BOB 14/11/2024)',
      estado: 'activa',
      descripcion: 'Grupo C2. Recaudación censal, atención al contribuyente y nociones tributarias forales.',
      examen: { preguntas: 75, tiempo_min: 90, respuestas: 4, penaliza_errores: true },
      secciones: build('afc')
    },
    {
      id: 'economista',
      nombre: 'Economista',
      organismo: 'Diputación Foral de Bizkaia',
      plazas: 7,
      convocatoria: '2022 (BOB 30/12/2022)',
      estado: 'activa',
      descripcion: 'Grupo A1. Hacienda pública, presupuestación, contabilidad pública, política económica y NFGT.',
      examen: { preguntas: 100, tiempo_min: 120, respuestas: 4, penaliza_errores: true },
      secciones: build('eco')
    },
    {
      id: 'tag',
      nombre: 'Técnico/a Administración General',
      organismo: 'Diputación Foral de Bizkaia',
      plazas: 53,
      convocatoria: '2023 + 2025 (BOB)',
      estado: 'activa',
      descripcion: 'Grupo A1. Cuerpo generalista DFB con bloque tributario foral explícito.',
      examen: { preguntas: 100, tiempo_min: 120, respuestas: 4, penaliza_errores: true },
      secciones: build('tag')
    }
  ];
})();

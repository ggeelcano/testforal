// TestForal · Oposiciones de Hacienda Bizkaia (Diputación Foral)
// Estructura: cada oposición tiene secciones y cada sección unidades.
// El id de cada unidad coincide con el campo `unidad` del banco de preguntas.
// (Prefijo: sub-* Subinspector · adm-* Administrativo Foral · tmgaf-* TMGAF)
//
// Fuentes: archivo-oficial/{subinspector|administrativo|liquidador}-tmgaf-dfb/
// Material oficial DFB 2022-2026.

window.OPOSICIONES = [
  {
    id: 'subinspector-tributos',
    nombre: 'Subinspector/a de Tributos',
    organismo: 'Diputación Foral de Bizkaia',
    plazas: 10,
    convocatoria: '2022 (BOB 30/12/2022)',
    estado: 'activa',
    descripcion: 'Subescala Técnica DFB. Examen tipo test sobre Hacienda foral + supuestos prácticos + contabilidad/matemática financiera.',
    examen: { preguntas: 50, tiempo_min: 90, respuestas: 4, penaliza_errores: true },
    secciones: [
      {
        id: 'sub-sec1', nombre: 'Parte General · Derecho Público',
        color: '#1E3A8A', emoji: '⚖️',
        unidades: [
          { id: 'sub-derecho-constitucional',  nombre: 'Derecho Constitucional',         icono: '📜' },
          { id: 'sub-organizacion-foral',      nombre: 'Organización foral (NF 3/1987)',  icono: '🏛️' },
          { id: 'sub-concierto-economico',     nombre: 'Concierto Económico CAV',         icono: '🤝' },
          { id: 'sub-procedimiento-administrativo', nombre: 'Procedimiento administrativo (39/2015 y 40/2015)', icono: '📋' },
          { id: 'sub-funcion-publica',         nombre: 'Función pública (Ley 11/2022)',   icono: '👥' },
          { id: 'sub-igualdad',                nombre: 'Igualdad',                        icono: '⚖️' },
          { id: 'sub-transparencia',           nombre: 'Transparencia',                   icono: '🔍' },
          { id: 'sub-proteccion-datos',        nombre: 'Protección de datos',             icono: '🔒' }
        ]
      },
      {
        id: 'sub-sec2', nombre: 'Norma Foral General Tributaria',
        color: '#1E40AF', emoji: '📚',
        unidades: [
          { id: 'sub-nfgt-principios',     nombre: 'Principios y normas tributarias',   icono: '📖' },
          { id: 'sub-nfgt-tributos',       nombre: 'Concepto y clases de tributos',     icono: '🏦' },
          { id: 'sub-nfgt-obligados',      nombre: 'Obligados tributarios',             icono: '👤' },
          { id: 'sub-nfgt-deuda',          nombre: 'Deuda tributaria y prescripción',   icono: '💰' },
          { id: 'sub-nfgt-procedimientos', nombre: 'Procedimientos de gestión',         icono: '📊' },
          { id: 'sub-nfgt-recaudacion',    nombre: 'Recaudación',                       icono: '💵' },
          { id: 'sub-nfgt-inspeccion',     nombre: 'Inspección',                        icono: '🔎' },
          { id: 'sub-nfgt-sanciones',      nombre: 'Infracciones y sanciones',          icono: '⚠️' },
          { id: 'sub-nfgt-revision',       nombre: 'Revisión en vía administrativa',    icono: '🔁' }
        ]
      },
      {
        id: 'sub-sec3', nombre: 'Sistema tributario foral',
        color: '#3B82F6', emoji: '💼',
        unidades: [
          { id: 'sub-irpf',              nombre: 'IRPF (NF 13/2013)',              icono: '👨‍💼' },
          { id: 'sub-is',                nombre: 'IS (NF 11/2013)',                icono: '🏢' },
          { id: 'sub-iva',               nombre: 'IVA (NF 7/1994)',                icono: '🛒' },
          { id: 'sub-itp-ajd',           nombre: 'ITP y AJD (NF 1/2011)',          icono: '📝' },
          { id: 'sub-isd',               nombre: 'Sucesiones y Donaciones',        icono: '🎁' },
          { id: 'sub-haciendas-locales', nombre: 'Haciendas Locales',              icono: '🏘️' }
        ]
      },
      {
        id: 'sub-sec4', nombre: 'Contabilidad y matemática financiera',
        color: '#F59E0B', emoji: '🧮',
        unidades: [
          { id: 'sub-contabilidad',          nombre: 'Contabilidad',           icono: '📒' },
          { id: 'sub-matematica-financiera', nombre: 'Matemática financiera',  icono: '➗' }
        ]
      }
    ]
  },
  {
    id: 'administrativo-foral',
    nombre: 'Administrativo/a Foral',
    organismo: 'Diputación Foral de Bizkaia',
    plazas: 132,
    convocatoria: '2022 (BOB 30/12/2022)',
    estado: 'activa',
    descripcion: 'Grupo C1. Procedimiento administrativo, organización foral, función pública vasca, derecho público y nociones tributarias.',
    examen: { preguntas: 70, tiempo_min: 90, respuestas: 4, penaliza_errores: true },
    secciones: [
      {
        id: 'adm-sec1', nombre: 'Procedimiento administrativo y régimen jurídico',
        color: '#1E3A8A', emoji: '📋',
        unidades: [
          { id: 'adm-procedimiento-administrativo', nombre: 'Ley 39/2015 y Ley 40/2015',  icono: '📋' },
          { id: 'adm-derecho-constitucional',       nombre: 'Constitución y Estatuto',     icono: '📜' },
          { id: 'adm-organizacion-foral',           nombre: 'Organización foral (NF 3/1987)', icono: '🏛️' },
          { id: 'adm-concierto-economico',          nombre: 'Concierto Económico',         icono: '🤝' }
        ]
      },
      {
        id: 'adm-sec2', nombre: 'Función pública y transversales',
        color: '#1E40AF', emoji: '👥',
        unidades: [
          { id: 'adm-funcion-publica',  nombre: 'Función pública (Ley 11/2022)', icono: '👥' },
          { id: 'adm-igualdad',         nombre: 'Igualdad (NF 4/2018)',          icono: '⚖️' },
          { id: 'adm-transparencia',    nombre: 'Transparencia (NF 1/2016)',     icono: '🔍' },
          { id: 'adm-proteccion-datos', nombre: 'Protección de datos',           icono: '🔒' }
        ]
      },
      {
        id: 'adm-sec3', nombre: 'Nociones tributarias',
        color: '#3B82F6', emoji: '💰',
        unidades: [
          { id: 'adm-nfgt-principios',     nombre: 'NFGT · Principios y tributos',     icono: '📖' },
          { id: 'adm-nfgt-tributos',       nombre: 'NFGT · Tasas y contribuciones',    icono: '🏦' },
          { id: 'adm-irpf',                nombre: 'IRPF foral',                       icono: '👨‍💼' },
          { id: 'adm-is',                  nombre: 'IS foral',                         icono: '🏢' },
          { id: 'adm-iva',                 nombre: 'IVA foral',                        icono: '🛒' },
          { id: 'adm-itp-ajd',             nombre: 'ITP-AJD',                          icono: '📝' },
          { id: 'adm-isd',                 nombre: 'Sucesiones y Donaciones',          icono: '🎁' },
          { id: 'adm-haciendas-locales',   nombre: 'Haciendas Locales',                icono: '🏘️' }
        ]
      }
    ]
  },
  {
    id: 'liquidador-tmgaf',
    nombre: 'Liquidador/a (TMGAF)',
    organismo: 'Diputación Foral de Bizkaia',
    plazas: 44,
    convocatoria: '2022 + 2025 (BOB)',
    estado: 'activa',
    descripcion: 'Técnico Medio de Gestión Administrativa Financiera. Liquidación de tributos forales. Examen 100 preguntas + supuestos prácticos.',
    examen: { preguntas: 100, tiempo_min: 120, respuestas: 4, penaliza_errores: true },
    secciones: [
      {
        id: 'tmgaf-sec1', nombre: 'Derecho Público y Organización',
        color: '#1E3A8A', emoji: '⚖️',
        unidades: [
          { id: 'tmgaf-derecho-constitucional',       nombre: 'Constitución y UE',                 icono: '📜' },
          { id: 'tmgaf-organizacion-foral',           nombre: 'Organización foral (NF 3/1987, LTH)', icono: '🏛️' },
          { id: 'tmgaf-concierto-economico',          nombre: 'Concierto Económico',               icono: '🤝' },
          { id: 'tmgaf-procedimiento-administrativo', nombre: 'Procedimiento administrativo',      icono: '📋' },
          { id: 'tmgaf-funcion-publica',              nombre: 'Función pública',                   icono: '👥' },
          { id: 'tmgaf-igualdad',                     nombre: 'Igualdad',                          icono: '⚖️' },
          { id: 'tmgaf-transparencia',                nombre: 'Transparencia',                     icono: '🔍' },
          { id: 'tmgaf-proteccion-datos',             nombre: 'Protección de datos',               icono: '🔒' }
        ]
      },
      {
        id: 'tmgaf-sec2', nombre: 'Norma Foral General Tributaria',
        color: '#1E40AF', emoji: '📚',
        unidades: [
          { id: 'tmgaf-nfgt-principios',     nombre: 'Principios y deber de reserva',  icono: '📖' },
          { id: 'tmgaf-nfgt-tributos',       nombre: 'Clases de tributos',             icono: '🏦' },
          { id: 'tmgaf-nfgt-obligados',      nombre: 'Obligados tributarios',          icono: '👤' },
          { id: 'tmgaf-nfgt-deuda',          nombre: 'Deuda tributaria',               icono: '💰' },
          { id: 'tmgaf-nfgt-procedimientos', nombre: 'Procedimientos de gestión',      icono: '📊' },
          { id: 'tmgaf-nfgt-recaudacion',    nombre: 'Recaudación',                    icono: '💵' },
          { id: 'tmgaf-nfgt-sanciones',      nombre: 'Sanciones',                      icono: '⚠️' },
          { id: 'tmgaf-nfgt-revision',       nombre: 'Revisión',                       icono: '🔁' }
        ]
      },
      {
        id: 'tmgaf-sec3', nombre: 'Sistema tributario foral',
        color: '#3B82F6', emoji: '💼',
        unidades: [
          { id: 'tmgaf-irpf',              nombre: 'IRPF (NF 13/2013)',         icono: '👨‍💼' },
          { id: 'tmgaf-is',                nombre: 'IS (NF 11/2013)',           icono: '🏢' },
          { id: 'tmgaf-iva',               nombre: 'IVA (NF 7/1994)',           icono: '🛒' },
          { id: 'tmgaf-itp-ajd',           nombre: 'ITP-AJD (NF 1/2011)',       icono: '📝' },
          { id: 'tmgaf-isd',               nombre: 'Sucesiones (NF 4/2015)',    icono: '🎁' },
          { id: 'tmgaf-haciendas-locales', nombre: 'Haciendas Locales e IIEE', icono: '🏘️' }
        ]
      },
      {
        id: 'tmgaf-sec4', nombre: 'Contabilidad pública y mercantil',
        color: '#F59E0B', emoji: '🧮',
        unidades: [
          { id: 'tmgaf-contabilidad', nombre: 'Contabilidad y NFGP', icono: '📒' }
        ]
      }
    ]
  }
];

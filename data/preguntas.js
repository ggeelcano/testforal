// TestForal · Banco de preguntas Hacienda Bizkaia (DFB)
// 332 preguntas extraídas de exámenes oficiales 2022-2026 publicados en bizkaia.eus
// Cada pregunta validada contra normativa vigente a mayo 2026.
// Las preguntas marcadas con obsoleta:true tienen nota sobre la modificación normativa.
//
// Fuentes: preguntas-{subinspector|administrativo|tmgaf}-{año}.js
// Estructura final: window.PREGUNTAS con campo `unidad` prefijado por oposición.
//
// Prefijos de unidad:
//   sub-*    → Subinspector de Tributos (57 preguntas, examen 2022)
//   adm-*    → Administrativo Foral (85 preguntas, examen 2022 TL)
//   tmgaf-*  → TMGAF / Liquidador (190 preguntas, exámenes 2022 + 2026)
(function(){
  // Agrupa cada unidad temática a uno de 6 bloques (para evitar bloques con 1 pregunta).
  // Estos 6 bloques son comunes a todas las oposiciones.
  function normUnit(u){
    if (!u) return u;
    // Bloque 1: Constitucional + organización foral + concierto + UE
    if (u === 'derecho-constitucional' || u === 'organizacion-foral' ||
        u === 'concierto-economico'    || u === 'union-europea') return 'organizacion';
    // Bloque 2: Procedimiento, contratos, función pública, igualdad, transparencia, datos
    if (u === 'procedimiento-administrativo' || u === 'contratos-sector-publico' ||
        u === 'funcion-publica' || u === 'igualdad' ||
        u === 'transparencia'   || u === 'proteccion-datos' ||
        u === 'atencion-ciudadana') return 'derecho-publico';
    // Bloque 3: NFGT (parte general tributaria)
    if (u.indexOf('nfgt-') === 0) return 'nfgt';
    // Bloque 4: Impuestos directos
    if (u.indexOf('irpf') === 0 || u.indexOf('is-') === 0 || u === 'is' || u === 'isd') return 'directos';
    // Bloque 5: Impuestos indirectos y locales
    if (u === 'iva' || u === 'itp-ajd' || u === 'haciendas-locales') return 'indirectos';
    // Bloque 6: Presupuestos, contabilidad, estadística, macro/micro/política económica
    if (u === 'presupuestos-foral' || u === 'contabilidad' ||
        u === 'matematica-financiera' || u === 'estadistica' ||
        u === 'macroeconomia' || u === 'microeconomia' ||
        u === 'politica-economica') return 'presupuestos';
    return u;
  }
  function tag(arr, op){
    return arr.map(function(q){
      var copy = {};
      for (var k in q) copy[k] = q[k];
      copy.op = op;
      copy.unidad = op + '-' + normUnit(q.unidad);
      // adaptar al esquema legacy esperado por app.html: explicacion = nota
      copy.explicacion = q.nota || '';
      return copy;
    });
  }
  var sub      = (window.PREGUNTAS_SUBINSPECTOR_2022 || []);
  var adm      = (window.PREGUNTAS_ADMINISTRATIVO_2022 || []);
  var admPi    = (window.PREGUNTAS_ADMINISTRATIVO_PI_2022 || []);
  var tm22     = (window.PREGUNTAS_TMGAF_2022 || []);
  var tm26     = (window.PREGUNTAS_TMGAF_2026 || []);
  var tm26Pi   = (window.PREGUNTAS_TMGAF_PI_2026 || []);
  var afc      = (window.PREGUNTAS_AFC_2024 || []);
  var afcPi    = (window.PREGUNTAS_AFC_PI_2024 || []);
  var eco      = (window.PREGUNTAS_ECONOMISTA_2022 || []);
  var ecoEstab = (window.PREGUNTAS_ECONOMISTA_ESTAB_2022 || []);
  var tg23     = (window.PREGUNTAS_TAG_2023 || []);
  var tg23Pi   = (window.PREGUNTAS_TAG_PI_2023 || []);
  var tg26     = (window.PREGUNTAS_TAG_2026 || []);
  var tg26Pi   = (window.PREGUNTAS_TAG_PI_2026 || []);
  window.PREGUNTAS = [].concat(
    tag(sub,      'sub'),
    tag(adm,      'adm'),
    tag(admPi,    'adm'),
    tag(tm22,     'tmgaf'),
    tag(tm26,     'tmgaf'),
    tag(tm26Pi,   'tmgaf'),
    tag(afc,      'afc'),
    tag(afcPi,    'afc'),
    tag(eco,      'eco'),
    tag(ecoEstab, 'eco'),
    tag(tg23,     'tag'),
    tag(tg23Pi,   'tag'),
    tag(tg26,     'tag'),
    tag(tg26Pi,   'tag')
  );
  // Resumen para depuración
  if (typeof console !== 'undefined') {
    console.log('[TestForal] Preguntas cargadas:', window.PREGUNTAS.length,
      'sub=' + sub.length,
      'adm=' + (adm.length + admPi.length),
      'tmgaf=' + (tm22.length + tm26.length + tm26Pi.length),
      'afc=' + (afc.length + afcPi.length),
      'eco=' + (eco.length + ecoEstab.length),
      'tag=' + (tg23.length + tg23Pi.length + tg26.length + tg26Pi.length));
  }
})();

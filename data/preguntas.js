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
  // Normaliza subunidades a su unidad principal (p. ej. irpf-rendimientos → irpf, is-base → is)
  function normUnit(u){
    if (!u) return u;
    if (u.indexOf('irpf-') === 0) return 'irpf';
    if (u.indexOf('is-') === 0)   return 'is';
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
  var sub  = (window.PREGUNTAS_SUBINSPECTOR_2022 || []);
  var adm  = (window.PREGUNTAS_ADMINISTRATIVO_2022 || []);
  var tm22 = (window.PREGUNTAS_TMGAF_2022 || []);
  var tm26 = (window.PREGUNTAS_TMGAF_2026 || []);
  var afc  = (window.PREGUNTAS_AFC_2024 || []);
  var eco  = (window.PREGUNTAS_ECONOMISTA_2022 || []);
  var tg23 = (window.PREGUNTAS_TAG_2023 || []);
  var tg26 = (window.PREGUNTAS_TAG_2026 || []);
  window.PREGUNTAS = [].concat(
    tag(sub,  'sub'),
    tag(adm,  'adm'),
    tag(tm22, 'tmgaf'),
    tag(tm26, 'tmgaf'),
    tag(afc,  'afc'),
    tag(eco,  'eco'),
    tag(tg23, 'tag'),
    tag(tg26, 'tag')
  );
  // Resumen para depuración
  if (typeof console !== 'undefined') {
    console.log('[TestForal] Preguntas cargadas:', window.PREGUNTAS.length,
      'sub=' + sub.length, 'adm=' + adm.length,
      'tmgaf=' + (tm22.length + tm26.length),
      'afc=' + afc.length, 'eco=' + eco.length,
      'tag=' + (tg23.length + tg26.length));
  }
})();

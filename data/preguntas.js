// TestForal · Banco de preguntas Hacienda Bizkaia
// Cada pregunta: { unidad, pregunta, opciones[4], correcta(idx), explicacion }
// Generado con Claude el 2026-05-01. Sustituir por preguntas oficiales cuando Josu pase los temarios.

window.PREGUNTAS = [

// ===== BLOQUE I · ORGANIZACIÓN DEL ESTADO =====

// b1u1 — Constitución Española 1978
{ unidad: 'b1u1', pregunta: '¿En qué fecha fue aprobada la Constitución Española?', opciones: ['6 de diciembre de 1978','27 de diciembre de 1978','29 de diciembre de 1978','22 de noviembre de 1975'], correcta: 0, explicacion: 'La CE fue aprobada en referéndum el 6 de diciembre de 1978, sancionada el 27 de diciembre y publicada en el BOE el 29 de diciembre.' },
{ unidad: 'b1u1', pregunta: '¿Cuántos títulos tiene la Constitución Española?', opciones: ['8 títulos','10 títulos + Preliminar','11 títulos','12 títulos'], correcta: 1, explicacion: 'La CE consta de un Título Preliminar y 10 títulos numerados (I a X).' },
{ unidad: 'b1u1', pregunta: 'Según el art. 1 CE, ¿qué forma política tiene el Estado español?', opciones: ['República parlamentaria','Monarquía absoluta','Monarquía parlamentaria','Estado federal'], correcta: 2, explicacion: 'El art. 1.3 CE establece que la forma política del Estado español es la Monarquía parlamentaria.' },
{ unidad: 'b1u1', pregunta: '¿Qué artículo de la CE regula los derechos fundamentales y libertades públicas?', opciones: ['Art. 10 a 14','Art. 15 a 29','Art. 30 a 38','Art. 39 a 52'], correcta: 1, explicacion: 'Los derechos fundamentales y libertades públicas están en la Sección 1ª del Cap. II del Título I, arts. 15 a 29.' },
{ unidad: 'b1u1', pregunta: '¿Cuál es el procedimiento de reforma agravada de la Constitución?', opciones: ['Art. 167','Art. 168','Art. 169','Art. 170'], correcta: 1, explicacion: 'El art. 168 regula la reforma agravada (revisión total o de Título Preliminar, Cap. II Sección 1ª Título I, o Título II).' },
{ unidad: 'b1u1', pregunta: '¿Cuántos diputados componen el Congreso?', opciones: ['Mínimo 300, máximo 400','Mínimo 350, máximo 400','350 fijos','Variable según población'], correcta: 0, explicacion: 'El art. 68.1 CE dispone que el Congreso se compone de un mínimo de 300 y máximo de 400 diputados.' },

// b1u2 — Cortes Generales y Poder Judicial
{ unidad: 'b1u2', pregunta: '¿Por cuántos años son elegidos los miembros de las Cortes Generales?', opciones: ['3 años','4 años','5 años','6 años'], correcta: 1, explicacion: 'Tanto Congreso como Senado se eligen por 4 años (arts. 68.4 y 69.6 CE).' },
{ unidad: 'b1u2', pregunta: '¿Quién preside el Consejo General del Poder Judicial?', opciones: ['El Ministro de Justicia','El Presidente del Tribunal Supremo','El Fiscal General del Estado','El Rey'], correcta: 1, explicacion: 'El Presidente del CGPJ es a su vez el Presidente del Tribunal Supremo (art. 123.2 CE).' },
{ unidad: 'b1u2', pregunta: '¿Cuántos vocales tiene el Consejo General del Poder Judicial?', opciones: ['12 vocales más el Presidente','20 vocales más el Presidente','21 vocales','15 vocales'], correcta: 1, explicacion: 'El CGPJ está formado por el Presidente y 20 vocales (art. 122.3 CE).' },
{ unidad: 'b1u2', pregunta: 'El Senado se considera la cámara de...', opciones: ['Representación popular','Representación territorial','Representación corporativa','Representación electoral'], correcta: 1, explicacion: 'El art. 69.1 CE define al Senado como cámara de representación territorial.' },
{ unidad: 'b1u2', pregunta: '¿Qué órgano es el "supremo intérprete de la Constitución"?', opciones: ['El Tribunal Supremo','El Tribunal Constitucional','El Consejo de Estado','El CGPJ'], correcta: 1, explicacion: 'El TC es el supremo intérprete de la Constitución (art. 1 LOTC).' },

// b1u3 — Gobierno y Administración Pública
{ unidad: 'b1u3', pregunta: '¿Quién propone al Rey el nombramiento del Presidente del Gobierno?', opciones: ['El Senado','El Congreso de los Diputados','El propio Rey','El Consejo de Ministros saliente'], correcta: 1, explicacion: 'Tras consultas, el Rey propone un candidato a través del Presidente del Congreso, que es investido por mayoría (art. 99 CE).' },
{ unidad: 'b1u3', pregunta: '¿Qué ley regula el régimen jurídico del Sector Público?', opciones: ['Ley 39/2015','Ley 40/2015','Ley 19/2013','Ley 30/1992'], correcta: 1, explicacion: 'La Ley 40/2015 regula el régimen jurídico del sector público; la 39/2015 regula el procedimiento administrativo común.' },
{ unidad: 'b1u3', pregunta: '¿Cuántos miembros como mínimo tiene el Consejo de Ministros?', opciones: ['Presidente, Vicepresidentes y Ministros','Solo Presidente y Ministros','Presidente, Vicepresidentes, Ministros y Secretarios de Estado','No hay mínimo establecido'], correcta: 0, explicacion: 'Art. 98 CE: el Gobierno se compone del Presidente, Vicepresidentes (en su caso), Ministros y demás miembros que establezca la ley.' },
{ unidad: 'b1u3', pregunta: 'La moción de censura en España es...', opciones: ['Constructiva','Destructiva','Mixta','Voluntaria'], correcta: 0, explicacion: 'Art. 113 CE: debe incluir un candidato alternativo (constructiva).' },
{ unidad: 'b1u3', pregunta: '¿Cuándo cesa el Gobierno?', opciones: ['Solo tras moción de censura','Solo tras elecciones','Tras elecciones, pérdida de confianza, dimisión o fallecimiento del Presidente','Cada 4 años obligatoriamente'], correcta: 2, explicacion: 'Art. 101 CE.' },

// b1u4 — Organización territorial
{ unidad: 'b1u4', pregunta: '¿Cuántas Comunidades Autónomas tiene España?', opciones: ['15','17','17 + 2 ciudades autónomas','19'], correcta: 2, explicacion: '17 CCAA + Ceuta y Melilla como ciudades autónomas.' },
{ unidad: 'b1u4', pregunta: '¿Qué artículo de la CE regula los derechos históricos de los territorios forales?', opciones: ['Disposición Adicional 1ª','Art. 143','Art. 156','Art. 138'], correcta: 0, explicacion: 'La DA 1ª CE ampara los derechos históricos de los territorios forales (clave para Bizkaia).' },
{ unidad: 'b1u4', pregunta: 'El Concierto Económico con el País Vasco se renovó en...', opciones: ['Ley 12/2002','Ley 38/1997','Ley 30/1983','Ley 3/1979'], correcta: 0, explicacion: 'Ley 12/2002 aprobó el Concierto Económico vigente con el País Vasco.' },
{ unidad: 'b1u4', pregunta: '¿Quién aprueba los Estatutos de Autonomía?', opciones: ['El Gobierno por Real Decreto','Las Cortes Generales por Ley Orgánica','La Asamblea autonómica','El Tribunal Constitucional'], correcta: 1, explicacion: 'Art. 81 CE: los EEAA son leyes orgánicas.' },
{ unidad: 'b1u4', pregunta: 'En el sistema foral vasco, los tributos concertados son recaudados por...', opciones: ['La AEAT','Las Diputaciones Forales','El Gobierno Vasco','Hacienda Estatal con devolución posterior'], correcta: 1, explicacion: 'Las Diputaciones Forales (Bizkaia, Gipuzkoa, Álava) gestionan, liquidan y recaudan los tributos concertados.' },

// b1u5 — Funcionamiento electrónico del sector público
{ unidad: 'b1u5', pregunta: '¿Qué Ley regula el funcionamiento electrónico del sector público?', opciones: ['Ley 39/2015','Ley 40/2015','Ley 11/2007','Ley 19/2013'], correcta: 1, explicacion: 'La Ley 40/2015 incorpora la regulación del funcionamiento electrónico del sector público.' },
{ unidad: 'b1u5', pregunta: '¿Qué es la sede electrónica?', opciones: ['Una web cualquiera de la administración','Dirección electrónica titularidad de una AAPP, con plenas garantías de identificación e integridad','Un portal de transparencia','Una aplicación de firma'], correcta: 1, explicacion: 'Art. 38 Ley 40/2015.' },
{ unidad: 'b1u5', pregunta: 'El Esquema Nacional de Seguridad regula...', opciones: ['Solo seguridad física','Política de seguridad para uso de medios electrónicos en AAPP','Solo ciberseguridad','Régimen de sanciones'], correcta: 1, explicacion: 'RD 311/2022, ENS.' },
{ unidad: 'b1u5', pregunta: '¿Qué sistemas de identificación admite la Administración?', opciones: ['Solo DNIe','Solo certificado electrónico','Sistemas de firma electrónica reconocida y otros admitidos por la AAPP','Solo Cl@ve'], correcta: 2, explicacion: 'Art. 9 Ley 39/2015: certificados, sistemas de firma reconocida, clave concertada y otros que reconozcan las AAPP.' },
{ unidad: 'b1u5', pregunta: 'El registro electrónico de la AAPP debe estar disponible...', opciones: ['En horario de oficina','24/7 todos los días del año','De lunes a viernes','Solo días hábiles'], correcta: 1, explicacion: 'Art. 16 Ley 39/2015: el registro electrónico opera 24h/365 días.' },

// b1u6 — Igualdad y no discriminación
{ unidad: 'b1u6', pregunta: '¿Qué Ley Orgánica regula la igualdad efectiva entre mujeres y hombres?', opciones: ['LO 1/2004','LO 3/2007','LO 8/2021','LO 10/2022'], correcta: 1, explicacion: 'LO 3/2007 de 22 de marzo, para la igualdad efectiva de mujeres y hombres.' },
{ unidad: 'b1u6', pregunta: '¿Qué establece la LO 1/2004 contra la violencia de género?', opciones: ['Medidas integrales','Solo medidas penales','Solo educación','Solo aspectos laborales'], correcta: 0, explicacion: 'LO 1/2004 de medidas de protección integral contra la violencia de género.' },
{ unidad: 'b1u6', pregunta: 'La discriminación indirecta por razón de sexo se produce cuando...', opciones: ['Una norma neutra perjudica desproporcionadamente a un sexo','Hay trato desigual evidente','Solo en el empleo','Solo en publicidad'], correcta: 0, explicacion: 'Art. 6.2 LO 3/2007.' },
{ unidad: 'b1u6', pregunta: 'Los Planes de Igualdad son obligatorios en empresas de...', opciones: ['Más de 100 trabajadores','Más de 50 trabajadores','Más de 250 trabajadores','Cualquier tamaño'], correcta: 1, explicacion: 'Tras RDL 6/2019, obligatorios en empresas de 50 o más trabajadores.' },
{ unidad: 'b1u6', pregunta: '¿Qué artículo CE consagra el principio de igualdad ante la ley?', opciones: ['Art. 9','Art. 10','Art. 14','Art. 16'], correcta: 2, explicacion: 'Art. 14 CE: "Los españoles son iguales ante la ley...".' },

// b1u7 — Régimen jurídico del personal
{ unidad: 'b1u7', pregunta: '¿Qué texto regula el Estatuto Básico del Empleado Público?', opciones: ['Ley 7/2007','RDL 5/2015','Ley 30/1984','Ley 53/1984'], correcta: 1, explicacion: 'Real Decreto Legislativo 5/2015, texto refundido del EBEP.' },
{ unidad: 'b1u7', pregunta: '¿Cuáles son las clases de personal al servicio de las AAPP según el EBEP?', opciones: ['Funcionarios y laborales','Funcionarios de carrera, interinos, laborales y eventuales','Solo funcionarios','Funcionarios y autónomos'], correcta: 1, explicacion: 'Art. 8 EBEP: funcionarios de carrera, funcionarios interinos, personal laboral (fijo, indefinido o temporal) y personal eventual.' },
{ unidad: 'b1u7', pregunta: '¿En qué grupo se encuadra una plaza con titulación de Grado universitario?', opciones: ['Grupo A1','Grupo A2','Grupo B','Depende de la plaza concreta dentro de A1 o A2'], correcta: 3, explicacion: 'Art. 76 EBEP: grado universitario habilita para A1 o A2 según se exija; A1 requiere doctorado/grado, A2 grado.' },
{ unidad: 'b1u7', pregunta: '¿Cuántos días de asuntos propios tienen los funcionarios al año (referencia EBEP)?', opciones: ['3 días','5 días','6 días','9 días'], correcta: 2, explicacion: 'Art. 48.k EBEP: 6 días al año por asuntos particulares (puede ampliarse en CCAA/forales).' },
{ unidad: 'b1u7', pregunta: 'La pérdida de la condición de funcionario se produce por...', opciones: ['Solo jubilación','Renuncia, pérdida de nacionalidad, sanción disciplinaria de separación, pena principal de inhabilitación o jubilación','Solo separación del servicio','Solo a petición propia'], correcta: 1, explicacion: 'Art. 63 EBEP.' },

// ===== BLOQUE II · DERECHO ADMINISTRATIVO =====

// b2u1 — Fuentes del Derecho Administrativo
{ unidad: 'b2u1', pregunta: '¿Cuál es la jerarquía normativa en España?', opciones: ['Constitución, Ley, Reglamento','Ley, Constitución, Reglamento','Decretos, Leyes, Constitución','Reglamento, Constitución, Ley'], correcta: 0, explicacion: 'Art. 9.3 CE garantiza la jerarquía normativa: CE > Ley > Reglamento.' },
{ unidad: 'b2u1', pregunta: '¿Qué normas tienen rango de Ley dictadas por el Gobierno?', opciones: ['Real Decreto y Orden Ministerial','Decreto-ley y Decreto Legislativo','Solo Decreto-ley','Solo Real Decreto'], correcta: 1, explicacion: 'Decreto-ley (art. 86 CE) y Decreto Legislativo (art. 82 CE) tienen rango de ley.' },
{ unidad: 'b2u1', pregunta: 'La costumbre como fuente del Derecho Administrativo es...', opciones: ['Fuente principal','Fuente subsidiaria','Inadmisible','Equivalente a la ley'], correcta: 1, explicacion: 'En el ámbito administrativo la costumbre es fuente subsidiaria, en defecto de ley aplicable.' },
{ unidad: 'b2u1', pregunta: 'El principio de reserva de ley implica que...', opciones: ['Toda norma debe ser ley','Determinadas materias solo pueden regularse por ley formal','Los reglamentos son inválidos','Solo el ejecutivo legisla'], correcta: 1, explicacion: 'Reserva de ley: la CE exige rango de ley para regular ciertas materias (derechos fundamentales, tributos, etc.).' },
{ unidad: 'b2u1', pregunta: '¿Cuál es la diferencia entre Ley Orgánica y Ley Ordinaria?', opciones: ['Materia y mayoría exigida (mayoría absoluta del Congreso)','Solo el órgano que la aprueba','La duración','Ninguna'], correcta: 0, explicacion: 'Art. 81 CE: las Leyes Orgánicas regulan materias reservadas y exigen mayoría absoluta del Congreso.' },

// b2u2 — Actos administrativos
{ unidad: 'b2u2', pregunta: '¿Qué requisitos tiene el acto administrativo?', opciones: ['Solo que sea escrito','Sujeto, objeto, causa, fin y forma','Solo motivación','Que tenga firma'], correcta: 1, explicacion: 'Elementos del acto: sujeto competente, objeto lícito y posible, causa, fin público, forma adecuada.' },
{ unidad: 'b2u2', pregunta: 'Los actos administrativos se presumen...', opciones: ['Nulos','Válidos y producen efectos desde su fecha','Anulables','Provisionales'], correcta: 1, explicacion: 'Art. 39.1 Ley 39/2015: presunción de validez y eficacia.' },
{ unidad: 'b2u2', pregunta: '¿Cuándo es nulo de pleno derecho un acto administrativo?', opciones: ['Cuando hay defectos formales menores','En los supuestos del art. 47 Ley 39/2015','Siempre que se recurra','Cuando lo decida el Juez'], correcta: 1, explicacion: 'Art. 47 Ley 39/2015 enumera los supuestos de nulidad de pleno derecho (lesionar derechos fundamentales, dictado por órgano manifiestamente incompetente, etc.).' },
{ unidad: 'b2u2', pregunta: 'La motivación de los actos administrativos es...', opciones: ['Siempre obligatoria','Solo si lo pide el interesado','Obligatoria en los casos del art. 35 Ley 39/2015','Voluntaria'], correcta: 2, explicacion: 'Art. 35 Ley 39/2015: deben motivarse los actos restrictivos de derechos, los discrecionales, los que se separen del criterio anterior, etc.' },
{ unidad: 'b2u2', pregunta: '¿Cuándo es eficaz un acto administrativo notificado?', opciones: ['Desde que se dicta','Desde su notificación, salvo que la propia norma o el acto disponga otra cosa','Desde su publicación siempre','Tras 30 días'], correcta: 1, explicacion: 'Art. 39.2 Ley 39/2015.' },

// b2u3 — Procedimiento administrativo común
{ unidad: 'b2u3', pregunta: '¿Qué Ley regula el procedimiento administrativo común?', opciones: ['Ley 39/2015','Ley 40/2015','Ley 30/1992','Ley 19/2013'], correcta: 0, explicacion: 'Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común.' },
{ unidad: 'b2u3', pregunta: '¿Cuáles son los interesados en el procedimiento?', opciones: ['Solo los que lo inician','Quienes lo promuevan, los titulares de derechos afectados y aquellos cuyos intereses puedan resultar afectados','Solo los administrados','El Ministerio Fiscal'], correcta: 1, explicacion: 'Art. 4 Ley 39/2015.' },
{ unidad: 'b2u3', pregunta: '¿Cuál es el plazo máximo general para resolver y notificar?', opciones: ['1 mes','3 meses si la norma reguladora no fija otro','6 meses','1 año'], correcta: 1, explicacion: 'Art. 21.3 Ley 39/2015: 3 meses si la norma reguladora no fija otro plazo (máximo legal: 6 meses salvo norma con rango de ley o Derecho UE).' },
{ unidad: 'b2u3', pregunta: 'Los plazos en días hábiles excluyen...', opciones: ['Solo domingos','Sábados, domingos y festivos','Solo festivos','Ningún día'], correcta: 1, explicacion: 'Art. 30.2 Ley 39/2015: tras la reforma, los días hábiles excluyen sábados, domingos y festivos.' },
{ unidad: 'b2u3', pregunta: 'El silencio administrativo en procedimientos iniciados a solicitud del interesado es, por regla general...', opciones: ['Negativo','Positivo','Variable según el procedimiento','Inexistente'], correcta: 1, explicacion: 'Art. 24 Ley 39/2015: regla general de silencio positivo, salvo excepciones (medio ambiente, dominio público, transferencia, etc.).' },

// b2u4 — Fases del procedimiento
{ unidad: 'b2u4', pregunta: '¿Cuáles son las fases del procedimiento administrativo común?', opciones: ['Inicio, instrucción, terminación','Inicio, audiencia, resolución','Solicitud, alegaciones, prueba','Inicio, ordenación, instrucción, finalización'], correcta: 3, explicacion: 'Las fases son: iniciación, ordenación, instrucción y finalización (Título IV Ley 39/2015).' },
{ unidad: 'b2u4', pregunta: '¿Cómo puede iniciarse un procedimiento?', opciones: ['Solo de oficio','Solo a instancia de parte','De oficio o a solicitud del interesado','Solo por denuncia'], correcta: 2, explicacion: 'Art. 54 Ley 39/2015.' },
{ unidad: 'b2u4', pregunta: '¿Qué es el trámite de audiencia?', opciones: ['Una reunión presencial','Trámite por el que se pone el expediente a disposición del interesado para alegaciones, antes de la propuesta de resolución','Una vista oral','Un recurso'], correcta: 1, explicacion: 'Art. 82 Ley 39/2015.' },
{ unidad: 'b2u4', pregunta: '¿Cuáles son los modos de terminación del procedimiento?', opciones: ['Solo resolución','Resolución, desistimiento, renuncia, caducidad e imposibilidad material','Solo desistimiento','Solo silencio'], correcta: 1, explicacion: 'Art. 84 Ley 39/2015.' },
{ unidad: 'b2u4', pregunta: '¿Cuándo caduca el procedimiento iniciado de oficio susceptible de producir efectos desfavorables?', opciones: ['A los 3 meses sin resolución','A los 6 meses','A los 30 días','Nunca'], correcta: 0, explicacion: 'Art. 25 Ley 39/2015: caducidad a los 30 días tras vencer el plazo, en procedimientos sancionadores y de gravamen.' },

// b2u5 — Recursos administrativos
{ unidad: 'b2u5', pregunta: '¿Cuáles son los recursos administrativos ordinarios?', opciones: ['Alzada y reposición','Alzada, reposición y revisión','Solo alzada','Solo reposición'], correcta: 0, explicacion: 'Recursos ordinarios: alzada (contra actos no firmes) y reposición (potestativo contra actos que ponen fin a la vía).' },
{ unidad: 'b2u5', pregunta: '¿Cuál es el plazo para interponer recurso de alzada?', opciones: ['10 días','15 días','1 mes','3 meses'], correcta: 2, explicacion: 'Art. 122 Ley 39/2015: 1 mes si el acto fuera expreso; 3 meses si fuera presunto.' },
{ unidad: 'b2u5', pregunta: 'El recurso de reposición es...', opciones: ['Obligatorio','Potestativo','Inexistente','Solo en lo tributario'], correcta: 1, explicacion: 'Art. 123 Ley 39/2015: el de reposición es potestativo previo a la vía contencioso-administrativa.' },
{ unidad: 'b2u5', pregunta: '¿Cuándo procede el recurso extraordinario de revisión?', opciones: ['Siempre que se quiera','Cuando concurran los motivos del art. 125 Ley 39/2015 (error de hecho, documentos esenciales aparecidos, etc.)','Solo en lo tributario','Por mera disconformidad'], correcta: 1, explicacion: 'Art. 125 Ley 39/2015 enumera 4 motivos tasados.' },
{ unidad: 'b2u5', pregunta: '¿Qué efecto tiene la interposición del recurso sobre la ejecución?', opciones: ['Suspende automáticamente','No suspende, salvo que la norma diga lo contrario o el órgano lo acuerde','Suspende solo en sancionadores','Anula el acto'], correcta: 1, explicacion: 'Art. 117 Ley 39/2015: regla general de no suspensión, con excepciones.' },

// ===== BLOQUE III · HACIENDA Y TRIBUTARIO =====

// b3u1 — Sistema fiscal español
{ unidad: 'b3u1', pregunta: '¿Cuál es el principio constitucional básico del sistema tributario?', opciones: ['Solo legalidad','Capacidad económica, igualdad, progresividad y no confiscatoriedad','Solo igualdad','Eficiencia'], correcta: 1, explicacion: 'Art. 31.1 CE.' },
{ unidad: 'b3u1', pregunta: '¿Qué tributos son cedidos a las CCAA según la LOFCA?', opciones: ['Todos los impuestos','Una lista de impuestos definida por la LOFCA y leyes de cesión','Solo IRPF','Solo locales'], correcta: 1, explicacion: 'LOFCA (LO 8/1980) define los tributos cedidos: IRPF parcial, ITP, ISD, IP, etc.' },
{ unidad: 'b3u1', pregunta: 'En el sistema foral vasco, los impuestos concertados son aprobados por...', opciones: ['Las Cortes Generales','El Parlamento Vasco','Las Juntas Generales de cada Territorio Histórico','El Ayuntamiento'], correcta: 2, explicacion: 'Las Juntas Generales de Bizkaia (y de Gipuzkoa y Álava) aprueban las Normas Forales tributarias.' },
{ unidad: 'b3u1', pregunta: '¿Qué tributos NO están concertados en el País Vasco?', opciones: ['Aduanas y monopolios fiscales','IRPF','IVA','IS'], correcta: 0, explicacion: 'La renta de Aduanas y los monopolios fiscales son competencia exclusiva del Estado (no concertados).' },
{ unidad: 'b3u1', pregunta: 'El "cupo" en el régimen foral es...', opciones: ['Un impuesto especial','La aportación que el País Vasco hace al Estado por cargas no asumidas','Una bonificación fiscal','Una sanción'], correcta: 1, explicacion: 'El cupo es la contribución de la CAV al Estado por las cargas generales no asumidas.' },

// b3u2 — AEAT
{ unidad: 'b3u2', pregunta: '¿Cuándo se creó la AEAT?', opciones: ['Ley 31/1990','Ley 50/1998','Ley 58/2003','LGT 230/1963'], correcta: 0, explicacion: 'La Ley 31/1990 (Presupuestos 1991) creó la AEAT como ente público.' },
{ unidad: 'b3u2', pregunta: '¿Qué naturaleza jurídica tiene la AEAT?', opciones: ['Ministerio','Entidad de Derecho Público adscrita al Ministerio de Hacienda','Empresa pública','Organismo autónomo'], correcta: 1, explicacion: 'Entidad de Derecho Público con personalidad jurídica propia.' },
{ unidad: 'b3u2', pregunta: 'En Bizkaia, la AEAT NO gestiona...', opciones: ['IRPF','IVA','Aduanas','Tributos concertados de gestión foral'], correcta: 3, explicacion: 'En el régimen foral, la AEAT no gestiona los tributos concertados; lo hace la Hacienda Foral de Bizkaia.' },
{ unidad: 'b3u2', pregunta: '¿Qué órganos centrales tiene la AEAT?', opciones: ['Solo Dirección General','Presidencia, Dirección General y departamentos (Inspección, Gestión, Recaudación, Aduanas, Informática, RRHH)','Solo Hacienda','Consejería autonómica'], correcta: 1, explicacion: 'Estructura central: Presidencia, DG y departamentos especializados.' },

// b3u3 — Ley General Tributaria - Principios
{ unidad: 'b3u3', pregunta: '¿Qué Ley es la Ley General Tributaria?', opciones: ['Ley 230/1963','Ley 58/2003','Ley 39/2015','LO 8/1980'], correcta: 1, explicacion: 'Ley 58/2003, de 17 de diciembre, General Tributaria.' },
{ unidad: 'b3u3', pregunta: '¿Cuál es la Norma Foral General Tributaria de Bizkaia?', opciones: ['NF 2/2005','NF 3/2008','NF 13/2013','NF 6/2014'], correcta: 0, explicacion: 'Norma Foral 2/2005, de 10 de marzo, General Tributaria del Territorio Histórico de Bizkaia.' },
{ unidad: 'b3u3', pregunta: 'El hecho imponible es...', opciones: ['El sujeto pasivo','El presupuesto fijado por la ley para configurar cada tributo y cuya realización origina el nacimiento de la obligación tributaria principal','La cuota','La sanción'], correcta: 1, explicacion: 'Art. 20 LGT.' },
{ unidad: 'b3u3', pregunta: 'La analogía en Derecho Tributario...', opciones: ['Está prohibida en hecho imponible, exenciones y beneficios fiscales','Es libre','Solo cabe a favor del contribuyente','Solo cabe en sanciones'], correcta: 0, explicacion: 'Art. 14 LGT: prohibida la analogía para extender hecho imponible, exenciones y demás beneficios fiscales.' },
{ unidad: 'b3u3', pregunta: '¿Qué clasificación de tributos hace el art. 2 LGT?', opciones: ['Solo impuestos','Tasas, contribuciones especiales e impuestos','Solo tasas','Tributos directos e indirectos'], correcta: 1, explicacion: 'Art. 2.2 LGT: impuestos, tasas y contribuciones especiales.' },

// b3u4 — Obligados tributarios
{ unidad: 'b3u4', pregunta: '¿Quién es el sujeto pasivo del tributo?', opciones: ['Cualquiera que pague','El obligado tributario que, según la ley, debe cumplir la obligación principal y las accesorias inherentes a ella','El Tesoro Público','El asesor fiscal'], correcta: 1, explicacion: 'Art. 36 LGT.' },
{ unidad: 'b3u4', pregunta: '¿Cuál es la diferencia entre contribuyente y sustituto?', opciones: ['No hay diferencia','El contribuyente realiza el hecho imponible; el sustituto, por imposición legal, ocupa su lugar','Solo en IVA','El sustituto paga voluntariamente'], correcta: 1, explicacion: 'Art. 36.2 y 36.3 LGT.' },
{ unidad: 'b3u4', pregunta: '¿Quiénes son responsables solidarios?', opciones: ['Los que voluntariamente lo asumen','Los previstos legalmente que responden junto al deudor principal','Solo los administradores','Los herederos'], correcta: 1, explicacion: 'Art. 42 LGT enumera supuestos de responsabilidad solidaria.' },
{ unidad: 'b3u4', pregunta: 'Los sucesores de personas físicas (herederos)...', opciones: ['No responden de deudas tributarias','Responden de las obligaciones tributarias del causante','Solo responden si aceptan la herencia a beneficio de inventario','Responden solo de impuestos directos'], correcta: 1, explicacion: 'Art. 39 LGT: los herederos se subrogan en la posición del causante (con límites del beneficio de inventario).' },

// b3u5 — Obligaciones tributarias
{ unidad: 'b3u5', pregunta: '¿Cuál es la obligación tributaria principal?', opciones: ['Pagar la cuota tributaria','Presentar declaraciones','Llevar libros','Conservar facturas'], correcta: 0, explicacion: 'Art. 19 LGT: la obligación principal es el pago de la cuota.' },
{ unidad: 'b3u5', pregunta: '¿Qué son las obligaciones tributarias accesorias?', opciones: ['Las que solo afectan a empresarios','Intereses de demora, recargos por declaración extemporánea, recargos del periodo ejecutivo','Solo intereses','Solo sanciones'], correcta: 1, explicacion: 'Art. 25 LGT.' },
{ unidad: 'b3u5', pregunta: '¿Cuál es el tipo del interés de demora tributario en 2026?', opciones: ['3,75%','4,06%','5,25%','6,75%'], correcta: 1, explicacion: 'En 2026, los Presupuestos fijan el interés de demora en 4,0625%. (Aprox.; revisar LPGE vigente).' },
{ unidad: 'b3u5', pregunta: '¿Qué recargo se aplica si se presenta una autoliquidación 7 meses después del plazo, sin requerimiento previo?', opciones: ['5%','10%','15%','20% más intereses'], correcta: 0, explicacion: 'Art. 27 LGT (reforma 2021): recargo del 1% más 1% adicional por cada mes completo de retraso, sin intereses ni sanción durante los primeros 12 meses; superado el año, 15% + intereses.' },

// b3u6 — Aplicación de los tributos
{ unidad: 'b3u6', pregunta: '¿Qué procedimientos integran la aplicación de los tributos?', opciones: ['Solo gestión','Gestión, inspección y recaudación','Solo recaudación','Gestión y sanción'], correcta: 1, explicacion: 'Art. 83 LGT: gestión, inspección y recaudación + asistencia.' },
{ unidad: 'b3u6', pregunta: '¿Quién tiene la titularidad de la gestión de los tributos en Bizkaia?', opciones: ['AEAT','Hacienda Foral de Bizkaia','Gobierno Vasco','Ministerio'], correcta: 1, explicacion: 'En los tributos concertados, la titularidad y gestión corresponde a la Diputación Foral de Bizkaia (Hacienda Foral).' },
{ unidad: 'b3u6', pregunta: '¿Cuál es el plazo de prescripción de la deuda tributaria?', opciones: ['3 años','4 años','5 años','10 años'], correcta: 1, explicacion: 'Art. 66 LGT: 4 años para liquidar, exigir el pago, solicitar devoluciones y obtener devoluciones.' },

// b3u7 — Gestión tributaria
{ unidad: 'b3u7', pregunta: '¿Qué es una autoliquidación?', opciones: ['Una declaración cualquiera','Declaración en la que el obligado, además de comunicar los datos, califica jurídicamente y cuantifica la deuda','Una sanción','Un recurso'], correcta: 1, explicacion: 'Art. 120 LGT.' },
{ unidad: 'b3u7', pregunta: '¿Cuál es el plazo del procedimiento de comprobación limitada?', opciones: ['3 meses','6 meses','12 meses','18 meses'], correcta: 1, explicacion: 'Art. 139 LGT: 6 meses.' },
{ unidad: 'b3u7', pregunta: '¿Qué es la liquidación provisional?', opciones: ['La definitiva','Aquella practicada antes de finalizar la inspección o que no agota la regularización','Una sanción','Un recurso'], correcta: 1, explicacion: 'Art. 101 LGT.' },

// b3u8 — Inspección tributaria
{ unidad: 'b3u8', pregunta: '¿Cuál es el plazo general del procedimiento inspector?', opciones: ['12 meses ampliable a 24','18 meses ampliable a 27 en supuestos especiales','24 meses fijo','6 meses'], correcta: 1, explicacion: 'Art. 150 LGT (tras reforma): 18 meses general; 27 si concurre alguna circunstancia (cifra de negocios sup. requerida, grupos, etc.).' },
{ unidad: 'b3u8', pregunta: '¿Qué documentos extiende la Inspección?', opciones: ['Solo actas','Comunicaciones, diligencias, informes y actas','Solo informes','Solo notas internas'], correcta: 1, explicacion: 'Art. 99 LGT.' },
{ unidad: 'b3u8', pregunta: '¿Qué tipos de actas existen?', opciones: ['Solo de conformidad','De conformidad, disconformidad y con acuerdo','Solo de inspección','De cargo y descargo'], correcta: 1, explicacion: 'Arts. 154-156 LGT: con acuerdo, de conformidad y de disconformidad.' },

// b3u9 — Recaudación
{ unidad: 'b3u9', pregunta: '¿Cuáles son los periodos de recaudación?', opciones: ['Solo voluntario','Voluntario y ejecutivo','Solo ejecutivo','Tres periodos'], correcta: 1, explicacion: 'Art. 160 LGT.' },
{ unidad: 'b3u9', pregunta: '¿Cuándo se inicia el periodo ejecutivo?', opciones: ['Al día siguiente del vencimiento del plazo voluntario','A los 30 días','Al recibir requerimiento','Al notificar la liquidación'], correcta: 0, explicacion: 'Art. 161 LGT: al día siguiente del fin del voluntario para deudas liquidadas; o tras la presentación si se autoliquidó sin pago.' },
{ unidad: 'b3u9', pregunta: '¿Qué recargo se aplica si se paga la deuda antes de notificarse la providencia de apremio?', opciones: ['5% (recargo ejecutivo)','10% (recargo de apremio reducido)','20% (recargo de apremio ordinario)','Ninguno'], correcta: 0, explicacion: 'Art. 28 LGT: recargo ejecutivo del 5% sin intereses.' },

// b3u10 — Aplazamientos y fraccionamientos
{ unidad: 'b3u10', pregunta: '¿Qué deudas NO pueden aplazarse?', opciones: ['Las dudosas','Las correspondientes a obligaciones de retención e ingreso a cuenta, salvo excepciones','Solo las del IVA','Cualquier deuda'], correcta: 1, explicacion: 'Art. 65.2 LGT.' },
{ unidad: 'b3u10', pregunta: '¿Cuál es el plazo para resolver una solicitud de aplazamiento?', opciones: ['3 meses','6 meses','12 meses','1 mes'], correcta: 1, explicacion: 'El plazo es de 6 meses; transcurrido sin resolución expresa, silencio negativo.' },

// b3u11 — Procedimiento de apremio
{ unidad: 'b3u11', pregunta: '¿Cuándo se notifica la providencia de apremio?', opciones: ['Al día siguiente del fin del voluntario','Tras iniciarse el periodo ejecutivo','Tras 30 días','Tras 1 año'], correcta: 1, explicacion: 'Iniciado el periodo ejecutivo, se notifica providencia de apremio para iniciar el procedimiento de apremio (art. 167 LGT).' },
{ unidad: 'b3u11', pregunta: 'El recargo de apremio ordinario es del...', opciones: ['5%','10%','20%','25%'], correcta: 2, explicacion: 'Art. 28 LGT: 20% + intereses de demora cuando se paga tras notificación de la providencia y agotados los plazos del art. 62.5.' },

// b3u12 — Infracciones y sanciones
{ unidad: 'b3u12', pregunta: '¿Cómo se clasifican las infracciones tributarias?', opciones: ['Graves y muy graves','Leves, graves y muy graves','Solo graves','En 5 niveles'], correcta: 1, explicacion: 'Art. 183 LGT.' },
{ unidad: 'b3u12', pregunta: '¿Cuál es la sanción base por dejar de ingresar (art. 191 LGT)?', opciones: ['25%','50%','75%','100%'], correcta: 1, explicacion: 'Art. 191 LGT: sanción mínima del 50% sobre la cantidad dejada de ingresar (con graduaciones).' },
{ unidad: 'b3u12', pregunta: '¿Qué reducción se aplica por conformidad?', opciones: ['10%','20%','30%','40%'], correcta: 2, explicacion: 'Art. 188.1 LGT: 30% por conformidad. Adicional 40% por pago en periodo voluntario y no recurso (acumulables).' },

// b3u13 — Revisión administrativa
{ unidad: 'b3u13', pregunta: '¿Qué órgano resuelve las reclamaciones económico-administrativas en Bizkaia?', opciones: ['TEAC','Tribunal Económico-Administrativo Foral de Bizkaia','TSJ','AEAT'], correcta: 1, explicacion: 'En Bizkaia, el TEAF (Tribunal Económico-Administrativo Foral).' },
{ unidad: 'b3u13', pregunta: '¿Cuál es el plazo para interponer reclamación económico-administrativa?', opciones: ['15 días','1 mes','3 meses','6 meses'], correcta: 1, explicacion: 'Art. 235 LGT: 1 mes.' },
{ unidad: 'b3u13', pregunta: '¿Es potestativo el recurso de reposición en materia tributaria?', opciones: ['No, es preceptivo','Sí, salvo norma específica','Solo en sanciones','Inexistente'], correcta: 1, explicacion: 'Art. 222 LGT: potestativo y previo a la vía económico-administrativa.' },

// b3u14 — IRPF Hecho imponible
{ unidad: 'b3u14', pregunta: '¿Cuál es la Norma Foral del IRPF de Bizkaia?', opciones: ['NF 13/2013','NF 11/2013','NF 6/2014','NF 2/2005'], correcta: 0, explicacion: 'Norma Foral 13/2013, de 5 de diciembre, del IRPF.' },
{ unidad: 'b3u14', pregunta: '¿Qué grava el IRPF?', opciones: ['El patrimonio','La renta de las personas físicas residentes','La renta de empresas','Las herencias'], correcta: 1, explicacion: 'Art. 1 NF IRPF: la renta obtenida por las personas físicas residentes.' },
{ unidad: 'b3u14', pregunta: '¿Qué tipo de rentas integran el IRPF?', opciones: ['Solo del trabajo','Trabajo, capital mobiliario, capital inmobiliario, actividades económicas, ganancias y pérdidas patrimoniales e imputaciones','Solo capital','Solo actividades'], correcta: 1, explicacion: 'Art. 6 NF IRPF Bizkaia.' },
{ unidad: 'b3u14', pregunta: '¿Cuándo se considera que una persona es residente fiscal en Bizkaia?', opciones: ['Cuando vive aquí más de 183 días al año o tiene aquí su centro de intereses','Solo si está empadronada','Si tiene cuenta bancaria','Si paga impuestos aquí'], correcta: 0, explicacion: 'Concierto Económico, art. 6 (criterios: permanencia, vivienda habitual, centro de intereses).' },

// b3u15 — IRPF Base y deducciones
{ unidad: 'b3u15', pregunta: 'En IRPF Bizkaia, las rentas se clasifican en...', opciones: ['Solo renta general','Renta general y del ahorro','Renta de trabajo y capital','En 4 categorías'], correcta: 1, explicacion: 'Renta general (trabajo, actividades, etc.) y renta del ahorro (capital mobiliario y ganancias patrimoniales).' },
{ unidad: 'b3u15', pregunta: '¿Cuántos tramos tiene la escala general del IRPF Bizkaia (2026)?', opciones: ['5 tramos','7 tramos','10 tramos','12 tramos'], correcta: 2, explicacion: 'La escala general foral cuenta con varios tramos progresivos (en 2026, 10 tramos aprox.; revisar Decreto Foral del año).' },
{ unidad: 'b3u15', pregunta: '¿Qué deducción se aplica por descendientes en IRPF Bizkaia?', opciones: ['Cantidad fija por hijo según número y edad','Solo deducción por familia numerosa','No hay deducción','Solo por menores de 3 años'], correcta: 0, explicacion: 'NF IRPF: deducciones cuantitativas por descendientes (art. 79).' },

// b3u16 — IRPF Gestión
{ unidad: 'b3u16', pregunta: '¿Cuál es el plazo de presentación de la declaración del IRPF Bizkaia (campaña tipo)?', opciones: ['Marzo','Abril a junio','Junio a septiembre','Variable, anunciado por la Hacienda Foral cada año'], correcta: 3, explicacion: 'La campaña la anuncia anualmente la Hacienda Foral de Bizkaia (típicamente abril-julio).' },
{ unidad: 'b3u16', pregunta: '¿Qué es la propuesta de autoliquidación en Bizkaia?', opciones: ['Una propuesta enviada por la Hacienda Foral con cálculo previo de la declaración','Una sanción','Un anticipo','Un recurso'], correcta: 0, explicacion: 'La Hacienda Foral de Bizkaia envía propuestas de autoliquidación para simplificar la presentación.' },

// b3u17 — Impuesto sobre Sociedades
{ unidad: 'b3u17', pregunta: '¿Cuál es la Norma Foral del Impuesto sobre Sociedades de Bizkaia?', opciones: ['NF 11/2013','NF 13/2013','NF 5/2008','NF 3/2014'], correcta: 0, explicacion: 'Norma Foral 11/2013, de 5 de diciembre, del Impuesto sobre Sociedades.' },
{ unidad: 'b3u17', pregunta: '¿Cuál es el tipo general del IS en Bizkaia (2026)?', opciones: ['25%','24%','23% (tipo general foral, con reducciones)','30%'], correcta: 2, explicacion: 'Tras la reforma NF 2/2025, el tipo general en Bizkaia se sitúa en torno al 23-24%, con reducciones para microempresa y pequeña empresa.' },
{ unidad: 'b3u17', pregunta: '¿Qué entidades son contribuyentes del IS?', opciones: ['Solo las S.A.','Las personas jurídicas, salvo sociedades civiles sin personalidad y entidades exentas','Solo cooperativas','Solo entidades con beneficios'], correcta: 1, explicacion: 'Art. 11 NF IS: contribuyentes son personas jurídicas excluyendo sociedades civiles sin personalidad jurídica.' },

// b3u18 — IVA Hecho imponible
{ unidad: 'b3u18', pregunta: '¿Qué Ley regula el IVA?', opciones: ['Ley 37/1992','Ley 38/1992','Ley 35/2006','Ley 27/2014'], correcta: 0, explicacion: 'Ley 37/1992, de 28 de diciembre, del IVA.' },
{ unidad: 'b3u18', pregunta: '¿Cuáles son los hechos imponibles del IVA?', opciones: ['Solo entregas de bienes','Entregas de bienes y prestaciones de servicios, adquisiciones intracomunitarias e importaciones','Solo importaciones','Ventas y compras'], correcta: 1, explicacion: 'Art. 4, 13 y 17 LIVA.' },
{ unidad: 'b3u18', pregunta: '¿Cuál es el devengo en una entrega de bienes?', opciones: ['Cuando se factura','Cuando se ponen a disposición del adquirente','Cuando se cobra','Al final del trimestre'], correcta: 1, explicacion: 'Art. 75.1.1º LIVA.' },

// b3u19 — IVA Base, tipos, deducciones
{ unidad: 'b3u19', pregunta: '¿Cuál es el tipo general del IVA?', opciones: ['10%','21%','4%','25%'], correcta: 1, explicacion: 'Art. 90 LIVA: tipo general 21%.' },
{ unidad: 'b3u19', pregunta: '¿Cuál es el tipo súper-reducido (4%)?', opciones: ['Servicios profesionales','Pan común, leche, libros, medicamentos, vivienda VPO en arrendamiento con opción','Hostelería','Electricidad'], correcta: 1, explicacion: 'Art. 91.Dos LIVA.' },
{ unidad: 'b3u19', pregunta: 'La regla de prorrata se aplica cuando...', opciones: ['Siempre','El sujeto realiza operaciones que dan y no dan derecho a deducir','Solo en facturas grandes','Solo en exportaciones'], correcta: 1, explicacion: 'Art. 102 LIVA.' },
{ unidad: 'b3u19', pregunta: 'En Bizkaia, el IVA se gestiona por...', opciones: ['Hacienda Foral si el sujeto opera principalmente en territorio foral','AEAT siempre','Gobierno Vasco','Ayuntamiento'], correcta: 0, explicacion: 'Concierto Económico: el IVA es concertado y la HFB lo gestiona si el volumen de operaciones lo determina.' },

// b3u20 — Aduanas
{ unidad: 'b3u20', pregunta: '¿Qué normativa regula el régimen aduanero europeo?', opciones: ['Ley General Tributaria','Código Aduanero de la Unión (Reglamento UE 952/2013)','Ley del IVA','Solo normativa interna'], correcta: 1, explicacion: 'CAU - Reglamento (UE) 952/2013.' },
{ unidad: 'b3u20', pregunta: '¿Quién gestiona los derechos arancelarios en España?', opciones: ['Hacienda Foral','La AEAT (Departamento de Aduanas)','El Ministerio de Industria','La UE directamente'], correcta: 1, explicacion: 'Aduanas es competencia exclusiva del Estado, gestionada por la AEAT (Dpto. de Aduanas e IIEE).' },
{ unidad: 'b3u20', pregunta: '¿Qué es el DUA?', opciones: ['Documento Único Administrativo, declaración aduanera','Un certificado de origen','Una factura comercial','Un permiso de importación'], correcta: 0, explicacion: 'DUA: Documento Único Administrativo, declaración aduanera principal en la UE.' },
{ unidad: 'b3u20', pregunta: '¿Qué es el TARIC?', opciones: ['Un impuesto','La nomenclatura arancelaria comunitaria integrada','Una autoridad aduanera','Un certificado'], correcta: 1, explicacion: 'TARIC: Tarifa Integrada Comunitaria, codifica las medidas comunitarias y arancelarias.' },

// ===== AMPLIACIÓN: temas con más preguntas =====

// b3u14 IRPF extra
{ unidad: 'b3u14', pregunta: 'En IRPF Bizkaia, ¿qué se considera renta exenta?', opciones: ['Todas las indemnizaciones','Indemnizaciones por despido en cuantía obligatoria, becas públicas, prestaciones por hijos a cargo, entre otras','Solo las indemnizaciones laborales','Solo las prestaciones públicas'], correcta: 1, explicacion: 'Art. 9 NF IRPF Bizkaia enumera rentas exentas.' },
{ unidad: 'b3u14', pregunta: '¿Qué tipo de renta es la renta de actividades económicas?', opciones: ['Renta del ahorro','Renta general','Exenta','No tributable'], correcta: 1, explicacion: 'Las rentas de actividades económicas se integran en la renta general.' },
{ unidad: 'b3u14', pregunta: 'En Bizkaia, ¿cuándo se aplica el régimen de imputación de rentas inmobiliarias?', opciones: ['Sobre vivienda habitual','Sobre inmuebles urbanos no afectos ni alquilados, distintos de la vivienda habitual','Sobre cualquier inmueble','Nunca'], correcta: 1, explicacion: 'Inmuebles urbanos a disposición de sus titulares, distintos de la vivienda habitual y no afectos a actividades.' },
{ unidad: 'b3u14', pregunta: 'La unidad familiar en IRPF Bizkaia comprende...', opciones: ['Solo cónyuges','Cónyuges no separados legalmente y sus hijos menores no emancipados o mayores incapacitados, o progenitor con sus hijos en monoparental','Padres e hijos siempre','Cualquier convivencia'], correcta: 1, explicacion: 'Art. 98 NF IRPF Bizkaia.' },

// b3u15 IRPF Base extra
{ unidad: 'b3u15', pregunta: 'En la base liquidable del IRPF, las reducciones por aportaciones a EPSV se aplican...', opciones: ['Sin límite','Con límite anual establecido en la Norma Foral','No se permiten','Solo para autónomos'], correcta: 1, explicacion: 'NF IRPF Bizkaia: las aportaciones a EPSV (Entidades de Previsión Social Voluntaria) tienen límites anuales de reducción.' },
{ unidad: 'b3u15', pregunta: '¿Qué tipo de renta tributa al ahorro?', opciones: ['Trabajo','Rendimientos de capital mobiliario y ganancias patrimoniales por transmisión','Actividades económicas','Imputaciones'], correcta: 1, explicacion: 'Renta del ahorro: capital mobiliario (intereses, dividendos) y ganancias/pérdidas por transmisión.' },
{ unidad: 'b3u15', pregunta: '¿Qué cuota se obtiene aplicando la escala a la base liquidable general?', opciones: ['Cuota líquida','Cuota íntegra','Cuota diferencial','Cuota tributaria'], correcta: 1, explicacion: 'Cuota íntegra = base liquidable × escala. Cuota líquida = íntegra − deducciones.' },

// b3u17 IS extra
{ unidad: 'b3u17', pregunta: '¿Qué es la microempresa en el IS Bizkaia?', opciones: ['Empresa con menos de 10 empleados y volumen ≤ 2M€','Empresa con menos de 5 empleados','Cualquier autónomo','No existe ese concepto foral'], correcta: 0, explicacion: 'NF 11/2013 IS Bizkaia: microempresa: hasta 10 empleados y 2M€ volumen de operaciones.' },
{ unidad: 'b3u17', pregunta: 'El régimen de consolidación fiscal en Bizkaia exige...', opciones: ['Una única sociedad','Grupo de sociedades con dominante mínimo 75% participación, residentes en territorio foral','Cualquier empresa','Solo cooperativas'], correcta: 1, explicacion: 'Régimen especial de grupos en NF IS Bizkaia.' },
{ unidad: 'b3u17', pregunta: 'El periodo impositivo del IS coincide normalmente con...', opciones: ['Año natural','Ejercicio económico de la entidad','Trimestre','Semestre'], correcta: 1, explicacion: 'Coincide con el ejercicio económico, sin exceder de 12 meses.' },
{ unidad: 'b3u17', pregunta: '¿Qué es la deducción por reinversión de beneficios extraordinarios?', opciones: ['Una reducción en base','Una deducción en cuota cuando se reinvierten beneficios de transmisión de elementos del inmovilizado','Una bonificación de IRPF','Inexistente'], correcta: 1, explicacion: 'Mecanismo foral para incentivar la reinversión de beneficios extraordinarios.' },

// b3u18 IVA extra
{ unidad: 'b3u18', pregunta: '¿Cuál es el lugar de realización de la entrega de bienes con transporte?', opciones: ['Donde se entrega','Donde se inicia la expedición o transporte','Donde el comprador tiene sede','Donde se factura'], correcta: 1, explicacion: 'Art. 68.Dos LIVA: lugar de inicio del transporte.' },
{ unidad: 'b3u18', pregunta: '¿Qué es una operación intracomunitaria?', opciones: ['Cualquier venta','Operaciones entre Estados miembros UE entre empresarios','Compras a particulares','Importaciones de fuera UE'], correcta: 1, explicacion: 'Adquisición/entrega intracomunitaria: entre empresarios en distintos EEMM.' },
{ unidad: 'b3u18', pregunta: '¿Qué requiere una entrega intracomunitaria de bienes para estar exenta?', opciones: ['Nada','Que el destinatario sea empresario identificado a efectos de IVA en otro EM, transporte fuera de España','Solo factura','Solo declaración'], correcta: 1, explicacion: 'Art. 25 LIVA: condiciones de exención de EIB.' },

// b3u19 IVA Base/Tipos extra
{ unidad: 'b3u19', pregunta: '¿Qué tipo reducido se aplica (10%) en general?', opciones: ['Productos de lujo','Hostelería, transporte, alimentación general, vivienda nueva, etc.','Servicios profesionales','Energía'], correcta: 1, explicacion: 'Art. 91.Uno LIVA: tipo del 10%.' },
{ unidad: 'b3u19', pregunta: 'El IVA repercutido y el IVA soportado se relacionan con...', opciones: ['IVA pagado y cobrado al cliente respectivamente','IVA cobrado al cliente y IVA pagado a proveedores respectivamente','Lo mismo','Solo en exportaciones'], correcta: 1, explicacion: 'Repercutido = al cliente; soportado = a proveedores.' },
{ unidad: 'b3u19', pregunta: 'En Bizkaia, ¿qué Norma Foral regula el IVA?', opciones: ['NF 7/1994','NF 13/2013','Ley 37/1992 estatal (concertado)','NF 2/2005'], correcta: 0, explicacion: 'NF 7/1994 del IVA, en línea con la Ley 37/1992 estatal por ser tributo concertado de normativa común.' },
{ unidad: 'b3u19', pregunta: '¿Cuándo procede la inversión del sujeto pasivo en IVA?', opciones: ['En operaciones interiores comunes','En supuestos como entregas de oro de inversión, ejecuciones de obra inmobiliaria a empresarios, ciertos servicios B2B intracomunitarios','Siempre','Nunca'], correcta: 1, explicacion: 'Art. 84.Uno.2º LIVA enumera los supuestos.' },

// b3u3 LGT extra
{ unidad: 'b3u3', pregunta: '¿Qué principio impide tributar dos veces por el mismo hecho?', opciones: ['Capacidad económica','No confiscatoriedad','Doble imposición / non bis in idem tributario','Reserva de ley'], correcta: 2, explicacion: 'Principio de no doble imposición.' },
{ unidad: 'b3u3', pregunta: 'La reserva de ley tributaria significa que solo por ley puede regularse...', opciones: ['Cualquier aspecto fiscal','Hecho imponible, sujeto pasivo, base, tipo, cuota, beneficios fiscales','Solo el tipo','Solo la base'], correcta: 1, explicacion: 'Art. 8 LGT.' },

// b1u1 Constitución extra
{ unidad: 'b1u1', pregunta: '¿Qué establece el artículo 9.3 CE?', opciones: ['Solo legalidad','Principios: legalidad, jerarquía normativa, publicidad, irretroactividad sancionadora desfavorable, seguridad jurídica, responsabilidad e interdicción de la arbitrariedad','Solo seguridad jurídica','Solo igualdad'], correcta: 1, explicacion: 'Art. 9.3 CE.' },
{ unidad: 'b1u1', pregunta: '¿Qué instituciones componen el Tribunal Constitucional?', opciones: ['12 magistrados','11 magistrados','12 magistrados nombrados por 9 años, renovados por tercios','15 vocales'], correcta: 2, explicacion: 'Art. 159 CE: 12 magistrados, 9 años, renovación por tercios cada 3 años.' },

// b3u4 Obligados extra
{ unidad: 'b3u4', pregunta: '¿Quién es retenedor a efectos tributarios?', opciones: ['Cualquier pagador','Persona o entidad que por imposición legal está obligada a detraer e ingresar parte de los importes que satisface','Solo empresas','El sujeto pasivo'], correcta: 1, explicacion: 'Art. 37 LGT.' },
{ unidad: 'b3u4', pregunta: '¿Qué responsabilidad tienen los administradores de personas jurídicas en deudas tributarias?', opciones: ['Ninguna','Subsidiaria por las deudas no satisfechas si no realizaron los actos necesarios para su cumplimiento','Solidaria siempre','Penal'], correcta: 1, explicacion: 'Art. 43 LGT: responsabilidad subsidiaria de administradores.' },

// b3u2 AEAT extra
{ unidad: 'b3u2', pregunta: '¿Quién nombra al Presidente de la AEAT?', opciones: ['El Rey','El Gobierno mediante Real Decreto, a propuesta del Ministro de Hacienda','El Congreso','Las CCAA'], correcta: 1, explicacion: 'Real Decreto del Consejo de Ministros, propuesta del Ministerio de Hacienda.' },

// b3u5 Obligaciones tributarias extra
{ unidad: 'b3u5', pregunta: '¿Qué son los pagos a cuenta?', opciones: ['Pagos voluntarios','Pagos fraccionados, retenciones e ingresos a cuenta como anticipo de la cuota','Sanciones','Recargos'], correcta: 1, explicacion: 'Art. 23 LGT: tres modalidades de pagos a cuenta.' },

// b3u6 Aplicación tributos extra
{ unidad: 'b3u6', pregunta: '¿Cuándo se interrumpe la prescripción tributaria?', opciones: ['Solo por el pago','Por cualquier acción de la Administración con conocimiento formal del obligado, o por acto del propio obligado','Solo en sanciones','Nunca'], correcta: 1, explicacion: 'Art. 68 LGT: actos de la Administración o del obligado interrumpen la prescripción.' },
{ unidad: 'b3u6', pregunta: '¿Cuáles son los procedimientos de gestión más comunes?', opciones: ['Solo verificación de datos','Verificación de datos, comprobación limitada, comprobación de valores, devolución y rectificación','Solo inspección','Solo apremio'], correcta: 1, explicacion: 'Cap. III Tít. III LGT.' },

// b3u7 Gestión tributaria extra
{ unidad: 'b3u7', pregunta: '¿En qué consiste la verificación de datos?', opciones: ['Procedimiento de inspección profunda','Comprobación rápida sobre defectos formales o discrepancias entre datos declarados y los que constan en la Administración','Una sanción','Un recurso'], correcta: 1, explicacion: 'Art. 131 LGT.' },
{ unidad: 'b3u7', pregunta: '¿Qué es la comprobación de valores?', opciones: ['Un recurso','Procedimiento para comprobar el valor de las rentas, productos, bienes y elementos del hecho imponible','Solo en IS','Inexistente'], correcta: 1, explicacion: 'Art. 134 LGT.' },

// b3u8 Inspección extra
{ unidad: 'b3u8', pregunta: '¿Cuál es el alcance del procedimiento inspector?', opciones: ['Siempre general','General o parcial, según se comprueben todos o algunos elementos del tributo','Solo general','Solo el periodo'], correcta: 1, explicacion: 'Art. 148 LGT.' },
{ unidad: 'b3u8', pregunta: '¿Quién puede ser representante del obligado en la inspección?', opciones: ['Solo abogado','Cualquier persona con capacidad de obrar, debidamente acreditada','Solo familiar','El propio obligado'], correcta: 1, explicacion: 'Art. 46 LGT: representación voluntaria con capacidad de obrar.' },

// b3u9 Recaudación extra
{ unidad: 'b3u9', pregunta: '¿Qué es la providencia de apremio?', opciones: ['Una sanción','Acto administrativo que despacha la ejecución contra el patrimonio del obligado','Un recurso','Una notificación cualquiera'], correcta: 1, explicacion: 'Art. 167 LGT: título suficiente para iniciar el procedimiento de apremio.' },
{ unidad: 'b3u9', pregunta: '¿Cuándo prescribe el derecho a recaudar?', opciones: ['1 año','2 años','4 años','10 años'], correcta: 2, explicacion: 'Art. 66 LGT: 4 años para exigir el pago de las deudas liquidadas y autoliquidadas.' },

// b3u10 Aplazamientos extra
{ unidad: 'b3u10', pregunta: '¿Qué garantía suele exigirse en aplazamientos de cierta cuantía?', opciones: ['Ninguna','Aval bancario u otra garantía suficiente, salvo dispensa por dificultades tesorería','Hipoteca obligatoria','Seguro'], correcta: 1, explicacion: 'Art. 82 LGT y normativa de desarrollo: aval o garantía equivalente; dispensa motivada en ciertos casos.' },
{ unidad: 'b3u10', pregunta: '¿Qué efecto tiene la solicitud de aplazamiento dentro del periodo voluntario?', opciones: ['Suspende automáticamente','Impide el inicio del periodo ejecutivo mientras no se resuelva','Es una sanción','No tiene efecto'], correcta: 1, explicacion: 'Reglamento General de Recaudación: la solicitud en voluntario impide el ejecutivo hasta resolución.' },
{ unidad: 'b3u10', pregunta: '¿Qué interés se devenga durante el aplazamiento?', opciones: ['Ninguno','Interés de demora, salvo aval bancario en cuyo caso se aplica el interés legal del dinero','Solo recargo','Interés de mora del 20%'], correcta: 1, explicacion: 'Art. 65 LGT.' },

// b3u11 Apremio extra
{ unidad: 'b3u11', pregunta: '¿Qué bienes se embargan primero en el procedimiento de apremio?', opciones: ['Inmuebles siempre','Por orden: dinero efectivo o cuentas, créditos, sueldos, inmuebles, intereses, joyas, etc.','Solo lo que diga el deudor','Cualquier bien'], correcta: 1, explicacion: 'Art. 169 LGT establece el orden de prelación de embargo.' },
{ unidad: 'b3u11', pregunta: '¿Cuándo finaliza el procedimiento de apremio?', opciones: ['A los 30 días','Por pago, declaración de fallido, acuerdo que extinga la deuda o cancelación','Tras 1 año','Nunca'], correcta: 1, explicacion: 'Art. 173 LGT.' },
{ unidad: 'b3u11', pregunta: '¿Qué motivos tasados existen para oponerse al apremio?', opciones: ['Cualquier motivo','Pago, prescripción, aplazamiento, falta de notificación, anulación, error u omisión en la providencia','Solo el pago','Disconformidad'], correcta: 1, explicacion: 'Art. 167.3 LGT enumera 6 motivos tasados.' },

// b3u12 Sanciones extra
{ unidad: 'b3u12', pregunta: '¿Qué reducción se aplica por pago en periodo voluntario sin recurso?', opciones: ['10%','20%','40%','50%'], correcta: 2, explicacion: 'Art. 188.3 LGT: reducción del 40% por pronto pago y no impugnación.' },
{ unidad: 'b3u12', pregunta: '¿Cuál es el plazo de prescripción de las sanciones tributarias?', opciones: ['1 año','2 años','4 años','5 años'], correcta: 2, explicacion: 'Art. 189 LGT: 4 años.' },

// b3u13 Revisión extra
{ unidad: 'b3u13', pregunta: '¿Qué procedimientos especiales de revisión existen?', opciones: ['Solo recurso','Revisión de actos nulos de pleno derecho, declaración de lesividad, revocación, rectificación errores y devolución de ingresos indebidos','Solo recurso de reposición','Inexistentes'], correcta: 1, explicacion: 'Art. 216 LGT enumera procedimientos especiales.' },
{ unidad: 'b3u13', pregunta: '¿Cuándo cabe la revocación?', opciones: ['Cualquier momento','Cuando los actos infringen manifiestamente la ley, circunstancias sobrevenidas afecten a una situación jurídica particular o se haya producido indefensión','Solo en sanciones','Nunca'], correcta: 1, explicacion: 'Art. 219 LGT.' },

// b3u16 IRPF Gestión extra
{ unidad: 'b3u16', pregunta: '¿Quiénes están obligados a declarar el IRPF en Bizkaia?', opciones: ['Todos los contribuyentes','Quienes superen los umbrales fijados anualmente por la Hacienda Foral, salvo excepciones','Solo asalariados','Solo autónomos'], correcta: 1, explicacion: 'NF IRPF + Decreto Foral anual de campaña.' },
{ unidad: 'b3u16', pregunta: '¿Qué es el modelo 100?', opciones: ['Modelo de IVA','Declaración anual de IRPF (modelo equivalente foral)','Modelo de IS','Modelo de retenciones'], correcta: 1, explicacion: 'En estatal es el modelo 100; en Bizkaia se usa el modelo 109 / formularios forales equivalentes.' },
{ unidad: 'b3u16', pregunta: '¿Qué retención se aplica a los rendimientos del trabajo?', opciones: ['Tipo fijo 20%','Porcentaje variable según ingresos y circunstancias personales y familiares','Sin retención','Solo IRPF anual'], correcta: 1, explicacion: 'Las retenciones del trabajo se calculan según escala progresiva foral.' },

// b3u20 Aduanas extra
{ unidad: 'b3u20', pregunta: '¿Qué son los Impuestos Especiales (IIEE)?', opciones: ['Impuestos directos','Impuestos indirectos sobre consumos específicos: alcohol, tabaco, hidrocarburos, electricidad, etc.','Tasas','Contribuciones'], correcta: 1, explicacion: 'Ley 38/1992 de IIEE (en Bizkaia, normativa concertada equivalente).' },
{ unidad: 'b3u20', pregunta: '¿Es la unión aduanera europea un mercado único?', opciones: ['No, son zonas separadas','Sí, con arancel exterior común y libre circulación interna de mercancías','Solo libre comercio','Solo unión monetaria'], correcta: 1, explicacion: 'La unión aduanera UE: arancel exterior común y libre circulación interior.' }

];

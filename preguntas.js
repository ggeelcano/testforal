// Banco de preguntas TestForal — Oposiciones Diputación Foral de Bizkaia
// Fallback local. Source of truth: Google Sheet (ver preguntas-loader.js).

window.BANCO_PREGUNTAS = {
  "administrativo-c1": {
    nombre: "Administrativo C1",
    icon: "📋",
    preguntas: [
      {
        q: "Según la Norma Foral 5/2006, General Presupuestaria del Territorio Histórico de Bizkaia, ¿cuál es el órgano competente para la aprobación definitiva del presupuesto?",
        opts: ["La Diputación Foral", "Las Juntas Generales", "El Gobierno Vasco", "El Lehendakari"],
        correcta: 1,
        explicacion: "Las Juntas Generales de Bizkaia aprueban definitivamente el presupuesto foral (NF 5/2006)."
      },
      {
        q: "¿Cuántos diputados forales componen las Juntas Generales de Bizkaia?",
        opts: ["51", "49", "75", "47"],
        correcta: 0,
        explicacion: "Las Juntas Generales de Bizkaia están formadas por 51 apoderados."
      },
      {
        q: "El Concierto Económico entre el Estado y el País Vasco está regulado por:",
        opts: ["Ley 12/2002, de 23 de mayo", "Ley 3/1979, de 18 de diciembre", "Real Decreto 1/1981", "Ley Orgánica 3/1979"],
        correcta: 0,
        explicacion: "La Ley 12/2002, de 23 de mayo, aprueba el Concierto Económico con la Comunidad Autónoma del País Vasco."
      },
      {
        q: "Según el Estatuto de Gernika (LO 3/1979), los Territorios Históricos conservan:",
        opts: ["Sólo la organización municipal", "Su régimen foral privativo y su organización e instituciones privativas", "La recaudación pero no la normativa tributaria", "Sólo competencias en cultura"],
        correcta: 1,
        explicacion: "El art. 3 del Estatuto reconoce el régimen foral privativo de cada Territorio Histórico."
      },
      {
        q: "La Ley 7/1985, Reguladora de las Bases del Régimen Local, establece como población mínima para constituir municipio:",
        opts: ["No hay mínimo general", "5.000 habitantes", "1.000 habitantes", "20.000 habitantes"],
        correcta: 0,
        explicacion: "La LBRL no establece mínimo general, aunque para crear nuevos municipios se exige capacidad para prestar servicios."
      },
      {
        q: "Según la Ley 39/2015 del Procedimiento Administrativo Común, el plazo general para resolver cuando no se establece otro es:",
        opts: ["Tres meses", "Seis meses", "Un mes", "Un año"],
        correcta: 0,
        explicacion: "El art. 21.3 de la Ley 39/2015 fija el plazo máximo en 3 meses cuando la norma no establezca otro."
      },
      {
        q: "¿Qué órgano es competente para interpretar la normativa tributaria foral de Bizkaia con carácter general?",
        opts: ["El Departamento de Hacienda y Finanzas", "Las Juntas Generales", "El Consejo de Finanzas Público Vasco", "El Tribunal Económico-Administrativo Foral"],
        correcta: 0,
        explicacion: "El Departamento de Hacienda y Finanzas tiene competencia interpretativa mediante Órdenes Forales."
      },
      {
        q: "El recurso de reposición en vía administrativa foral se interpone ante:",
        opts: ["El mismo órgano que dictó el acto", "El superior jerárquico", "El TEAF", "Las Juntas Generales"],
        correcta: 0,
        explicacion: "El recurso de reposición se interpone ante el órgano autor del acto (art. 123 Ley 39/2015)."
      },
      {
        q: "Según la Norma Foral 2/2005 General Tributaria de Bizkaia, el plazo general de prescripción de los tributos es:",
        opts: ["Cuatro años", "Cinco años", "Tres años", "Diez años"],
        correcta: 0,
        explicacion: "El art. 65 de la NF 2/2005 fija la prescripción tributaria en 4 años, en paralelo a la normativa estatal."
      },
      {
        q: "La Comisión de Gobierno de la Diputación Foral está presidida por:",
        opts: ["El Diputado General", "El Secretario Técnico", "El Portavoz", "El Diputado Foral de mayor edad"],
        correcta: 0,
        explicacion: "El Diputado General preside la Diputación y su Comisión de Gobierno (Consejo de Gobierno Foral)."
      },
      {
        q: "La notificación electrónica en el ámbito foral se regula principalmente en:",
        opts: ["Ley 39/2015 y Decreto Foral de notificaciones", "Sólo en la Ley 40/2015", "Decreto Foral 3/2017", "Orden del Lehendakari"],
        correcta: 0,
        explicacion: "La notificación electrónica se rige por la Ley 39/2015 complementada con la normativa foral específica."
      },
      {
        q: "¿Qué tipo de acto administrativo NO pone fin a la vía administrativa?",
        opts: ["Resolución del recurso de alzada", "Resolución del recurso de reposición cuando la resolución la dicta el órgano autor del acto", "Acuerdo del Consejo de Gobierno Foral sobre una materia propia", "Acto de trámite no cualificado"],
        correcta: 3,
        explicacion: "Los actos de trámite no cualificados no agotan vía administrativa; los 3 primeros sí."
      },
      {
        q: "El Impuesto sobre Sociedades es un tributo:",
        opts: ["Concertado de normativa autónoma", "Concertado de normativa común", "No concertado", "Compartido al 50%"],
        correcta: 0,
        explicacion: "El IS es tributo concertado de normativa autónoma en los Territorios Históricos, salvo casos específicos."
      },
      {
        q: "La firma electrónica cualificada en el ámbito del sector público vasco:",
        opts: ["Equivale a la firma manuscrita", "Sólo vale para documentos internos", "Requiere siempre presencia física para verificación", "No tiene validez jurídica"],
        correcta: 0,
        explicacion: "El Reglamento eIDAS y la Ley 6/2020 equiparan la firma electrónica cualificada a la manuscrita."
      },
      {
        q: "La revisión de actos nulos de pleno derecho puede iniciarse:",
        opts: ["Sólo a instancia de parte en plazo de un mes", "De oficio o a instancia de interesado, sin límite temporal", "Sólo durante los dos primeros años", "Sólo mediante recurso contencioso"],
        correcta: 1,
        explicacion: "El art. 106 Ley 39/2015 permite revisión de actos nulos en cualquier momento."
      },
      {
        q: "Dentro de la Diputación Foral de Bizkaia, ¿qué departamento gestiona las políticas de empleo y juventud en 2026?",
        opts: ["Empleo, Inclusión Social e Igualdad", "Hacienda y Finanzas", "Acción Social", "Cultura y Euskera"],
        correcta: 0,
        explicacion: "Las competencias de empleo se integran en el Departamento de Empleo, Inclusión Social e Igualdad."
      },
      {
        q: "El silencio administrativo en procedimientos iniciados de oficio que puedan producir efectos desfavorables o de gravamen:",
        opts: ["Es positivo siempre", "Se produce caducidad del procedimiento", "Prorroga el plazo otros 3 meses", "Genera derecho de indemnización automática"],
        correcta: 1,
        explicacion: "El art. 25.1.b) Ley 39/2015 establece caducidad en estos casos por vencimiento del plazo."
      },
      {
        q: "La contratación pública foral se rige por:",
        opts: ["Ley 9/2017 LCSP y normativa foral complementaria", "Sólo por Norma Foral 2/2016", "Ley 30/2007 derogada", "Ordenanzas municipales únicamente"],
        correcta: 0,
        explicacion: "La LCSP 9/2017 es marco común, completada por la normativa foral."
      },
      {
        q: "La Ertzaintza depende orgánicamente de:",
        opts: ["El Gobierno Vasco", "La Diputación Foral", "El Estado", "Los Ayuntamientos"],
        correcta: 0,
        explicacion: "La Ertzaintza depende del Gobierno Vasco (Departamento de Seguridad)."
      },
      {
        q: "El Tribunal Económico-Administrativo Foral de Bizkaia conoce:",
        opts: ["Reclamaciones contra actos tributarios forales en vía económico-administrativa", "Delitos fiscales", "Infracciones penales", "Recursos de casación"],
        correcta: 0,
        explicacion: "El TEAF resuelve reclamaciones económico-administrativas en materia tributaria foral."
      },
      {
        q: "El principio de legalidad administrativa supone:",
        opts: ["Que la Administración sólo puede actuar conforme a una habilitación legal previa", "Que el ciudadano no necesita cumplir normas", "Que cada funcionario decide libremente", "Que las normas son orientativas"],
        correcta: 0,
        explicacion: "La Administración está sometida plenamente a la ley y al Derecho (art. 103 CE)."
      },
      {
        q: "La transparencia en Bizkaia está regulada principalmente en:",
        opts: ["Norma Foral 1/2016 de Transparencia", "Ley 19/2013 sólo", "Decreto Foral 55/2015", "Ninguna norma específica foral"],
        correcta: 0,
        explicacion: "La NF 1/2016 regula la transparencia, participación y buen gobierno en Bizkaia."
      },
      {
        q: "La audiencia al interesado en el procedimiento administrativo tiene lugar:",
        opts: ["Antes de redactar la propuesta de resolución, tras instrucción", "Sólo si lo solicita el interesado expresamente", "Nunca en procedimientos sancionadores", "Sólo en procedimientos iniciados a instancia de parte"],
        correcta: 0,
        explicacion: "La audiencia se concede tras la instrucción y antes de la resolución (art. 82 Ley 39/2015)."
      },
      {
        q: "Según la normativa foral, los gastos plurianuales requieren autorización de las Juntas Generales cuando:",
        opts: ["Superen los límites establecidos en la Norma Foral presupuestaria", "Siempre, sin excepción", "Sólo si afectan a ejercicios futuros superiores a 10 años", "Nunca requieren autorización parlamentaria"],
        correcta: 0,
        explicacion: "Los gastos plurianuales que superen los límites requieren autorización de las JJGG."
      },
      {
        q: "El Diputado General de Bizkaia es elegido por:",
        opts: ["Las Juntas Generales entre sus miembros", "Sufragio universal directo", "El Lehendakari", "El Gobierno Vasco"],
        correcta: 0,
        explicacion: "El Diputado General es elegido por y de entre los junteros de las Juntas Generales."
      },
      {
        q: "Los ingresos del Concierto Económico que el País Vasco paga al Estado se denominan:",
        opts: ["Cupo", "Subvención", "Canon", "Reversión"],
        correcta: 0,
        explicacion: "El Cupo es la aportación del País Vasco al Estado por cargas no asumidas."
      },
      {
        q: "¿Qué idiomas son oficiales en Bizkaia?",
        opts: ["Castellano y euskera", "Sólo euskera", "Sólo castellano", "Castellano, euskera y francés"],
        correcta: 0,
        explicacion: "Ambos son cooficiales en la CAPV (art. 6 EAPV)."
      },
      {
        q: "Las bases de convocatoria de una oposición foral son:",
        opts: ["Ley del procedimiento, vinculan a la Administración y aspirantes", "Orientativas y modificables por el tribunal", "Simple información publicitaria", "Vinculantes sólo para los aspirantes"],
        correcta: 0,
        explicacion: "Las bases son ley del procedimiento y vinculan a todas las partes (doctrina consolidada TS)."
      },
      {
        q: "El deber de sigilo del funcionario público:",
        opts: ["Se extiende incluso tras su cese respecto a asuntos del servicio", "Cesa al dejar el puesto", "Sólo aplica a datos confidenciales escritos", "No existe en el ámbito foral"],
        correcta: 0,
        explicacion: "El deber de sigilo pervive tras el cese (art. 53 TREBEP)."
      },
      {
        q: "La Agencia Vasca de Protección de Datos (AVPD) tiene competencia sobre:",
        opts: ["Tratamientos de datos por administraciones públicas vascas y entes públicos", "Empresas privadas exclusivamente", "Ciudadanos particulares", "Datos estadísticos anónimos"],
        correcta: 0,
        explicacion: "La AVPD supervisa a las Administraciones y entes públicos vascos (Ley 2/2004)."
      }
    ]
  },

  "auxiliar-administrativo": {
    nombre: "Auxiliar Administrativo",
    icon: "📁",
    preguntas: [
      {
        q: "La Constitución Española entró en vigor el:",
        opts: ["29 de diciembre de 1978", "6 de diciembre de 1978", "27 de diciembre de 1978", "1 de enero de 1979"],
        correcta: 0,
        explicacion: "La CE entró en vigor el 29/12/1978, al día siguiente de su publicación en el BOE."
      },
      {
        q: "¿Cuántos artículos tiene la Constitución Española?",
        opts: ["169", "155", "180", "200"],
        correcta: 0,
        explicacion: "La CE tiene 169 artículos, más disposiciones adicionales, transitorias, derogatoria y final."
      },
      {
        q: "El registro electrónico general de la Administración foral debe estar disponible:",
        opts: ["24 horas al día todos los días del año", "Sólo en horario laboral", "Lunes a viernes de 9 a 14h", "Sólo días hábiles"],
        correcta: 0,
        explicacion: "El registro electrónico funciona 24/7 (art. 31 Ley 39/2015)."
      },
      {
        q: "Son días inhábiles en el cómputo de plazos administrativos:",
        opts: ["Sábados, domingos y festivos declarados oficialmente", "Sólo domingos y festivos", "Sólo festivos", "Sólo los declarados por el órgano"],
        correcta: 0,
        explicacion: "Desde la Ley 39/2015, sábados también son inhábiles."
      },
      {
        q: "El Protocolo de firma de documentos mediante BAK Bizkaia:",
        opts: ["Es un sistema de identificación digital", "Es un sello de correos antiguo", "Es un impuesto foral", "Un tipo de contrato laboral"],
        correcta: 0,
        explicacion: "BAK es el sistema de identificación electrónica de la Diputación Foral de Bizkaia."
      },
      {
        q: "Un documento compulsado acredita:",
        opts: ["Que la copia coincide con el original", "Que el original es auténtico", "Que el documento es reciente", "Que ha sido notariado"],
        correcta: 0,
        explicacion: "La compulsa certifica la fidelidad de la copia con el original."
      },
      {
        q: "La Sede Electrónica de la Diputación Foral es:",
        opts: ["La dirección oficial en internet para trámites con la DFB", "Una oficina física en Bilbao", "Un edificio en Durango", "Un registro público"],
        correcta: 0,
        explicacion: "Es el portal online oficial (art. 38 Ley 40/2015)."
      },
      {
        q: "El sistema Cl@ve es:",
        opts: ["Un sistema de identificación electrónica del Estado y CC.AA.", "Una contraseña interna de la DFB", "Un archivo de claves cifradas", "Una app de mensajería"],
        correcta: 0,
        explicacion: "Cl@ve permite identificación electrónica para servicios públicos estatales y autonómicos."
      },
      {
        q: "La Ley de Protección de Datos vigente en España es:",
        opts: ["LO 3/2018 de Protección de Datos Personales y Garantía de los Derechos Digitales", "Ley 15/1999 derogada", "Ley 11/2007 de acceso electrónico", "Reglamento General de Protección de Datos sólo"],
        correcta: 0,
        explicacion: "La LOPDGDD 3/2018 complementa el RGPD en España."
      },
      {
        q: "El traslado de una copia auténtica a formato electrónico se llama:",
        opts: ["Digitalización certificada", "Escaneo común", "Reproducción", "Microfilmación"],
        correcta: 0,
        explicacion: "La digitalización certificada con CSV genera copia auténtica electrónica."
      },
      {
        q: "El CSV (Código Seguro de Verificación) permite:",
        opts: ["Comprobar la autenticidad de un documento electrónico en la Sede", "Encriptar un archivo", "Firmar un documento físico", "Acceder a información clasificada"],
        correcta: 0,
        explicacion: "El CSV identifica un documento único y permite su verificación en sede."
      },
      {
        q: "La hoja de servicios de un funcionario contiene:",
        opts: ["Datos profesionales, puestos desempeñados, situaciones administrativas", "Sólo su nómina", "Sólo el DNI", "Datos médicos únicamente"],
        correcta: 0,
        explicacion: "Es el expediente con el historial profesional del empleado público."
      },
      {
        q: "El empadronamiento corresponde a:",
        opts: ["El Ayuntamiento de residencia", "La Diputación Foral", "El Gobierno Vasco", "La Policía Local"],
        correcta: 0,
        explicacion: "El Padrón Municipal de Habitantes es competencia municipal."
      },
      {
        q: "Una instancia es:",
        opts: ["Escrito dirigido a la Administración solicitando algo", "Una orden foral", "Un reglamento", "Una ley"],
        correcta: 0,
        explicacion: "Documento mediante el que un particular se dirige a la Administración."
      },
      {
        q: "¿Cuál es el horario atención presencial típico de las oficinas forales?",
        opts: ["Lunes a viernes de mañana, con cita previa", "24/7", "Sólo martes y jueves", "Fines de semana también"],
        correcta: 0,
        explicacion: "La atención presencial se concentra en horario de mañana con cita previa."
      },
      {
        q: "El archivo definitivo de los documentos administrativos corresponde al:",
        opts: ["Archivo General", "Despacho del funcionario", "Correo interno", "Portal de transparencia"],
        correcta: 0,
        explicacion: "El ciclo documental termina en el Archivo General, pasando antes por archivo de gestión y central."
      },
      {
        q: "Un certificado electrónico expedido por Izenpe sirve para:",
        opts: ["Identificarse y firmar electrónicamente ante la Administración vasca", "Votar por Internet", "Acceder a una red social", "Solicitar el DNI"],
        correcta: 0,
        explicacion: "Izenpe es la autoridad certificadora del Gobierno Vasco."
      },
      {
        q: "El Consejo de Transparencia y Buen Gobierno de España es:",
        opts: ["Organismo independiente que vela por la transparencia", "Una comisión parlamentaria", "Un tribunal", "Una asociación privada"],
        correcta: 0,
        explicacion: "Es autoridad administrativa independiente creada por la Ley 19/2013."
      },
      {
        q: "El envío de una notificación administrativa electrónica se entiende rechazado si:",
        opts: ["Transcurren 10 días naturales sin acceder a su contenido", "No se responde en 24h", "El correo electrónico rebota", "Se marca como spam"],
        correcta: 0,
        explicacion: "Según art. 43.2 Ley 39/2015, transcurridos 10 días sin acceso se entiende rechazada."
      },
      {
        q: "La firma BAK permite a ciudadanos:",
        opts: ["Acceder a servicios forales sin certificado digital", "Pagar impuestos en efectivo", "Votar por Internet", "Identificarse físicamente"],
        correcta: 0,
        explicacion: "BAK es un sistema clave+PIN para acceso simplificado a servicios forales."
      }
    ]
  },

  "bombero-foral": {
    nombre: "Bombero Foral",
    icon: "🚒",
    preguntas: [
      {
        q: "El Servicio de Bomberos de Bizkaia depende orgánicamente de:",
        opts: ["El Departamento de Administración Pública y Relaciones Institucionales", "El Gobierno Vasco", "El Ministerio del Interior", "Ayuntamientos"],
        correcta: 0,
        explicacion: "El Servicio de Prevención, Extinción de Incendios y Salvamento (SPEIS) depende de la DFB."
      },
      {
        q: "El triángulo del fuego está formado por:",
        opts: ["Combustible, comburente y calor", "Agua, tierra y fuego", "Fuego, oxígeno y humo", "Combustible, CO2 y humo"],
        correcta: 0,
        explicacion: "Los 3 elementos esenciales del fuego. El añadido reciente: reacción en cadena = tetraedro."
      },
      {
        q: "Un fuego de clase B corresponde a:",
        opts: ["Líquidos y sólidos licuables", "Sólidos comunes", "Gases", "Metales"],
        correcta: 0,
        explicacion: "Clase A sólidos, B líquidos, C gases, D metales, F grasas cocina."
      },
      {
        q: "El agente extintor más adecuado para fuegos de clase K (grasas y aceites de cocina) es:",
        opts: ["Espuma química especial clase K", "Agua a presión", "CO2", "Polvo ABC"],
        correcta: 0,
        explicacion: "Los extintores clase K contienen acetato potásico con efecto saponificador."
      },
      {
        q: "El número europeo de emergencias es:",
        opts: ["112", "091", "061", "092"],
        correcta: 0,
        explicacion: "El 112 es número único europeo. En Bizkaia se canaliza por SOS DEIAK."
      },
      {
        q: "Un EPI (Equipo de Protección Individual) básico de bombero incluye:",
        opts: ["Casco, chaquetón, pantalón, guantes, botas, cinturón y ERA", "Sólo mascarilla", "Casco y guantes", "Mono de trabajo común"],
        correcta: 0,
        explicacion: "El equipo completo incluye el ERA (Equipo de Respiración Autónoma)."
      },
      {
        q: "El flashover es:",
        opts: ["Ignición generalizada súbita por acumulación de gases calientes", "Apagado rápido de un fuego", "Escape de humo por ventanas", "Ruptura de una tubería"],
        correcta: 0,
        explicacion: "Fenómeno peligrosísimo causa principal de muerte de bomberos en interior."
      },
      {
        q: "La presión de trabajo habitual en una manguera de ataque es:",
        opts: ["6-7 bar", "1 bar", "50 bar", "100 bar"],
        correcta: 0,
        explicacion: "La presión estándar en boquilla ronda los 6-7 bar (7 kg/cm2)."
      },
      {
        q: "El punto de inflamación (flash point) de un líquido es:",
        opts: ["Temperatura mínima a la que emite vapores inflamables", "Temperatura de ebullición", "Temperatura a la que explota", "Temperatura de fusión"],
        correcta: 0,
        explicacion: "A esa T los vapores forman mezcla inflamable con aire en presencia de llama."
      },
      {
        q: "La técnica 3D de extinción en fuegos de interior consiste en:",
        opts: ["Enfriar gases de combustión antes de atacar el foco", "Lanzar agua en tres direcciones", "Uso de tres mangueras", "Tres bomberos atacando"],
        correcta: 0,
        explicacion: "Breathtaking → Gas cooling previo con chorros pulsantes para evitar flashover."
      },
      {
        q: "El backdraft se produce cuando:",
        opts: ["Se introduce oxígeno súbitamente en un recinto con combustión incompleta caliente", "Se apaga el fuego con agua", "Se abre una ventana en un fuego controlado", "Un coche arde"],
        correcta: 0,
        explicacion: "La explosión ocurre al entrar aire fresco al recinto rico en gases inflamables."
      },
      {
        q: "En un rescate en altura se emplea como elemento de anclaje principal:",
        opts: ["Puntos fijos estructurales verificados + mosquetones de seguridad", "Una cuerda normal", "La manguera", "El cinturón propio"],
        correcta: 0,
        explicacion: "Deben usarse anclajes con carga certificada y redundancia."
      },
      {
        q: "Un material peligroso tipo 3 según clasificación ONU es:",
        opts: ["Líquidos inflamables", "Sólidos comburentes", "Gas tóxico", "Radiactivo"],
        correcta: 0,
        explicacion: "Clase 1 explosivos, 2 gases, 3 líquidos inflamables, 4 sólidos, etc."
      },
      {
        q: "La autonomía de un ERA estándar de bombero es aproximadamente:",
        opts: ["30-45 minutos en trabajo moderado", "5 minutos", "4 horas", "2 horas"],
        correcta: 0,
        explicacion: "Un ERA de 6,8 litros a 300 bar da unos 30-45 min según esfuerzo."
      },
      {
        q: "La orden que prioriza rescate, protección propia y extinción se resume en:",
        opts: ["Vidas, bienes, medio ambiente", "Fuego, humo, rescate", "Extinción, prevención, formación", "Agua, espuma, polvo"],
        correcta: 0,
        explicacion: "Orden de prioridades estándar en intervención: vidas > bienes > medio ambiente."
      }
    ]
  }
};

/* ================================================
   PAVEL — pavel-chatbot-data.js  v2.0
   Base de conocimiento del chatbot (modularizada)
   ─────────────────────────────────────────────────
   Motor multi-intención: detecta varias preguntas
   en un solo mensaje y responde a cada una.

   Para enriquecer el bot, edite SOLO este archivo.
   IMPORTANTE: cargar ANTES de js/scroll.js en HTML.
================================================ */

window.PV_CHATBOT_DATA = {

  /* ════════════════════════════════════════════════
     BASE DE CONOCIMIENTO — modo "La empresa"
     Cada entrada:
       keys   → palabras o frases que activan la entrada
                (cuanto más variadas, mejor reconocimiento)
       answer → array de variantes; el motor elige una
                al azar cada vez que responde
  ════════════════════════════════════════════════ */
  kb: [

    /* ── Servicios generales ── */
    {
      section: 'servicios',
      keys: [
        'servicio', 'servicios', 'ofrecen', 'hacen', 'trabajan',
        'que hacen', 'qué hacen', 'oferta', 'soluciones', 'pueden ayudar',
        'en que ayudan', 'cómo ayudan', 'como ayudan', 'qué ofrecen',
        'que ofrecen', 'a qué se dedican', 'a que se dedican',
        'actividades', 'especialidades', 'capacidades', 'portafolio de servicios'
      ],
      answer: [
        'En **JPO Contracting Unlimited Inc.** ofrecemos servicios profesionales especializados en el sector comercial y residencial de la construcción. Nuestras líneas principales son:\n\n- **Arquitectura y Diseño**: desde la conceptualización hasta los planos de ejecución.\n- **Ingeniería Estructural y Civil**: diseño, cálculo y supervisión técnica.\n- **Shop Drawings**: planos de taller detallados para fabricación e instalación.\n- **Permisos y Gestión con Autoridades**: tramitación de licencias y cumplimiento normativo.\n\nCada proyecto recibe atención personalizada desde la consulta inicial hasta la entrega final.',
        'Somos una firma con sede en Oshawa, Canadá, especializada en servicios de arquitectura, ingeniería, planos de taller y gestión de permisos. Trabajamos tanto en proyectos residenciales como comerciales, garantizando calidad y cumplimiento de plazos.\n\n¿Le gustaría conocer más detalles sobre alguna de nuestras áreas de servicio?',
        'Nuestra oferta de servicios está diseñada para cubrir todo el ciclo de un proyecto de construcción:\n\n- Diseño arquitectónico y de interiores\n- Cálculo estructural y análisis sísmico\n- Elaboración de shop drawings para fabricantes\n- Obtención de permisos municipales y licencias de obra\n\nContáctenos para una asesoría sin compromiso.'
      ]
    },

    /* ── Horarios de atención ── */
    {
      keys: [
        'horario', 'horarios', 'hora', 'horas', 'atencion', 'atención',
        'cuando atienden', 'cuándo atienden', 'abren', 'cierran', 'disponible',
        'disponibles', 'cuando puedo llamar', 'cuándo puedo llamar',
        'a que hora', 'a qué hora', 'dias de trabajo', 'días de trabajo',
        'lunes', 'viernes', 'fin de semana', 'sabado', 'sábado', 'domingo',
        'jornada', 'oficina', 'cuando los encuentro', 'cuándo los encuentro',
        'horario de oficina', 'horario laboral', 'comunicarme', 'comunicar'
      ],
      answer: [
        'Nuestro horario de atención es de **lunes a viernes de 8:00 a.m. a 6:00 p.m.** (hora de Toronto, EST). Los sábados atendemos de 9:00 a.m. a 1:00 p.m. para consultas puntuales.\n\nFuera de ese horario puede dejarnos un mensaje a través del formulario de contacto o por correo electrónico, y le responderemos en el siguiente día hábil.',
        'Atendemos de **lunes a viernes de 8:00 a.m. a 6:00 p.m.** (EST). Los fines de semana solo atendemos emergencias técnicas o de proyectos en ejecución.\n\nSi desea agendar una consulta, puede hacerlo en cualquier momento por este chat o por el formulario de contacto.',
        'Estamos disponibles de lunes a viernes, de 8 de la mañana a 6 de la tarde (hora del este). El sábado hay atención limitada hasta el mediodía.\n\nPara consultas urgentes fuera de horario, escríbanos y un asesor se comunicará con usted al inicio del próximo día hábil.',
        'El horario regular de oficina es **lunes a viernes de 8:00 a 18:00 horas**. Si necesita una cita o llamada, puede solicitarla por el formulario y le confirmamos disponibilidad el mismo día.'
      ]
    },

    /* ── Cotización / propuesta ── */
    {
      section: 'contacto',
      keys: [
        'propuesta', 'cotización', 'cotizacion', 'cotizar', 'presupuesto',
        'solicitar', 'costo', 'precio', 'cuánto cuesta', 'cuanto cuesta',
        'valor', 'tarifa', 'tarifas', 'cuánto cobran', 'cuanto cobran',
        'cuánto vale', 'cuanto vale', 'honorarios', 'inversión', 'inversion',
        'pagar', 'cobro', 'cobran', 'paquete', 'plan', 'precio por metro',
        'costo de proyecto', 'cuánto me cuesta', 'cuanto me cuesta'
      ],
      answer: [
        'Para elaborar una propuesta técnica necesitamos conocer los alcances de su proyecto. Le recomendamos:\n\n1. Completar el formulario en la sección **Contacto** de esta página.\n2. O comunicarse directamente con nuestro equipo comercial al **+1 (437) 830-2999** para agendar una consulta sin costo.\n\nAsí podemos preparar una propuesta ajustada a su caso real.',
        'El costo de cada proyecto depende de su escala, ubicación y especialidades involucradas (arquitectura, ingeniería, shop drawings o permisos). Para entregarle un presupuesto preciso necesitamos un breve diagnóstico previo.\n\nPuede iniciar el proceso completando el formulario de contacto o llamándonos. **La primera consulta no tiene costo**.',
        'No manejamos tarifas estándar porque cada proyecto es diferente. Lo que sí le garantizamos es una propuesta clara, desglosada y sin cobros ocultos.\n\nContacte a nuestro equipo para recibir una propuesta técnica personalizada según sus necesidades.'
      ]
    },

    /* ── Cobertura geográfica ── */
    {
      section: 'contacto',
      keys: [
        'país', 'pais', 'países', 'paises', 'donde', 'dónde', 'cobertura',
        'operan', 'presencia', 'internacional', 'latinoamerica', 'latinoamérica',
        'region', 'región', 'colombia', 'mexico', 'méxico', 'peru', 'perú',
        'chile', 'argentina', 'brasil', 'ecuador', 'panama', 'panamá',
        'fuera de colombia', 'otro pais', 'otro país', 'trabajan en',
        'tienen oficina', 'tienen presencia', 'están en', 'estan en',
        'canadá', 'canada', 'ontario', 'toronto', 'oshawa'
      ],
      answer: [
        'Nuestra sede principal está en **Oshawa, Ontario, Canadá**, en la dirección **489 Fairleigh Ave, Oshawa, ON L1J 2W7**. Atendemos principalmente proyectos en la provincia de Ontario y en todo Canadá, aunque también podemos evaluar proyectos internacionales bajo condiciones específicas.\n\nSi su proyecto está en otra región, contáctenos y estudiaremos la viabilidad.',
        'Operamos desde Oshawa, Canadá, con cobertura en todo el territorio canadiense. Tenemos experiencia en proyectos comerciales y residenciales en la región de Ontario, y estamos abiertos a colaborar en otras provincias previo acuerdo.\n\n¿Tiene un proyecto en una ubicación específica sobre la que quiera consultarnos?',
        'Estamos ubicados estratégicamente en Oshawa, con fácil acceso a las principales vías de Ontario. Atendemos clientes en toda el área metropolitana y en el resto de Ontario.\n\nPara proyectos fuera de Ontario, podemos gestionar equipos locales o asesoría remota según el alcance.'
      ]
    },

    /* ── Plazos y tiempos ── */
    {
      section: 'soluciones',
      keys: [
        'tiempo', 'plazo', 'duración', 'duracion', 'cuánto tiempo', 'cuanto tiempo',
        'demora', 'tarda', 'cronograma', 'calendario', 'entrega', 'fecha',
        'cuándo terminan', 'cuando terminan', 'tiempo de ejecución', 'tiempo de ejecucion',
        'cuánto demora', 'cuanto demora', 'cuánto dura', 'cuanto dura',
        'semanas', 'meses', 'años', 'anos'
      ],
      answer: [
        'El plazo varía según el tipo y escala del proyecto:\n\n- Consultoría y estudios arquitectónicos: **2 a 6 semanas**\n- Diseño estructural y shop drawings: **4 a 10 semanas**\n- Proyectos completos (diseño + permisos): **3 a 9 meses**\n- Proyectos de gran escala con construcción: **1 a 2 años**\n\nSiempre entregamos un cronograma detallado en la propuesta técnica.',
        'Los tiempos de ejecución dependen de la complejidad del proyecto y de los trámites municipales. Como referencia general:\n\n- Planos de arquitectura e ingeniería: semanas\n- Shop drawings detallados: semanas\n- Gestión de permisos: de 2 a 6 meses (dependiendo del municipio)\n- Obra completa: meses a años\n\nCada propuesta incluye un cronograma con hitos y fechas de entrega parcial.',
        'No establecemos plazos genéricos porque cada obra tiene sus propias condiciones. Lo que sí garantizamos es un cronograma realista desde el inicio y comunicación proactiva ante cualquier variación.\n\nNuestra tasa de entrega a tiempo supera el **95%** en proyectos completados.'
      ]
    },

    /* ── Tecnología / herramientas ── */
    {
      section: 'servicios',
      keys: [
        'software', 'herramientas', 'programas', 'autocad', 'revit', 'sketchup',
        'bim', 'modelado', 'digital', 'tecnología', 'tecnologia', 'plataforma',
        'modelo 3d', 'rendering', 'visualización', 'visualizacion'
      ],
      answer: [
        'Trabajamos con las herramientas más avanzadas del sector: **AutoCAD, Revit, SketchUp y paquetes de renderizado** para entregar planos de alta calidad y modelos 3D que facilitan la toma de decisiones y la comunicación con los equipos de obra.\n\nTambién utilizamos software de cálculo estructural para garantizar la seguridad y eficiencia de nuestros diseños.',
        'Nuestro flujo de trabajo digital incluye modelado BIM (Revit) para coordinar disciplinas, elaboración de shop drawings precisos y renders fotorrealistas para presentación a clientes y autoridades.\n\nPodemos adaptarnos a los formatos que su equipo requiera.',
        'Contamos con licencias de los principales programas de diseño y cálculo. Si necesita un formato específico (DWG, PDF, RVT, etc.), lo entregamos sin problema.'
      ]
    },

    /* ── Certificaciones y normas ── */
    {
      section: 'servicios',
      keys: [
        'iso', 'certificación', 'certificacion', 'leed', 'sostenible',
        'sostenibilidad', 'certificado', 'norma', 'estandar', 'estándar',
        'ohsas', 'calidad', 'ambiental', 'green building', 'construccion verde',
        'construcción verde', 'norma tecnica', 'norma técnica', 'acreditado',
        'acreditacion', 'acreditación', 'cumple normas', 'que normas',
        'ontario building code', 'código de construcción'
      ],
      answer: [
        'Todos nuestros diseños y planos cumplen con las normativas locales, incluyendo el **Ontario Building Code (OBC)** y los códigos municipales aplicables. Además, seguimos estándares de calidad en nuestros procesos internos.\n\nAunque no estamos certificados formalmente en ISO, aplicamos buenas prácticas de gestión de calidad y seguridad en cada proyecto.',
        'Nos aseguramos de que cada proyecto cumpla con todas las regulaciones de construcción de Ontario y de los municipios correspondientes. Trabajamos con ingenieros y arquitectos registrados que firman los planos y memorias de cálculo.\n\nSi su proyecto requiere certificaciones específicas (LEED, etc.), podemos asesorarle y coordinar con especialistas externos.'
      ]
    },

    /* ── Contacto y atención humana ── */
    {
      showContactCard: true,
      section: 'contacto',
      keys: [
        'contacto', 'contactar', 'teléfono', 'telefono', 'email', 'correo',
        'escribir', 'llamar', 'asesor', 'humano', 'persona', 'hablar',
        'comunicar', 'whatsapp', 'número', 'numero', 'quiero hablar',
        'necesito hablar', 'me comunico', 'cómo los contacto', 'como los contacto',
        'quiero que me llamen', 'me llamen', 'agendar', 'cita', 'reunion', 'reunión',
        'pasame el numero', 'pásame el número', 'dame el numero', 'dame el número',
        'cual es el correo', 'cuál es el correo', 'algun contacto', 'algún contacto'
      ],
      answer: [
        'Puede contactarnos a través de:\n\n- **Teléfono / WhatsApp:** +1 (437) 830-2999\n- **Formulario** en la sección Contacto de esta página\n- **Correo electrónico** (puede solicitarlo por este chat)\n- **Visita en persona:** 489 Fairleigh Ave, Oshawa, ON L1J 2W7 (con cita previa)\n\nUn asesor se pondrá en contacto con usted en el menor tiempo posible.',
        'Las vías de contacto disponibles son:\n\n- Llamada o WhatsApp al **+1 (437) 830-2999**\n- El formulario de contacto en esta misma página\n- Correo electrónico\n\nSi prefiere, también puede solicitarnos que le llamemos en un horario específico y con gusto lo organizamos.',
        'Nuestro equipo comercial atiende por teléfono, WhatsApp, correo electrónico y formulario web. En horario de oficina la respuesta es inmediata; fuera de horario le respondemos al siguiente día hábil.\n\nNo dude en comunicarse, estamos para ayudarle.'
      ]
    },

    /* ── Proyectos / portafolio / ejemplos ── */
    {
      section: 'proyectos',
      keys: [
        'proyecto', 'proyectos', 'portafolio', 'ejemplos', 'obras', 'trabajos',
        'que han hecho', 'qué han hecho', 'referencias', 'casos', 'experiencia',
        'han construido', 'han diseñado', 'han diseñado', 'que han construido',
        'que proyectos', 'qué proyectos', 'mostrar', 'ver proyectos',
        'galeria', 'galería', 'logros', 'realizaciones', 'clientes anteriores',
        'proyectos anteriores', 'trabajos realizados', 'obra realizada'
      ],
      answer: [
        'Contamos con un portafolio diverso que incluye proyectos residenciales (viviendas unifamiliares y multifamiliares) y comerciales (oficinas, locales, edificios mixtos). Hemos realizado diseños arquitectónicos, cálculos estructurales, shop drawings y gestiones de permisos en la región de Ontario.\n\nPuede visitar la sección **Proyectos** de esta página para ver casos representativos. Si necesita referencias específicas, contáctenos y le compartiremos ejemplos similares a su proyecto.',
        'Hemos ejecutado proyectos para clientes particulares, desarrolladores y contratistas generales en Ontario. Nuestros trabajos incluyen desde planos de renovación hasta diseños completos para nuevas construcciones.\n\nEn la sección **Proyectos** encontrará una muestra de nuestra capacidad. ¿Le gustaría que un asesor le presente proyectos similares al suyo?',
        'Nuestro portafolio abarca el sector residencial y comercial, con énfasis en la calidad del diseño y la precisión de los planos. Trabajamos con constructores, arquitectos e ingenieros para entregar documentación técnica impecable.\n\nSi desea ver ejemplos concretos, póngase en contacto con nosotros y le enviaremos casos relevantes.'
      ]
    },

    /* ── Equipo / quiénes somos ── */
    {
      section: 'nosotros',
      keys: [
        'equipo', 'quienes son', 'quiénes son', 'quien está', 'quién está',
        'fundador', 'director', 'gerente', 'profesionales', 'ingenieros',
        'staff', 'personal', 'nosotros', 'empresa', 'sobre ustedes',
        'historia', 'años de experiencia', 'cuántos años', 'cuantos años',
        'cuando fundaron', 'cuándo fundaron', 'trayectoria', 'acerca de',
        'quienes trabajan', 'quiénes trabajan', 'especialistas'
      ],
      answer: [
        '**JPO Contracting Unlimited Inc.** es una firma constituida en Ontario desde **septiembre de 2022**. Nuestro equipo está liderado por **Jose Rafael Pardo Ojeda**, quien cuenta con amplia experiencia en el sector de la construcción y la ingeniería.\n\nTrabajamos con una red de profesionales colaboradores (arquitectos, ingenieros, dibujantes) para ofrecer un servicio integral y de alta calidad.',
        'Somos una empresa joven pero con sólidos conocimientos en arquitectura, ingeniería estructural y gestión de permisos. Nuestro fundador, Jose Rafael Pardo Ojeda, supervisa personalmente cada proyecto para garantizar la excelencia.\n\nPuede conocer más sobre nosotros en la sección **Nosotros** de este sitio.',
        'Contamos con un equipo multidisciplinario de profesionales registrados en Ontario. Nos especializamos en brindar soluciones técnicas ágiles y eficientes, adaptadas a las necesidades de cada cliente.\n\nNuestro compromiso es la satisfacción total del cliente y el cumplimiento de los plazos acordados.'
      ]
    },

    /* ── Proceso de trabajo / metodología ── */
    {
      section: 'soluciones',
      keys: [
        'proceso', 'metodología', 'metodologia', 'como trabajan', 'cómo trabajan',
        'pasos', 'etapas', 'fases', 'como es el proceso', 'cómo es el proceso',
        'que debo hacer', 'qué debo hacer', 'por donde empiezo', 'cómo empezamos',
        'como empezamos', 'flujo de trabajo', 'steps', 'procedimiento'
      ],
      answer: [
        'Nuestro proceso de trabajo se estructura en cuatro fases:\n\n1. **Diagnóstico y propuesta técnica** (reunión inicial, levantamiento de requerimientos).\n2. **Diseño y desarrollo** (planos arquitectónicos, estructurales, shop drawings).\n3. **Gestión de permisos** (tramitación ante municipios y autoridades).\n4. **Entrega y acompañamiento** (revisión final, ajustes y soporte postentrega).\n\nCada fase incluye puntos de revisión y aprobación con el cliente antes de avanzar.',
        'Trabajamos bajo una metodología de proyecto por fases con entregables definidos en cada etapa. El cliente tiene visibilidad y control sobre el avance en todo momento.\n\nDesde el primer contacto hasta la entrega final, contará con un gestor dedicado como punto de contacto único.',
        'El proceso comienza con una consulta inicial sin costo, donde evaluamos el proyecto y sus requerimientos. A partir de ahí elaboramos una propuesta técnica, firmamos el acuerdo y arrancamos con el diseño. El cliente aprueba cada etapa antes de pasar a la siguiente.'
      ]
    },

    /* ── Calidad y control ── */
    {
      section: 'soluciones',
      keys: [
        'calidad', 'control de calidad', 'aseguramiento', 'inspeccion', 'inspección',
        'revision', 'revisión', 'auditoría', 'auditoria', 'garantía', 'garantia',
        'errores', 'fallas', 'defectos', 'que pasa si falla', 'respaldan',
        'qué pasa si algo sale mal', 'que pasa si algo sale mal',
        'respaldo', 'responsabilidad', 'garantizan'
      ],
      answer: [
        'El control de calidad es fundamental en nuestro trabajo. Revisamos cada plano, cálculo y documento antes de entregarlo al cliente. Nos aseguramos de que todo cumpla con las normas locales y los requisitos del proyecto.\n\nSi durante la ejecución se detecta algún error imputable a nuestros planos, lo corregimos sin costo adicional.',
        'Contamos con un sistema de revisión interna que incluye verificaciones cruzadas entre disciplinas. Cada entregable pasa por una revisión técnica antes de ser enviado al cliente o a las autoridades.\n\nNuestro objetivo es minimizar errores y garantizar que la documentación esté impecable.',
        'La calidad no se negocia. Todos nuestros diseños y planos son revisados meticulosamente para evitar problemas en obra o en la tramitación de permisos.\n\nSi surge alguna observación, la atendemos de inmediato y sin cargos adicionales si es responsabilidad nuestra.'
      ]
    },

    /* ── Arquitectura ── */
    {
      section: 'servicios',
      keys: [
        'arquitectura', 'arquitecto', 'diseño arquitectonico', 'diseno arquitectonico',
        'planos de arquitectura', 'plantas', 'fachadas', 'cortes', 'render',
        'diseño de interiores', 'distribucion', 'espacios', 'conceptualizacion',
        'anteproyecto', 'proyecto arquitectonico'
      ],
      answer: [
        'Ofrecemos servicios de arquitectura que van desde la conceptualización hasta la elaboración de planos de construcción. Desarrollamos plantas, fachadas, cortes, renders 3D y toda la documentación necesaria para la obtención de permisos y la ejecución de la obra.\n\nTrabajamos tanto en proyectos residenciales (casas, apartamentos) como comerciales (oficinas, locales, edificios mixtos).',
        'Nuestro equipo de arquitectura crea diseños funcionales y estéticamente atractivos, adaptados a las necesidades del cliente y al entorno urbano. Entregamos planos detallados, renders fotorrealistas y toda la documentación gráfica requerida.\n\nSi necesita reformas, ampliaciones o un proyecto desde cero, podemos ayudarle.'
      ]
    },

    /* ── Ingeniería estructural ── */
    {
      section: 'servicios',
      keys: [
        'estructural', 'estructura', 'calculo', 'cálculo', 'diseño estructural',
        'diseno estructural', 'resistencia', 'carga', 'cargas', 'columnas',
        'vigas', 'losa', 'cimentacion', 'cimentación', 'fundaciones',
        'sismorresistente', 'sismico', 'sísmico', 'refuerzo estructural',
        'estudio de suelos', 'analisis estructural', 'análisis estructural'
      ],
      answer: [
        'La ingeniería estructural es uno de nuestros pilares. Realizamos el cálculo y diseño de estructuras de concreto, acero, madera y mampostería, cumpliendo con el Ontario Building Code y las normas aplicables.\n\nEntregamos memorias de cálculo, planos de refuerzo y detalles constructivos para garantizar la seguridad y durabilidad de la obra.',
        'Diseñamos estructuras eficientes y seguras para todo tipo de edificaciones. Nuestros ingenieros utilizan software especializado para el análisis de cargas, sismos y vientos.\n\nTambién ofrecemos revisión de diseños existentes y asesoría en refuerzos estructurales.'
      ]
    },

    /* ── Shop drawings ── */
    {
      section: 'servicios',
      keys: [
        'shop drawing', 'shop drawings', 'planos de taller', 'planos de fabricacion',
        'detalles constructivos', 'fabricacion', 'instalacion', 'steel detailing',
        'planos de montaje', 'planos de carpinteria', 'planos de herreria',
        'planos de estructuras metalicas', 'planos de acero'
      ],
      answer: [
        'Elaboramos **shop drawings** (planos de taller) detallados para la fabricación e instalación de elementos estructurales, arquitectónicos y de acabados. Trabajamos con precisión milimétrica para que los fabricantes y montajistas puedan ejecutar sin errores.\n\nEntregamos planos en formatos DWG, PDF y, si se requiere, modelos 3D.',
        'Nuestros shop drawings son la clave para una construcción sin contratiempos. Desarrollamos planos de fabricación para estructuras metálicas, carpintería, herrería, instalaciones y cualquier otro componente que necesite ser prefabricado.\n\nCoordinamos con los equipos de obra para asegurar la correcta interpretación de los detalles.'
      ]
    },

    /* ── Permisos y gestión municipal ── */
    {
      section: 'servicios',
      keys: [
        'permiso', 'permisos', 'licencia', 'licencias', 'building permit',
        'zoning', 'zonificación', 'municipio', 'ciudad', 'toronto', 'ontario',
        'tramite', 'trámite', 'gestion', 'gestión', 'aprobación', 'aprobacion',
        'regulaciones', 'normativas', 'departamento de construccion'
      ],
      answer: [
        'Gestionamos la obtención de permisos de construcción ante los municipios de Ontario, incluyendo la ciudad de Toronto. Preparamos toda la documentación técnica requerida (planos, memorias, formularios) y realizamos el seguimiento del expediente hasta la aprobación.\n\nNuestro conocimiento de los códigos y regulaciones locales agiliza el proceso y reduce el riesgo de rechazos.',
        'Ofrecemos un servicio integral de **permisos y gestión con autoridades**. Nos encargamos de:\n\n- Revisión de zonificación y usos de suelo\n- Elaboración de planos de presentación\n- Llenado de formularios municipales\n- Seguimiento y respuesta a observaciones\n- Obtención del building permit\n\nAsí usted puede concentrarse en la construcción mientras nosotros navegamos la burocracia.'
      ]
    },

    /* ── Proyectos comerciales ── */
    {
      section: 'servicios',
      keys: [
        'comercial', 'oficinas', 'locales', 'tiendas', 'restaurantes',
        'edificio comercial', 'centro comercial', 'hotel', 'hospitality',
        'espacio comercial', 'negocio', 'retail'
      ],
      answer: [
        'Tenemos experiencia en proyectos comerciales: oficinas, locales comerciales, restaurantes, hoteles y edificios mixtos. Ofrecemos diseño arquitectónico, cálculo estructural, shop drawings y gestión de permisos para este tipo de espacios.\n\nEntendemos las necesidades particulares de cada negocio y adaptamos los diseños para maximizar la funcionalidad y la imagen corporativa.'
      ]
    },

    /* ── Proyectos residenciales ── */
    {
      section: 'servicios',
      keys: [
        'residencial', 'vivienda', 'casa', 'apartamento', 'condominio',
        'propiedad horizontal', 'vivienda unifamiliar', 'vivienda multifamiliar',
        'renovacion', 'renovación', 'ampliacion', 'ampliación'
      ],
      answer: [
        'Para proyectos residenciales ofrecemos diseño arquitectónico y estructural, elaboración de planos, shop drawings y gestión de permisos. Atendemos desde casas particulares hasta conjuntos de apartamentos.\n\nTambién realizamos proyectos de renovación y ampliación, adaptando las estructuras existentes a las nuevas necesidades.'
      ]
    },

    /* ── Formas de pago / condiciones ── */
    {
      section: 'contacto',
      keys: [
        'pago', 'pagos', 'forma de pago', 'como pagan', 'cómo pagan',
        'cuotas', 'anticipo', 'adelanto', 'contrato', 'condiciones',
        'factura', 'facturacion', 'facturación', 'transferencia',
        'crédito', 'credito', 'financiamiento', 'financiación'
      ],
      answer: [
        'Las condiciones de pago se establecen en la propuesta y varían según el tipo de proyecto. En general trabajamos con:\n\n- Anticipo inicial al firmar el contrato (30% - 50%)\n- Pagos parciales por hitos o avance\n- Liquidación final a la entrega\n\nAceptamos transferencias bancarias (interac e-transfer, wire transfer) y cheques certificados. Emitimos facturas formales.',
        'Nuestras condiciones contractuales son claras y negociables. El esquema típico es un anticipo del 40%, pagos por avance y un pago final a la entrega. Para proyectos de consultoría corta puede ser un pago único.\n\nEn todos los casos emitimos factura y los términos quedan definidos en el contrato.'
      ]
    },

    /* ── Sostenibilidad / medio ambiente ── */
    {
      section: 'servicios',
      keys: [
        'sostenible', 'sostenibilidad', 'verde', 'ecológico', 'ecologico',
        'medio ambiente', 'impacto ambiental', 'huella de carbono',
        'eficiencia energética', 'eficiencia energetica', 'energia renovable',
        'paneles solares', 'construccion verde', 'construcción verde',
        'certificacion verde', 'certificación verde'
      ],
      answer: [
        'Incorporamos criterios de sostenibilidad en nuestros diseños siempre que el cliente lo solicite. Podemos orientar el proyecto hacia la eficiencia energética, el uso de materiales sostenibles y la optimización de recursos.\n\nSi busca certificación LEED o similar, podemos asesorarle y coordinar con especialistas externos para cumplir con los requisitos.'
      ]
    },

    /* ── Emergencias / daños / revisiones urgentes ── */
    {
      section: 'servicios',
      keys: [
        'emergencia', 'urgente', 'urgencia', 'daño', 'daños', 'colapso',
        'fisura', 'grieta', 'hundimiento', 'asentamiento', 'inundacion', 'inundación',
        'sismo', 'terremoto', 'patologia', 'patología', 'diagnostico urgente',
        'revisión urgente', 'mi edificio', 'problema estructural', 'falla'
      ],
      answer: [
        'Para emergencias estructurales o daños visibles, atendemos con carácter prioritario. Si su edificio presenta grietas, asentamientos o ha sufrido un evento como un sismo o inundación, contáctenos de inmediato por teléfono o WhatsApp.\n\nEnviamos un especialista para diagnóstico en el menor tiempo posible.',
        'Ofrecemos servicio de diagnóstico de urgencia para estructuras con posibles daños. El proceso incluye inspección visual, medición de deformaciones y emisión de un informe preliminar de seguridad.\n\nNo espere a que el problema avance: llámenos al **+1 (437) 830-2999**.'
      ]
    },

    /* ── Alianzas / proveedores ── */
    {
      section: 'contacto',
      keys: [
        'alianza', 'alianzas', 'proveedor', 'proveedores', 'subcontratista',
        'subcontratistas', 'partner', 'partners', 'asociado', 'asociados',
        'colaboracion', 'colaboración', 'trabajar con ustedes', 'ser proveedor',
        'quiero ser proveedor', 'registro de proveedores'
      ],
      answer: [
        'Estamos abiertos a colaborar con otros profesionales y empresas del sector. Si desea registrarse como proveedor o proponer una alianza, puede escribirnos a través del formulario de Contacto indicando su especialidad.\n\nEvaluamos la capacidad técnica y las referencias para establecer relaciones de trabajo mutuamente beneficiosas.'
      ]
    },

    /* ── Garantías ── */
    {
      section: 'soluciones',
      keys: [
        'garantia', 'garantía', 'garantias', 'garantías', 'que garantia dan',
        'qué garantía dan', 'tienen garantia', 'cobertura de garantia',
        'garantia de los planos', 'garantia del servicio', 'cuanto dura la garantia',
        'responden si algo falla', 'que pasa si los planos tienen un error'
      ],
      synonyms: ['respaldan el trabajo', 'responden por errores', 'se hacen responsables'],
      answer: [
        'Todo nuestro trabajo técnico está respaldado: si se detecta un error imputable a nuestros planos o cálculos, lo corregimos **sin costo adicional**. Esta garantía aplica mientras el proyecto esté en ejecución y dentro de un plazo razonable después de la entrega.\n\nAdemás, los planos sellados quedan amparados por el seguro de responsabilidad profesional de los ingenieros y arquitectos que los firman.',
        'No entregamos un documento y desaparecemos. Si surge una observación o inconsistencia atribuible a nuestro diseño, la resolvemos de inmediato y sin cargo extra.\n\nNuestro compromiso de calidad incluye revisión, corrección y acompañamiento durante toda la etapa de permisos y construcción.',
        'La garantía sobre nuestros entregables cubre errores de diseño, cálculo o documentación. No cubre cambios de alcance solicitados por el cliente ni errores de ejecución en obra ajenos a nuestros planos.\n\nSi tiene dudas sobre un caso particular, con gusto se lo explicamos en detalle.'
      ]
    },

    /* ── Seguros y licencias profesionales ── */
    {
      section: 'nosotros',
      keys: [
        'seguro', 'seguros', 'poliza', 'póliza', 'licencia profesional',
        'estan asegurados', 'están asegurados', 'tienen seguro de responsabilidad civil',
        'p eng', 'p.eng', 'ingeniero registrado', 'profesional registrado',
        'wsib', 'liability insurance', 'errors and omissions', 'e&o', 'estan licenciados',
        'están licenciados', 'colegiados', 'matricula profesional', 'matrícula profesional'
      ],
      synonyms: ['cobertura de seguro', 'estan certificados como ingenieros'],
      answer: [
        'Trabajamos con arquitectos e ingenieros **registrados y licenciados en Ontario** (P.Eng / Licensed Architect), quienes firman y sellan los documentos según corresponda. Contamos con cobertura de seguro de responsabilidad profesional (Errors & Omissions) para respaldar nuestro trabajo técnico.\n\nSi necesita el certificado de seguro o las credenciales de un profesional específico para su expediente, podemos proporcionárselo.',
        'Sí, contamos con seguro de responsabilidad civil profesional vigente y trabajamos únicamente con profesionales acreditados ante los colegios correspondientes de Ontario (PEO, OAA, según la disciplina).\n\nEsto le da tranquilidad de que cada documento entregado tiene respaldo legal y técnico real.',
        'La licencia y el seguro profesional son requisitos no negociables para nosotros: cada plano que sellamos pasa por un profesional debidamente registrado. Con gusto le compartimos la documentación que necesite para su trámite o financiamiento.'
      ]
    },

    /* ── Confidencialidad y propiedad de los planos ── */
    {
      section: 'contacto',
      keys: [
        'confidencialidad', 'nda', 'acuerdo de confidencialidad',
        'propiedad de los planos', 'derechos de autor de los planos',
        'quien es dueño de los planos', 'quién es dueño de los planos',
        'puedo usar los planos en otro lado', 'a quien le pertenecen los planos',
        'mi proyecto es confidencial', 'firmar nda'
      ],
      answer: [
        'Manejamos toda la información de su proyecto con estricta confidencialidad. Si su empresa requiere firmar un acuerdo de confidencialidad (NDA) antes de compartir detalles sensibles, no hay ningún problema en formalizarlo.\n\nEn cuanto a los planos: una vez completado el pago acordado, usted recibe los derechos de uso de los documentos para los fines de su proyecto.',
        'Entendemos que algunos proyectos requieren reserva total de la información (desarrollos comerciales, propiedad intelectual de un producto, etc.). Podemos firmar un NDA estándar o uno propio de su empresa antes de iniciar cualquier conversación técnica.\n\nLos planos finales, una vez liquidado el contrato, quedan a disposición del cliente para su uso en el proyecto.'
      ]
    },

    /* ── Visitas a obra / levantamiento en sitio ── */
    {
      section: 'servicios',
      keys: [
        'visita a obra', 'visitan la obra', 'van al sitio', 'inspeccion de campo',
        'inspección de campo', 'levantamiento en sitio', 'medicion en sitio',
        'medición en sitio', 'van a medir', 'visitan el terreno', 'van al lote',
        'hacen visitas', 'necesito que vengan a ver'
      ],
      answer: [
        'Sí, realizamos visitas técnicas al sitio cuando el proyecto lo requiere: levantamiento de medidas, verificación de condiciones existentes, inspección de daños o simplemente para entender mejor el contexto del proyecto antes de diseñar.\n\nLas visitas se coordinan según disponibilidad de nuestro equipo y la ubicación del proyecto dentro de Ontario.',
        'Para renovaciones o ampliaciones, una visita en sitio suele ser necesaria para levantar las condiciones reales de la propiedad antes de iniciar el diseño. Para proyectos nuevos en lote vacío, a veces basta con la información topográfica y catastral.\n\nCoordinamos la visita una vez iniciado el proceso con usted.'
      ]
    },

    /* ── Reuniones virtuales / consulta remota ── */
    {
      section: 'contacto',
      keys: [
        'reunion virtual', 'reunión virtual', 'videollamada', 'zoom',
        'consulta remota', 'consulta en linea', 'consulta en línea',
        'consulta por internet', 'atienden por zoom', 'meet', 'teams',
        'puedo hablar por video', 'reunion por whatsapp', 'reunión por whatsapp'
      ],
      answer: [
        'Sí, ofrecemos reuniones virtuales por **Zoom, Google Meet, Microsoft Teams o videollamada de WhatsApp**, según su preferencia. Esto es especialmente útil si usted no se encuentra en Ontario o prefiere no desplazarse.\n\nSolo coordine el horario con nuestro equipo y le enviamos el enlace de la reunión.',
        'La mayoría de nuestras consultas iniciales se realizan de forma remota, por video o llamada telefónica, sin ningún costo. Esto nos permite atender clientes en distintas ubicaciones de manera ágil.\n\nSi en algún momento es necesaria una visita presencial, la coordinamos por separado.'
      ]
    },

    /* ── Idiomas de atención ── */
    {
      section: 'nosotros',
      keys: [
        'hablan español', 'hablan espanol', 'hablan ingles', 'hablan inglés',
        'idiomas', 'en que idioma atienden', 'en qué idioma atienden',
        'hablan portugues', 'hablan portugués', 'atencion en español',
        'atención en español', 'do you speak spanish', 'speak english'
      ],
      answer: [
        'Atendemos en **español e inglés**, tanto en este chat como por teléfono, WhatsApp y correo electrónico. Puede escribirnos en el idioma que le resulte más cómodo y le responderemos en el mismo.',
        'Nuestro equipo es bilingüe (español/inglés), lo que facilita la comunicación con clientes latinos y canadienses por igual. Si lo prefiere, también podemos coordinar comunicación escrita en otros idiomas según disponibilidad.'
      ]
    },

    /* ── Tamaño mínimo de proyecto ── */
    {
      section: 'servicios',
      keys: [
        'proyecto pequeño', 'proyectos pequeños', 'tamaño minimo', 'tamaño mínimo',
        'aceptan proyectos chicos', 'hacen trabajos pequeños', 'monto minimo',
        'monto mínimo', 'presupuesto minimo', 'presupuesto mínimo',
        'es muy pequeño mi proyecto', 'aceptan proyectos pequeños'
      ],
      answer: [
        'No tenemos un tamaño mínimo estricto de proyecto. Atendemos desde consultas puntuales (revisión de un plano, una ampliación pequeña) hasta proyectos comerciales de gran escala.\n\nCuéntenos los detalles de su proyecto y le indicaremos si podemos ayudarle directamente o recomendarle la mejor vía para resolverlo.',
        'Trabajamos proyectos de todos los tamaños. Para encargos muy pequeños, es posible que el costo mínimo de gestión haga que la consultoría puntual sea la opción más eficiente en lugar de un proyecto completo.\n\nConverse con nuestro equipo y le daremos una recomendación honesta según su caso.'
      ]
    },

    /* ── Segunda opinión / revisión de planos de terceros ── */
    {
      section: 'servicios',
      keys: [
        'segunda opinion', 'segunda opinión', 'revisar planos de otro arquitecto',
        'peer review', 'revision independiente', 'revisión independiente',
        'ya tengo planos pueden revisarlos', 'revisar diseño existente',
        'revisar diseno existente', 'opinion tecnica', 'opinión técnica',
        'auditar mis planos'
      ],
      answer: [
        'Sí, ofrecemos servicio de **revisión y segunda opinión técnica** sobre planos elaborados por otros profesionales. Evaluamos cumplimiento normativo, coherencia estructural y posibles mejoras antes de que usted proceda a permisos o construcción.\n\nEste servicio es independiente y puede contratarse aunque no hayamos sido nosotros quienes diseñamos el proyecto original.',
        'Realizamos auditorías de diseño y cálculo de planos existentes, útiles cuando hay dudas sobre la seguridad estructural, posibles errores de un consultor anterior o antes de invertir en una construcción costosa.\n\nEnviamos un informe técnico con nuestras observaciones y recomendaciones.'
      ]
    },

    /* ── Estimación de costos de construcción ── */
    {
      section: 'servicios',
      keys: [
        'estimado de obra', 'costo de construccion', 'costo de construcción',
        'cuanto cuesta construir', 'cuánto cuesta construir', 'presupuesto de obra',
        'costo por pie cuadrado', 'costo por metro cuadrado', 'estimado de costos',
        'cuanto me costaria construir', 'cuánto me costaría construir'
      ],
      answer: [
        'Importante: el costo de **diseño** (nuestros honorarios) es independiente del costo de **construcción** de la obra. Podemos preparar un estimado preliminar de costos de construcción basado en metraje y nivel de acabados, aunque el monto final lo determina el contratista que ejecute la obra.\n\nEsto le ayuda a planificar su presupuesto desde la etapa de diseño.',
        'Como referencia general, el costo de construcción en Ontario varía ampliamente según el tipo de proyecto, acabados y ubicación, por lo que evitamos dar cifras genéricas que puedan inducir a error. En la etapa de diseño podemos ayudarle a estimar un rango realista y ajustar el alcance a su presupuesto.\n\nSi ya cuenta con un contratista, coordinamos con ellos para validar el presupuesto de obra.'
      ]
    },

    /* ── Relación con el contratista / ¿ustedes construyen? ── */
    {
      section: 'servicios',
      keys: [
        'contratista general', 'recomiendan contratista', 'ustedes construyen',
        'hacen la obra', 'son constructores', 'contratan la mano de obra',
        'quien construye', 'quién construye', 'tambien construyen',
        'también construyen', 'hacen la construccion', 'hacen la construcción'
      ],
      answer: [
        'Somos una firma de **diseño, ingeniería y gestión de permisos**; no ejecutamos la construcción directamente. Sin embargo, trabajamos de la mano con contratistas generales y podemos recomendarle profesionales de confianza si necesita uno para ejecutar la obra.\n\nDurante la construcción, también podemos brindar acompañamiento técnico para verificar que la obra siga lo indicado en los planos.',
        'No somos contratistas de construcción, pero colaboramos estrechamente con contratistas generales (GC) y subcontratistas especializados durante la fase de obra. Si usted ya tiene un contratista, coordinamos directamente con su equipo; si no, podemos sugerirle opciones de nuestra red de colaboradores.'
      ]
    },

    /* ── Cambios de alcance durante el proyecto ── */
    {
      section: 'soluciones',
      keys: [
        'cambio de alcance', 'adicionales', 'cambios durante el proyecto',
        'se puede modificar el diseño despues', 'se puede modificar el diseño después',
        'change order', 'costo extra por cambios', 'puedo hacer cambios despues',
        'puedo hacer cambios después', 'modificar el proyecto a mitad de camino'
      ],
      answer: [
        'Entendemos que los proyectos evolucionan. Los cambios menores dentro del alcance original suelen incluirse sin costo adicional; los cambios significativos (que impliquen rediseño, recálculo o nuevos trámites) se cotizan como adicional antes de ejecutarlos, siempre con su aprobación previa.\n\nNunca aplicamos cargos sorpresa: todo cambio se comunica y se acuerda con usted primero.',
        'Sí es posible modificar el diseño durante el proceso. Documentamos cada cambio solicitado y, si genera trabajo adicional relevante, le presentamos una cotización clara antes de proceder. Así usted mantiene control total sobre el alcance y el presupuesto.'
      ]
    },

    /* ── Cancelación y reembolso de anticipo ── */
    {
      section: 'contacto',
      keys: [
        'cancelar', 'cancelacion', 'cancelación', 'reembolso', 'reembolsan',
        'devuelven el anticipo', 'politica de cancelacion', 'política de cancelación',
        'me arrepenti', 'me arrepentí', 'no quiero continuar el proyecto',
        'quiero cancelar el contrato', 'puedo cancelar'
      ],
      answer: [
        'Entendemos que las circunstancias pueden cambiar. Si necesita cancelar un proyecto en curso, se factura el trabajo efectivamente realizado hasta ese momento y se devuelve la diferencia del anticipo no consumido, conforme a lo establecido en el contrato firmado.\n\nLe recomendamos hablar directamente con nuestro equipo para revisar su caso particular y encontrar la mejor solución.',
        'Las condiciones de cancelación se detallan en cada contrato, ya que dependen de la etapa del proyecto. En general, solo se cobra el avance real del trabajo entregado; el resto del anticipo se reembolsa.\n\nSi está considerando pausar o cancelar, contáctenos antes de tomar la decisión final: a veces una pausa temporal es mejor opción que una cancelación.'
      ]
    },

    /* ── Quejas y reclamos ── */
    {
      section: 'contacto',
      keys: [
        'queja', 'quejas', 'reclamo', 'reclamos', 'inconformidad',
        'no estoy satisfecho', 'no estoy satisfecha', 'mal servicio',
        'como reclamo', 'cómo reclamo', 'quiero poner una queja',
        'no quedé conforme', 'no quede conforme'
      ],
      answer: [
        'Lamentamos que su experiencia no haya cumplido sus expectativas. Por favor escríbanos directamente al **+1 (437) 830-2999** o a nuestro correo, detallando la situación, y un responsable revisará su caso de forma prioritaria.\n\nNos tomamos en serio cada comentario para mejorar continuamente.',
        'Puede presentar su queja o reclamo a través del formulario de Contacto, por correo electrónico o por teléfono. Le pedimos describir el proyecto y la situación específica para poder atenderlo con la mayor rapidez posible.\n\nSu satisfacción es importante para nosotros y buscaremos una solución justa.'
      ]
    },

    /* ── Soporte postventa / modificar planos antiguos ── */
    {
      section: 'servicios',
      keys: [
        'soporte despues de entregar', 'soporte después de entregar',
        'soporte postventa', 'actualizar planos despues', 'actualizar planos después',
        'modificar planos antiguos', 'planos viejos', 'planos de hace años',
        'tengo unos planos de hace tiempo', 'pueden actualizar un plano antiguo'
      ],
      answer: [
        'Sí, podemos revisar, actualizar o modificar planos antiguos (sean nuestros o de otro profesional) para adaptarlos a nuevas normativas, nuevos requerimientos o cambios en el proyecto.\n\nEnvíenos los planos existentes y le indicaremos el alcance necesario para ponerlos al día.',
        'Trabajamos con planos antiguos frecuentemente, sobre todo en renovaciones o cuando un permiso venció y debe renovarse. El primer paso es revisar la documentación existente para determinar qué tanto necesita actualizarse.'
      ]
    },

    /* ── Subdivisión de terrenos / desarrollo ── */
    {
      section: 'servicios',
      keys: [
        'subdivision', 'subdivisión', 'dividir terreno', 'severance',
        'land development', 'desarrollo de terrenos', 'lot severance',
        'consent application', 'fraccionar un lote', 'dividir mi lote',
        'quiero subdividir'
      ],
      answer: [
        'Brindamos asesoría en procesos de **subdivisión de terrenos (severance)** y desarrollo, incluyendo la preparación de planos de presentación y la coordinación con el municipio para la solicitud de "consent application".\n\nEste tipo de trámite suele requerir también un levantamiento topográfico, que coordinamos con especialistas externos si es necesario.',
        'Sí, ayudamos con proyectos de subdivisión y desarrollo de terrenos en Ontario, desde la viabilidad inicial hasta la documentación técnica requerida por el municipio. Cada caso depende de la zonificación vigente del terreno.'
      ]
    },

    /* ── ADU / Garden Suite / Segundo suite ── */
    {
      section: 'servicios',
      keys: [
        'adu', 'garden suite', 'coach house', 'suite secundaria',
        'casa adicional en el patio', 'second unit', 'segundo suite',
        'basement apartment', 'suite de jardin', 'suite de jardín',
        'in law suite', 'casita en el patio trasero', 'unidad accesoria'
      ],
      answer: [
        'Diseñamos **ADUs (Accessory Dwelling Units)**: garden suites, coach houses, suites en sótano y otras unidades secundarias, cada vez más solicitadas en Ontario para generar ingresos adicionales o alojar familiares.\n\nNos encargamos del diseño arquitectónico, el cumplimiento de zonificación y la gestión del permiso correspondiente.',
        'Las unidades secundarias (ADU) tienen requisitos específicos de zonificación y código de construcción según el municipio. Le ayudamos a evaluar la viabilidad en su propiedad y a diseñar la opción que mejor aproveche el espacio disponible.'
      ]
    },

    /* ── Edificios patrimoniales ── */
    {
      section: 'servicios',
      keys: [
        'edificio patrimonial', 'heritage building', 'casa historica', 'casa histórica',
        'designacion patrimonial', 'designación patrimonial', 'heritage permit',
        'edificio protegido', 'propiedad patrimonial', 'mi casa es patrimonio'
      ],
      answer: [
        'Tenemos experiencia trabajando con propiedades que cuentan con **designación patrimonial (heritage)**. Estos proyectos requieren un proceso adicional ante el comité de patrimonio del municipio, además de los permisos regulares de construcción.\n\nLe asesoramos sobre los requisitos específicos para preservar los elementos protegidos mientras desarrolla su proyecto.',
        'Las renovaciones en edificios patrimoniales exigen sensibilidad de diseño y conocimiento normativo particular. Coordinamos con las autoridades de patrimonio del municipio para que su proyecto sea aprobado sin comprometer el valor histórico de la propiedad.'
      ]
    },

    /* ── Accesibilidad / diseño universal ── */
    {
      section: 'servicios',
      keys: [
        'accesibilidad', 'aoda', 'diseño universal', 'diseno universal',
        'rampa', 'acceso para discapacitados', 'normativa de accesibilidad',
        'diseño accesible', 'diseno accesible', 'persona en silla de ruedas'
      ],
      answer: [
        'Incorporamos criterios de **accesibilidad y diseño universal** en nuestros proyectos, cumpliendo con la normativa AODA (Accessibility for Ontarians with Disabilities Act) cuando el tipo de edificación lo requiere: rampas, anchos de circulación, baños accesibles, entre otros elementos.\n\nSi su proyecto necesita adaptaciones específicas, podemos diseñarlas desde el inicio o incorporarlas a un proyecto existente.'
      ]
    },

    /* ── Estudio de suelos / geotécnico ── */
    {
      section: 'servicios',
      keys: [
        'estudio de suelos', 'geotecnico', 'geotécnico', 'sondeo',
        'capacidad portante', 'informe geotecnico', 'informe geotécnico',
        'soil report', 'estudio geotecnico', 'estudio geotécnico'
      ],
      answer: [
        'El estudio de suelos (geotécnico) generalmente lo realiza un laboratorio o ingeniero geotécnico especializado, con quienes coordinamos directamente para integrar sus resultados a nuestro diseño estructural y de cimentación.\n\nSi su proyecto lo requiere, podemos gestionar esa coordinación como parte de nuestro servicio integral.'
      ]
    },

    /* ── Ingeniería mecánica, eléctrica y plomería (MEP) ── */
    {
      section: 'servicios',
      keys: [
        'electrico', 'eléctrico', 'plomeria', 'plomería', 'mecanica', 'mecánica',
        'hvac', 'mep', 'instalaciones electricas', 'instalaciones eléctricas',
        'instalaciones sanitarias', 'aire acondicionado', 'calefaccion', 'calefacción',
        'ventilacion', 'ventilación', 'sistema electrico', 'sistema eléctrico'
      ],
      answer: [
        'Coordinamos el diseño de instalaciones **mecánicas, eléctricas y de plomería (MEP)** a través de nuestra red de ingenieros especialistas en cada disciplina, integrando sus planos con el diseño arquitectónico y estructural para que el proyecto sea coherente y cumpla con el código de construcción.\n\nSi su proyecto requiere estos servicios, los incluimos en la propuesta integral.'
      ]
    },

    /* ── Levantamiento topográfico ── */
    {
      section: 'servicios',
      keys: [
        'topografia', 'topografía', 'levantamiento topografico', 'levantamiento topográfico',
        'plano topografico', 'plano topográfico', 'survey', 'land survey',
        'mojones', 'linderos', 'plano de mensura'
      ],
      answer: [
        'El levantamiento topográfico (land survey) lo realiza un agrimensor licenciado (Ontario Land Surveyor); coordinamos directamente con profesionales de confianza para obtenerlo cuando su proyecto lo requiere, especialmente para permisos, subdivisiones o nuevas construcciones.'
      ]
    },

    /* ── Trabajos menores / handyman (fuera de alcance) ── */
    {
      section: 'servicios',
      keys: [
        'arreglo pequeño', 'arreglo pequeno', 'reparacion menor', 'reparación menor',
        'handyman', 'trabajo de un dia', 'trabajo de un día', 'cambiar una puerta',
        'pintar', 'trabajos menores', 'destapar una caneria', 'destapar una cañería'
      ],
      answer: [
        'Nuestro enfoque es el **diseño, la ingeniería y la gestión de permisos**, por lo que reparaciones menores tipo "handyman" (pintura, plomería puntual, arreglos del día a día) no forman parte de nuestros servicios directos. Sin embargo, si la reparación involucra un tema estructural o requiere planos, con gusto le ayudamos a evaluarlo.\n\nSi necesita un contratista para trabajos menores, podemos recomendarle opciones de nuestra red.'
      ]
    },

    /* ── Empleo / carreras / pasantías ── */
    {
      section: 'nosotros',
      keys: [
        'empleo', 'trabajo con ustedes', 'vacantes', 'carreras', 'pasantia',
        'pasantía', 'internship', 'enviar hoja de vida', 'cv', 'curriculum',
        'currículum', 'estan contratando', 'están contratando', 'oportunidades laborales'
      ],
      answer: [
        'Agradecemos su interés en formar parte de nuestro equipo. Si hay vacantes disponibles, las publicamos a través de nuestros canales oficiales. Puede enviarnos su hoja de vida por correo electrónico indicando el área de su interés (arquitectura, ingeniería, dibujo técnico, administración) y la conservaremos para futuras oportunidades.'
      ]
    },

    /* ── Redes sociales ── */
    {
      section: 'contacto',
      keys: [
        'redes sociales', 'instagram', 'facebook', 'linkedin', 'siguenos',
        'síguenos', 'perfil de instagram', 'tienen instagram', 'tienen facebook'
      ],
      answer: [
        'Puede encontrarnos en nuestras redes sociales oficiales; los enlaces están disponibles en esta misma página, generalmente en el pie de página (footer). Allí compartimos proyectos, novedades y contenido de interés sobre arquitectura e ingeniería.'
      ]
    },

    /* ── Formatos de archivo y revisiones incluidas ── */
    {
      section: 'servicios',
      keys: [
        'formato de archivo', 'dwg', 'cuantas revisiones incluye', 'cuántas revisiones incluye',
        'revisiones incluidas', 'cambios incluidos', 'archivos editables',
        'en que formato entregan', 'en qué formato entregan', 'entregan en pdf'
      ],
      answer: [
        'Entregamos los planos en los formatos que su proyecto requiera: **PDF** para revisión y presentación, **DWG** (AutoCAD) y/o **RVT** (Revit) si necesita archivos editables. El número de rondas de revisión incluidas se especifica en cada propuesta, y suele cubrir los ajustes razonables dentro del alcance original.'
      ]
    },

    /* ── Firma y sello profesional de los planos ── */
    {
      section: 'servicios',
      keys: [
        'quien firma los planos', 'quién firma los planos', 'sello profesional',
        'estampa', 'p eng stamp', 'firma de ingeniero', 'planos sellados',
        'planos firmados', 'necesito planos sellados', 'necesito planos firmados'
      ],
      answer: [
        'Los planos que requieren validez legal para permisos son firmados y sellados por un **arquitecto o ingeniero registrado en Ontario** (OAA / PEO), según la disciplina correspondiente. Este sello certifica que el diseño cumple con el código de construcción y las normas aplicables, y es indispensable para la aprobación municipal.'
      ]
    },

    /* ── Diferencia entre arquitecto e ingeniero ── */
    {
      section: 'servicios',
      keys: [
        'necesito arquitecto o ingeniero', 'diferencia entre arquitecto e ingeniero',
        'que profesional necesito', 'qué profesional necesito', 'quien debo contratar',
        'quién debo contratar', 'arquitecto vs ingeniero'
      ],
      answer: [
        'No se preocupe por decidirlo usted mismo: en muchos proyectos se necesitan ambos perfiles trabajando en conjunto. El **arquitecto** se enfoca en el diseño, la distribución de espacios y la estética; el **ingeniero estructural** garantiza la seguridad y resistencia de la edificación.\n\nCuéntenos su proyecto y nosotros le indicamos exactamente qué disciplinas se requieren — para eso ofrecemos el servicio integral.'
      ]
    },

    /* ── Primera consulta gratuita (detalle) ── */
    {
      section: 'contacto',
      keys: [
        'consulta gratis', 'primera consulta', 'consulta sin costo',
        'consulta gratuita', 'cobran por la consulta', 'la primera reunion es gratis',
        'la primera reunión es gratis', 'cuanto cuesta la consulta inicial'
      ],
      answer: [
        'Sí, la **primera consulta no tiene costo**. En ella conversamos sobre su proyecto, evaluamos su viabilidad general y le explicamos el proceso recomendado. A partir de esa conversación preparamos una propuesta técnica formal si usted decide continuar.',
        'No cobramos por la consulta inicial. Puede agendarla por este chat, por teléfono o por el formulario de contacto, sin ningún compromiso de continuar con el proyecto.'
      ]
    },

    /* ── Comunicación y seguimiento durante el proyecto ── */
    {
      section: 'soluciones',
      keys: [
        'como me mantienen informado', 'cómo me mantienen informado',
        'actualizaciones del proyecto', 'reportes de avance', 'reporte de avance',
        'comunicacion durante el proyecto', 'comunicación durante el proyecto',
        'gestor de proyecto', 'punto de contacto', 'tendre un encargado',
        'tendré un encargado'
      ],
      answer: [
        'Cada cliente cuenta con un **punto de contacto dedicado** durante todo el proyecto, quien le mantiene informado del avance, resuelve dudas y coordina las entregas. Según la complejidad del proyecto, programamos actualizaciones periódicas por correo, llamada o reunión virtual.\n\nNuestro objetivo es que usted nunca se quede sin saber en qué etapa está su proyecto.'
      ]
    },

    /* ── Identidad del asistente virtual ── */
    {
      section: 'nosotros',
      keys: [
        'eres un robot', 'eres un bot', 'eres una persona real', 'eres inteligencia artificial',
        'eres humano', 'con quien hablo', 'con quién hablo', 'eres una ia',
        'esto es automatico', 'esto es automático', 'hablo con un chatbot'
      ],
      answer: [
        'Soy el asistente virtual de **JPO Contracting Unlimited Inc.**, diseñado para orientarle de inmediato sobre nuestros servicios. Si en algún momento prefiere hablar con una persona de nuestro equipo, con gusto lo conecto: solo dígamelo o llame al **+1 (437) 830-2999**.'
      ]
    }

  ],

  /* ════════════════════════════════════════════════
     RESPUESTAS CUANDO EL BOT NO SABE RESPONDER
     Se elige UNA al azar cada vez.
  ════════════════════════════════════════════════ */
  fallback: [
    'Esa consulta requiere atención personalizada de nuestro equipo técnico. Le comparto el contacto directo para que lo resuelvan con gusto:',
    'No tengo información específica sobre eso en este momento, pero nuestro equipo puede ayudarle directamente:',
    'Para responderle con precisión sobre ese tema, lo mejor es hablar con uno de nuestros especialistas:',
    'Ese punto se sale de lo que tengo registrado aquí. Le dejo el contacto de nuestro equipo técnico:',
    'Quiero asegurarme de darle una respuesta correcta, así que lo mejor es conectarlo directamente con el equipo:',
    'No cuento con el detalle exacto para esa pregunta, pero puede comunicarse directamente así:',
    'Esa es una consulta más específica de la que puedo resolver por este canal. Le comparto el contacto del equipo:',
    'Para temas como este, nuestro equipo le dará una respuesta más completa. Aquí tiene el contacto directo:',
    'Aún no tengo esa información disponible, pero puede contactar directamente a nuestro equipo:',
    'Prefiero conectarlo con una persona del equipo para ese tema puntual. Aquí tiene su contacto:',
    'Hay preguntas que merecen una respuesta técnica directa. Le comparto el canal para hablar con un especialista:',
    'Para darle la información precisa que necesita, lo mejor es que uno de nuestros asesores le contacte:',
    'Ese nivel de detalle requiere que lo maneje directamente alguien de nuestro equipo. Aquí tiene cómo llegar a ellos:',
    'Mi función es orientarle, pero para este caso necesita hablar directamente con el equipo. Le comparto el contacto:',
    'Quiero que reciba la mejor respuesta posible, y para ese tema el equipo es quien mejor puede ayudarle:'
  ],

  /* ════════════════════════════════════════════════
     MENSAJES DE BIENVENIDA (20 variantes)
     Se elige uno al azar cada vez que el usuario
     abre el chat por primera vez en la sesión.
  ════════════════════════════════════════════════ */
  welcome: [
    'Gracias por comunicarse con JPO Contracting Unlimited Inc. Soy el asistente virtual, disponible para orientarle sobre nuestros servicios de arquitectura, ingeniería, shop drawings y permisos. Haga su consulta con confianza.',
    'Es un gusto atenderle. Soy el asistente virtual de JPO Contracting Unlimited Inc., especializado en servicios de construcción residencial y comercial. ¿En qué podemos ayudarle?',
    'Buen día. Soy el asistente virtual de JPO Contracting Unlimited Inc. Estoy aquí para orientarle sobre todo lo relacionado con nuestros servicios técnicos. No dude en preguntar.',
    'Hola. Este es el asistente virtual de JPO Contracting Unlimited Inc. Puede consultarme sobre diseño arquitectónico, ingeniería estructural, planos de taller o permisos de construcción.',
    'Le damos la bienvenida al canal de atención digital de JPO Contracting Unlimited Inc. Soy el asistente virtual y estoy disponible para guiarle. ¿En qué puedo ayudarle?',
    'Gracias por su visita. El asistente virtual de JPO Contracting Unlimited Inc. está a su disposición para orientarle sobre nuestros servicios. Haga su consulta, estaremos encantados de atenderle.',
    'Buenos días. Soy el asistente virtual de JPO Contracting Unlimited Inc. ¿Tiene alguna consulta sobre sus proyectos o nuestras capacidades técnicas?',
    'Bienvenida la oportunidad de atenderle. Soy el asistente virtual de JPO Contracting Unlimited Inc., aquí para guiarle sobre arquitectura, ingeniería y gestión de permisos.',
    'Hola, gracias por contactarnos. Este canal es atendido por el asistente virtual de JPO Contracting Unlimited Inc. Estoy aquí para orientarle. Proceda con su consulta.',
    'Qué bien contar con su visita. Soy el asistente virtual de JPO Contracting Unlimited Inc. y estoy aquí para orientarle sobre nuestros servicios de construcción y diseño.',
    'Buen día, gracias por comunicarse. El asistente virtual de JPO Contracting Unlimited Inc. está disponible. Puede consultar sobre servicios, proyectos o capacidades técnicas.',
    'Hola. Asistente virtual de JPO Contracting Unlimited Inc. al servicio. Estoy aquí para orientarle sobre arquitectura, ingeniería estructural y permisos. Adelante con su consulta.',
    'Gracias por visitarnos. Este es el asistente virtual de JPO Contracting Unlimited Inc., disponible para resolver sus dudas técnicas o comerciales.',
    'Le saludamos desde el canal digital de JPO Contracting Unlimited Inc. El asistente virtual está aquí para orientarle. No dude en realizar su consulta.',
    'Hola. El asistente virtual de JPO Contracting Unlimited Inc. tiene el agrado de atenderle. Estoy aquí para orientarle sobre servicios de construcción y tecnología.',
    'Gracias por elegir JPO Contracting Unlimited Inc. Soy el asistente virtual y estoy aquí para orientarle en todo lo que necesite sobre nuestros proyectos y soluciones técnicas.',
    'Es un placer atenderle. Asistente virtual de JPO Contracting Unlimited Inc. a su disposición para orientarle sobre nuestros servicios de arquitectura, ingeniería y permisos.',
    'Hola, bienvenida su consulta. Soy el asistente virtual de JPO Contracting Unlimited Inc., aquí para orientarle sobre servicios, proyectos y capacidades. Adelante.',
    'Qué gusto contar con su contacto. El asistente virtual de JPO Contracting Unlimited Inc. está disponible para orientarle. Haga su consulta y con gusto le atenderemos.',
    'Gracias por comunicarse con JPO Contracting Unlimited Inc. Soy el asistente virtual de la firma y estoy disponible para orientarle sobre cualquier servicio o proyecto.'
  ],

  /* ════════════════════════════════════════════════
     MENSAJES AL CAMBIAR DE MODO
  ════════════════════════════════════════════════ */
  modeIntros: {
    empresa: [
      'Volvemos al modo de consulta sobre la empresa. Pregúnteme sobre servicios, proyectos, arquitectura, ingeniería o cualquier aspecto de JPO Contracting Unlimited Inc.',
      'Perfecto. Continuamos con información sobre la empresa y nuestros servicios. ¿Qué desea saber?',
      'De vuelta al modo empresa. Puedo responderle sobre servicios, experiencia, cobertura geográfica, permisos y más.'
    ],
    general: [
      'Modo conversación general activado. Ahora puede preguntarme sobre tecnología, construcción, diseño o cualquier otro tema de interés.',
      'Cambiamos a modo general. Puede consultar sobre temas técnicos, tendencias del sector o cualquier otro asunto que le interese.',
      'Entramos al modo de conversación abierta. Tiene la palabra sobre el tema que prefiera.'
    ]
  },

  /* ════════════════════════════════════════════════
     CONTACTO REAL DE LA EMPRESA
  ════════════════════════════════════════════════ */
  contact: {
    name: 'JPO Contracting Unlimited Inc.',
    phoneDisplay: '+1 (437) 830-2999',
    phoneHref: '+14378302999',
    email: 'official@jpocontracting.com'
  }

};
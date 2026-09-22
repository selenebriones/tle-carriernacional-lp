/* ============================================================================
   Diccionario ES — copy definitivo del cliente. Fuente de verdad para la
   versión en español de la LP.
   ========================================================================== */

export default {
  meta: {
    title: 'TLE | Carrier Nacional — Transporte y Logística Integrales',
    description:
      'Mayor control, visibilidad y eficiencia para tu cadena de suministro a través de soluciones integrales de logística, transporte y almacenamiento.',
  },

  header: {
    ariaInicio: 'TLE — inicio',
    enlaces: [
      { href: '/#servicios', texto: 'Servicios' },
      { href: '/#cobertura', texto: 'Cobertura' },
      { href: '/#unidades', texto: 'Unidades' },
      { href: '/#proceso', texto: 'Proceso' },
    ],
    cta: 'Cotizar Ahora',
    ariaSecciones: 'Secciones del sitio',
    ariaAbrirMenu: 'Abrir menú',
    ariaCerrarMenu: 'Cerrar menú',
    switchLabel: 'EN',
    switchAria: 'Switch to English',
  },

  hero: {
    badge: 'Carrier Nacional',
    h1Pre: 'Tu operación nacional, diseñada para avanzar con ',
    h1Highlight: 'certeza',
    p1: 'Mayor control, visibilidad y eficiencia para tu cadena de suministro a través de soluciones integrales de logística, transporte y almacenamiento.',
    p2: 'Menos proveedores que coordinar. Un mismo estándar de seguridad y seguimiento.',
    ctaPrimary: 'Cotizar operación nacional',
    ctaSecondary: 'Ver servicios',
    imgAlt: 'Tractocamión TLE con plataforma en patio de maniobras',
  },

  certificaciones: {
    heading: 'Certificaciones',
    items: [
      { img: '/images/tle-certificaciones-02.webp', nombre: 'ISO 9001:2015', alto: 'h-24' },
      { img: '/images/tle-certificaciones-03.webp', nombre: 'Certificación CTPAT', alto: 'h-[3.6rem]' },
      { img: '/images/tle-certificaciones-01.webp', nombre: 'Transporte Limpio', alto: 'h-24' },
    ],
  },

  respaldo: {
    heading: 'Respaldo',
    items: [
      { icon: 'ph-truck', titulo: 'Flotilla Propia', copy: 'Control operativo y disponibilidad frente a requerimientos recurrentes.' },
      { icon: 'ph-broadcast', titulo: 'Trazabilidad en Tiempo Real', copy: 'Visibilidad y seguimiento continuo durante el traslado.' },
      { icon: 'ph-buildings', titulo: 'Respaldo Grupo ATC', copy: 'Solidez institucional y trayectoria logística.' },
    ],
  },

  integracion: {
    heading: 'Integración Logística',
    preguntaIzq: '¿Coordinar múltiples transportistas reduce tu eficiencia operativa?',
    preguntaDer: 'Soluciones de transporte diseñadas alrededor de tu operación.',
    pares: [
      {
        dolor: 'Gestión del tiempo deficiente con diversos proveedores y formatos de reporte.',
        solucion: 'Socio estratégico único para cadena de suministros en México.',
      },
      {
        dolor: 'Trazabilidad limitada de carga y rutas en tiempo real.',
        solucion: 'Trazabilidad completa en todos tus envíos.',
      },
      {
        dolor: 'Riesgos operativos por desacople normativo de seguridad.',
        solucion: 'Procesos certificados alineados a tus KPI.',
      },
    ],
    cta: 'Hablemos de tu operación',
  },

  servicios: {
    heading: 'Servicios Nacionales',
    items: [
      {
        icon: 'ph-package',
        titulo: 'Caja Seca',
        img: '/images/camion_caja_seca.webp',
        bullets: [
          'Protege tu mercancía frente a robos, daños físicos e inclemencias climáticas durante el traslado.',
          'Ideal para el movimiento continuo de mercancía general y no perecedera en rutas nacionales.',
          'Garantiza la máxima capacidad volumétrica y rentabilidad operativa por viaje.',
        ],
      },
      {
        icon: 'ph-stack-simple',
        titulo: 'Plataforma',
        img: '/images/camion_plataforma.webp',
        bullets: [
          'Facilita la maniobra de carga y descarga lateral o superior en mercancías no estandarizadas.',
          'Diseñada para el traslado de estructuras, acero, materiales de construcción y carga sobredimensionada.',
          'Maximiza la eficiencia operativa al adaptar la unidad a especificaciones volumétricas y de peso complejas.',
        ],
      },
      {
        icon: 'ph-train-regional',
        titulo: 'Intermodal',
        img: '/images/intermodal.webp',
        pos: 'object-left',
        bullets: [
          'Reduce costos logísticos en largas distancias y asegura capacidad continua.',
          'Ideal para grandes volúmenes y carga masiva en rutas nacionales e transfronterizas.',
          'Combina la flexibilidad del camión con la eficiencia económica y ambiental del tren.',
        ],
      },
      {
        icon: 'ph-shipping-container',
        titulo: 'Carga Contenerizada',
        img: '/images/tle-servicios-tn-02.webp',
        bullets: [
          'Simplifica la logística de importación y exportación reduciendo tiempos de permanencia en puerto.',
          'Diseñado para el arrastre y traslado seguro de contenedores marítimos e intermodales.',
          'Garantiza trazabilidad total en tiempo real y cumplimiento puntual en ventanas de entrega.',
        ],
      },
      {
        icon: 'ph-warning-diamond',
        titulo: 'HAZMAT',
        img: '/images/tle-servicios-tn-05.webp',
        bullets: [
          'Prevención de riesgos operativos y contingencias mediante el cumplimiento estricto de la normativa aplicable.',
          'Diseñado para el traslado seguro de sustancias, químicos y materiales clasificados como peligrosos.',
          'Certificación especializada, unidades autorizadas y operadores capacitados en protocolos de alta seguridad.',
        ],
      },
    ],
  },

  cobertura: {
    heading: 'Cobertura y Conectividad',
    sub1: 'Conexión directa con los principales corredores y centros industriales de México.',
    sub2: 'Operamos estratégicamente en las zonas clave que mueven el país, conectando plantas, centros de distribución y los principales puertos marítimos con trazabilidad continua.',
    mapaAlt: 'Mapa de México con la cobertura nacional de TLE resaltada y los marcadores de sus oficinas, hubs y puertos',
    mapaCaption: 'Estados con presencia operativa, hubs y conexión portuaria directa.',
    items: [
      {
        icon: 'ph-buildings',
        titulo: 'Oficinas y Hubs',
        lista: [
          'Guadalupe, N.L. (Corporativo)',
          'Nuevo Laredo, Tamps.',
          'Ramos Arizpe, Coah.',
          'Salamanca, Gto.',
          'San Luis Potosí, S.L.P.',
          'Silao, Gto.',
        ],
      },
      {
        icon: 'ph-anchor',
        titulo: 'Conexión Portuaria Directa',
        lista: ['Altamira, Tamps.', 'Lázaro Cárdenas, Mich.', 'Manzanillo, Col.'],
      },
      {
        icon: 'ph-chart-line-up',
        titulo: 'Impacto Logístico',
        copy: 'Presencia en los estados responsables del 66% del PIB industrial de México.',
      },
    ],
    cta: 'Cotiza tu operación nacional',
  },

  cotizacionCobertura: {
    titulo: '¿Tu ruta está en nuestra red?',
    copy: 'Si tu origen y destino aparecen en el mapa, podemos cotizarte. Déjanos los datos de tu operación y un especialista te contacta.',
  },

  cotizacionDefault: {
    titulo: 'Solicita una cotización nacional',
    copy: 'Cuéntanos lo necesario para entender tu operación. Un especialista revisará la información y se pondrá en contacto contigo conforme al proceso comercial de TLE.',
  },

  unidades: {
    heading: 'Unidades',
    ariaTablist: 'Tipos de unidad',
    items: [
      { icon: 'ph-package', nombre: "Caja Seca 53'", img: '/images/tle-unidades-01.webp', alt: 'Tractocamión TLE con caja seca de 53 pies' },
      { icon: 'ph-stack-simple', nombre: "Full de Plataformas 40'", img: '/images/tle-servicios-tn-03.webp', alt: 'Plataforma TLE con carga sobredimensionada' },
      { icon: 'ph-truck-trailer', nombre: "Full de Cajas Secas 40'", img: '/images/tle-unidades-03.webp', alt: 'Full TLE con dos cajas secas de 40 pies en carretera' },
      { icon: 'ph-tent', nombre: "Encortinados 40'", img: '/images/plataforma.webp', alt: 'Unidad TLE encortinada de 40 pies' },
      { icon: 'ph-truck', nombre: 'Nodrizas', img: '/images/nodriza.png', alt: 'Flotilla de nodrizas TLE para transporte de automóviles' },
    ],
  },

  proceso: {
    heading: 'Proceso Operativo',
    items: [
      { n: '01', titulo: 'Entendemos tu operación', copy: 'Analizamos tus necesidades de carga, rutas, frecuencias y requerimientos específicos.' },
      { n: '02', titulo: 'Diseñamos la solución', copy: 'Asignamos la modalidad, unidad y esquema de seguimiento óptimo para tu traslado.' },
      { n: '03', titulo: 'Coordinamos y transportamos', copy: 'Ejecutamos la ruta con unidades operadas bajo estándares de seguridad.' },
      { n: '04', titulo: 'Damos seguimiento', copy: 'Monitoreamos el trayecto con tecnología de rastreo y comunicación oportuna.' },
      { n: '05', titulo: 'Medimos el desempeño', copy: 'Evaluamos los indicadores de entrega y documentación para impulsar la mejora continua.' },
    ],
  },

  sectores: {
    heading: 'Sectores Atendidos',
    items: [
      { icon: 'ph-car', titulo: 'Automotriz', copy: 'Coordinación logística con disciplina operativa para integrarse a cadenas de suministro con tiempos de entrega estrictos.' },
      { icon: 'ph-factory', titulo: 'Manufactura e Industria', copy: 'Capacidad de respuesta y continuidad en el traslado de insumos, materias primas y producto terminado dentro del país.' },
      { icon: 'ph-storefront', titulo: 'Retail y Comercio Mayorista', copy: 'Cumplimiento de esquemas de entrega y coordinación estratégica para el abastecimiento de centros de distribución.' },
      { icon: 'ph-first-aid-kit', titulo: 'Farmacéutica', copy: 'Cumplimiento de esquemas de entrega y coordinación estratégica para el abastecimiento de centros de distribución.' },
      { icon: 'ph-cpu', titulo: 'High Tech, Inteligencia Artificial y Data Centers', copy: 'Coordinación logística con disciplina operativa.' },
      { icon: 'ph-warning-diamond', titulo: 'HAZMAT', copy: 'Capacidad de respuesta y continuidad en el traslado de insumos, materias primas y producto terminado dentro del país.' },
      { icon: 'ph-bowl-food', titulo: 'Grado Alimenticio', copy: 'Unidades equipadas con monitoreo de temperatura y estricto apego a normas de inocuidad.' },
    ],
  },

  seguridad: {
    heading: 'Seguridad y Tecnología',
    colRecurso: 'Recurso / Tecnología',
    colBeneficio: 'Beneficio para tu operación',
    items: [
      {
        recurso: 'GPS y Trazabilidad 24/7', recursoDetalle: 'Rastreo activo en todo el trayecto.',
        beneficio: 'Visibilidad total', beneficioDetalle: 'Sabes dónde está tu carga en todo momento.',
      },
      {
        recurso: 'Sistema TMS', recursoDetalle: 'Gestión digital de tiempos y estatus.',
        beneficio: 'Control unificado', beneficioDetalle: 'Consulta tu información logística en un solo lugar.',
      },
      {
        recurso: 'Métricas y KPIs', recursoDetalle: 'Reportes de puntualidad (OTIF) y evidencias.',
        beneficio: 'Evidencia clara', beneficioDetalle: 'Datos reales para medir desempeño.',
      },
      {
        recurso: 'Certificación CTPAT', recursoDetalle: 'Protocolos de seguridad en la cadena de suministro.',
        beneficio: 'Menos riesgo', beneficioDetalle: 'Carga resguardada bajo estándares internacionales.',
      },
      {
        recurso: 'ISO 9001:2015', recursoDetalle: 'Procesos de servicio estandarizados.',
        beneficio: 'Certeza operativa', beneficioDetalle: 'Calidad constante en cada ruta.',
      },
    ],
  },

  institucional: {
    heading: 'Respaldo Institucional',
    quote:
      'En TLE respaldamos la operación de nuestros clientes combinando experiencia logística, capacidad técnica y evolución tecnológica. Nos enfocamos en construir relaciones a largo plazo basadas en el cumplimiento, la transparencia y el control de cada traslado.',
    quoteFooter: '— Solidez e infraestructura respaldada por Grupo ATC.',
    items: [
      { anios: '2025, 2024, 2019 & 2018', premio: 'Outstanding Performance Mexico Truckload', logo: '/images/stelantis.webp', marca: 'Stellantis' },
      { anios: '2025, 2023 & 2018', premio: 'GM Supplier of the Year', logo: '/images/logo_gm.png', marca: 'General Motors' },
      { anios: '11°', premio: 'Carrier Excellence Awards AAA Category', logo: '/images/penske.webp', marca: 'Penske' },
      { anios: '2025', premio: 'Recognition for Shared Excellence', logo: '/images/dsv_logo.webp', marca: 'DSV' },
      { anios: '2021', premio: 'Ever Better and AAA Customer Award', logo: '/images/ryder.webp', marca: 'Ryder' },
      { anios: '2020', premio: 'Best Carrier Award', logo: '/images/constellation.webp', marca: 'Constellation Brands' },
      { anios: '2018', premio: 'Golden Carrier', logo: '/images/maersk.webp', marca: 'Maersk' },
    ],
  },

  footer: {
    h2: 'Mantén tu operación bajo control con una solución logística a tu medida',
    p: 'Suma la capacidad de flotilla propia, seguridad certificada y seguimiento en tiempo real a tus traslados nacionales.',
    copyright: '© 2026 TLE Transportes y Logística Integrales. Todos los derechos reservados.',
  },

  gracias: {
    title: 'Gracias | TLE Carrier Nacional',
    description: 'Recibimos tu solicitud de cotización. Un especialista de TLE te contactará para revisar tu operación.',
    h1Pre: 'Gracias, recibimos tu ',
    h1Highlight: 'solicitud',
    p: 'Un especialista de TLE revisará la información de tu operación y se pondrá en contacto contigo.',
    cta: 'Volver al inicio',
  },
};

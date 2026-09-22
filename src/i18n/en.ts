/* ============================================================================
   EN dictionary — professional translation of the client's Spanish copy.
   Mirrors the structure of es.ts 1:1; keep both in sync when content changes.
   ========================================================================== */

export default {
  meta: {
    title: 'TLE | National Carrier — Integrated Transportation & Logistics',
    description:
      'Greater control, visibility, and efficiency for your supply chain through integrated logistics, transportation, and warehousing solutions.',
  },

  header: {
    ariaInicio: 'TLE — home',
    enlaces: [
      { href: '/en/#servicios', texto: 'Services' },
      { href: '/en/#cobertura', texto: 'Coverage' },
      { href: '/en/#unidades', texto: 'Fleet' },
      { href: '/en/#proceso', texto: 'Process' },
    ],
    cta: 'Get a Quote',
    ariaSecciones: 'Site sections',
    ariaAbrirMenu: 'Open menu',
    ariaCerrarMenu: 'Close menu',
    switchLabel: 'ES',
    switchAria: 'Cambiar a español',
  },

  hero: {
    badge: 'National Carrier',
    h1Pre: 'Your national operation, engineered to move forward with ',
    h1Highlight: 'certainty',
    p1: 'Greater control, visibility, and efficiency for your supply chain through integrated logistics, transportation, and warehousing solutions.',
    p2: 'Fewer providers to coordinate. One consistent standard of security and tracking.',
    ctaPrimary: 'Quote your national operation',
    ctaSecondary: 'View services',
    imgAlt: 'TLE tractor-trailer with a flatbed in a maneuvering yard',
  },

  certificaciones: {
    heading: 'Certifications',
    items: [
      { img: '/images/tle-certificaciones-02.webp', nombre: 'ISO 9001:2015', alto: 'h-24' },
      { img: '/images/tle-certificaciones-03.webp', nombre: 'CTPAT Certification', alto: 'h-[3.6rem]' },
      { img: '/images/tle-certificaciones-01.webp', nombre: 'Clean Transport', alto: 'h-24' },
    ],
  },

  respaldo: {
    heading: 'Our Strengths',
    items: [
      { icon: 'ph-truck', titulo: 'Company-Owned Fleet', copy: 'Operational control and availability for recurring requirements.' },
      { icon: 'ph-broadcast', titulo: 'Real-Time Traceability', copy: 'Continuous visibility and tracking throughout transit.' },
      { icon: 'ph-buildings', titulo: 'Backed by Grupo ATC', copy: 'Institutional strength and a proven logistics track record.' },
    ],
  },

  integracion: {
    heading: 'Logistics Integration',
    preguntaIzq: 'Does coordinating multiple carriers slow down your operation?',
    preguntaDer: 'Transportation solutions built around your operation.',
    pares: [
      {
        dolor: 'Wasted time managing multiple providers and inconsistent reporting formats.',
        solucion: 'A single strategic partner for your supply chain across Mexico.',
      },
      {
        dolor: 'Limited real-time visibility into cargo and routes.',
        solucion: 'Full traceability across every shipment.',
      },
      {
        dolor: 'Operational risk from inconsistent safety compliance.',
        solucion: 'Certified processes aligned to your KPIs.',
      },
    ],
    cta: "Let's talk about your operation",
  },

  servicios: {
    heading: 'National Services',
    items: [
      {
        icon: 'ph-package',
        titulo: 'Dry Van',
        img: '/images/camion_caja_seca.webp',
        bullets: [
          'Protects your cargo from theft, physical damage, and weather exposure during transit.',
          'Ideal for the continuous movement of general, non-perishable freight on national routes.',
          'Ensures maximum volumetric capacity and operating profitability per trip.',
        ],
      },
      {
        icon: 'ph-stack-simple',
        titulo: 'Flatbed',
        img: '/images/camion_plataforma.webp',
        bullets: [
          'Enables side or top loading and unloading for non-standardized cargo.',
          'Built for hauling structural steel, construction materials, and oversized loads.',
          'Maximizes operational efficiency by adapting the unit to complex volume and weight specifications.',
        ],
      },
      {
        icon: 'ph-train-regional',
        titulo: 'Intermodal',
        img: '/images/intermodal.webp',
        pos: 'object-left',
        bullets: [
          'Reduces logistics costs on long-haul routes and ensures continuous capacity.',
          'Ideal for high volumes and bulk cargo on domestic and cross-border routes.',
          'Combines the flexibility of trucking with the economic and environmental efficiency of rail.',
        ],
      },
      {
        icon: 'ph-shipping-container',
        titulo: 'Containerized Cargo',
        img: '/images/tle-servicios-tn-02.webp',
        bullets: [
          'Simplifies import and export logistics by reducing port dwell time.',
          'Designed for the safe drayage and transport of ocean and intermodal containers.',
          'Ensures full real-time traceability and on-time compliance with delivery windows.',
        ],
      },
      {
        icon: 'ph-warning-diamond',
        titulo: 'HAZMAT',
        img: '/images/tle-servicios-tn-05.webp',
        bullets: [
          'Prevents operational risks and incidents through strict compliance with applicable regulations.',
          'Designed for the safe transport of substances, chemicals, and materials classified as hazardous.',
          'Specialized certification, authorized units, and drivers trained in high-security protocols.',
        ],
      },
    ],
  },

  cobertura: {
    heading: 'Coverage & Connectivity',
    sub1: "Direct connection to Mexico's main industrial corridors and hubs.",
    sub2: 'We operate strategically across the key regions that move the country, connecting plants, distribution centers, and major seaports with continuous traceability.',
    mapaAlt: "Map of Mexico highlighting TLE's national coverage with markers for its offices, hubs, and ports",
    mapaCaption: 'States with operational presence, hubs, and direct port connections.',
    items: [
      {
        icon: 'ph-buildings',
        titulo: 'Offices & Hubs',
        lista: [
          'Guadalupe, N.L. (Headquarters)',
          'Nuevo Laredo, Tamps.',
          'Ramos Arizpe, Coah.',
          'Salamanca, Gto.',
          'San Luis Potosí, S.L.P.',
          'Silao, Gto.',
        ],
      },
      {
        icon: 'ph-anchor',
        titulo: 'Direct Port Connections',
        lista: ['Altamira, Tamps.', 'Lázaro Cárdenas, Mich.', 'Manzanillo, Col.'],
      },
      {
        icon: 'ph-chart-line-up',
        titulo: 'Logistics Impact',
        copy: "Presence in the states that account for 66% of Mexico's industrial GDP.",
      },
    ],
    cta: 'Get a quote for your national operation',
  },

  cotizacionCobertura: {
    titulo: 'Is your route within our network?',
    copy: "If your origin and destination appear on the map, we can quote your shipment. Share your operation's details and a specialist will contact you.",
  },

  cotizacionDefault: {
    titulo: 'Request a national freight quote',
    copy: "Tell us what we need to understand your operation. A specialist will review your information and get in touch with you following TLE's commercial process.",
  },

  unidades: {
    heading: 'Fleet & Equipment',
    ariaTablist: 'Equipment types',
    items: [
      { icon: 'ph-package', nombre: "53' Dry Van", img: '/images/tle-unidades-01.webp', alt: 'TLE tractor-trailer with a 53-foot dry van' },
      { icon: 'ph-stack-simple', nombre: "40' Flatbed Doubles", img: '/images/tle-servicios-tn-03.webp', alt: 'TLE flatbed carrying oversized cargo' },
      { icon: 'ph-truck-trailer', nombre: "40' Dry Van Doubles", img: '/images/tle-unidades-03.webp', alt: 'TLE doubles with two 40-foot dry vans on the highway' },
      { icon: 'ph-tent', nombre: "40' Curtain-Side Trailers", img: '/images/plataforma.webp', alt: '40-foot TLE curtain-side trailer' },
      { icon: 'ph-truck', nombre: 'Car Carriers', img: '/images/nodriza.png', alt: 'TLE car-carrier fleet for vehicle transport' },
    ],
  },

  proceso: {
    heading: 'Operating Process',
    items: [
      { n: '01', titulo: 'We understand your operation', copy: 'We analyze your cargo needs, routes, frequencies, and specific requirements.' },
      { n: '02', titulo: 'We design the solution', copy: 'We assign the mode, unit, and tracking scheme best suited to your shipment.' },
      { n: '03', titulo: 'We coordinate and transport', copy: 'We execute the route with units operated under strict safety standards.' },
      { n: '04', titulo: 'We track and follow up', copy: 'We monitor the journey with tracking technology and timely communication.' },
      { n: '05', titulo: 'We measure performance', copy: 'We evaluate delivery and documentation metrics to drive continuous improvement.' },
    ],
  },

  sectores: {
    heading: 'Industries We Serve',
    items: [
      { icon: 'ph-car', titulo: 'Automotive', copy: 'Logistics coordination with operational discipline to integrate into supply chains with strict delivery windows.' },
      { icon: 'ph-factory', titulo: 'Manufacturing & Industry', copy: 'Responsiveness and continuity in moving supplies, raw materials, and finished goods nationwide.' },
      { icon: 'ph-storefront', titulo: 'Retail & Wholesale', copy: 'Delivery-schedule compliance and strategic coordination to supply distribution centers.' },
      { icon: 'ph-first-aid-kit', titulo: 'Pharmaceutical', copy: 'Delivery-schedule compliance and strategic coordination to supply distribution centers.' },
      { icon: 'ph-cpu', titulo: 'High Tech, AI & Data Centers', copy: 'Logistics coordination with operational discipline.' },
      { icon: 'ph-warning-diamond', titulo: 'HAZMAT', copy: 'Responsiveness and continuity in moving supplies, raw materials, and finished goods nationwide.' },
      { icon: 'ph-bowl-food', titulo: 'Food Grade', copy: 'Units equipped with temperature monitoring and strict adherence to food-safety standards.' },
    ],
  },

  seguridad: {
    heading: 'Security & Technology',
    colRecurso: 'Resource / Technology',
    colBeneficio: 'Benefit for your operation',
    items: [
      {
        recurso: '24/7 GPS & Traceability', recursoDetalle: 'Active tracking throughout the entire route.',
        beneficio: 'Full visibility', beneficioDetalle: 'You always know where your cargo is.',
      },
      {
        recurso: 'TMS Platform', recursoDetalle: 'Digital management of timelines and status.',
        beneficio: 'Unified control', beneficioDetalle: 'Access all your logistics information in one place.',
      },
      {
        recurso: 'Metrics & KPIs', recursoDetalle: 'On-time delivery (OTIF) reports and documented evidence.',
        beneficio: 'Clear evidence', beneficioDetalle: 'Real data to measure performance.',
      },
      {
        recurso: 'CTPAT Certification', recursoDetalle: 'Security protocols across the supply chain.',
        beneficio: 'Lower risk', beneficioDetalle: 'Cargo protected under international standards.',
      },
      {
        recurso: 'ISO 9001:2015', recursoDetalle: 'Standardized service processes.',
        beneficio: 'Operational certainty', beneficioDetalle: 'Consistent quality on every route.',
      },
    ],
  },

  institucional: {
    heading: 'Institutional Backing',
    quote:
      "At TLE, we support our clients' operations by combining logistics expertise, technical capability, and technological evolution. We focus on building long-term relationships based on compliance, transparency, and control over every shipment.",
    quoteFooter: '— Strength and infrastructure backed by Grupo ATC.',
    items: [
      { anios: '2025, 2024, 2019 & 2018', premio: 'Outstanding Performance Mexico Truckload', logo: '/images/stelantis.webp', marca: 'Stellantis' },
      { anios: '2025, 2023 & 2018', premio: 'GM Supplier of the Year', logo: '/images/logo_gm.png', marca: 'General Motors' },
      { anios: '11th', premio: 'Carrier Excellence Awards AAA Category', logo: '/images/penske.webp', marca: 'Penske' },
      { anios: '2025', premio: 'Recognition for Shared Excellence', logo: '/images/dsv_logo.webp', marca: 'DSV' },
      { anios: '2021', premio: 'Ever Better and AAA Customer Award', logo: '/images/ryder.webp', marca: 'Ryder' },
      { anios: '2020', premio: 'Best Carrier Award', logo: '/images/constellation.webp', marca: 'Constellation Brands' },
      { anios: '2018', premio: 'Golden Carrier', logo: '/images/maersk.webp', marca: 'Maersk' },
    ],
  },

  footer: {
    h2: 'Keep your operation under control with a logistics solution built for you',
    p: 'Add company-owned fleet capacity, certified security, and real-time tracking to your national shipments.',
    copyright: '© 2026 TLE Transportes y Logística Integrales. All rights reserved.',
  },

  gracias: {
    title: 'Thank You | TLE National Carrier',
    description: "We received your quote request. A TLE specialist will contact you to review your operation.",
    h1Pre: 'Thank you, we received your ',
    h1Highlight: 'request',
    p: "A TLE specialist will review your operation's information and get in touch with you.",
    cta: 'Back to home',
  },
};

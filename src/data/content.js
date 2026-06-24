// ============================================================
//  MeneuLab :: contenido de la landing
//  Todo el texto vive aquí para que editar sea fácil.
//  Los PLACEHOLDERS están marcados con  // TODO  para que
//  los encuentres rápido (logo, wordmark, datos de contacto,
//  servicios, complementos y portafolio).
// ============================================================

// ---- MARCA / PLACEHOLDERS -------------------------------------------------
export const brand = {
  // TODO: reemplazar por el wordmark final (texto o <img/> del logotipo).
  wordmark: 'MeneuLab',

  // TODO: reemplazar la ruta por el archivo real del logo (svg/png en /public).
  // Si lo dejas vacío (''), se muestra el placeholder de la marca de chispa.
  logoSrc: '',
  logoAlt: 'Logo de MeneuLab',

  tagline: 'Redes sociales sin humo',
  yearsExperience: '6',
};

// ---- CONTACTO / PLACEHOLDERS ----------------------------------------------
export const contact = {
  // TODO: reemplazar por los datos reales antes de publicar.
  email: 'hola@meneulab.mx', // TODO
  instagram: '@meneulab', // TODO
  instagramUrl: 'https://instagram.com/meneulab', // TODO
  whatsapp: '+52 55 0000 0000', // TODO
  whatsappUrl: 'https://wa.me/520000000000', // TODO
  city: 'Ciudad de México',
};

// ---- NAVEGACIÓN -----------------------------------------------------------
export const nav = [
  { label: 'Qué hacemos', href: '#que-hacemos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Cómo trabajamos', href: '#como-trabajamos' },
  { label: 'Contacto', href: '#contacto' },
];

// ---- HERO -----------------------------------------------------------------
export const hero = {
  eyebrow: 'Estrategia de comunicación digital',
  headlineTop: 'Tus redes no necesitan',
  headlineAccent: 'magia.',
  headlineBottom: 'Necesitan método.',
  sub: 'Manejamos tus redes desde un lugar honesto y cercano. Nada de fórmulas milagrosas ni crecimientos inflados: probamos, medimos y ajustamos, como en un laboratorio.',
  ctaPrimary: 'Trabajemos juntxs',
  ctaSecondary: 'Ver cómo pensamos',
};

// ---- QUÉ HACEMOS / PROBLEMA ----------------------------------------------
export const about = {
  eyebrow: 'Sobre el negocio',
  title: 'Qué hacemos',
  cards: [
    {
      title: 'Qué hace MeneuLab',
      body: 'Somos un negocio especializado en el manejo de redes sociales con 6 años de experiencia. Nos metemos hasta la cocina para entender las necesidades de tu negocio y trabajar contigo hacia objetivos concretos, desde una perspectiva realista. Entendemos las redes como un laboratorio: probar, medir y ajustar.',
    },
    {
      title: 'El problema que resolvemos',
      body: 'Allá afuera hay un sinfín de ofertas que prometen resultados inflados y crecimiento acelerado. Muchas agencias trabajan con equipos enormes, lejos de la realidad de tu negocio: aparecen de vez en cuando y no te enteras de nada. Nosotros hacemos lo contrario: cerca, claro y con una estrategia accesible.',
    },
  ],
};

// ---- PALABRAS QUE NOS IDENTIFICAN / NO ------------------------------------
export const words = {
  eyebrow: 'Cómo sonamos',
  yesTitle: 'Palabras que nos identifican',
  noTitle: 'Frases que jamás vas a leer aquí',
  yes: [
    'Cercanía',
    'Honestidad',
    'Laboratorio',
    'Probar y ajustar',
    'Estrategia',
    'Juntxs',
    'Sin humo',
    'Accesible',
    'Resultados concretos',
  ],
  no: [
    'Crece rápido',
    'Triplica tus ventas',
    'Vuélvete viral con este audio',
    'Resultados garantizados en 30 días',
    'Más seguidores = más ventas',
    'Fórmulas mágicas para el éxito',
  ],
};

// ---- PILARES DE CONTENIDO -------------------------------------------------
export const pillars = {
  eyebrow: 'Pilares de contenido',
  title: 'Cómo construimos tu presencia',
  intro: 'Las categorías clave que ordenan todo lo que se publica.',
  items: [
    {
      tag: 'Opinión',
      body: 'Puntos de vista sobre lo que pasa en redes: qué funciona, qué no y qué pensamos de las tendencias. Sirve para posicionar tu marca y que no se vea desconectada de la realidad.',
      accent: 'green',
    },
    {
      tag: 'Autoridad',
      body: 'Seis años de errores, aciertos y aprendizajes trabajando con clientxs. Compartimos lo que de verdad sirve: estrategia de marca y criterio práctico, no teoría de manual.',
      accent: 'plum',
    },
    {
      tag: 'Comunidad',
      body: 'Memes, referencias de cultura pop y conversaciones que hacen que la gente diga "sí soy". Conectamos desde el humor y construimos pertenencia alrededor de tu marca.',
      accent: 'pink',
    },
    {
      tag: 'Ventas',
      body: 'Lo que deja claro tu diferencial: servicios, casos reales y resultados honestos. Sin inflar números ni prometer milagros. Atraemos clientxs demostrando que aquí hay chamba.',
      accent: 'yellow',
    },
  ],
};

// ---- SERVICIOS / PLACEHOLDERS ---------------------------------------------
// 5 servicios, cada uno con 7 complementos (add-ons).
// TODO: reemplazar nombres, descripciones y complementos por los reales.
//       Las descripciones de los complementos se llenan después (addOns[i].desc).
const makeAddOns = (count = 7) =>
  Array.from({ length: count }, (_, i) => ({
    name: `Complemento ${i + 1}`, // TODO
    desc: '', // TODO: descripción pendiente
  }));

export const services = {
  eyebrow: 'Servicios',
  title: 'Lo que ofrecemos',
  intro:
    'Cinco formas de trabajar tus redes. Cada servicio se puede ampliar con complementos. (Texto editable.)',
  addOnsLabel: 'Complementos',
  items: Array.from({ length: 5 }, (_, i) => ({
    name: `Servicio 0${i + 1}`, // TODO
    desc: 'Descripción del servicio (pendiente).', // TODO
    addOns: makeAddOns(7),
  })),
};

// ---- CÓMO TRABAJAMOS / MÉTODO ---------------------------------------------
export const method = {
  eyebrow: 'Cómo trabajamos',
  title: 'Mentalidad de laboratorio',
  body: 'No prometemos fórmulas mágicas. Ponemos sobre la mesa 6 años de experiencia y una forma de trabajar de laboratorio: probar, medir y ajustar. Construimos la estrategia contigo, no desde una tarima.',
  steps: [
    {
      n: '01',
      title: 'Probar',
      body: 'Entendemos el ADN de tu negocio y lanzamos hipótesis de contenido con intención.',
    },
    {
      n: '02',
      title: 'Medir',
      body: 'Revisamos qué funciona de verdad, sin métricas de vanidad ni números inflados.',
    },
    {
      n: '03',
      title: 'Ajustar',
      body: 'Afinamos la estrategia con lo aprendido. Cerca, claro y de forma constante.',
    },
  ],
};

// ---- PORTAFOLIO / PLACEHOLDERS --------------------------------------------
// TODO: reemplazar por proyectos reales. imageSrc vacío muestra un placeholder.
export const portfolio = {
  eyebrow: 'Portafolio',
  title: 'Trabajos recientes',
  intro:
    'Una muestra de las marcas con las que hemos trabajado. (Placeholder, sustituir por casos reales.)',
  items: Array.from({ length: 6 }, (_, i) => ({
    name: `Proyecto 0${i + 1}`, // TODO
    category: 'Categoría', // TODO
    imageSrc: '', // TODO: ruta de imagen en /public
  })),
};

// ---- CTA / CONTACTO -------------------------------------------------------
export const cta = {
  eyebrow: 'Construyamos algo que sí tenga sentido',
  title: 'Cuéntanos de tu negocio',
  body: 'Nos metemos hasta la cocina para entenderlo y proponerte una estrategia realista y accesible. Sin compromiso y sin humo.',
  button: 'Escríbenos',
};

export const footer = {
  blurb: 'Manejo de redes sociales con mentalidad de laboratorio. Probar, medir y ajustar.',
  rightsPrefix: 'MeneuLab',
};

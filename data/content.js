// ============================================================
//  MeneuLab :: contenido de la landing
//  Todo el texto vive aqui para que editar sea facil.
//  Los PLACEHOLDERS estan marcados con  // TODO  para que
//  los encuentres rapido (logo, wordmark, datos de contacto,
//  servicios, complementos y portafolio).
// ============================================================

// ---- MARCA / PLACEHOLDERS -------------------------------------------------
export const brand = {
  // TODO: reemplazar por el wordmark final (texto o <img/> del logotipo).
  wordmark: 'MeneuLab',

  // TODO: reemplazar la ruta por el archivo real del logo (svg/png en /public).
  // Si lo dejas vacio (''), se muestra el placeholder de la marca de chispa.
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
  city: 'Ciudad de Mexico',
};

// ---- NAVEGACION -----------------------------------------------------------
export const nav = [
  { label: 'Que hacemos', href: '#que-hacemos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Como trabajamos', href: '#como-trabajamos' },
  { label: 'Contacto', href: '#contacto' },
];

// ---- HERO -----------------------------------------------------------------
export const hero = {
  eyebrow: 'Estrategia de comunicacion digital',
  headlineTop: 'Tus redes no necesitan',
  headlineAccent: 'magia.',
  headlineBottom: 'Necesitan metodo.',
  sub: 'Manejamos tus redes desde un lugar honesto y cercano. Nada de formulas milagrosas ni crecimientos inflados: probamos, medimos y ajustamos, como en un laboratorio.',
  ctaPrimary: 'Trabajemos juntxs',
  ctaSecondary: 'Ver como pensamos',
};

// ---- QUE HACEMOS / PROBLEMA ----------------------------------------------
export const about = {
  eyebrow: 'Sobre el negocio',
  title: 'Que hacemos',
  cards: [
    {
      title: 'Que hace MeneuLab',
      body: 'Somos un negocio especializado en el manejo de redes sociales con 6 anos de experiencia. Nos metemos hasta la cocina para entender las necesidades de tu negocio y trabajar contigo hacia objetivos concretos, desde una perspectiva realista. Entendemos las redes como un laboratorio: probar, medir y ajustar.',
    },
    {
      title: 'El problema que resolvemos',
      body: 'Alla afuera hay un sinfin de ofertas que prometen resultados inflados y crecimiento acelerado. Muchas agencias trabajan con equipos enormes, lejos de la realidad de tu negocio: aparecen de vez en cuando y no te enteras de nada. Nosotros hacemos lo contrario: cerca, claro y con una estrategia accesible.',
    },
  ],
};

// ---- PALABRAS QUE NOS IDENTIFICAN / NO ------------------------------------
export const words = {
  eyebrow: 'Como sonamos',
  yesTitle: 'Palabras que nos identifican',
  noTitle: 'Frases que jamas vas a leer aqui',
  yes: [
    'Cercania',
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
    'Crece rapido',
    'Triplica tus ventas',
    'Vuelvete viral con este audio',
    'Resultados garantizados en 30 dias',
    'Mas seguidores = mas ventas',
    'Formulas magicas para el exito',
  ],
};

// ---- PILARES DE CONTENIDO -------------------------------------------------
export const pillars = {
  eyebrow: 'Pilares de contenido',
  title: 'Como construimos tu presencia',
  intro: 'Las categorias clave que ordenan todo lo que se publica.',
  items: [
    {
      tag: 'Opinion',
      body: 'Puntos de vista sobre lo que pasa en redes: que funciona, que no y que pensamos de las tendencias. Sirve para posicionar tu marca y que no se vea desconectada de la realidad.',
      accent: 'green',
    },
    {
      tag: 'Autoridad',
      body: 'Seis anos de errores, aciertos y aprendizajes trabajando con clientxs. Compartimos lo que de verdad sirve: estrategia de marca y criterio practico, no teoria de manual.',
      accent: 'plum',
    },
    {
      tag: 'Comunidad',
      body: 'Memes, referencias de cultura pop y conversaciones que hacen que la gente diga "si soy". Conectamos desde el humor y construimos pertenencia alrededor de tu marca.',
      accent: 'pink',
    },
    {
      tag: 'Ventas',
      body: 'Lo que deja claro tu diferencial: servicios, casos reales y resultados honestos. Sin inflar numeros ni prometer milagros. Atraemos clientxs demostrando que aqui hay chamba.',
      accent: 'yellow',
    },
  ],
};

// ---- SERVICIOS / PLACEHOLDERS ---------------------------------------------
// 5 servicios, cada uno con 7 complementos (add-ons).
// TODO: reemplazar nombres, descripciones y complementos por los reales.
//       Las descripciones de los complementos se llenan despues (addOns[i].desc).
const makeAddOns = (count = 7) =>
  Array.from({ length: count }, (_, i) => ({
    name: `Complemento ${i + 1}`, // TODO
    desc: '', // TODO: descripcion pendiente
  }));

export const services = {
  eyebrow: 'Servicios',
  title: 'Lo que ofrecemos',
  intro:
    'Cinco formas de trabajar tus redes. Cada servicio se puede ampliar con complementos. (Texto editable.)',
  addOnsLabel: 'Complementos',
  items: Array.from({ length: 5 }, (_, i) => ({
    name: `Servicio 0${i + 1}`, // TODO
    desc: 'Descripcion del servicio (pendiente).', // TODO
    addOns: makeAddOns(7),
  })),
};

// ---- COMO TRABAJAMOS / METODO ---------------------------------------------
export const method = {
  eyebrow: 'Como trabajamos',
  title: 'Mentalidad de laboratorio',
  body: 'No prometemos formulas magicas. Ponemos sobre la mesa 6 anos de experiencia y una forma de trabajar de laboratorio: probar, medir y ajustar. Construimos la estrategia contigo, no desde una tarima.',
  steps: [
    {
      n: '01',
      title: 'Probar',
      body: 'Entendemos el ADN de tu negocio y lanzamos hipotesis de contenido con intencion.',
    },
    {
      n: '02',
      title: 'Medir',
      body: 'Revisamos que funciona de verdad, sin metricas de vanidad ni numeros inflados.',
    },
    {
      n: '03',
      title: 'Ajustar',
      body: 'Afinamos la estrategia con lo aprendido. Cerca, claro y de forma constante.',
    },
  ],
};

// ---- PORTAFOLIO / PLACEHOLDERS --------------------------------------------
// TODO: reemplazar por proyectos reales. imageSrc vacio muestra un placeholder.
export const portfolio = {
  eyebrow: 'Portafolio',
  title: 'Trabajos recientes',
  intro:
    'Una muestra de las marcas con las que hemos trabajado. (Placeholder, sustituir por casos reales.)',
  items: Array.from({ length: 6 }, (_, i) => ({
    name: `Proyecto 0${i + 1}`, // TODO
    category: 'Categoria', // TODO
    imageSrc: '', // TODO: ruta de imagen en /public
  })),
};

// ---- CTA / CONTACTO -------------------------------------------------------
export const cta = {
  eyebrow: 'Construyamos algo que si tenga sentido',
  title: 'Cuentanos de tu negocio',
  body: 'Nos metemos hasta la cocina para entenderlo y proponerte una estrategia realista y accesible. Sin compromiso y sin humo.',
  button: 'Escribenos',
};

export const footer = {
  blurb: 'Manejo de redes sociales con mentalidad de laboratorio. Probar, medir y ajustar.',
  rightsPrefix: 'MeneuLab',
};

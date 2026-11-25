import type { Locale } from "@/types";

/**
 * All interface copy, in both languages. English is authored first and the
 * Spanish object is type-checked against it, so the two can never drift apart.
 * Both are written to read natively — not mechanically translated.
 */
const en = {
  nav: {
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
  },
  a11y: {
    skip: "Skip to content",
    navigation: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    theme: "Toggle light / dark theme",
    language: "Switch language to Spanish",
    home: "Go to top",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    galleryPrev: "Previous screenshot",
    galleryNext: "Next screenshot",
    galleryGoTo: "Go to screenshot",
    galleryFullSize: "View full-size screenshot",
    gallery: "Product screenshots",
    opensNewTab: "opens in a new tab",
  },
  hero: {
    eyebrow: "Full-Stack Developer",
    title: "I build software for everyday decisions.",
    subtitle:
      "Data Fuel compares what it really costs to fill up, including the drive. Planora is the app I built to organise my week. My main tools are TypeScript and Python.",
    location: "Based in Valencia, Spain",
    availability: "Open to my first full-time software role",
    viewProjects: "View projects",
    contact: "Get in touch",
    downloadCv: "Download CV",
    cvSpanish: "Spanish CV",
    cvEnglish: "English CV",
    cardRole: "Full-Stack Developer",
    cardLocation: "Valencia, ES",
    available: "Available",
  },
  proof: {
    projectsLabel: "Projects in this portfolio",
    items: [
      { value: "2", label: "Higher vocational degrees" },
      { value: "AI · Big Data", label: "Specialization completed" },
      { value: "800+", label: "Automated tests written" },
    ],
  },
  projects: {
    eyebrow: "Selected work",
    title: "Projects",
    subtitle:
      "Choose a project to explore its design, screenshots and code.",
    indexLabel: "Project index",
    liveEyebrow: "In production",
    liveLead:
      "A product I use every day — built from scratch and still being updated.",
    aiTitle: "Data and applied AI",
    aiLead:
      "A focus on full-stack engineering, data and applied AI — plus the foundation I built along the way.",
    flagship: "Flagship project",
    problem: "The problem",
    product: "What it does",
    engineering: "Engineering",
    viewSource: "View source",
    viewShowcase: "View showcase",
    viewDemo: "Live demo",
    moreTitle: "Foundations",
    moreSubtitle:
      "Earlier, broader product work from my vocational training — full applications, front to back.",
    costViz: {
      header: "Which station costs less?",
      context: "Example for a 40 L fill-up. The round trip costs €0.25 per kilometre.",
      distance: "One-way distance to station A",
      stationA: "Station A",
      stationB: "Station B",
      fuel: "Fuel",
      travel: "Drive",
      total: "Total",
      savings: "{station} saves {amount}.",
      tie: "Both stations cost the same.",
    },
  },
  productivityApps: {
    eyebrow: "Tools for everyday life",
    title: "Productivity Apps",
    subtitle:
      "Digital products designed to simplify processes, improve efficiency and make everyday life easier, both personally and professionally.",
    viewSource: "View source",
    liveDemo: "Open live product",
    downloadWindows: "Download for Windows",
  },
  developerTools: {
    eyebrow: "Public developer utilities",
    title: "Developer Tools",
    subtitle: "Open-source utilities built to solve practical technical workflows.",
    viewSource: "View source",
    liveDemo: "Open live product",
    downloadWindows: "Download for Windows",
  },
  tech: {
    eyebrow: "Technical focus",
    title: "Tools and practices I work with",
    subtitle:
      "Grouped by where they fit in a product — not a scoreboard of logos or invented percentages.",
  },
  experience: {
    eyebrow: "Experience",
    title: "Internships",
    subtitle:
      "Early professional experience alongside my studies. I'm now looking for my first full-time role.",
    label: "Internship",
  },
  education: {
    eyebrow: "Background",
    title: "Education",
    inProgress: "In progress",
    languagesTitle: "Languages",
  },
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "Valencian", level: "Native" },
    { name: "English", level: "B1" },
  ],
  contact: {
    eyebrow: "Contact",
    title: "Let's talk",
    message:
      "I'm looking for my first full-time software development role. If you're hiring or want to talk through a project, I'd be glad to hear from you.",
    emailCta: "Send an email",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    cvTitle: "Curriculum vitae",
    copyEmail: "Copy email address",
    copied: "Address copied.",
    manualCopy: "Select the address and use Copy.",
  },
  footer: {
    tagline: "Full-stack developer building data-informed products.",
    built: "Built with Next.js, TypeScript and Tailwind CSS.",
    rights: "All rights reserved.",
    top: "Back to top",
  },
};

/** The canonical shape every locale must satisfy. */
export type Dictionary = typeof en;

const es: Dictionary = {
  nav: {
    projects: "Proyectos",
    experience: "Experiencia",
    education: "Formación",
    contact: "Contacto",
  },
  a11y: {
    skip: "Saltar al contenido",
    navigation: "Navegación principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    theme: "Cambiar tema claro / oscuro",
    language: "Cambiar idioma a inglés",
    home: "Ir arriba",
    email: "Correo",
    linkedin: "LinkedIn",
    github: "GitHub",
    galleryPrev: "Captura anterior",
    galleryNext: "Captura siguiente",
    galleryGoTo: "Ir a la captura",
    galleryFullSize: "Ver captura a tamaño completo",
    gallery: "Capturas del producto",
    opensNewTab: "se abre en una pestaña nueva",
  },
  hero: {
    eyebrow: "Desarrollador Full-Stack",
    title: "Desarrollo software para decisiones cotidianas.",
    subtitle:
      "Data Fuel compara cuánto cuesta repostar contando el trayecto. Planora es la aplicación que creé para organizar mi semana. Trabajo principalmente con TypeScript y Python.",
    location: "Con base en Valencia, España",
    availability: "Disponible para mi primer empleo a tiempo completo",
    viewProjects: "Ver proyectos",
    contact: "Contactar",
    downloadCv: "Descargar CV",
    cvSpanish: "CV en español",
    cvEnglish: "CV en inglés",
    cardRole: "Desarrollador Full-Stack",
    cardLocation: "Valencia, ES",
    available: "Disponible",
  },
  proof: {
    projectsLabel: "Proyectos en el portfolio",
    items: [
      { value: "2", label: "Ciclos de grado superior" },
      { value: "IA · Big Data", label: "Especialización completada" },
      { value: "800+", label: "Tests automatizados escritos" },
    ],
  },
  projects: {
    eyebrow: "Trabajo seleccionado",
    title: "Proyectos",
    subtitle:
      "Elige un proyecto para explorar su diseño, sus capturas y su código.",
    indexLabel: "Índice de proyectos",
    liveEyebrow: "En producción",
    liveLead:
      "Un producto que uso cada día: nació de cero y se sigue actualizando.",
    aiTitle: "Datos e IA aplicada",
    aiLead:
      "Con foco en ingeniería full-stack, datos e IA aplicada — y la base que construí por el camino.",
    flagship: "Proyecto principal",
    problem: "El problema",
    product: "Qué hace",
    engineering: "Ingeniería",
    viewSource: "Ver código",
    viewShowcase: "Ver muestra",
    viewDemo: "Ver demo",
    moreTitle: "Fundamentos",
    moreSubtitle:
      "Trabajo de producto más amplio de mi formación — aplicaciones completas, de principio a fin.",
    costViz: {
      header: "¿En qué gasolinera sale más barato?",
      context: "Ejemplo para un repostaje de 40 L. El viaje de ida y vuelta cuesta 0,25 € por kilómetro.",
      distance: "Distancia de ida a la gasolinera A",
      stationA: "Gasolinera A",
      stationB: "Gasolinera B",
      fuel: "Gasolina",
      travel: "Trayecto",
      total: "Total",
      savings: "{station} cuesta {amount} menos.",
      tie: "Las dos gasolineras cuestan lo mismo.",
    },
  },
  productivityApps: {
    eyebrow: "Herramientas para el día a día",
    title: "Aplicaciones de productividad",
    subtitle:
      "Productos digitales diseñados para simplificar procesos, mejorar la eficiencia y facilitar el día a día, tanto personal como profesional.",
    viewSource: "Ver código",
    liveDemo: "Abrir producto online",
    downloadWindows: "Descargar para Windows",
  },
  developerTools: {
    eyebrow: "Utilidades públicas para desarrollo",
    title: "Herramientas para desarrolladores",
    subtitle:
      "Utilidades de código abierto creadas para resolver flujos de trabajo técnicos reales.",
    viewSource: "Ver código",
    liveDemo: "Abrir producto online",
    downloadWindows: "Descargar para Windows",
  },
  tech: {
    eyebrow: "Áreas técnicas",
    title: "Herramientas y prácticas que utilizo",
    subtitle:
      "Agrupadas por dónde encajan en un producto — no un marcador de logos ni porcentajes inventados.",
  },
  experience: {
    eyebrow: "Experiencia",
    title: "Prácticas",
    subtitle:
      "Primera experiencia profesional junto a mis estudios. Ahora busco mi primer empleo a tiempo completo.",
    label: "Prácticas",
  },
  education: {
    eyebrow: "Trayectoria",
    title: "Formación",
    inProgress: "En curso",
    languagesTitle: "Idiomas",
  },
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Valenciano", level: "Nativo" },
    { name: "Inglés", level: "B1" },
  ],
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos",
    message:
      "Busco mi primer empleo a tiempo completo como desarrollador de software. Si estás contratando o quieres comentar un proyecto, estaré encantado de que me escribas.",
    emailCta: "Enviar un correo",
    emailLabel: "Correo",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    cvTitle: "Currículum",
    copyEmail: "Copiar dirección",
    copied: "Dirección copiada.",
    manualCopy: "Selecciona la dirección y usa Copiar.",
  },
  footer: {
    tagline: "Desarrollador full-stack que construye productos basados en datos.",
    built: "Hecho con Next.js, TypeScript y Tailwind CSS.",
    rights: "Todos los derechos reservados.",
    top: "Volver arriba",
  },
};

export const dictionary: Record<Locale, Dictionary> = { en, es };

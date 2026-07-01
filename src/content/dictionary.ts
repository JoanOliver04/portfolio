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
    gallery: "Product screenshots",
  },
  hero: {
    eyebrow: "Full-Stack Developer",
    title: "Data-informed products, engineered end to end.",
    subtitle:
      "I build modern web applications with TypeScript, Python and applied AI — combining full-stack development, data analysis and geospatial tools to solve real problems.",
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
    items: [
      { value: "5", label: "Featured projects" },
      { value: "2", label: "Higher vocational degrees" },
      { value: "AI · Big Data", label: "Specialization completed" },
      { value: "690+", label: "Automated tests written" },
    ],
  },
  projects: {
    eyebrow: "Selected work",
    title: "Projects",
    subtitle:
      "A focus on full-stack engineering, data and applied AI — plus the foundation I built along the way.",
    flagship: "Flagship project",
    problem: "The problem",
    product: "What it does",
    engineering: "Engineering",
    viewSource: "View source",
    viewShowcase: "View showcase",
    moreTitle: "Foundations",
    moreSubtitle:
      "Earlier, broader product work from my vocational training — full applications, front to back.",
    costViz: {
      header: "Lowest price per litre ≠ lowest total cost",
      context: "Illustrative example · 40 L fill-up",
      option1: "Lowest €/L",
      option2: "Best total cost",
      fuel: "Fuel",
      travel: "Travel",
      total: "Total",
      best: "best",
      footer: "Fuel + travel + time + traffic",
    },
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
    availability: "Open to my first full-time software role · Valencia, Spain",
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
    gallery: "Capturas del producto",
  },
  hero: {
    eyebrow: "Desarrollador Full-Stack",
    title: "Productos basados en datos, construidos de principio a fin.",
    subtitle:
      "Desarrollo aplicaciones web modernas con TypeScript, Python e IA aplicada, combinando desarrollo full-stack, análisis de datos y herramientas geoespaciales para resolver problemas reales.",
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
    items: [
      { value: "5", label: "Proyectos destacados" },
      { value: "2", label: "Ciclos de grado superior" },
      { value: "IA · Big Data", label: "Especialización completada" },
      { value: "690+", label: "Tests automatizados escritos" },
    ],
  },
  projects: {
    eyebrow: "Trabajo seleccionado",
    title: "Proyectos",
    subtitle:
      "Con foco en ingeniería full-stack, datos e IA aplicada — y la base que construí por el camino.",
    flagship: "Proyecto principal",
    problem: "El problema",
    product: "Qué hace",
    engineering: "Ingeniería",
    viewSource: "Ver código",
    viewShowcase: "Ver muestra",
    moreTitle: "Fundamentos",
    moreSubtitle:
      "Trabajo de producto más amplio de mi formación — aplicaciones completas, de principio a fin.",
    costViz: {
      header: "Menor precio por litro ≠ menor coste total",
      context: "Ejemplo ilustrativo · repostaje de 40 L",
      option1: "Menor €/L",
      option2: "Mejor coste total",
      fuel: "Combustible",
      travel: "Trayecto",
      total: "Total",
      best: "mejor",
      footer: "Combustible + trayecto + tiempo + tráfico",
    },
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
    availability:
      "Disponible para mi primer empleo a tiempo completo · Valencia, España",
  },
  footer: {
    tagline: "Desarrollador full-stack que construye productos basados en datos.",
    built: "Hecho con Next.js, TypeScript y Tailwind CSS.",
    rights: "Todos los derechos reservados.",
    top: "Volver arriba",
  },
};

export const dictionary: Record<Locale, Dictionary> = { en, es };

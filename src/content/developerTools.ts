import type { DeveloperTool } from "@/types";

/**
 * Public productivity products and developer utilities shown separately from academic
 * portfolio work. Entries must link only to verifiable public resources.
 */
const portfolioProducts: DeveloperTool[] = [
  {
    id: "planora",
    name: "Planora",
    description: {
      en: "Independent, deeply personalizable planner for tasks, habits, schedules and events, designed for routines that keep changing.",
      es: "Planificador independiente y muy personalizable para tareas, hábitos, horarios y eventos, diseñado para rutinas que no dejan de cambiar.",
    },
    details: {
      en: "A production-ready full-stack planning product. It combines a timezone-safe recurrence engine, privacy-conscious offline PWA behavior, secure Supabase synchronization, reminders, statistics, portable backups and a complete public demo with isolated sample data.",
      es: "Un producto de planificación full-stack preparado para producción. Combina recurrencias seguras por zona horaria, funcionamiento PWA offline respetuoso con la privacidad, sincronización segura con Supabase, recordatorios, estadísticas, copias portables y una demo pública completa con datos aislados.",
    },
    highlights: {
      en: [
        "Multiple schedules, recurring habits, events, customizable alarms and progress statistics.",
        "Offline mutation queue with conflict handling and visible synchronization state.",
        "Deep personalization of color, density, typography, motion and day structure.",
        "Google OAuth, authenticated Supabase RLS, private-cache controls, versioned backups and cookie-free analytics.",
        "117 unit/component tests, 22 browser scenarios and automated security audits in CI.",
        "Public no-registration demo with isolated browser data.",
      ],
      es: [
        "Múltiples horarios, hábitos recurrentes, eventos, alarmas personalizables y estadísticas de progreso.",
        "Cola de cambios offline con gestión de conflictos y estado de sincronización visible.",
        "Personalización profunda de color, densidad, tipografía, movimiento y estructura diaria.",
        "Google OAuth, RLS autenticado de Supabase, control de caché privada, copias versionadas y analítica sin cookies.",
        "117 tests unitarios/de componentes, 22 escenarios de navegador y auditorías de seguridad automáticas en CI.",
        "Demo pública sin registro con datos aislados en el navegador.",
      ],
    },
    images: [
      { src: "/projects/planora/01-landing.png", caption: { en: "A focused public product experience", es: "Una experiencia de producto pública y cuidada" } },
      { src: "/projects/planora/02-today.png", caption: { en: "Daily progress and flexible routines", es: "Progreso diario y rutinas flexibles" } },
      { src: "/projects/planora/03-week.png", caption: { en: "The complete week at a glance", es: "La semana completa de un vistazo" } },
      { src: "/projects/planora/04-tasks.png", caption: { en: "Recurring tasks without a rigid system", es: "Tareas recurrentes sin un sistema rígido" } },
      { src: "/projects/planora/05-settings.png", caption: { en: "Appearance and behavior adapt to the user", es: "Apariencia y comportamiento adaptados al usuario" } },
      { src: "/projects/planora/06-mobile.png", caption: { en: "A touch-first mobile workspace", es: "Un espacio móvil pensado para el tacto" } },
    ],
    technologies: ["Next.js 16", "React 19", "TypeScript", "Supabase", "PostgreSQL", "PWA", "Playwright", "Zod"],
    badge: { en: "Live product", es: "Producto online" },
    metadata: { en: "Personal project · In production", es: "Proyecto personal · En producción" },
    repositoryUrl: "https://github.com/JoanOliver04/planora",
    liveUrl: "https://planora-lake-one.vercel.app/en",
    license: "Source available",
  },
  {
    id: "media-batch-converter",
    name: "Media Batch Converter",
    description: {
      en: "Open-source desktop tool for converting and optimizing images, audio and video individually or in batches. It supports recursive folder processing, reusable presets, format-specific optimization and detailed conversion reports.",
      es: "Herramienta de escritorio de código abierto para convertir y optimizar imágenes, audio y vídeo de forma individual o por lotes. Incluye procesamiento recursivo de carpetas, presets reutilizables, optimización específica por formato e informes detallados.",
    },
    details: {
      en: "A local-first Python desktop utility that never modifies the source files and gives explicit control over quality, resizing, naming, collision policies and output validation. The interface ships in Spanish and English and switches without restarting.",
      es: "Una utilidad local desarrollada en Python que nunca modifica los archivos originales y permite controlar la calidad, el redimensionado, los nombres, las colisiones y la validación de resultados. La interfaz está disponible en español e inglés y se cambia sin reiniciar.",
    },
    highlights: {
      en: [
        "Recursive batch processing with preserved folder structure.",
        "WebP modes, image resizing and reusable conversion presets.",
        "FFmpeg-powered audio and video conversion.",
        "Multi-resolution ICO favicons from any source image.",
        "Bilingual interface switched at runtime, Spanish and English.",
        "Safe output policies, JSON reports and SHA-256 checksums.",
      ],
      es: [
        "Procesamiento recursivo por lotes conservando la estructura de carpetas.",
        "Modos WebP, redimensionado y presets de conversión reutilizables.",
        "Conversión de audio y vídeo mediante FFmpeg.",
        "Favicons ICO multirresolución a partir de cualquier imagen.",
        "Interfaz bilingüe conmutable en caliente, español e inglés.",
        "Políticas de salida seguras, informes JSON y sumas SHA-256.",
      ],
    },
    images: [
      {
        src: "/projects/media-batch-converter/images-tab.png",
        caption: {
          en: "Image conversion with WebP modes, resizing and batch settings",
          es: "Conversión de imágenes con modos WebP, redimensionado y ajustes por lotes",
        },
      },
      {
        src: "/projects/media-batch-converter/audio-tab.png",
        caption: {
          en: "Audio conversion with reusable presets and FFmpeg settings",
          es: "Conversión de audio con presets reutilizables y ajustes de FFmpeg",
        },
      },
      {
        src: "/projects/media-batch-converter/video-tab.png",
        caption: {
          en: "Video conversion with resolution, codec and aspect-ratio controls",
          es: "Conversión de vídeo con controles de resolución, códec y relación de aspecto",
        },
      },
    ],
    technologies: ["Python", "Tkinter", "Pillow", "FFmpeg", "PyInstaller"],
    badge: { en: "Open Source", es: "Código abierto" },
    metadata: {
      en: "MIT License · Public GitHub Repository",
      es: "Licencia MIT · Repositorio público en GitHub",
    },
    repositoryUrl: "https://github.com/JoanOliver04/media-batch-converter",
    license: "MIT",
  },
];

export const productivityApps = portfolioProducts.filter(
  (item) => item.id === "planora",
);
export const developerTools = portfolioProducts.filter(
  (item) => item.id !== "planora",
);

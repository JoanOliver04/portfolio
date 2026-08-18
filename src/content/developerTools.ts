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
      en: "Independent, deeply personalizable planner for tasks, habits, schedules, events and Focus sessions — built for routines that keep changing.",
      es: "Planificador independiente y muy personalizable para tareas, hábitos, horarios, eventos y sesiones de Enfoque — pensado para rutinas que no dejan de cambiar.",
    },
    details: {
      en: "A production-ready full-stack planning product. It combines a timezone-safe recurrence engine that follows the user's week start, Focus (countdown, stopwatch and flexible cycles), privacy-conscious offline PWA behavior, multi-tab sync, secure Supabase RLS, reminders, statistics, portable JSON backups (schema v4) and a public demo with isolated sample data in Spanish and English.",
      es: "Un producto de planificación full-stack preparado para producción. Combina recurrencias seguras por zona horaria que respetan el inicio de semana del usuario, Enfoque (cuenta atrás, cronómetro y ciclos flexibles), PWA offline respetuosa con la privacidad, sincronización multi-pestaña, RLS de Supabase, recordatorios, estadísticas, copias JSON portables (schema v4) y una demo pública con datos aislados en español e inglés.",
    },
    highlights: {
      en: [
        "Multiple schedules, recurring habits, events, customizable alarms and progress statistics.",
        "Focus / Enfoque: timestamp-based timer, presets, structured plans, weekly goals, offline continuation and multi-tab takeover.",
        "Offline mutation queue with conflict handling and visible synchronization state.",
        "Deep personalization of color, density, typography, motion and day structure.",
        "Google OAuth, authenticated Supabase RLS, private notes, versioned backups and cookie-free analytics.",
        "363 unit/component tests, Playwright e2e, Prettier/lint/typecheck and security audits in CI.",
        "Public no-registration demo with isolated browser data in Spanish and English.",
      ],
      es: [
        "Múltiples horarios, hábitos recurrentes, eventos, alarmas personalizables y estadísticas de progreso.",
        "Enfoque: temporizador por timestamps, presets, planes, objetivos semanales, offline y takeover multi-pestaña.",
        "Cola de cambios offline con gestión de conflictos y estado de sincronización visible.",
        "Personalización profunda de color, densidad, tipografía, movimiento y estructura diaria.",
        "Google OAuth, RLS de Supabase, notas privadas, copias versionadas y analítica sin cookies.",
        "363 tests unitarios/de componentes, e2e con Playwright, Prettier/lint/typecheck y auditorías en CI.",
        "Demo pública sin registro con datos aislados en el navegador, en español e inglés.",
      ],
    },
    images: [
      {
        src: "/projects/planora/01-landing.png",
        caption: {
          en: "A focused public product experience",
          es: "Una experiencia de producto pública y cuidada",
        },
      },
      {
        src: "/projects/planora/02-today.png",
        caption: {
          en: "Daily progress and flexible routines",
          es: "Progreso diario y rutinas flexibles",
        },
      },
      {
        src: "/projects/planora/03-week.png",
        caption: {
          en: "The complete week at a glance",
          es: "La semana completa de un vistazo",
        },
      },
      {
        src: "/projects/planora/04-tasks.png",
        caption: {
          en: "Recurring tasks without a rigid system",
          es: "Tareas recurrentes sin un sistema rígido",
        },
      },
      {
        src: "/projects/planora/05-events.png",
        caption: {
          en: "Dated events across schedules",
          es: "Eventos con fecha en cada horario",
        },
      },
      {
        src: "/projects/planora/06-history.png",
        caption: {
          en: "Immutable completion history",
          es: "Historial de completados inmutable",
        },
      },
      {
        src: "/projects/planora/07-schedules.png",
        caption: {
          en: "Independent schedules for every context",
          es: "Horarios independientes para cada contexto",
        },
      },
      {
        src: "/projects/planora/08-categories.png",
        caption: {
          en: "Color-coded categories",
          es: "Categorías con color e identidad",
        },
      },
      {
        src: "/projects/planora/09-settings.png",
        caption: {
          en: "Appearance and behavior adapt to the user",
          es: "Apariencia y comportamiento adaptados al usuario",
        },
      },
      {
        src: "/projects/planora/10-mobile-landing.png",
        caption: {
          en: "Mobile landing and product entry",
          es: "Landing móvil y entrada al producto",
        },
      },
      {
        src: "/projects/planora/11-mobile-today.png",
        caption: {
          en: "Today view on a phone-sized layout",
          es: "Vista Hoy en diseño de móvil",
        },
      },
      {
        src: "/projects/planora/12-mobile-week.png",
        caption: {
          en: "Week planning on mobile",
          es: "Planificación semanal en móvil",
        },
      },
      {
        src: "/projects/planora/13-focus-intro.png",
        caption: {
          en: "Focus first-visit intro (light theme)",
          es: "Introducción a Enfoque en la primera visita (tema claro)",
        },
      },
      {
        src: "/projects/planora/14-focus-home.png",
        caption: {
          en: "Focus home with presets and weekly goals",
          es: "Inicio de Enfoque con presets y objetivos semanales",
        },
      },
      {
        src: "/projects/planora/15-focus-start.png",
        caption: {
          en: "Session start configurator",
          es: "Configurador de inicio de sesión",
        },
      },
      {
        src: "/projects/planora/16-focus-active.png",
        caption: {
          en: "Active Focus countdown session",
          es: "Sesión de Enfoque activa con cuenta atrás",
        },
      },
      {
        src: "/projects/planora/17-mobile-focus.png",
        caption: {
          en: "Focus on mobile with bottom navigation",
          es: "Enfoque en móvil con navegación inferior",
        },
      },
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "PWA",
      "Playwright",
      "Zod",
    ],
    badge: { en: "Live product", es: "Producto online" },
    metadata: {
      en: "Personal project · In production",
      es: "Proyecto personal · En producción",
    },
    repositoryUrl: "https://github.com/JoanOliver04/planora",
    liveUrl: "https://planora-lake-one.vercel.app/en",
    license: "Source available",
  },
  {
    id: "media-batch-converter",
    name: "Media Batch Converter",
    description: {
      en: "Open-source desktop tool for converting and optimizing images, audio, video and documents individually or in batches. It supports recursive folder processing, reusable presets, format-specific optimization and detailed conversion reports.",
      es: "Herramienta de escritorio de código abierto para convertir y optimizar imágenes, audio, vídeo y documentos de forma individual o por lotes. Incluye procesamiento recursivo de carpetas, presets reutilizables, optimización específica por formato e informes detallados.",
    },
    details: {
      en: "A local-first Python desktop utility that never modifies the source files and never uploads media. It gives explicit control over quality, resizing, naming, collision policies and output validation. Documents go through a built-in engine plus optional LibreOffice. The interface ships in Spanish and English and switches without restarting.",
      es: "Una utilidad local desarrollada en Python que nunca modifica los originales ni sube archivos. Permite controlar la calidad, el redimensionado, los nombres, las colisiones y la validación de resultados. Los documentos usan un motor integrado y LibreOffice opcional. La interfaz está en español e inglés y se cambia sin reiniciar.",
    },
    highlights: {
      en: [
        "Recursive batch processing with preserved folder structure.",
        "WebP modes, image resizing and reusable conversion presets.",
        "FFmpeg-powered audio and video conversion.",
        "Files tab for PDF, Word, spreadsheets and slides, with optional LibreOffice.",
        "Multi-resolution ICO favicons from any source image.",
        "Bilingual interface switched at runtime, Spanish and English.",
        "Safe output policies, JSON reports and SHA-256 checksums.",
      ],
      es: [
        "Procesamiento recursivo por lotes conservando la estructura de carpetas.",
        "Modos WebP, redimensionado y presets de conversión reutilizables.",
        "Conversión de audio y vídeo mediante FFmpeg.",
        "Pestaña Archivos para PDF, Word, hojas y presentaciones, con LibreOffice opcional.",
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
      {
        src: "/projects/media-batch-converter/files-tab.png",
        caption: {
          en: "Document conversion with built-in engine and optional LibreOffice",
          es: "Conversión de documentos con motor integrado y LibreOffice opcional",
        },
      },
    ],
    technologies: ["Python", "Tkinter", "Pillow", "FFmpeg", "LibreOffice", "PyInstaller"],
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

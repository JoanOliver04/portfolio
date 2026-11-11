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
      en: "A planner I built from scratch and still update. I use it every day for tasks, habits, schedules, events and Focus sessions.",
      es: "Un planificador que construí desde cero y sigo actualizando. Lo uso cada día para tareas, hábitos, horarios, eventos y sesiones de Enfoque.",
    },
    details: {
      en: "In production with Google sign-in, a private workspace and a no-registration bilingual demo. It combines timezone-safe recurrence, Focus sessions and structured plans, offline PWA behavior, multi-tab sync, statistics and atomic versioned backups (schema v5; v4 remains importable). Mobile reminders use opt-in Web Push with server scheduling, alongside hardened session, request and database controls.",
      es: "En producción con acceso mediante Google, un espacio privado y una demo bilingüe sin registro. Combina recurrencias por zona horaria, sesiones y planes de Enfoque, PWA offline, sincronización entre pestañas, estadísticas y copias versionadas atómicas (schema v5; v4 sigue siendo importable). Los recordatorios móviles usan Web Push opcional programado desde el servidor, junto con controles reforzados de sesión, peticiones y base de datos.",
    },
    highlights: {
      en: [
        "Multiple schedules, recurring habits, events, customizable alarms and progress statistics.",
        "Per-device Web Push for reminders while the app is closed, with a durable outbox, retries and cancellation; delivery depends on connectivity and OS permissions.",
        "Focus / Enfoque: timestamp-based timer, presets, structured plans, weekly goals, offline continuation and multi-tab takeover.",
        "Offline mutation queue with conflict handling and visible synchronization state.",
        "Deep personalization of color, density, typography, motion and day structure.",
        "Owner-scoped Supabase RLS, nonce-based CSP, private no-store pages, same-origin writes, database quotas and rate-limited atomic backups. Cookie-free analytics excludes workspace content.",
        "602 unit/component tests and 90 Playwright scenarios passed on 2026-10-30, including authenticated flows against isolated Supabase (6 deliberate browser exclusions); audit, coverage, build, Lighthouse and CodeQL in CI.",
        "Public no-registration demo with isolated browser data in Spanish and English.",
      ],
      es: [
        "Múltiples horarios, hábitos recurrentes, eventos, alarmas personalizables y estadísticas de progreso.",
        "Web Push por dispositivo para recordatorios con la app cerrada, con cola persistente, reintentos y cancelación; la entrega depende de la conexión y los permisos del sistema.",
        "Enfoque: temporizador por timestamps, presets, planes, objetivos semanales, offline y takeover multi-pestaña.",
        "Cola de cambios offline con gestión de conflictos y estado de sincronización visible.",
        "Personalización profunda de color, densidad, tipografía, movimiento y estructura diaria.",
        "RLS de Supabase por propietario, CSP con nonce, páginas privadas sin caché, escrituras del mismo origen, cuotas en base de datos y copias atómicas con límites de peticiones. La analítica sin cookies excluye el contenido del espacio privado.",
        "602 tests unitarios/de componentes y 90 escenarios Playwright pasados el 30-10-2026, incluidos flujos autenticados contra Supabase aislado (6 exclusiones deliberadas por navegador); audit, cobertura, build, Lighthouse y CodeQL en CI.",
        "Demo pública sin registro con datos aislados en el navegador, en español e inglés.",
      ],
    },
    images: [
      {
        "src": "/projects/planora/01-landing-desktop-light-en.webp",
        "caption": {
          "en": "A calmer way to plan",
          "es": "Presentación pública, propuesta de valor y CTA"
        }
      },
      {
        "src": "/projects/planora/04-today-desktop-light-es.webp",
        "caption": {
          "en": "Daily planning and weekly progress",
          "es": "Hoy: progreso, horario activo y grupos del día"
        }
      },
      {
        "src": "/projects/planora/08-week-desktop-light-es.webp",
        "caption": {
          "en": "The complete week at a glance",
          "es": "Semana completa con tareas, hábitos y eventos"
        }
      },
      {
        "src": "/projects/planora/15-tasks-desktop-light-es.webp",
        "caption": {
          "en": "Tasks, filters and recurrence",
          "es": "Gestión de tareas, búsqueda, filtros y recurrencias"
        }
      },
      {
        "src": "/projects/planora/43-focus-home-desktop-light-en.webp",
        "caption": {
          "en": "Focus presets and four weeks of goals",
          "es": "Enfoque: presets, inicio rápido y resumen semanal"
        }
      },
      {
        "src": "/projects/planora/47-focus-countdown-desktop-light-es.webp",
        "caption": {
          "en": "Deep work in progress",
          "es": "Sesión activa de trabajo profundo"
        }
      },
      {
        "src": "/projects/planora/50-focus-plan-desktop-dark-en.webp",
        "caption": {
          "en": "Structured plans: current and next block",
          "es": "Plan estructurado: bloque actual y siguiente"
        }
      },
      {
        "src": "/projects/planora/52-focus-summary-desktop-light-es.webp",
        "caption": {
          "en": "Planned versus actual session summary",
          "es": "Resumen final y comparación de lo previsto con lo realizado"
        }
      },
      {
        "src": "/projects/planora/27-statistics-desktop-light-en.webp",
        "caption": {
          "en": "Progress and patterns",
          "es": "Estadísticas de hábitos y progreso real"
        }
      },
      {
        "src": "/projects/planora/12-month-desktop-light-es.webp",
        "caption": {
          "en": "The month ahead",
          "es": "Calendario mensual con actividad y eventos"
        }
      },
      {
        "src": "/projects/planora/33-reminders-desktop-light-es.webp",
        "caption": {
          "en": "Reminders and alarms",
          "es": "Centro de notificaciones, recordatorios y alarmas"
        }
      },
      {
        "src": "/projects/planora/07-today-mobile-light-es.webp",
        "caption": {
          "en": "Daily planning on mobile",
          "es": "Hoy móvil: progreso y tareas de la mañana"
        }
      },
      {
        "src": "/projects/planora/56-focus-active-mobile-dark-es.webp",
        "caption": {
          "en": "Mobile concentration mode",
          "es": "Sesión activa de Enfoque en móvil oscuro"
        }
      },
      {
        "src": "/projects/planora/38-settings-desktop-light-es.webp",
        "caption": {
          "en": "Appearance and personalization",
          "es": "Ajustes de apariencia, idioma y personalización"
        }
      }
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "PWA",
      "Web Push",
      "Playwright",
      "Zod",
    ],
    badge: { en: "Live product", es: "Producto online" },
    metadata: {
      en: "Personal project · In production · Used daily",
      es: "Proyecto personal · En producción · Uso diario",
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

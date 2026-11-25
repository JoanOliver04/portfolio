import type { DeveloperTool } from "@/types";

/**
 * Public productivity products and developer utilities shown separately from academic
 * portfolio work. Entries must link only to verifiable public resources.
 */
const portfolioProducts: DeveloperTool[] = [
  {
    id: "planora",
    name: "Planora",
    indexSummary: { en: "Weekly planning and focus", es: "Planificación semanal y enfoque" },
    description: {
      en: "A planner I built from scratch to organise my week. I use it every day to plan tasks around appointments, keep up with habits and set aside time to focus.",
      es: "Un planificador que construí desde cero para organizar mi semana. Lo uso cada día para repartir tareas entre citas, mantener hábitos y reservar tiempo de concentración.",
    },
    details: {
      en: "I can add a task or an event to any day in Week and switch to Month without losing my place. On my phone I see one day at a time. On a larger screen I can compare all seven.",
      es: "Desde Semana puedo añadir una tarea o un evento al día que elija y pasar al mes correspondiente. En el móvil veo un día cada vez y en una pantalla grande puedo comparar los siete.",
    },
    highlights: {
      en: [
        "Quick capture recognises dates and times in English and Spanish. Workspace search finds tasks, events, schedules and categories.",
        "Focus sessions can follow a plan with work and break blocks. An active timer can continue offline or move to another device.",
        "Each Google account has a private Supabase workspace with row-level security. A versioned backup restores tasks, history and Focus sessions together.",
        "Installable PWA with opt-in Web Push reminders. The public demo saves changes in the browser and still works for the visit when storage is unavailable.",
      ],
      es: [
        "La captura rápida reconoce fechas y horas en español e inglés. El buscador encuentra tareas, eventos, horarios y categorías.",
        "Las sesiones de Enfoque admiten planes con bloques de trabajo y descanso. Un temporizador activo puede seguir sin conexión o retomarse en otro dispositivo.",
        "Cada cuenta de Google tiene un espacio privado en Supabase con permisos por fila. Una copia versionada permite restaurar juntos las tareas, el historial y las sesiones de Enfoque.",
        "La PWA se puede instalar y envía recordatorios Web Push si los activas. La demo pública guarda los cambios en el navegador y también funciona durante la visita si el almacenamiento está bloqueado.",
      ],
    },
    images: [
      {
        "src": "/projects/planora/08-week-desktop-light-es.webp",
        "thumbnail": "/project-covers/planora-f038537e71.webp",
        "aspectRatio": "2400 / 1571",
        "label": { "en": "Week", "es": "Semana" },
        "caption": {
          "en": "Weekly agenda with actions to add a task or event on each day",
          "es": "Agenda semanal con acciones para añadir tareas y eventos en cada día"
        }
      },
      {
        "src": "/projects/planora/01-landing-desktop-light-en.webp",
        "aspectRatio": "2400 / 1280",
        "label": { "en": "Welcome", "es": "Bienvenida" },
        "caption": {
          "en": "Planora home page in English",
          "es": "Página de inicio de Planora en inglés"
        }
      },
      {
        "src": "/projects/planora/04-today-desktop-light-es.webp",
        "aspectRatio": "2400 / 1730",
        "label": { "en": "Today", "es": "Hoy" },
        "caption": {
          "en": "Daily planning and weekly progress",
          "es": "Hoy: progreso, horario activo y grupos del día"
        }
      },
      {
        "src": "/projects/planora/15-tasks-desktop-light-es.webp",
        "aspectRatio": "2400 / 1858",
        "label": { "en": "Tasks", "es": "Tareas" },
        "caption": {
          "en": "Tasks, filters and recurrence",
          "es": "Gestión de tareas, búsqueda, filtros y recurrencias"
        }
      },
      {
        "src": "/projects/planora/43-focus-home-desktop-light-en.webp",
        "aspectRatio": "2400 / 1513",
        "label": { "en": "Focus presets", "es": "Ajustes de Enfoque" },
        "caption": {
          "en": "Focus presets and four weeks of goals",
          "es": "Enfoque: presets, inicio rápido y resumen semanal"
        }
      },
      {
        "src": "/projects/planora/47-focus-countdown-desktop-light-es.webp",
        "aspectRatio": "2400 / 1833",
        "label": { "en": "Focus timer", "es": "Temporizador de Enfoque" },
        "caption": {
          "en": "Deep work in progress",
          "es": "Sesión activa de trabajo profundo"
        }
      },
      {
        "src": "/projects/planora/50-focus-plan-desktop-dark-en.webp",
        "aspectRatio": "2400 / 2000",
        "label": { "en": "Focus plan", "es": "Plan de Enfoque" },
        "caption": {
          "en": "Structured plans: current and next block",
          "es": "Plan estructurado: bloque actual y siguiente"
        }
      },
      {
        "src": "/projects/planora/52-focus-summary-desktop-light-es.webp",
        "aspectRatio": "1640 / 1618",
        "label": { "en": "Session summary", "es": "Resumen de sesión" },
        "caption": {
          "en": "Planned versus actual session summary",
          "es": "Resumen final y comparación de lo previsto con lo realizado"
        }
      },
      {
        "src": "/projects/planora/27-statistics-desktop-light-en.webp",
        "aspectRatio": "2400 / 1893",
        "label": { "en": "Statistics", "es": "Estadísticas" },
        "caption": {
          "en": "Progress and patterns",
          "es": "Estadísticas de hábitos y progreso real"
        }
      },
      {
        "src": "/projects/planora/12-month-desktop-light-es.webp",
        "aspectRatio": "2400 / 2728",
        "label": { "en": "Month", "es": "Mes" },
        "caption": {
          "en": "The month ahead",
          "es": "Calendario mensual con actividad y eventos"
        }
      },
      {
        "src": "/projects/planora/33-reminders-desktop-light-es.webp",
        "aspectRatio": "2132 / 1042",
        "label": { "en": "Reminders", "es": "Recordatorios" },
        "caption": {
          "en": "Reminders and alarms",
          "es": "Centro de notificaciones, recordatorios y alarmas"
        }
      },
      {
        "src": "/projects/planora/07-today-mobile-light-es.webp",
        "aspectRatio": "1170 / 2640",
        "label": { "en": "Today on mobile", "es": "Hoy en móvil" },
        "caption": {
          "en": "Daily planning on mobile",
          "es": "Hoy móvil: progreso y tareas de la mañana"
        }
      },
      {
        "src": "/projects/planora/56-focus-active-mobile-dark-es.webp",
        "aspectRatio": "1170 / 2760",
        "label": { "en": "Focus on mobile", "es": "Enfoque en móvil" },
        "caption": {
          "en": "Mobile concentration mode",
          "es": "Sesión activa de Enfoque en móvil oscuro"
        }
      },
      {
        "src": "/projects/planora/38-settings-desktop-light-es.webp",
        "aspectRatio": "2400 / 1695",
        "label": { "en": "Settings", "es": "Ajustes" },
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
    liveUrl: {
      en: "https://planora-lake-one.vercel.app/en",
      es: "https://planora-lake-one.vercel.app/es",
    },
    demoUrl: {
      en: "https://planora-lake-one.vercel.app/en/demo",
      es: "https://planora-lake-one.vercel.app/es/demo",
    },
    license: "Source available",
  },
  {
    id: "media-batch-converter",
    name: "Media Batch Converter",
    indexSummary: { en: "Batch file conversion", es: "Conversión de archivos por lotes" },
    icon: "/projects/media-batch-converter/app-icon.png",
    description: {
      en: "Open-source desktop tool for converting images, audio, video and documents in batches. It helps shrink game assets such as sprites, soundtracks and cutscenes with presets tailored to each type of file.",
      es: "Herramienta de escritorio de código abierto para convertir imágenes, audio, vídeo y documentos por lotes. Permite reducir el peso de recursos de videojuegos, como sprites, bandas sonoras y cinemáticas, con ajustes predefinidos para cada tipo de archivo.",
    },
    details: {
      en: "The app processes files locally. Review a folder, exclude drafts and see the size of your selection before converting. “Save only if smaller” keeps outputs that take up less space. Search the results by filename or folder to see what each file saved.",
      es: "La app procesa los archivos en local. Antes de convertir una carpeta puedes excluir borradores y ver cuánto ocupa la selección. «Guardar solo si ocupa menos» conserva las salidas que reducen el tamaño. El buscador del resumen permite consultar el ahorro por archivo.",
    },
    highlights: {
      en: [
        "Recursive batch processing with preserved folder structure.",
        "AVIF and WebP for compact images, plus lossless PNG optimization.",
        "Choose a local FFmpeg executable to enable audio and video. Size limits apply to the complete video.",
        "Files tab for PDF, Word, spreadsheets and slides, with optional LibreOffice.",
        "Multi-resolution ICO favicons from any source image.",
        "Bilingual interface switched at runtime, Spanish and English.",
        "Safe output policies, JSON reports and SHA-256 checksums.",
      ],
      es: [
        "Procesamiento recursivo por lotes conservando la estructura de carpetas.",
        "AVIF y WebP para imágenes ligeras, con optimización de PNG sin pérdida.",
        "Elige FFmpeg en Diagnóstico para activar audio y vídeo. El límite de tamaño se aplica al vídeo completo.",
        "Pestaña Archivos para PDF, Word, hojas y presentaciones, con LibreOffice opcional.",
        "Favicons ICO multirresolución a partir de cualquier imagen.",
        "Interfaz bilingüe conmutable en caliente, español e inglés.",
        "Políticas de salida seguras, informes JSON y sumas SHA-256.",
      ],
    },
    images: [
      {
        src: "/projects/media-batch-converter/batch-review.webp",
        thumbnail: "/project-covers/media-batch-converter-e05d871977.webp",
        label: { en: "Batch selection", es: "Selección del lote" },
        caption: {
          en: "Three files included in a batch, with a draft excluded and the total input size shown",
          es: "Lote con tres archivos incluidos, un borrador excluido y el tamaño total de la selección",
        },
      },
      {
        src: "/projects/media-batch-converter/images-tab.webp",
        label: { en: "Image settings", es: "Ajustes de imagen" },
        caption: {
          en: "AVIF preset for game backgrounds with Save only if smaller enabled",
          es: "Ajuste AVIF para fondos de videojuegos con la opción Guardar solo si ocupa menos activada",
        },
      },
      {
        src: "/projects/media-batch-converter/batch-results.webp",
        label: { en: "Batch results", es: "Resultados del lote" },
        caption: {
          en: "Sample PNG batch showing the space saved and one skipped file",
          es: "Lote de ejemplo en PNG con el espacio ahorrado y un archivo omitido",
        },
      },
      {
        src: "/projects/media-batch-converter/batch-file-details.webp",
        label: { en: "File details", es: "Detalle de archivo" },
        caption: {
          en: "Per-file results comparing the original and encoded sizes of a skipped PNG",
          es: "Detalle de un PNG omitido con su tamaño original y el que habría ocupado la salida",
        },
      },
      {
        src: "/projects/media-batch-converter/audio-tab.webp",
        label: { en: "Audio settings", es: "Ajustes de audio" },
        caption: {
          en: "Opus preset for soundtracks with controls for bitrate and channels",
          es: "Ajuste Opus para bandas sonoras con controles de tasa de bits y canales",
        },
      },
      {
        src: "/projects/media-batch-converter/video-tab.webp",
        label: { en: "Video settings", es: "Ajustes de vídeo" },
        caption: {
          en: "HEVC video in MP4 with controls for quality, resolution and frame rate",
          es: "Vídeo HEVC en MP4 con controles de calidad, resolución y fotogramas por segundo",
        },
      },
      {
        src: "/projects/media-batch-converter/files-tab.webp",
        label: { en: "Document settings", es: "Ajustes de documentos" },
        caption: {
          en: "Document conversion with built-in engine and optional LibreOffice",
          es: "Conversión de documentos con motor integrado y LibreOffice opcional",
        },
      },
    ],
    technologies: ["Python", "Tkinter", "Pillow", "FFmpeg", "LibreOffice", "PyInstaller"],
    badge: { en: "Open Source", es: "Código abierto" },
    metadata: {
      en: "Windows x64 · v0.4.1 · MIT License",
      es: "Windows x64 · v0.4.1 · Licencia MIT",
    },
    repositoryUrl: "https://github.com/JoanOliver04/media-batch-converter",
    releaseUrl: "https://github.com/JoanOliver04/media-batch-converter/releases/download/v0.4.1/MediaBatchConverter-0.4.1-windows-x64.zip",
    license: "MIT",
  },
];

export const productivityApps = portfolioProducts.filter(
  (item) => item.id === "planora",
);
export const developerTools = portfolioProducts.filter(
  (item) => item.id !== "planora",
);

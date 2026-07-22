import type { DeveloperTool } from "@/types";

/**
 * Compact public utilities shown separately from the portfolio's flagship
 * product work. Entries must link only to verifiable public resources.
 */
export const developerTools: DeveloperTool[] = [
  {
    id: "media-batch-converter",
    name: "Media Batch Converter",
    description: {
      en: "Open-source desktop tool for converting and optimizing images, audio and video individually or in batches. It supports recursive folder processing, reusable presets, format-specific optimization and detailed conversion reports.",
      es: "Herramienta de escritorio de código abierto para convertir y optimizar imágenes, audio y vídeo de forma individual o por lotes. Incluye procesamiento recursivo de carpetas, presets reutilizables, optimización específica por formato e informes detallados.",
    },
    details: {
      en: "A local-first Python desktop utility that preserves source files and provides explicit control over quality, resizing, naming, collision policies and output validation.",
      es: "Una utilidad local desarrollada en Python que conserva los archivos originales y permite controlar la calidad, el redimensionado, los nombres, las colisiones y la validación de resultados.",
    },
    highlights: {
      en: [
        "Recursive batch processing with preserved folder structure.",
        "WebP modes, image resizing and reusable conversion presets.",
        "FFmpeg-powered audio and video conversion.",
        "Safe output policies, JSON reports and SHA-256 checksums.",
      ],
      es: [
        "Procesamiento recursivo por lotes conservando la estructura de carpetas.",
        "Modos WebP, redimensionado y presets de conversión reutilizables.",
        "Conversión de audio y vídeo mediante FFmpeg.",
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

import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site, locationEn, locationEs } from "@/content/site";
import type { Locale } from "@/types";
import { Providers } from "@/components/providers/Providers";
import "@/app/globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export function portfolioMetadata(locale: Locale): Metadata {
  const spanish = locale === "es";
  const title = `${site.name} — ${spanish ? site.roleEs : site.roleEn}`;
  const description = spanish
    ? "Joan V. Oliver Rosell, desarrollador full-stack en Valencia. Proyectos de desarrollo web, aprendizaje automático y análisis geoespacial con TypeScript, Python e inteligencia artificial aplicada."
    : "Joan V. Oliver Rosell — Full-Stack Developer in Valencia, Spain. I build data-informed web applications with TypeScript, Python and applied AI, from full-stack products to machine learning and geospatial tools.";
  return {
    metadataBase: new URL(site.url),
    title: {
      default: title,
      template: `%s — ${site.name}`,
    },
    description,
    applicationName: `${site.name} — Portfolio`,
    authors: [{ name: site.name, url: site.linkedin }],
    creator: site.name,
    keywords: [
      "Joan Oliver",
      "Joan V. Oliver Rosell",
      "Full-Stack Developer",
      "TypeScript",
      "Python",
      "Next.js",
      "FastAPI",
      "Machine Learning",
      "Data",
      "Valencia",
      "Software Developer Portfolio",
      "Open Source Developer Tools",
      "Desktop Applications",
      "FFmpeg",
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        es: "/es",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: spanish ? "es_ES" : "en_US",
      alternateLocale: spanish ? "en_US" : "es_ES",
      url: `/${locale}`,
      siteName: site.name,
      title,
      description,
      images: [
        {
          url: site.ogImage,
          width: 1200,
          height: 630,
          alt: `${title}, ${spanish ? locationEs : locationEn}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [site.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
    manifest: "/site.webmanifest",
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF9F6" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0C0D" },
  ],
  colorScheme: "light dark",
};

export function PortfolioDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale} suppressHydrationWarning className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body>
        <Providers locale={locale}>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { useI18n } from "@/i18n/I18nProvider";

const cvFiles = {
  es: "/cv/joan-vicent-oliver-rosell-cv-es.pdf",
  en: "/cv/joan-vicent-oliver-rosell-cv-en.pdf",
} as const;

export function CvLinks({ className }: { className: string }) {
  const { t, locale } = useI18n();
  const languages = locale === "es" ? (["es", "en"] as const) : (["en", "es"] as const);

  return languages.map((language) => (
    <a
      key={language}
      href={cvFiles[language]}
      hrefLang={language}
      type="application/pdf"
      download={`Joan_Vicent_Oliver_Rosell_CV_${language.toUpperCase()}.pdf`}
      className={className}
    >
      {language === "es" ? t.hero.cvSpanish : t.hero.cvEnglish}
      <span className="font-mono text-[0.65rem] text-muted">PDF</span>
    </a>
  ));
}

export function CvDownload() {
  const { t } = useI18n();
  const details = useRef<HTMLDetailsElement>(null);
  const summary = useRef<HTMLElement>(null);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      const menu = details.current;
      if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) {
        menu.open = false;
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);

  return (
    <details
      ref={details}
      className="group relative max-w-full"
      onKeyDown={(event) => {
        if (event.key === "Escape" && event.currentTarget.open) {
          event.currentTarget.open = false;
          summary.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) {
          event.currentTarget.open = false;
        }
      }}
    >
      <summary ref={summary} className="inline-flex cursor-pointer list-none items-center gap-2 rounded-md border border-border bg-surface/50 px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent/60 hover:text-accent [&::-webkit-details-marker]:hidden">
        <DownloadIcon />
        {t.hero.downloadCv}
        <ChevronIcon className="transition-transform group-open:rotate-180" />
      </summary>
      <div className="absolute left-0 top-full z-20 mt-2 min-w-full rounded-md border border-border bg-surface p-1.5 shadow-lg">
        <CvLinks className="flex min-h-11 items-center justify-between gap-2 whitespace-nowrap rounded px-2 py-2 text-sm text-text hover:bg-surface-2 hover:text-accent" />
      </div>
    </details>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

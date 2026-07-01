"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { site } from "@/content/site";
import { Container, ArrowIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/primitives";
import { CvDownload } from "@/components/ui/CvDownload";
import { Portrait } from "@/components/sections/Portrait";

export function Hero() {
  const { t } = useI18n();

  return (
    <Container className="relative">
      <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        {/* Left — positioning */}
        <div className="animate-fade-up">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-label text-accent">
            <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
            {t.hero.eyebrow}
          </p>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-[3.4rem]">
            {t.hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.hero.subtitle}</p>

          {/* Location + availability */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
            <span className="inline-flex items-center gap-2 text-muted">
              <PinIcon />
              {t.hero.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[0.72rem] text-accent">
              <span aria-hidden="true" className="relative flex h-2 w-2">
                <span className="animate-pulse-soft absolute inline-flex h-full w-full rounded-full bg-accent" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {t.hero.availability}
            </span>
          </div>

          {/* CTAs + social */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-contrast transition-transform hover:-translate-y-0.5"
            >
              {t.hero.viewProjects}
              <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/50 px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent/60 hover:text-accent"
            >
              {t.hero.contact}
            </a>
            <CvDownload
              label={t.hero.downloadCv}
              spanishLabel={t.hero.cvSpanish}
              englishLabel={t.hero.cvEnglish}
            />

            <span className="mx-1 hidden h-6 w-px bg-border sm:block" aria-hidden="true" />

            <div className="flex items-center gap-2">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                aria-label={t.a11y.github}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent/60 hover:text-accent"
              >
                <GitHubIcon />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={t.a11y.linkedin}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent/60 hover:text-accent"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Right — portrait as a standalone visual anchor */}
        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0 lg:ml-auto lg:max-w-md">
            <Portrait />
          </div>
        </div>
      </div>
    </Container>
  );
}

function PinIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

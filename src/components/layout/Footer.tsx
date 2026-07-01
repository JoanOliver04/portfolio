"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { site } from "@/content/site";
import { Container, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/primitives";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-sm">
          <div className="flex items-baseline gap-2 font-display text-base font-semibold text-text">
            {site.shortName}
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">{t.footer.tagline}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            aria-label={t.a11y.email}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent/60 hover:text-accent"
          >
            <MailIcon />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={t.a11y.linkedin}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent/60 hover:text-accent"
          >
            <LinkedInIcon />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label={t.a11y.github}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent/60 hover:text-accent"
          >
            <GitHubIcon />
          </a>
        </div>
      </Container>

      <Container className="mt-8 flex flex-col gap-2 border-t border-border/60 pt-6 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {year} {site.name}. {t.footer.rights}
        </span>
        <span>{t.footer.built}</span>
      </Container>
    </footer>
  );
}

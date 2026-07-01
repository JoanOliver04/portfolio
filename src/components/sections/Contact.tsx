"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { site } from "@/content/site";
import {
  Container,
  Section,
  SectionHeading,
  ArrowIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const { t } = useI18n();

  return (
    <Section id="contact" className="border-t border-border/60">
      <Container>
        <div className="overflow-hidden rounded-xl border border-border bg-surface/60 p-8 sm:p-12">
          <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} />
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{t.contact.message}</p>

          <Reveal className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2.5 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-contrast transition-transform hover:-translate-y-0.5"
            >
              <MailIcon className="h-4 w-4" />
              {t.contact.emailCta}
              <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent/60 hover:text-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
              {t.contact.linkedinLabel}
            </a>

            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent/60 hover:text-accent"
            >
              <GitHubIcon className="h-4 w-4" />
              {t.contact.githubLabel}
            </a>
          </Reveal>

          <p className="mt-8 flex items-center gap-2.5 font-mono text-xs text-muted">
            <span aria-hidden="true" className="relative flex h-2 w-2">
              <span className="animate-pulse-soft absolute inline-flex h-full w-full rounded-full bg-accent" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t.contact.availability}
          </p>

          {/* Direct email address, selectable */}
          <p className="mt-4 font-mono text-sm text-muted">
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent">
              {site.email}
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
}

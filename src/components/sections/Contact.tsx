"use client";

import { useRef, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { site } from "@/content/site";
import { ArrowIcon, Container, GitHubIcon, LinkedInIcon, MailIcon, Section, SectionHeading } from "@/components/ui/primitives";
import { CvLinks } from "@/components/ui/CvDownload";

export function Contact() {
  const { t, ready } = useI18n();
  const emailLink = useRef<HTMLAnchorElement>(null);
  const [copyStatus, setCopyStatus] = useState<"copied" | "manualCopy" | null>(null);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopyStatus("copied");
    } catch {
      const address = emailLink.current;
      const selection = window.getSelection();
      if (address && selection) {
        address.focus();
        const range = document.createRange();
        range.selectNodeContents(address);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      setCopyStatus("manualCopy");
    }
  }

  return (
    <Section id="contact" className="border-t border-border/60">
      <Container>
        <div className="grid overflow-hidden rounded-xl border border-border bg-surface lg:grid-cols-[1.12fr_1fr]">
          <div className="min-w-0 p-5 sm:p-9 lg:p-10">
            <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} lead={t.contact.message} />
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex min-h-11 items-center gap-2.5 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-contrast hover:underline"
            >
              <MailIcon className="h-4 w-4" />
              {t.contact.emailCta}
              <ArrowIcon />
            </a>
            <div className="mt-4 flex flex-wrap gap-x-5">
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-accent">
                <LinkedInIcon />{t.contact.linkedinLabel}
                <span className="sr-only"> ({t.a11y.opensNewTab})</span>
              </a>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-accent">
                <GitHubIcon />{t.contact.githubLabel}
                <span className="sr-only"> ({t.a11y.opensNewTab})</span>
              </a>
            </div>
          </div>

          <div className="flex min-w-0 flex-col justify-center border-t border-border bg-surface-2/60 p-5 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
            <h3 className="font-display text-lg font-semibold text-text">{t.contact.emailLabel}</h3>
            <a ref={emailLink} href={`mailto:${site.email}`} className="mt-2 w-fit max-w-full select-all break-words font-mono text-sm text-text underline decoration-border underline-offset-4 hover:text-accent">
              {site.email}
            </a>
            <div className="mt-1 flex flex-wrap items-center gap-x-3">
              <button
                type="button"
                disabled={!ready}
                onClick={copyEmail}
                className="min-h-11 text-left text-sm font-medium text-accent underline underline-offset-4"
              >
                {t.contact.copyEmail}
              </button>
              <p role="status" className="text-sm text-muted">{copyStatus && t.contact[copyStatus]}</p>
            </div>
            <div className="mt-3 border-t border-border pt-5">
              <h3 className="font-display text-lg font-semibold text-text">{t.contact.cvTitle}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <CvLinks className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-surface px-3 text-sm font-medium text-text hover:border-accent hover:text-accent" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

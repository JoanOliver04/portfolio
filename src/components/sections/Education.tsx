"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { education } from "@/content/education";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  const { locale, t } = useI18n();

  return (
    <Section id="education" className="border-t border-border/60">
      <Container>
        <SectionHeading eyebrow={t.education.eyebrow} title={t.education.title} />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          {/* Education timeline */}
          <ol className="relative space-y-8 border-l border-border pl-6">
            {education.map((item, i) => (
              <Reveal key={item.title.en} as="li" delay={i * 70} className="relative">
                <span
                  aria-hidden="true"
                  className={[
                    "absolute -left-[1.65rem] top-1.5 h-2.5 w-2.5 rounded-full border-2",
                    item.status === "in-progress"
                      ? "border-accent bg-accent"
                      : "border-border bg-surface",
                  ].join(" ")}
                />
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-muted">{item.period[locale]}</span>
                  {item.status === "in-progress" ? (
                    <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-label text-accent">
                      {t.education.inProgress}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-1.5 font-display text-base font-semibold leading-snug tracking-tight text-text">
                  {item.title[locale]}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.school[locale]}</p>
              </Reveal>
            ))}
          </ol>

          {/* Languages */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-label text-accent">
              {t.education.languagesTitle}
            </h3>
            <dl className="mt-5 space-y-3">
              {t.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-3"
                >
                  <dt className="font-display text-base font-medium text-text">{lang.name}</dt>
                  <dd className="text-right font-mono text-xs text-muted">{lang.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}

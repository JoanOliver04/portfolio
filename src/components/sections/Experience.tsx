"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { experiences } from "@/content/experience";
import { Container, Section, SectionHeading, TechTag } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  const { locale, t } = useI18n();

  return (
    <Section id="experience" className="border-t border-border/60">
      <Container>
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          lead={t.experience.subtitle}
        />

        <div className="mt-12 space-y-4">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} as="div" delay={i * 80}>
              <article className="grid gap-4 rounded-lg border border-border bg-surface/60 p-6 sm:grid-cols-[200px_1fr] sm:gap-8 sm:p-7">
                <div className="flex flex-col gap-2">
                  <span className="inline-flex w-fit items-center rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 font-mono text-[0.66rem] uppercase tracking-label text-accent">
                    {t.experience.label}
                  </span>
                  <span className="font-mono text-xs text-muted">{exp.period[locale]}</span>
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-text">
                    {exp.role[locale]}
                  </h3>
                  <p className="mt-1 text-sm text-text/80">
                    {exp.company} · <span className="text-muted">{exp.location[locale]}</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{exp.summary[locale]}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tech.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

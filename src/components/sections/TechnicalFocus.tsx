"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { skillGroups } from "@/content/skills";
import { Container, Section, SectionHeading, TechTag } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function TechnicalFocus() {
  const { locale, t } = useI18n();

  return (
    <Section id="tech" className="border-t border-border/60">
      <Container>
        <SectionHeading eyebrow={t.tech.eyebrow} title={t.tech.title} lead={t.tech.subtitle} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} as="div" delay={i * 70} className="h-full">
              <div className="h-full rounded-lg border border-border bg-surface/60 p-6">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-text">
                    {group.title[locale]}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <TechTag key={item}>{item}</TechTag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

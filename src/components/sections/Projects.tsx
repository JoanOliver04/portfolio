"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { projects } from "@/content/projects";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { FlagshipCard } from "@/components/projects/FlagshipCard";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function Projects() {
  const { t } = useI18n();

  const flagship = projects.find((p) => p.flagship);
  const priority = projects.filter((p) => p.category === "ai" && !p.flagship);
  const foundations = projects.filter((p) => p.category !== "ai");

  return (
    <Section id="projects">
      <Container>
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} lead={t.projects.subtitle} />

        {flagship ? (
          <Reveal className="mt-12">
            <FlagshipCard project={flagship} />
          </Reveal>
        ) : null}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {priority.map((project, i) => (
            <Reveal key={project.id} as="div" delay={i * 80} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* Foundations */}
        <div className="mt-16">
          <div className="flex items-center gap-4">
            <h3 className="font-display text-xl font-semibold tracking-tight text-text">
              {t.projects.moreTitle}
            </h3>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            {t.projects.moreSubtitle}
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {foundations.map((project, i) => (
              <Reveal key={project.id} as="div" delay={i * 80} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

"use client";

import type { Project } from "@/types";
import { useI18n } from "@/i18n/I18nProvider";
import { TechTag, MetricPill } from "@/components/ui/primitives";
import { DemoLink, ProjectBadges, RepoLink, categoryLabel } from "@/components/projects/ProjectCard";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { FuelComparison } from "@/components/projects/FuelComparison";
import { ProjectHighlights } from "@/components/projects/ProjectHighlights";

/**
 * The flagship gets a wide, two-column feature block and the strongest
 * hierarchy on the page. The visual reinforces Data Fuel's core insight:
 * the cheapest station per litre is often NOT the cheapest by total cost.
 */
export function FlagshipCard({ project }: { project: Project }) {
  const { locale, t } = useI18n();

  return (
    <article id={project.id} tabIndex={-1} aria-labelledby={`${project.id}-title`} className="relative scroll-mt-24 overflow-hidden rounded-xl border border-border bg-surface ring-1 ring-accent/15">
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        {/* Content */}
        <div className="p-7 sm:p-9">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-label text-accent">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              {t.projects.flagship}
            </p>
            <ProjectBadges project={project} />
          </div>

          <div className="mt-4">
            <p className="font-mono text-[0.72rem] uppercase tracking-label text-muted">
              {categoryLabel(project.category, locale)}
            </p>
            <h3 id={`${project.id}-title`} className="mt-2 font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              {project.name}
            </h3>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-text/90">
              {project.tagline[locale]}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(100%,15rem),1fr))] gap-5">
            <div>
              <span className="font-mono text-[0.68rem] uppercase tracking-label text-muted">
                {t.projects.problem}
              </span>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.problem[locale]}</p>
            </div>
            <div>
              <span className="font-mono text-[0.68rem] uppercase tracking-label text-muted">
                {t.projects.product}
              </span>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.product[locale]}</p>
            </div>
          </div>

          <div className="mt-6">
            <span className="font-mono text-[0.68rem] uppercase tracking-label text-muted">
              {t.projects.engineering}
            </span>
            <ProjectHighlights items={project.highlights[locale]} className="mt-2.5 text-sm" />
          </div>

          {project.metrics ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.metrics.map((m) => (
                <MetricPill key={m.en}>{m[locale]}</MetricPill>
              ))}
            </div>
          ) : null}

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            <DemoLink project={project} />
            <RepoLink project={project} />
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="border-t border-border bg-surface-2/50 p-7 sm:p-9 lg:border-l lg:border-t-0">
          <FuelComparison />
        </div>
      </div>

      {/* Full-width screenshot gallery */}
      {project.images ? (
        <div className="border-t border-border p-7 sm:p-9">
          <p className="mb-4 font-mono text-[0.68rem] uppercase tracking-label text-muted">
            {t.a11y.gallery}
          </p>
          <ProjectGallery images={project.images} />
        </div>
      ) : null}
    </article>
  );
}

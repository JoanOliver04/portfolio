"use client";

import type { Project, ProjectCategory, Locale } from "@/types";
import { useI18n } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";
import { ArrowIcon, GitHubIcon, TechTag, MetricPill } from "@/components/ui/primitives";
import { ProjectGallery } from "@/components/projects/ProjectGallery";

const CATEGORY_LABELS: Record<ProjectCategory, Record<Locale, string>> = {
  ai: { en: "AI & Big Data", es: "IA y Big Data" },
  web: { en: "Web Application Development", es: "Desarrollo de Aplicaciones Web" },
  multiplatform: {
    en: "Multiplatform Application Development",
    es: "Desarrollo de Aplicaciones Multiplataforma",
  },
};

export function categoryLabel(category: ProjectCategory, locale: Locale): string {
  return CATEGORY_LABELS[category][locale];
}

/** Small repo-type / team badges shown in a card header. */
export function ProjectBadges({ project }: { project: Project }) {
  const { locale } = useI18n();
  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      {project.team ? (
        <span className="inline-flex items-center rounded-full border border-border bg-surface-2/70 px-2.5 py-1 font-mono text-[0.66rem] text-muted">
          {project.team[locale]}
        </span>
      ) : null}
      {project.badge ? (
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.66rem]",
            project.repoType === "showcase"
              ? "border border-border bg-surface-2/70 text-muted"
              : "border border-accent/25 bg-accent/10 text-accent",
          )}
        >
          {project.repoType === "showcase" ? <LockIcon /> : <DotIcon />}
          {project.badge[locale]}
        </span>
      ) : null}
    </div>
  );
}

/** Link to a hosted live demo — only rendered for projects that set `liveUrl`. */
export function DemoLink({ project }: { project: Project }) {
  const { t } = useI18n();
  if (!project.liveUrl) return null;
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noreferrer"
      className="group/link inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
    >
      <ExternalIcon className="h-4 w-4" />
      {t.projects.viewDemo}
      <ArrowIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
    </a>
  );
}

/** Link to the repository, labelled by repo type. */
export function RepoLink({ project }: { project: Project }) {
  const { t } = useI18n();
  const label = project.repoType === "showcase" ? t.projects.viewShowcase : t.projects.viewSource;
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      className="group/link inline-flex items-center gap-2 text-sm font-medium text-text transition-colors hover:text-accent"
    >
      <GitHubIcon className="h-4 w-4" />
      {label}
      <ArrowIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
    </a>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const { locale, t } = useI18n();

  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-surface/60 p-6 transition-colors hover:border-accent/40 sm:p-7">
      <header className="flex items-start justify-between gap-4">
        <p className="font-mono text-[0.72rem] uppercase tracking-label text-accent">
          {categoryLabel(project.category, locale)}
        </p>
        <ProjectBadges project={project} />
      </header>

      <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-text">
        {project.name}
      </h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{project.tagline[locale]}</p>

      {project.images ? <ProjectGallery images={project.images} className="mt-5" /> : null}

      <div className="mt-5 space-y-4 text-sm leading-relaxed">
        <div>
          <span className="font-mono text-[0.68rem] uppercase tracking-label text-muted/80">
            {t.projects.problem}
          </span>
          <p className="mt-1.5 text-muted">{project.problem[locale]}</p>
        </div>
        <div>
          <span className="font-mono text-[0.68rem] uppercase tracking-label text-muted/80">
            {t.projects.product}
          </span>
          <p className="mt-1.5 text-muted">{project.product[locale]}</p>
        </div>
      </div>

      <div className="mt-5">
        <span className="font-mono text-[0.68rem] uppercase tracking-label text-muted/80">
          {t.projects.engineering}
        </span>
        <ul className="mt-2 space-y-2">
          {project.highlights[locale].map((item, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {project.metrics ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.metrics.map((m) => (
            <MetricPill key={m.en}>{m[locale]}</MetricPill>
          ))}
        </div>
      ) : null}

      {project.note || project.origin ? (
        <p className="mt-5 border-l-2 border-border pl-3 text-[0.8rem] leading-relaxed text-muted/80">
          {project.note ? project.note[locale] : null}
          {project.note && project.origin ? " " : null}
          {project.origin ? project.origin[locale] : null}
        </p>
      ) : null}

      {/* Footer pinned to the bottom for aligned card heights */}
      <div className="mt-auto flex flex-col gap-4 pt-6">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <DemoLink project={project} />
          <RepoLink project={project} />
        </div>
      </div>
    </article>
  );
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

function DotIcon() {
  return <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />;
}

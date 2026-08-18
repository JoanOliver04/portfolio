"use client";

import { productivityApps } from "@/content/developerTools";
import { useI18n } from "@/i18n/I18nProvider";
import { ArrowIcon, GitHubIcon, TechTag } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectGallery } from "@/components/projects/ProjectGallery";

export function ProductivityApps() {
  const { locale, t } = useI18n();

  return (
    <div className="grid gap-5">
      {productivityApps.map((tool, index) => (
        <Reveal key={tool.id} as="div" delay={index * 80}>
          <article className="grid overflow-hidden rounded-lg border border-border bg-surface/70 transition-colors hover:border-accent/35 md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            {tool.images ? (
              <div className="flex items-center border-b border-border bg-surface-2/60 p-3 md:border-b-0 md:border-r sm:p-4">
                <ProjectGallery images={tool.images} className="w-full" />
              </div>
            ) : null}

            <div className="flex min-w-0 flex-col p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 font-mono text-[0.66rem] text-accent">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {tool.badge[locale]}
                </span>
                <span className="font-mono text-[0.66rem] text-muted">{tool.metadata[locale]}</span>
              </div>

              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-text sm:text-2xl">
                {tool.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{tool.description[locale]}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted/90">{tool.details[locale]}</p>

              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {tool.highlights[locale].map((highlight) => (
                  <li key={highlight} className="flex gap-2 text-[0.82rem] leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {tool.technologies.map((technology) => (
                  <TechTag key={technology}>{technology}</TechTag>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href={tool.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-sm font-medium text-text transition-colors hover:text-accent"
                >
                  <GitHubIcon className="h-4 w-4" />
                  {t.productivityApps.viewSource}
                  <span className="sr-only">({t.a11y.opensNewTab})</span>
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                </a>

                {tool.releaseUrl ? (
                  <a
                    href={tool.releaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
                  >
                    {t.productivityApps.downloadWindows}
                    <span className="sr-only">({t.a11y.opensNewTab})</span>
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                ) : null}

                {tool.liveUrl ? (
                  <a
                    href={tool.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
                  >
                    {t.productivityApps.liveDemo}
                    <span className="sr-only">({t.a11y.opensNewTab})</span>
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

"use client";

import { productivityApps } from "@/content/developerTools";
import { useI18n } from "@/i18n/I18nProvider";
import { ArrowIcon, GitHubIcon, TechTag } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectHighlights } from "@/components/projects/ProjectHighlights";

export function ProductivityApps() {
  const { locale, t } = useI18n();

  return (
    <div className="grid grid-cols-1 gap-5">
      {productivityApps.map((tool, index) => (
        <Reveal key={tool.id} as="div" delay={index * 80}>
          <article
            id={tool.id}
            tabIndex={-1}
            aria-labelledby={`${tool.id}-title`}
            className="grid scroll-mt-24 grid-cols-1 overflow-hidden rounded-lg border border-border bg-surface/70 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]"
          >
            <header className="min-w-0 px-5 pb-4 pt-5 sm:px-6 sm:pt-6 lg:col-start-2">
              <p className="font-mono text-[0.7rem] text-muted">{tool.metadata[locale]}</p>
              <h3 id={`${tool.id}-title`} className="mt-2 font-display text-xl font-semibold tracking-tight text-text sm:text-2xl">
                {tool.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{tool.description[locale]}</p>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                {tool.demoUrl && (
                  <a
                    href={tool.demoUrl[locale]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-3 text-sm font-semibold text-accent-contrast hover:underline"
                  >
                    {t.productivityApps.tryDemo}
                    <span className="sr-only">({t.a11y.opensNewTab})</span>
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                )}
                {tool.liveUrl && (
                  <a
                    href={tool.liveUrl[locale]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-text hover:text-accent"
                  >
                    {t.productivityApps.liveDemo}
                    <span className="sr-only">({t.a11y.opensNewTab})</span>
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                )}
                <a
                  href={tool.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted hover:text-accent"
                >
                  <GitHubIcon className="h-4 w-4" />
                  {t.productivityApps.viewSource}
                  <span className="sr-only">({t.a11y.opensNewTab})</span>
                </a>
                {tool.releaseUrl && (
                  <a
                    href={tool.releaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted hover:text-accent"
                  >
                    {t.productivityApps.downloadWindows}
                    <span className="sr-only">({t.a11y.opensNewTab})</span>
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </header>

            {tool.images && (
              <div className="flex min-w-0 items-center border-y border-border bg-surface-2/60 p-3 sm:p-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:border-y-0 lg:border-r">
                <ProjectGallery images={tool.images} singleFrame className="mx-auto w-full max-w-3xl" />
              </div>
            )}

            <div className="min-w-0 p-5 sm:p-6 lg:col-start-2 lg:pt-0">
              <p className="text-sm leading-relaxed text-muted">{tool.details[locale]}</p>
              <ProjectHighlights items={tool.highlights[locale]} className="mt-4 text-[0.82rem]" />
              <div className="mt-5 flex flex-wrap gap-1.5">
                {tool.technologies.map((technology) => (
                  <TechTag key={technology}>{technology}</TechTag>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

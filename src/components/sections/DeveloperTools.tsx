"use client";

import Image from "next/image";
import { developerTools } from "@/content/developerTools";
import { useI18n } from "@/i18n/I18nProvider";
import { ArrowIcon, Container, GitHubIcon, Section, TechTag } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectIndexReturn } from "@/components/projects/ProjectIndex";
import { ProjectHighlights } from "@/components/projects/ProjectHighlights";

export function DeveloperTools() {
  const { locale, t } = useI18n();

  return (
    <Section id="developer-tools" className="border-y border-border bg-surface-2/25 py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-label text-accent">
            <span aria-hidden="true" className="h-px w-6 bg-accent/60" />
            {t.developerTools.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl">
            {t.developerTools.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{t.developerTools.subtitle}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5">
          {developerTools.map((tool, index) => (
            <Reveal key={tool.id} as="div" delay={index * 80}>
              <article id={tool.id} tabIndex={-1} aria-labelledby={`${tool.id}-title`} className="grid scroll-mt-24 grid-cols-1 overflow-hidden rounded-lg border border-border bg-surface/70 transition-colors hover:border-accent/35 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
                {tool.images ? (
                  <div className="flex items-center border-b border-border bg-surface-2/60 p-3 sm:p-4 lg:border-b-0 lg:border-r">
                    <ProjectGallery images={tool.images} projectId={tool.id} className="mx-auto w-full max-w-3xl lg:max-w-none" />
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

                  <h3 id={`${tool.id}-title`} className="mt-3 flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-text sm:text-2xl">
                    {tool.icon ? (
                      <Image src={tool.icon} alt="" width={36} height={36} className="shrink-0" />
                    ) : null}
                    {tool.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{tool.description[locale]}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted/90">{tool.details[locale]}</p>

                  <ProjectHighlights items={tool.highlights[locale]} className="mt-4 text-[0.82rem]" />

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
                      {t.developerTools.viewSource}
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
                        {t.developerTools.downloadWindows}
                        <span className="sr-only">({t.a11y.opensNewTab})</span>
                        <ArrowIcon className="h-4 w-4" />
                      </a>
                    ) : null}

                    {tool.liveUrl ? (
                      <a
                        href={tool.liveUrl[locale]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
                      >
                        {t.developerTools.liveDemo}
                        <span className="sr-only">({t.a11y.opensNewTab})</span>
                        <ArrowIcon className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
                <ProjectIndexReturn id={tool.id} />
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

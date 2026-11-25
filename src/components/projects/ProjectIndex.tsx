import Image from "next/image";
import { projectIndex } from "@/content/projectIndex";
import { useI18n } from "@/i18n/I18nProvider";
import { ArrowIcon } from "@/components/ui/primitives";

export function ProjectIndex() {
  const { locale, t } = useI18n();

  return (
    <nav aria-label={t.projects.indexLabel} className="mt-8">
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
        {projectIndex.map((project) => {
          const cover = project.images?.[0];
          return (
            <li key={project.id}>
              <a
                href={`#${project.id}`}
                className="group flex h-full items-center gap-3 rounded-lg border border-border bg-surface p-2.5 transition-colors hover:border-accent focus-visible:border-accent lg:flex-col lg:items-stretch lg:gap-0 lg:p-0"
              >
                {cover && (
                  <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded border border-border bg-surface-2 lg:aspect-[2.7] lg:h-auto lg:w-full lg:rounded-b-none lg:rounded-t-lg lg:border-x-0 lg:border-t-0">
                    <Image src={cover.thumbnail ?? cover.src} alt="" fill sizes="(min-width: 1024px) 260px, 64px" className="object-cover object-top" />
                  </div>
                )}
                <div className="flex min-w-0 flex-1 items-center justify-between gap-2 lg:items-start lg:px-3.5 lg:py-3">
                  <div>
                    <span className="block font-display text-base font-semibold leading-tight text-text group-hover:text-accent">{project.name}</span>
                    <span className="mt-1 block text-xs leading-snug text-muted">{project.indexSummary[locale]}</span>
                  </div>
                  <ArrowIcon className="h-4 w-4 shrink-0 rotate-90 text-accent lg:mt-0.5" />
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

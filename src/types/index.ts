export type Locale = "en" | "es";

/** A string that exists in both supported languages. */
export type Localized = Record<Locale, string>;

/** A list of strings that exists in both supported languages. */
export type LocalizedList = Record<Locale, string[]>;

export type ProjectCategory = "ai" | "web" | "multiplatform";

export type RepoType = "source" | "showcase";

/** A single gallery screenshot. `caption` is bilingual and doubles as alt text. */
export interface ProjectImage {
  src: string;
  caption: Localized;
}

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  /** Flagship projects get the large, feature-block treatment. */
  flagship?: boolean;
  /** Public source repo vs. public showcase of a private codebase. */
  repoType: RepoType;
  github: string;
  /** Optional live/deployed demo URL — only set for projects that host one. */
  liveUrl?: string;
  /** Optional short badge, e.g. "Open source · MIT" or "Showcase". */
  badge?: Localized;
  /** Marks a project built together with another developer. */
  team?: Localized;
  tech: string[];
  /** Curated product screenshots shown in a gallery/carousel. */
  images?: ProjectImage[];
  tagline: Localized;
  /** The real problem or question the project answers. */
  problem: Localized;
  /** What the product actually does, in plain language. */
  product: Localized;
  /** Meaningful engineering decisions. */
  highlights: LocalizedList;
  /** Verifiable metric chips (flagship + data projects). */
  metrics?: Localized[];
  /** Transparent note for showcase repositories. */
  note?: Localized;
  /** Light academic-origin line, never the focus. */
  origin?: Localized;
}

export interface Experience {
  role: Localized;
  company: string;
  location: Localized;
  period: Localized;
  summary: Localized;
  tech: string[];
}

export type EducationStatus = "in-progress" | "done";

export interface Education {
  title: Localized;
  school: Localized;
  period: Localized;
  status: EducationStatus;
}

export interface SkillGroup {
  id: string;
  title: Localized;
  items: string[];
}

export interface DeveloperTool {
  id: string;
  name: string;
  description: Localized;
  details: Localized;
  highlights: LocalizedList;
  images?: ProjectImage[];

  technologies: string[];
  badge: Localized;
  metadata: Localized;
  repositoryUrl: string;
  releaseUrl?: string;
  license: string;
}

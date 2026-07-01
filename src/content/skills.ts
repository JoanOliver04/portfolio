import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: { en: "Product & Frontend", es: "Producto y Frontend" },
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Angular", "RxJS"],
  },
  {
    id: "backend",
    title: { en: "Backend & Data", es: "Backend y Datos" },
    items: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Prisma", "MySQL", "REST APIs"],
  },
  {
    id: "ai",
    title: { en: "AI & Data", es: "IA y Datos" },
    items: [
      "Machine Learning",
      "scikit-learn",
      "Explainable AI (SHAP)",
      "pandas",
      "Geospatial data",
      "LLM APIs",
    ],
  },
  {
    id: "engineering",
    title: { en: "Engineering", es: "Ingeniería" },
    items: ["Testing", "Clean Architecture", "Git", "Docker", "CI-ready workflows", "Async"],
  },
];

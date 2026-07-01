import type { Experience } from "@/types";

/**
 * Internships are presented as internships. No responsibilities, results,
 * clients or achievements beyond what can be stated plainly and truthfully.
 */
export const experiences: Experience[] = [
  {
    role: {
      en: "Full-Stack Web Developer Intern",
      es: "Desarrollador Web Full-Stack (prácticas)",
    },
    company: "Imagina IT Solutions",
    location: { en: "Sueca, Valencia, Spain", es: "Sueca, Valencia, España" },
    period: { en: "Feb 2025 – May 2025", es: "Feb 2025 – May 2025" },
    summary: {
      en: "Full-stack web development internship, working with Next.js and C#.",
      es: "Prácticas de desarrollo web full-stack, trabajando con Next.js y C#.",
    },
    tech: ["Next.js", "C#"],
  },
  {
    role: {
      en: "Software Development Intern",
      es: "Desarrollo de Software (prácticas)",
    },
    company: "Recreativos Alzimatic S.L.",
    location: { en: "Alzira, Valencia, Spain", es: "Alzira, Valencia, España" },
    period: { en: "Mar 2024 – Jun 2024", es: "Mar 2024 – Jun 2024" },
    summary: {
      en: "Software development internship, working with Python and MySQL.",
      es: "Prácticas de desarrollo de software, trabajando con Python y MySQL.",
    },
    tech: ["Python", "MySQL"],
  },
];

/**
 * Language-neutral site configuration.
 *
 * Update `url` to your final deployed domain before/after the first deploy
 * (used for canonical URLs and Open Graph metadata).
 */
export const site = {
  name: "Joan V. Oliver Rosell",
  /** Short mark used in the navbar and footer. */
  shortName: "Joan Oliver",
  initials: "JO",
  roleEn: "Full-Stack Developer",
  roleEs: "Desarrollador Full-Stack",

  // Contact — email, LinkedIn and GitHub only. No phone number anywhere.
  email: "joanoliverrosell@gmail.com",
  linkedin: "https://www.linkedin.com/in/joanvoliver",
  github: "https://github.com/JoanOliver04",

  // Update this to your Vercel/production URL.
  url: "https://joan-portfolio-alpha.vercel.app",

  // Open Graph / social preview image (1200×630). Generated placeholder in /public.
  ogImage: "/og.png",
} as const;

export const locationEn = "Valencia, Spain";
export const locationEs = "Valencia, España";

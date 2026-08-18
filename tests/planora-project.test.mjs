import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const contentPath = new URL("../src/content/developerTools.ts", import.meta.url);
const componentPath = new URL("../src/components/sections/ProductivityApps.tsx", import.meta.url);
const pagePath = new URL("../src/app/page.tsx", import.meta.url);
const projectsPath = new URL("../src/content/projects.ts", import.meta.url);

test("Planora is presented as a bilingual productivity app", async () => {
  const content = await readFile(contentPath, "utf8");

  assert.match(content, /id: "planora"/);
  assert.match(content, /export const productivityApps/);
  assert.match(content, /item\.id === "planora"/);
  assert.match(content, /https:\/\/planora-lake-one\.vercel\.app\/en/);
  assert.match(content, /https:\/\/github\.com\/JoanOliver04\/planora/);
  assert.match(content, /A planner I built from scratch/);
  assert.match(content, /Un planificador que construí desde cero/);
  assert.match(content, /Focus \/ Enfoque/);
  assert.match(content, /Enfoque: temporizador/);
  assert.equal(
    [...content.matchAll(/\/projects\/planora\/\d{2}-[a-z-]+\.png/g)].length,
    17,
  );
  assert.match(content, /Personal project · In production · Used daily/);
  assert.match(content, /Proyecto personal · En producción · Uso diario/);
  assert.match(content, /I use it every day/);
  assert.match(content, /Lo uso cada día/);
  assert.match(content, /built from scratch/);
  assert.match(content, /construí desde cero/);
  assert.match(content, /364 unit\/component tests/);
  assert.match(content, /364 tests unitarios\/de componentes/);
  assert.match(content, /Playwright e2e/);
  assert.match(content, /e2e con Playwright/);
  assert.match(content, /14-focus-home\.png/);
  assert.match(content, /17-mobile-focus\.png/);

  const academicProjects = await readFile(projectsPath, "utf8");
  assert.doesNotMatch(academicProjects, /id: "planora"/);
});

test("Planora leads the Projects section and stays out of the AI list", async () => {
  const component = await readFile(componentPath, "utf8");
  const page = await readFile(pagePath, "utf8");
  const projectsSection = await readFile(
    new URL("../src/components/sections/Projects.tsx", import.meta.url),
    "utf8",
  );

  assert.match(component, /productivityApps\.map/);
  assert.match(component, /t\.productivityApps/);
  assert.match(projectsSection, /id="productivity-apps"/);
  assert.match(projectsSection, /<ProductivityApps \/>/);
  assert.ok(projectsSection.indexOf("<ProductivityApps />") < projectsSection.indexOf("aiTitle"));
  assert.ok(projectsSection.indexOf("aiTitle") < projectsSection.indexOf("<FlagshipCard"));
  assert.ok(page.indexOf("<Projects />") < page.indexOf("<DeveloperTools />"));
  assert.doesNotMatch(page, /<ProductivityApps \/>/);
});
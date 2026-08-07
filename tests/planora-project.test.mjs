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
  assert.match(content, /Independent, deeply personalizable planner/);
  assert.match(content, /Planificador independiente y muy personalizable/);
  assert.match(content, /Focus \/ Enfoque/);
  assert.match(content, /Enfoque: temporizador/);
  assert.equal(
    [...content.matchAll(/\/projects\/planora\/\d{2}-[a-z-]+\.png/g)].length,
    17,
  );
  assert.match(content, /Personal project · In production/);
  assert.match(content, /Proyecto personal · En producción/);
  assert.match(content, /323 unit\/component tests/);
  assert.match(content, /323 tests unitarios\/de componentes/);
  assert.match(content, /Playwright e2e/);
  assert.match(content, /e2e con Playwright/);
  assert.match(content, /14-focus-home\.png/);
  assert.match(content, /17-mobile-focus\.png/);

  const academicProjects = await readFile(projectsPath, "utf8");
  assert.doesNotMatch(academicProjects, /id: "planora"/);
});

test("Planora has a productivity section before developer tools", async () => {
  const component = await readFile(componentPath, "utf8");
  const page = await readFile(pagePath, "utf8");

  assert.match(component, /productivityApps\.map/);
  assert.match(component, /t\.productivityApps/);
  assert.match(component, /id="productivity-apps"/);
  assert.ok(page.indexOf("<ProductivityApps />") < page.indexOf("<DeveloperTools />"));
});
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const contentPath = new URL("../src/content/developerTools.ts", import.meta.url);
const projectsPath = new URL("../src/content/projects.ts", import.meta.url);

test("Planora is presented as a bilingual live product", async () => {
  const content = await readFile(contentPath, "utf8");
  assert.match(content, /id: "planora"/);
  assert.match(content, /https:\/\/planora-lake-one\.vercel\.app\/en/);
  assert.match(content, /https:\/\/github\.com\/JoanOliver04\/planora/);
  assert.match(content, /Independent, deeply personalizable planner/);
  assert.match(content, /Planificador independiente y muy personalizable/);
  assert.equal([...content.matchAll(/\/projects\/planora\/\d{2}-[a-z-]+\.png/g)].length, 6);
  assert.match(content, /Personal project · Live product/);
  assert.match(content, /Proyecto personal · Producto online/);
  const academicProjects = await readFile(projectsPath, "utf8");
  assert.doesNotMatch(academicProjects, /id: "planora"/);
});

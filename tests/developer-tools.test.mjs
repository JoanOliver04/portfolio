import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const contentPath = new URL("../src/content/developerTools.ts", import.meta.url);
const componentPath = new URL("../src/components/sections/DeveloperTools.tsx", import.meta.url);

test("developer tool content is bilingual, public and open source", async () => {
  const content = await readFile(contentPath, "utf8");

  assert.match(content, /Open-source desktop tool/);
  assert.match(content, /Herramienta de escritorio de código abierto/);
  assert.match(content, /https:\/\/github\.com\/JoanOliver04\/media-batch-converter/);
  assert.match(content, /Open Source/);
  assert.match(content, /Código abierto/);
  assert.match(content, /MIT License/);
  assert.doesNotMatch(content, /releaseUrl\s*:/);

  for (const confidentialTerm of ["private application", "asset pipeline", "game project", "character name"]) {
    assert.doesNotMatch(content.toLowerCase(), new RegExp(confidentialTerm));
  }
});

test("external actions are safe and the release action is optional", async () => {
  const component = await readFile(componentPath, "utf8");

  assert.match(component, /target="_blank"/);
  assert.match(component, /rel="noopener noreferrer"/);
  assert.match(component, /tool\.releaseUrl \?/);
  assert.match(component, /t\.a11y\.opensNewTab/);
});

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const contentPath = new URL("../src/content/developerTools.ts", import.meta.url);
const componentPath = new URL("../src/components/sections/DeveloperTools.tsx", import.meta.url);

test("developer tool content is bilingual, public and open source", async () => {
  const content = await readFile(contentPath, "utf8");

  assert.match(content, /export const developerTools = portfolioProducts\.filter/);
  assert.match(content, /item\.id !== "planora"/);
  assert.match(content, /Open-source desktop tool/);
  assert.match(content, /Herramienta de escritorio de código abierto/);
  assert.match(content, /https:\/\/github\.com\/JoanOliver04\/media-batch-converter/);
  assert.match(content, /Open Source/);
  assert.match(content, /Código abierto/);
  assert.match(content, /MIT License/);
  assert.match(content, /Save only if smaller/);
  assert.match(content, /Guardar solo si ocupa menos/);
  assert.match(content, /game backgrounds/);
  assert.match(content, /Vídeo HEVC en MP4/);
  assert.match(content, /Document conversion with built-in engine/);
  assert.match(content, /Conversión de documentos con motor integrado/);
  assert.doesNotMatch(content, /releaseUrl\s*:/);

  // Capabilities the entry claims; each one is visible in the public repository.
  assert.match(content, /Bilingual interface switched at runtime/);
  assert.match(content, /Interfaz bilingüe conmutable/);
  assert.match(content, /Multi-resolution ICO favicons/);
  assert.match(content, /Favicons ICO multirresolución/);

  for (const confidentialTerm of ["private application", "asset pipeline", "game project", "character name"]) {
    assert.doesNotMatch(content.toLowerCase(), new RegExp(confidentialTerm));
  }
});

test("the refreshed desktop logo and all gallery screenshots exist", async () => {
  const content = await readFile(contentPath, "utf8");
  const asset = (name) => new URL(`../public/projects/media-batch-converter/${name}`, import.meta.url);
  const logo = await readFile(asset("app-icon.png"));
  assert.match(content, /icon: "\/projects\/media-batch-converter\/app-icon\.png"/);
  assert.equal(logo.toString("ascii", 1, 4), "PNG");

  const images = [...content.matchAll(/media-batch-converter\/([a-z-]+\.webp)/g)].map((match) => match[1]);
  assert.deepEqual(images, ["images-tab.webp", "batch-results.webp", "audio-tab.webp", "video-tab.webp", "files-tab.webp"]);
  for (const image of images) {
    const bytes = await readFile(asset(image));
    assert.equal(bytes.toString("ascii", 8, 12), "WEBP");
  }
});

test("external actions are safe and the release action is optional", async () => {
  const component = await readFile(componentPath, "utf8");

  assert.match(component, /target="_blank"/);
  assert.match(component, /rel="noopener noreferrer"/);
  assert.match(component, /tool\.releaseUrl \?/);
  assert.match(component, /t\.a11y\.opensNewTab/);
  assert.match(component, /ProjectGallery images=\{tool\.images\}/);
  assert.match(component, /<article id=\{tool\.id\}/);
});

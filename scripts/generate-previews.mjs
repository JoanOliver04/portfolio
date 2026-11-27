import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import sharp from "sharp";

// Only generate files used by the live catalog. Historical screenshot URLs stay available.
const catalogs = await Promise.all(["projects", "developerTools"].map(name =>
  readFile(new URL(`../src/content/${name}.ts`, import.meta.url), "utf8")
));
const sources = new Set([...catalogs.join("\n").matchAll(/"?src"?:\s*"(\/projects\/[^"]+)"/g)].map(match => match[1]));

for (const src of sources) {
  const original = join("public", src);
  const dest = join("public", src.replace("/projects/", "/project-previews/"));
  await mkdir(dirname(dest), { recursive: true });
  const input = await readFile(original);
  const metadata = await sharp(input).metadata();
  await Promise.all([480, 960].map(async width => {
    const output = `${dest}.${width}.webp`;
    const preview = await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 85 }).toBuffer();
    const keepSource = metadata.format === "webp" && metadata.width <= width && input.length <= preview.length;
    await writeFile(output, keepSource ? input : preview);
  }));
}
console.log(`Generated responsive WebP previews for ${sources.size} screenshots.`);

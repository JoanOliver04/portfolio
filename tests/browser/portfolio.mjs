import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { chromium, webkit, devices } from "playwright-core";

const base = process.env.PORTFOLIO_URL || "http://127.0.0.1:4781";

for (const [engine, device] of [[chromium, "Pixel 7"], [webkit, "iPhone 13"]]) {
  let browser;
  before(async () => { browser = await engine.launch(); });
  after(async () => { await browser?.close(); });

  async function visit(path, action) {
    const context = await browser.newContext({ ...devices[device], locale: "en-US", reducedMotion: "reduce" });
    try {
      const page = await context.newPage();
      page.setDefaultTimeout(10000);
      await page.goto(base + path, { waitUntil: "domcontentloaded" });
      await page.locator("button[aria-haspopup=dialog]:enabled").first().waitFor();
      await action(page);
    } finally {
      await context.close();
    }
  }

  test(device + " gallery, browser history and focus", () => visit("/", async page => {
    await page.locator('main a[href="#projects"]').first().tap();
    await page.locator('#projects nav a[href="#data-fuel"]').tap();
    const card = page.locator("#data-fuel");
    const opener = card.locator("[aria-haspopup=dialog]");
    const picker = card.locator("select");
    await picker.selectOption("5");
    const preview = card.locator("picture img");
    await preview.scrollIntoViewIfNeeded();
    await page.waitForFunction(() => document.querySelector("#data-fuel picture img").currentSrc.includes("/project-previews/"));
    assert.equal(await page.evaluate(() => performance.getEntriesByType("resource").some(r => r.name.endsWith("/data-fuel/06-dark.png"))), false);
    await opener.scrollIntoViewIfNeeded();
    const scrollBefore = await page.evaluate(() => scrollY);
    const documentStart = await page.evaluate(() => performance.timeOrigin);
    await opener.tap();
    const dialog = page.locator("dialog[open]");
    await dialog.locator("img").evaluate(img => img.decode());
    assert.match(await dialog.locator("img").getAttribute("src"), /06-dark\.png$/);
    await dialog.getByRole("button", { name: "Next screenshot" }).tap();
    assert.equal(await picker.inputValue(), "0");
    await page.keyboard.press("ArrowRight");
    assert.equal(await picker.inputValue(), "1");
    await page.goBack();
    await dialog.waitFor({ state: "hidden" });
    assert.equal(new URL(page.url()).hash, "#data-fuel");
    assert.equal(await picker.inputValue(), "1");
    await page.waitForFunction(() => document.activeElement?.getAttribute("aria-haspopup") === "dialog");
    assert.ok(Math.abs(await page.evaluate(() => scrollY) - scrollBefore) < 8, "Back restores the gallery scroll position");
    await page.goForward();
    await dialog.waitFor();
    assert.equal(await page.evaluate(() => performance.timeOrigin), documentStart, "Forward retains the document");
    assert.equal(await picker.inputValue(), "1");
    await dialog.getByRole("button", { name: "Previous screenshot" }).tap();
    await dialog.getByRole("button", { name: "Close screenshot" }).tap();
    await dialog.waitFor({ state: "hidden" });
    await opener.tap();
    await dialog.waitFor();
    await page.keyboard.press("Escape");
    await dialog.waitFor({ state: "hidden" });
    await page.waitForURL("**/#data-fuel");
    await page.goBack();
    await page.waitForURL("**/#projects");
    await page.goto(base + "/en#gallery-data-fuel");
    await page.locator("dialog[open]").getByRole("button", { name: "Close screenshot" }).tap();
    await page.waitForURL("**/en#data-fuel");
    await page.waitForFunction(() => document.activeElement?.getAttribute("aria-haspopup") === "dialog");
  }));

  test(device + " shareable Spanish and project index return", () => visit("/es#planora", async page => {
    const html = await (await page.request.get(base + "/es")).text();
    assert.match(html, /<html[^>]+lang="es"/);
    assert.match(html, /<title>[^<]*Desarrollador/);
    const article = page.locator("#planora");
    assert.equal(await page.locator('article a[href^="#index-"]').count(), 8);
    const back = article.getByRole("link", { name: "Volver al índice de proyectos" });
    await back.tap();
    await page.waitForFunction(() => document.activeElement?.getAttribute("href") === "#planora");
    await page.keyboard.press("Enter");
    await page.locator("header.site-header").getByRole("link", {name:"Cambiar idioma a inglés"}).tap();
    await page.waitForURL("**/en#planora");
    assert.equal(await page.locator("html").getAttribute("lang"), "en");
  }));

  test(device + " compact navigation dismissal", () => visit("/", async page => {
    const menu = page.locator("button[aria-controls=mobile-navigation]");
    await menu.tap();
    await page.locator("#mobile-navigation a").last().focus();
    await page.keyboard.press("Tab");
    await page.waitForFunction(() => document.querySelector("button[aria-controls=mobile-navigation]").getAttribute("aria-expanded") === "false");
    await menu.tap();
    await page.locator("#mobile-navigation a").first().focus();
    await page.keyboard.press("Escape");
    assert.equal(await menu.getAttribute("aria-expanded"), "false");
    assert.ok(await menu.evaluate(el => el === document.activeElement));
    await menu.tap();
    await page.locator("#mobile-navigation a").first().focus();
    await page.locator("#mobile-navigation a").first().evaluate(el => el.blur());
    assert.equal(await menu.getAttribute("aria-expanded"), "false");
  }));

  test(device + " language switch keeps the linked project in a desktop grid", () => visit("/en#data-detective", async page => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.locator("#data-detective").evaluate(el => el.scrollIntoView());
    await page.locator("header.site-header").getByRole("link", { name: "Switch language to Spanish" }).click();
    await page.waitForURL("**/es#data-detective");
  }));
}

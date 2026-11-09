import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist/public");
const site = JSON.parse(readFileSync(path.join(root, "config/site.json"), "utf8"));
for (const file of ["index.html", "sitemap.xml", "robots.txt"]) {
  assert(existsSync(path.join(output, file)), `Missing ${file}; run pnpm build first`);
}
const html = readFileSync(path.join(output, "index.html"), "utf8");
assert(html.includes('href="https://gtsgolf-tw.com/"'), "Canonical URL must be preserved");
assert(html.includes('name="google-site-verification"'), "Google verification missing");
assert(html.includes("vB4FBg08HbXug19_DeacS9pvKUNnhowfNWhn0ehjSLw"), "Google verification value changed");
for (const attribute of ['property="og:image"', 'property="og:image:secure_url"', 'name="twitter:image"']) {
  const tag = html.match(new RegExp(`<meta[^>]*${attribute}[^>]*>`))?.[0];
  assert(tag?.includes("taiwan-golf-hero-bright-v2_f0d7bf62.webp"), `Latest share image missing for ${attribute}`);
}
assert(!/%VITE_|\/src\/main\.tsx|\/__manus__\/|\/umami/.test(html), "Development or unset analytics reference found");
const assetReferences = [...html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)(?:[?#][^"]*)?"/g)];
assert(assetReferences.length >= 2, "Expected production JS and CSS references");
for (const [, url] of assetReferences) assert(existsSync(path.join(output, url.slice(1))), `Missing asset ${url}`);
assert(!existsSync(path.join(output, "__manus__")), "Development debug files must not be deployed");
const sitemap = readFileSync(path.join(output, "sitemap.xml"), "utf8");
assert(sitemap.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'), "Sitemap namespace missing");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.deepEqual(urls, site.routes.map((route) => new URL(route.path, site.origin).href));
assert(urls.every((url) => !url.includes("#") && !url.endsWith("/404")), "Invalid indexed route");
const robots = readFileSync(path.join(output, "robots.txt"), "utf8");
assert(robots.includes("Allow: /") && robots.includes(`Sitemap: ${site.origin}/sitemap.xml`), "robots.txt missing crawl policy");
const walk = (dir) => readdirSync(dir).flatMap((name) => {
  const file = path.join(dir, name);
  return statSync(file).isDirectory() ? walk(file) : [file];
});
for (const file of walk(output)) {
  assert(!/\.(?:tsx?|mjs)$|(?:^|\/)\.env(?:\.|$)/.test(file), `Source or environment file leaked: ${file}`);
}
console.log(`Verified static HTML, JS/CSS, Google verification, share image, robots, and ${urls.length} sitemap URL(s)`);

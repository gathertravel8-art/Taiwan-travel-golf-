import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const config = JSON.parse(readFileSync(path.join(root, "config/site.json"), "utf8"));
const origin = new URL(config.origin);
if (origin.protocol !== "https:" || origin.pathname !== "/" || origin.search || origin.hash) {
  throw new Error("site.origin must be an HTTPS origin, without paths or fragments");
}
if (!Array.isArray(config.routes) || config.routes.length === 0) {
  throw new Error("At least one public route is required");
}
const escapeXml = (text) => String(text).replace(/[<>&\"']/g, (char) => ({
  "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;",
}[char]));
const seen = new Set();
const entries = config.routes.map(({ path: route, lastmod }) => {
  if (typeof route !== "string" || !route.startsWith("/") || route.startsWith("//") || /[?#\\]/.test(route) || route === "/404") {
    throw new Error(`Invalid public route: ${route}`);
  }
  const url = new URL(route, origin);
  if (url.origin !== origin.origin || seen.has(url.href)) throw new Error(`Duplicate or invalid route: ${route}`);
  seen.add(url.href);
  if (lastmod && (!/^\d{4}-\d{2}-\d{2}$/.test(lastmod) || !Number.isFinite(Date.parse(lastmod)))) {
    throw new Error(`Invalid lastmod: ${lastmod}`);
  }
  return `  <url>\n    <loc>${escapeXml(url.href)}</loc>${lastmod ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>` : ""}\n  </url>`;
});
const publicDir = path.join(root, "client/public");
mkdirSync(publicDir, { recursive: true });
writeFileSync(path.join(publicDir, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>\n`);
writeFileSync(path.join(publicDir, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${origin.origin}/sitemap.xml\n`);
console.log(`Generated sitemap.xml and robots.txt for ${entries.length} public route(s)`);

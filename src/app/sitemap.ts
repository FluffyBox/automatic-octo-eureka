import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getAllPosts } from "@/lib/posts";
import { doorModels } from "@/lib/doors";

// Stable "last significant content update" date for static pages.
// Bump this when you meaningfully change static page content, rather than
// letting every build reset lastModified to now (which Google learns to ignore).
const STATIC_LAST_MODIFIED = new Date("2026-08-11");

// [route, priority] — priority is a relative hint (home/commercial pages first).
const staticRoutes: Array<[string, number]> = [
  ["", 1.0],
  ["/usi-de-interior", 0.9],
  ["/oferta", 0.9],
  ["/preturi", 0.8],
  ["/servicii", 0.8],
  ["/servicii/consultanta-masuratori", 0.7],
  ["/servicii/montaj", 0.7],
  ["/structura-usilor", 0.6],
  ["/proiecte", 0.6],
  ["/despre-noi", 0.6],
  ["/contact", 0.7],
  ["/intrebari-frecvente", 0.6],
  ["/blog", 0.6],
  // Legal pages: low priority, but indexing them is a trust signal for both
  // search engines and AI answer engines assessing business legitimacy.
  ["/politica-de-confidentialitate", 0.2],
  ["/politica-de-cookie-uri", 0.2],
  ["/termeni-si-conditii", 0.2],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(([route, priority]) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: STATIC_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority,
  }));

  // Per-model pages sit just under the category page in importance: they carry
  // the long-tail commercial intent ("uși glisante", "uși stratificate").
  const modelEntries: MetadataRoute.Sitemap = doorModels.map((model) => ({
    url: `${siteConfig.url}/usi-de-interior/${model.slug}`,
    lastModified: STATIC_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticEntries, ...modelEntries, ...postEntries];
}

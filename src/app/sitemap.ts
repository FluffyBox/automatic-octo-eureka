import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { getAllPosts } from "@/lib/posts";

const staticRoutes = [
  "",
  "/despre-noi",
  "/usi-de-interior",
  "/structura-usilor",
  "/servicii",
  "/servicii/consultanta-masuratori",
  "/servicii/montaj",
  "/proiecte",
  "/intrebari-frecvente",
  "/blog",
  "/oferta",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticEntries, ...postEntries];
}

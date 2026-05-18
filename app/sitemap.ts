import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "", "/about", "/contact",
    "/practice-areas/divorce", "/practice-areas/family-law",
    "/practice-areas/real-estate", "/practice-areas/ssdi"
  ];
  return pages.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.8
  }));
}

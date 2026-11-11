import type { MetadataRoute } from "next";
import { BIO_PAGES } from "@/lib/bioinformatics-pages";

const SITE_URL = "https://www.syntaxpakistan.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core = ([
    { url: SITE_URL, priority: 1.0, changeFrequency: "weekly" },
    { url: `${SITE_URL}/bioinformatics`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${SITE_URL}/projects`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${SITE_URL}/partners`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${SITE_URL}/contact`, priority: 0.8, changeFrequency: "monthly" },
  ] satisfies MetadataRoute.Sitemap).map((e) => ({ ...e, lastModified: now }));

  const bio: MetadataRoute.Sitemap = BIO_PAGES.filter((p) => p.slug !== "overview").map(
    (p) => ({
      url: `${SITE_URL}/bioinformatics/${p.slug}`,
      lastModified: now,
      priority: 0.7,
      changeFrequency: "monthly",
    }),
  );

  const company: MetadataRoute.Sitemap = [
    "about",
    "careers",
    "certified",
    "contact",
    "grants",
    "legal",
    "legal/privacy",
    "legal/data",
    "legal/compliance",
    "news",
  ].map((slug) => ({
    url: `${SITE_URL}/company/${slug}`,
    lastModified: now,
    priority: 0.5,
    changeFrequency: "monthly",
  }));

  return [...core, ...bio, ...company];
}

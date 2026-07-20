import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { certifications } from "@/lib/data/certifications";
import { getAllPostSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/about/founder",
    "/services",
    "/certifications",
    "/cisco-training",
    "/comptia-training",
    "/gallery",
    "/videos",
    "/blog",
    "/testimonials",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${SITE.domain}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const certRoutes = certifications.map((c) => ({
    url: `${SITE.domain}/certifications/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes = getAllPostSlugs().map((slug) => ({
    url: `${SITE.domain}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...certRoutes, ...blogRoutes];
}

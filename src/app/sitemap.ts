import { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://campustrails.vercel.app"; // Default Vercel production domain

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/collection`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sections`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guidelines`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const sectionRoutes: MetadataRoute.Sitemap = siteConfig.sections.map(
    (section) => ({
      url: `${baseUrl}/sections/${section.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: section.status === "active" ? 0.9 : 0.6,
    })
  );

  return [...staticRoutes, ...sectionRoutes];
}

import type { MetadataRoute } from "next"
import { playbooks, guides } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://techsalesplaybook.com"

  // Static pages
  const staticPages = [
    "",
    "/playbooks",
    "/offerings",
    "/blog",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Playbook pages
  const playbookPages = playbooks.map((playbook) => ({
    url: `${baseUrl}/playbooks/${playbook.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  // Blog pages
  const blogPages = guides.map((guide) => ({
    url: `${baseUrl}/blog/${guide.slug}`,
    lastModified: guide.publishedAt ? new Date(guide.publishedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...playbookPages, ...blogPages]
}


import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site";
import { LOCAL_PAGES } from "@/constants/locations";
import { BLOG_POSTS } from "@/constants/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticRoutes = [
    "",
    "/about",
    "/gaming",
    "/pricing",
    "/membership",
    "/tournaments",
    "/gallery",
    "/reviews",
    "/faq",
    "/contact",
    "/book",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const localRoutes = Object.values(LOCAL_PAGES).map((page) => ({
    url: `${baseUrl}/location/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...localRoutes, ...blogRoutes];
}

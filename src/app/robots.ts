import { type MetadataRoute } from "next";

import { siteConfig } from "@/data/site.config";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.meta.url;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

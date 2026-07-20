import type { Metadata } from "next";

import { siteConfig } from "@/data/site.config";

interface ConstructMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title = siteConfig.meta.title,
  description = siteConfig.meta.description,
  image = "/opengraph-image.png",
  url = "",
  noIndex = false,
}: ConstructMetadataProps = {}): Metadata {
  return {
    metadataBase: new URL(siteConfig.meta.url),
    title: {
      default: title,
      template: `%s | ${siteConfig.meta.title}`,
    },
    description,
    keywords: siteConfig.meta.keywords,
    authors: [{ name: siteConfig.meta.title }],
    creator: siteConfig.meta.title,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: url ? `${siteConfig.meta.url}${url}` : siteConfig.meta.url,
      title,
      description,
      siteName: siteConfig.meta.title,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@talal", // Replace with actual handle if available
      images: [image],
    },
    icons: {
      icon: "/favicon.ico",
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

type PageMeta = {
  title: string;
  description: string;
  path: string; // e.g. "/about"
  image?: string;
};

export function buildMetadata({ title, description, path, image }: PageMeta): Metadata {
  const url = `${SITE.domain}${path}`;
  const ogImage = image ?? `${SITE.domain}/images/gallery/hero/og-default.svg`;
  const fullTitle = path === "/" ? `${SITE.name} | ${SITE.tagline}` : `${title} | ${SITE.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_GH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

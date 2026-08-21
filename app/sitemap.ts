import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Bump this when page content meaningfully changes, rather than using
// the build/request timestamp, so the sitemap gives an accurate recency
// signal instead of appearing to change on every deploy.
const CONTENT_LAST_MODIFIED = "2026-08-21";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

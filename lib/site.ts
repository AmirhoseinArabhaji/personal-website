const FALLBACK_SITE_URL = "http://localhost:3000";

function normalizeSiteUrl(value: string) {
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

export const siteUrl = (() => {
  const configuredSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    FALLBACK_SITE_URL;

  try {
    return normalizeSiteUrl(new URL(configuredSiteUrl).toString());
  } catch {
    return FALLBACK_SITE_URL;
  }
})();

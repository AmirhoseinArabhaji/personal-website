import { siteUrl } from "@/lib/site";
import { profile } from "@/lib/content/profile";
import { email, contactLinks } from "@/lib/content/contact";
import { privacy } from "@/lib/content/legal";

/**
 * Decides whether a request should receive a text/markdown response instead
 * of HTML, per acceptmarkdown.com content-negotiation rules: markdown wins
 * when it is present in Accept and not strictly less preferred than html.
 */
export function prefersMarkdown(acceptHeader: string | null): boolean {
  if (!acceptHeader) return false;

  const entries = acceptHeader.split(",").map((part) => {
    const [rawType, ...params] = part.trim().split(";");
    const type = rawType.trim().toLowerCase();
    const qParam = params
      .map((p) => p.trim())
      .find((p) => p.startsWith("q="));
    const q = qParam ? Number.parseFloat(qParam.slice(2)) : 1;
    return { type, q: Number.isNaN(q) ? 1 : q };
  });

  const markdown = entries.find(
    (e) => e.type === "text/markdown" || e.type === "text/x-markdown",
  );
  if (!markdown || markdown.q <= 0) return false;

  const html = entries.find((e) => e.type === "text/html" || e.type === "*/*");
  if (!html) return true;

  return markdown.q >= html.q;
}

function frontMatter(title: string, description: string): string {
  return [
    "---",
    `title: ${title}`,
    `description: ${description}`,
    `url: ${siteUrl}`,
    "---",
    "",
  ].join("\n");
}

export function homepageMarkdown(): string {
  return (
    frontMatter(
      `${profile.name} — ${profile.role}`,
      "Personal portfolio and engineering notebook.",
    ) +
    [
      `# ${profile.name}`,
      "",
      `${profile.role}.`,
      "",
      profile.hero.bio,
      "",
      "## About",
      "",
      profile.about.paragraphs.join("\n\n"),
      "",
      "## Contact",
      "",
      `Email: [${email}](mailto:${email})`,
      "",
      ...contactLinks.map((link) => `- [${link.label}](${link.href}): ${link.handle}`),
      "",
      "## More",
      "",
      `- [Sitemap](${siteUrl}/sitemap.xml)`,
      `- [Agent instructions (llms.txt)](${siteUrl}/llms.txt)`,
      `- [About](${siteUrl}/about)`,
      `- [Contact](${siteUrl}/contact)`,
      `- [Privacy](${siteUrl}/privacy)`,
      "",
    ].join("\n")
  );
}

export function aboutMarkdown(): string {
  return (
    frontMatter(`About — ${profile.name}`, profile.about.quote) +
    [
      `# About ${profile.name}`,
      "",
      `> ${profile.about.quote}`,
      "",
      profile.about.paragraphs.join("\n\n"),
      "",
      `[Back to home](${siteUrl})`,
      "",
    ].join("\n")
  );
}

export function contactMarkdown(): string {
  return (
    frontMatter(`Contact — ${profile.name}`, "Ways to reach out.") +
    [
      `# Contact ${profile.name}`,
      "",
      `Email: [${email}](mailto:${email})`,
      "",
      ...contactLinks.map((link) => `- [${link.label}](${link.href}): ${link.handle}`),
      "",
      `[Back to home](${siteUrl})`,
      "",
    ].join("\n")
  );
}

export function privacyMarkdown(): string {
  return (
    frontMatter(`Privacy — ${profile.name}`, "How this site handles data.") +
    [
      `# Privacy Policy`,
      "",
      `Last updated: ${privacy.updated}`,
      "",
      privacy.paragraphs.join("\n\n"),
      "",
      `[Back to home](${siteUrl})`,
      "",
    ].join("\n")
  );
}

export function notFoundMarkdown(pathname: string): string {
  return [
    "# 404 — Page not found",
    "",
    `\`${pathname}\` does not exist on this site.`,
    "",
    "## Where to look next",
    "",
    `- [Home](${siteUrl})`,
    `- [Sitemap](${siteUrl}/sitemap.xml)`,
    `- [Agent instructions (llms.txt)](${siteUrl}/llms.txt)`,
    `- [About](${siteUrl}/about)`,
    `- [Contact](${siteUrl}/contact)`,
    "",
  ].join("\n");
}

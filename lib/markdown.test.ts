import { describe, expect, it } from "vitest";
import {
  prefersMarkdown,
  homepageMarkdown,
  aboutMarkdown,
  contactMarkdown,
  privacyMarkdown,
  notFoundMarkdown,
} from "@/lib/markdown";

describe("prefersMarkdown", () => {
  it("returns false when no Accept header is present", () => {
    expect(prefersMarkdown(null)).toBe(false);
  });

  it("returns true for a plain text/markdown Accept header", () => {
    expect(prefersMarkdown("text/markdown")).toBe(true);
  });

  it("returns true for text/x-markdown", () => {
    expect(prefersMarkdown("text/x-markdown")).toBe(true);
  });

  it("returns false for a plain text/html Accept header", () => {
    expect(prefersMarkdown("text/html")).toBe(false);
  });

  it("returns false for the default browser Accept header", () => {
    expect(
      prefersMarkdown(
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      ),
    ).toBe(false);
  });

  it("prefers markdown when it has an equal or higher q-value than html", () => {
    expect(prefersMarkdown("text/markdown;q=1.0, text/html;q=0.9")).toBe(true);
  });

  it("prefers html when markdown has a lower q-value", () => {
    expect(prefersMarkdown("text/markdown;q=0.5, text/html;q=0.9")).toBe(false);
  });

  it("returns false when markdown is explicitly disabled with q=0", () => {
    expect(prefersMarkdown("text/markdown;q=0, text/html")).toBe(false);
  });
});

describe("markdown content generators", () => {
  it("produces a homepage document with front matter and key sections", () => {
    const md = homepageMarkdown();
    expect(md.startsWith("---\n")).toBe(true);
    expect(md).toContain("# Amirhosein Arabhaji");
    expect(md).toContain("## About");
    expect(md).toContain("## Contact");
    expect(md).toContain("/sitemap.xml");
    expect(md).toContain("/llms.txt");
  });

  it("produces a non-empty about document", () => {
    expect(aboutMarkdown()).toContain("# About Amirhosein Arabhaji");
  });

  it("produces a non-empty contact document with the contact email", () => {
    expect(contactMarkdown()).toContain("mailto:");
  });

  it("produces a non-empty privacy document", () => {
    expect(privacyMarkdown()).toContain("# Privacy Policy");
  });

  it("produces a 404 document that names the missing path and recovery links", () => {
    const md = notFoundMarkdown("/nope");
    expect(md).toContain("/nope");
    expect(md).toContain("Sitemap");
    expect(md).toContain("llms.txt");
  });
});

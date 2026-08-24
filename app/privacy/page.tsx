import type { Metadata } from "next";
import { SimplePage } from "@/components/layout/simple-page";
import { privacy } from "@/lib/content/legal";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How this site handles data, analytics, and contact messages.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <SimplePage>
      <p className="m-0 text-[11px] uppercase tracking-[0.18em] text-foreground-3">
        Privacy
      </p>
      <h1 className="mt-4 font-serif text-[clamp(28px,3.6vw,40px)] leading-tight">
        Privacy Policy
      </h1>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-3">
        Last updated {privacy.updated}
      </p>
      <div className="mt-8 flex max-w-[65ch] flex-col gap-5 text-[15px] leading-[1.8] text-foreground-2">
        {privacy.paragraphs.map((paragraph) => (
          <p key={paragraph} className="m-0">
            {paragraph}
          </p>
        ))}
      </div>
    </SimplePage>
  );
}

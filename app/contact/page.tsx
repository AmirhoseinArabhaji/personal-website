import type { Metadata } from "next";
import { SimplePage } from "@/components/layout/simple-page";
import { profile } from "@/lib/content/profile";
import { email as EMAIL, contactLinks as links } from "@/lib/content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: `Ways to reach ${profile.name}: email, GitHub, LinkedIn, Telegram, Instagram.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <SimplePage>
      <p className="m-0 text-[11px] uppercase tracking-[0.18em] text-foreground-3">
        Contact
      </p>
      <p className="m-0 mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-2">
        Open to backend roles and interesting problems
      </p>
      <a
        href={`mailto:${EMAIL}`}
        className="mt-[18px] block break-words font-serif text-[clamp(24px,4.6vw,48px)] leading-[1.1] tracking-[-0.015em] transition-colors hover:text-accent"
      >
        {EMAIL}
      </a>
      <p className="mt-6 max-w-[60ch] text-[15px] leading-[1.8] text-foreground-2">
        {profile.name} is a {profile.role.toLowerCase()} and welcomes messages about
        backend roles, contract work, or interesting engineering problems involving
        Python, Django, Go, data modelling, or access control at scale. Email is the
        most reliable way to reach out; the links below go to profiles on GitHub,
        LinkedIn, Telegram, and Instagram.
      </p>

      <div className="mt-10 grid gap-px bg-border [grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr))]">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-11 flex-col gap-2.5 bg-background px-5 py-6 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors hover:bg-surface"
          >
            <span className="text-foreground-3">{link.label}</span>
            <span className="whitespace-nowrap">{link.handle} ↗</span>
          </a>
        ))}
      </div>
    </SimplePage>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SimplePage } from "@/components/layout/simple-page";
import { profile } from "@/lib/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: profile.about.quote,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <SimplePage>
      <p className="m-0 text-[11px] uppercase tracking-[0.18em] text-foreground-3">
        About
      </p>
      <div className="mt-9 grid items-start gap-[clamp(28px,6vw,80px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))]">
        <div className="min-w-0">
          <div className="relative aspect-[4/5] w-full max-w-[220px] overflow-hidden border border-border">
            <Image
              src={profile.avatar}
              alt={profile.about.avatarAlt}
              fill
              className="object-cover"
              sizes="220px"
            />
          </div>
        </div>
        <div className="min-w-0 [grid-column:span_2]">
          <p className="m-0 max-w-[30ch] font-serif text-[clamp(22px,2.6vw,34px)] leading-[1.35]">
            {profile.about.quote}
          </p>
          {profile.about.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={
                index === 0
                  ? "mt-7 max-w-[60ch] text-[15px] leading-[1.8] text-foreground-2"
                  : "mt-[18px] max-w-[60ch] text-[15px] leading-[1.8] text-foreground-3"
              }
            >
              {paragraph}
            </p>
          ))}
          <p className="mt-[18px] max-w-[60ch] text-[15px] leading-[1.8] text-foreground-3">
            {profile.name} is a {profile.role.toLowerCase()} based on Python/Django and
            Go, working on data models, query paths, cache boundaries, and access control
            at scale. This page exists as a dedicated, linkable identity page — see the{" "}
            full profile on the{" "}
            <Link href="/#about" className="underline hover:text-accent">
              homepage
            </Link>{" "}
            or reach out via the{" "}
            <Link href="/contact" className="underline hover:text-accent">
              contact page
            </Link>
            .
          </p>
        </div>
      </div>
    </SimplePage>
  );
}

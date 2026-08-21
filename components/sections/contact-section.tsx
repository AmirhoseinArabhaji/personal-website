import { SectionHeading } from "./section-heading";

const EMAIL = "amirhosein.arabhaji@gmail.com";

const links = [
  { label: "GitHub", handle: "AmirhoseinArabhaji", href: "https://github.com/AmirhoseinArabhaji" },
  { label: "LinkedIn", handle: "amirhosein-arabhaji", href: "https://linkedin.com/in/amirhosein-arabhaji/" },
  { label: "Telegram", handle: "@Amirhosein_Ara", href: "https://t.me/Amirhosein_Ara" },
  { label: "Instagram", handle: "_amirhosein_ar", href: "https://instagram.com/_amirhosein_ar/" },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto mt-[clamp(88px,16vh,200px)] max-w-[1080px] scroll-mt-24 pb-[clamp(64px,11vh,130px)]"
    >
      <SectionHeading number="07" label="Contact" />
      <p className="m-0 mt-[clamp(32px,5vh,56px)] font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-2">
        Open to backend roles and interesting problems
      </p>
      <a
        href={`mailto:${EMAIL}`}
        className="mt-[18px] block break-words font-serif text-[clamp(24px,4.6vw,62px)] leading-[1.1] tracking-[-0.015em] transition-colors hover:text-accent"
      >
        {EMAIL}
      </a>

      <div className="mt-[clamp(40px,7vh,80px)] grid gap-px bg-border [grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr))]">
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

      <div className="mt-[clamp(48px,8vh,96px)] flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-[22px] font-mono text-[10px] uppercase tracking-[0.14em] text-foreground-3">
        <span>© {new Date().getFullYear()} Amirhosein Arabhaji</span>
        <span>Next.js · TypeScript · Tailwind · Framer Motion</span>
        <a href="#top" className="ml-auto text-foreground-2 hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </section>
  );
}

import { SectionHeading } from "./section-heading";

const items = [
  {
    label: "Building",
    text: "Sharpening the consensus engine, and the way confidence gets communicated in a UI.",
    muted: false,
  },
  {
    label: "Studying",
    text: "MSc coursework.",
    muted: false,
  },
  {
    label: "Exploring",
    text: "Go concurrency patterns, in more depth than a single project requires.",
    muted: false,
  },
  {
    label: "Away from the keyboard",
    text: "Cycling, and rebuilding my Persian vocabulary one word at a time.",
    muted: false,
  },
];

const NOW_STAMP = "Aug 2026";

export function NowSection() {
  return (
    <section
      id="now"
      className="mx-auto mt-[clamp(80px,15vh,190px)] max-w-[1080px] scroll-mt-24"
    >
      <SectionHeading number="04" label="Now" trailing={`updated ${NOW_STAMP}`} />
      <div className="mt-[clamp(40px,7vh,80px)] grid gap-[clamp(28px,5vw,64px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
        {items.map((item) => (
          <div key={item.label}>
            <p className="m-0 mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              {item.label}
            </p>
            <p
              className={`m-0 text-[17px] leading-[1.7] ${item.muted ? "text-foreground-3" : "text-foreground-2"}`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

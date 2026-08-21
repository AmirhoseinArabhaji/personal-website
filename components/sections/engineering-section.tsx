import { SectionHeading } from "./section-heading";
import { skillGroups as groups } from "@/lib/content/engineering";

export function EngineeringSection() {
  return (
    <section
      id="engineering"
      className="mx-auto mt-[clamp(80px,15vh,190px)] max-w-[1080px] scroll-mt-24"
    >
      <SectionHeading number="03" label="Engineering" />
      <h2 className="m-0 mt-[clamp(30px,5vh,52px)] max-w-[22ch] font-serif text-[clamp(26px,3.4vw,46px)] font-normal leading-[1.1] tracking-[-0.015em]">
        What I reach for, and what I use it for.
      </h2>
      <div className="mt-[clamp(40px,7vh,80px)] grid gap-x-[clamp(28px,6vw,80px)] gap-y-[clamp(28px,5vw,64px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        {groups.map((group) => (
          <div key={group.title}>
            <p className="m-0 mb-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              {group.title}
            </p>
            <p className="m-0 mb-4 text-base leading-[1.7] text-foreground-2">
              {group.blurb}
            </p>
            <p className="m-0 font-mono text-xs leading-[2.1]">
              {group.stack.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < group.stack.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

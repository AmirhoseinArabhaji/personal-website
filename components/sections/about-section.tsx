import Image from "next/image";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto mt-[clamp(80px,15vh,190px)] max-w-[1080px] scroll-mt-24"
    >
      <SectionHeading number="06" label="About" />
      <div className="mt-9 grid items-start gap-[clamp(28px,6vw,80px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))]">
        <div className="min-w-0">
          <div className="relative aspect-[4/5] w-full max-w-[264px] overflow-hidden border border-border">
            <Image
              src="/avatar.jpg"
              alt="Amirhosein Arabhaji"
              fill
              className="object-cover"
              sizes="264px"
            />
          </div>
        </div>
        <div className="min-w-0 [grid-column:span_2]">
          <p className="m-0 max-w-[30ch] font-serif text-[clamp(22px,2.6vw,34px)] leading-[1.35]">
            I would rather understand a system than memorise a framework.
          </p>
          <p className="mt-7 max-w-[52ch] text-[clamp(16px,1.15vw,18px)] leading-[1.8] text-foreground-2 text-pretty">
            That is roughly how I ended up writing Go after years of Python:
            not because it was new, but because I wanted to see the
            concurrency I had been abstracting away. I am most useful on the
            parts of a system people avoid, like the schema everyone is
            afraid to change, or the endpoint that got slow for reasons
            nobody can explain.
          </p>
          <p className="mt-[18px] max-w-[52ch] text-[clamp(16px,1.15vw,18px)] leading-[1.8] text-foreground-3 text-pretty">
            Outside of that: long walks with a podcast, and a running
            argument with myself about whether the next side project should
            be smaller than the last one.
          </p>
        </div>
      </div>
    </section>
  );
}

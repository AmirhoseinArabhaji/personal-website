import Image from "next/image";
import { SectionHeading } from "./section-heading";
import { profile } from "@/lib/content/profile";

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
              src={profile.avatar}
              alt={profile.about.avatarAlt}
              fill
              className="object-cover"
              sizes="264px"
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
                  ? "mt-7 max-w-[52ch] text-[clamp(16px,1.15vw,18px)] leading-[1.8] text-foreground-2 text-pretty"
                  : "mt-[18px] max-w-[52ch] text-[clamp(16px,1.15vw,18px)] leading-[1.8] text-foreground-3 text-pretty"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

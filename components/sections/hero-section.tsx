import Image from "next/image";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-[1080px] py-[clamp(56px,13vh,160px)] pb-[clamp(64px,12vh,140px)]">
      <h1 className="m-0 font-serif text-[clamp(40px,7.6vw,104px)] font-normal leading-[0.98] tracking-[-0.02em]">
        Amirhosein
        <br />
        Arabhaji
      </h1>
      <p className="mt-[clamp(18px,3vh,28px)] font-mono text-[clamp(12px,1.15vw,15px)] uppercase tracking-[0.16em] text-accent">
        Backend software engineer
      </p>
      <div className="mt-[clamp(40px,8vh,88px)] flex flex-wrap items-end gap-[clamp(28px,5vw,72px)]">
        <p className="m-0 max-w-[46ch] flex-1 basis-[340px] text-[clamp(16px,1.1vw,18px)] leading-[1.75] text-foreground-2 text-pretty">
          I work on the parts of a product you never see: data models, query
          paths, cache boundaries, permission rules. I like problems where the
          answer can be measured, and I would rather remove a layer than add
          one.
        </p>
        <div className="w-[clamp(132px,17vw,176px)] flex-none">
          <div className="relative aspect-square w-full overflow-hidden border border-border">
            <Image
              src="/avatar.jpg"
              alt="Amirhosein Arabhaji"
              fill
              className="object-cover"
              sizes="176px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

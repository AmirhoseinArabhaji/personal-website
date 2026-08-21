import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { projects } from "@/lib/content/projects";

export function ProjectsSection() {
  return (
    <section id="work" className="mx-auto max-w-[1080px] scroll-mt-24">
      <SectionHeading number="01" label="Projects" />

      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          className={
            index === 0
              ? "mt-[clamp(44px,8vh,96px)]"
              : "mt-[clamp(56px,10vh,128px)] border-t border-border pt-[clamp(28px,4vh,48px)]"
          }
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="m-0 mb-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-3">
            {project.eyebrow}
          </p>
          <h2 className="m-0 font-serif text-[clamp(30px,4.4vw,58px)] font-normal leading-[1.02] tracking-[-0.02em]">
            {project.title}
          </h2>
          <p className="mt-[clamp(22px,4vh,36px)] max-w-[26ch] font-serif text-[clamp(21px,2.5vw,34px)] leading-[1.3]">
            {project.tagline}
          </p>

          <div className="mt-[clamp(32px,6vh,72px)] grid gap-[clamp(28px,5vw,72px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
            {project.columns.map((column) => (
              <div key={column.label}>
                <p className="m-0 mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-3">
                  {column.label}
                </p>
                <p className="m-0 text-[clamp(15px,1.05vw,17px)] leading-[1.75] text-foreground-2 text-pretty">
                  {column.text}
                </p>
              </div>
            ))}
          </div>

          {project.why && (
            <div className="mt-[clamp(28px,5vh,48px)] max-w-[62ch]">
              <p className="m-0 mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-3">
                Why I built it
              </p>
              <p className="m-0 text-[clamp(15px,1.05vw,17px)] leading-[1.75] text-foreground-2 text-pretty">
                {project.why}
              </p>
            </div>
          )}

          <div className="mt-[clamp(40px,7vh,80px)] border border-border bg-surface">
            <div className="border-b border-border px-[18px] py-[13px] font-mono text-[11px] uppercase tracking-[0.16em] text-foreground-3">
              Technologies
            </div>
            <div className="grid font-mono text-[11px] [grid-template-columns:repeat(auto-fit,minmax(min(50%,180px),1fr))]">
              {project.tech.map((item, techIndex) => (
                <div
                  key={item.label}
                  className={
                    techIndex < project.tech.length - 1
                      ? "border-r border-border p-[18px]"
                      : "p-[18px]"
                  }
                >
                  <span className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-foreground-3">
                    {item.label}
                  </span>
                  {item.value}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={project.demoHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center gap-2.5 border border-accent bg-accent px-[22px] font-mono text-[11px] uppercase tracking-[0.14em] text-on-accent transition-opacity hover:opacity-90"
            >
              Live demo <span aria-hidden="true">↗</span>
            </a>
            <a
              href={project.repoHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center gap-2.5 border border-border px-[22px] font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-2 transition-colors hover:border-foreground hover:text-foreground"
            >
              Source <span aria-hidden="true">↗</span>
            </a>
          </div>
        </motion.article>
      ))}
    </section>
  );
}

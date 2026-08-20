import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "My personal site, built with Next.js and TypeScript, App Router architecture, animated sections with Framer Motion, SEO-optimized metadata, and Google Analytics tracking.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://amirhosein.me",
    repoHref: "https://github.com/AmirhoseinArabhaji/personal-website",
  },
  {
    title: "Weather Fusion",
    description:
      "A weather intelligence platform that fetches forecasts from multiple providers concurrently, runs a consensus & confidence engine, and uses an LLM to explain the results in plain language.",
    tech: ["Go", "Gin", "PostgreSQL", "Redis", "Next.js", "TypeScript"],
    href: "https://weatherfusion.amirhosein.me",
    repoHref: "https://github.com/AmirhoseinArabhaji/weather-fusion",
  },
] satisfies {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  repoHref?: string;
}[];

export function ProjectsSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Selected Projects
        </h2>
        <p className="max-w-xl text-sm text-foreground/70 sm:text-base">
          A curated selection of work that highlights my experience across
          product engineering, performance, and developer tooling.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-surface/90 p-[1px] shadow-lg shadow-black/40 transition-transform duration-300 ease-out hover:-translate-y-1 hover:-rotate-1"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="flex h-full flex-col rounded-2xl bg-background/40 p-4 sm:p-5">
              <div className="mb-4">
                <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs text-foreground/70 sm:text-sm">
                  {project.description}
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent-soft/15 px-2.5 py-1 text-[11px] font-medium text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.repoHref && (
                <a
                  href={project.repoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 mt-3 self-start text-xs font-medium text-foreground/70 underline-offset-2 hover:text-foreground hover:underline"
                >
                  View source →
                </a>
              )}
            </div>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
                aria-label={project.title}
              />
            )}
          </motion.article>
        ))}
      </div>
    </div>
  );
}


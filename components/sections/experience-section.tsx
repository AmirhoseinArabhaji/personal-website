const workExperience = [
  {
    period: "2024 — 2025",
    title: "Backend Developer",
    organization: "Tribes",
    description:
      "Engineered secure document-handling and high-throughput transaction engines for LegalTech and fundraising platforms with strict RBAC.",
  },
  {
    period: "2021 — 2025",
    title: "Django Developer",
    organization: "Rentifa (Chabok Gerayan)",
    description:
      "Optimized API endpoints and redesigned architecture, achieving reduction in response times and increase in system stability.",
  },
];

const education = [
  {
    period: "2024 — Present",
    title: "MSc in Computer Science",
    organization: "University of Padova",
    description:
      "Advanced graduate studies in computer science within the historical academic hub of Padova, Italy.",
  },
  {
    period: "2018 — 2022",
    title: "BSc in Computer Engineering",
    organization: "Shahrood University of Technology",
    description:
      "Focused on software engineering fundamentals, database management, and building resilient backend systems.",
  },
];

export function ExperienceSection() {
  return (
    <div className="space-y-8">
      {/* Work Experience */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Experience
          </h2>
          <p className="max-w-xl text-sm text-foreground/70 sm:text-base">
            A snapshot of where I&apos;ve been and what I&apos;ve been building.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent-soft/40 via-border/40 to-background/0 sm:left-5" />
          <ol className="space-y-8">
            {workExperience.map((item, index) => (
              <li key={`${item.title}-${index}`} className="relative pl-10 sm:pl-12">
                <div className="absolute left-3 top-1.5 h-2.5 w-2.5 rounded-full border border-accent/80 bg-surface sm:left-4" />
                <div className="space-y-1">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/60">
                    {item.period}
                  </p>
                  <h3 className="text-sm font-semibold text-foreground sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-foreground/80 sm:text-sm">
                    {item.organization}
                  </p>
                  <p className="max-w-xl text-xs text-foreground/70 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Education */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Education
          </h2>
          <p className="max-w-xl text-sm text-foreground/70 sm:text-base">
            The formal training that underpins my engineering work.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent-soft/40 via-border/40 to-background/0 sm:left-5" />
          <ol className="space-y-8">
            {education.map((item, index) => (
              <li key={`${item.title}-${index}`} className="relative pl-10 sm:pl-12">
                <div className="absolute left-3 top-1.5 h-2.5 w-2.5 rounded-full border border-accent/80 bg-surface sm:left-4" />
                <div className="space-y-1">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/60">
                    {item.period}
                  </p>
                  <h3 className="text-sm font-semibold text-foreground sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-foreground/80 sm:text-sm">
                    {item.organization}
                  </p>
                  <p className="max-w-xl text-xs text-foreground/70 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}


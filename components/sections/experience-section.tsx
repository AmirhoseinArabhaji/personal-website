import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

const roles = [
  {
    period: "2024 – 2025",
    title: "Tribes",
    role: "Backend developer",
    company: null as string | null,
    companyUrl: "https://tribes.tech",
    intro:
      "LegalTech and fundraising products put two kinds of pressure on a backend at once: documents that must never leak, and transaction flows that must never double-count.",
    points: [
      "Built secure document handling, where who can see which document is part of the data model rather than a check bolted on at the view layer.",
      "Worked on high-throughput transaction handling, where correctness under concurrent writes matters more than raw speed.",
      "Implemented strict role-based access control across roles and organisations, and kept it maintainable as the product's roles multiplied.",
    ],
  },
  {
    period: "2021 – 2025",
    title: "Rentifa",
    role: "Django developer",
    company: "Chabok Gerayan",
    companyUrl: "https://rentifa.com",
    intro:
      "Four years on one codebase, long enough to see which early decisions age badly, and to be the one who fixes them.",
    points: [
      "Profiled and rewrote slow API endpoints. Mostly a story about query patterns and doing less work per request, not about adding machines.",
      "Reshaped parts of the architecture so features stopped reaching across boundaries they should not touch, which made changes cheaper to make.",
      "Improved day-to-day stability by tightening failure paths: retries, timeouts, and the error handling nobody notices until it is missing.",
    ],
  },
];

const education = [
  {
    period: "2024 – 2026 (expected)",
    title: "MSc Computer Science",
    school: "University of Padova",
  },
  {
    period: "2018 – 2022",
    title: "BSc Computer Engineering",
    school: "Shahrood University of Technology",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto mt-[clamp(80px,15vh,190px)] max-w-[1080px] scroll-mt-24"
    >
      <SectionHeading number="02" label="Experience" trailing="2021 – 2025" />

      {roles.map((item, index) => (
        <motion.div
          key={item.title}
          className={
            index === 0
              ? "mt-[clamp(44px,8vh,96px)] grid gap-[clamp(22px,5vw,68px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]"
              : "mt-[clamp(48px,9vh,112px)] grid gap-[clamp(22px,5vw,68px)] border-t border-border pt-[clamp(28px,4vh,48px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]"
          }
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div>
            <p className="m-0 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground-3">
              {item.period}
            </p>
            <h3 className="mt-3 font-serif text-[clamp(28px,3.6vw,46px)] font-normal leading-[1.02]">
              {item.title}
            </h3>
            <p className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-foreground-2">
              {item.role}
              {item.company && (
                <>
                  <br />
                  <span className="text-foreground-3">{item.company}</span>
                </>
              )}
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em]">
              {item.companyUrl ? (
                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-border text-foreground-2"
                >
                  Company site ↗
                </a>
              ) : (
                <span className="text-foreground-3">Company site: [add URL]</span>
              )}
            </p>
          </div>
          <div className="min-w-0 [grid-column:span_2]">
            <p className="m-0 max-w-[52ch] text-[clamp(16px,1.15vw,18px)] leading-[1.75] text-pretty">
              {item.intro}
            </p>
            <ul className="m-0 mt-7 flex max-w-[56ch] list-none flex-col gap-[18px] p-0">
              {item.points.map((point, pointIndex) => (
                <li
                  key={point}
                  className="flex gap-4 text-base leading-[1.75] text-foreground-2"
                >
                  <span className="pt-[5px] font-mono text-[11px] text-accent">
                    {String(pointIndex + 1).padStart(2, "0")}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}

      <div className="mt-[clamp(48px,9vh,112px)] grid gap-[clamp(22px,4vw,52px)] border-t border-border pt-[clamp(26px,4vh,44px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))]">
        <p className="m-0 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-3">
          Education
        </p>
        {education.map((item) => (
          <div key={item.title}>
            <p className="m-0 font-mono text-[11px] tracking-[0.12em] text-foreground-3">
              {item.period}
            </p>
            <p className="mt-2.5 text-lg leading-[1.45]">{item.title}</p>
            <p className="mt-1.5 text-[15px] text-foreground-2">{item.school}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

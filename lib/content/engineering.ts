export type SkillGroup = {
  title: string;
  blurb: string;
  stack: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    blurb:
      "Where most of my time goes: request paths, domain logic, and the seams between services.",
    stack: ["Python · Django", "Go · Gin"],
  },
  {
    title: "Data",
    blurb:
      "Schema design first, then indexes and query paths, then caching, in that order.",
    stack: ["PostgreSQL", "Redis"],
  },
  {
    title: "Frontend",
    blurb:
      "Enough to ship a whole product myself, and to design APIs a client is happy to consume.",
    stack: ["TypeScript", "Next.js · React"],
  },
  {
    title: "Systems",
    blurb:
      "Comfortable in a terminal on a real server, building, containerising and debugging what runs there.",
    stack: ["Linux", "Docker · Concurrency"],
  },
  {
    title: "Practice",
    blurb: "The judgement part: what to build, what to measure, and what to leave alone.",
    stack: ["API design", "Backend architecture"],
  },
  {
    title: "Care about",
    blurb:
      "Systems that stay correct under load, and permissions that stay correct under change.",
    stack: ["Performance", "Access control · RBAC"],
  },
];

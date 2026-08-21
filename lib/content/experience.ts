export type Role = {
  period: string;
  title: string;
  role: string;
  company: string | null;
  companyUrl: string | null;
  intro: string;
  points: string[];
};

export const roles: Role[] = [
  {
    period: "2024 – 2025",
    title: "Tribes",
    role: "Backend developer",
    company: null,
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

export type EducationItem = {
  period: string;
  title: string;
  school: string;
};

export const education: EducationItem[] = [
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

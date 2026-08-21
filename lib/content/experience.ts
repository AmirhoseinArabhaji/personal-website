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
      "Remote and part-time, working across two clients with very different failure modes: a LegalTech platform where a document ending up in front of the wrong person is the whole risk, and a fundraising platform where a transaction getting double-counted is.",
    points: [
      "Built a secure document-handling backend for the LegalTech client in Django and DRF, with role-based access control designed into the data model so a permission check isn't something you can forget to add to a new view.",
      "Developed a high-throughput transaction engine for the fundraising platform, using PostgreSQL schemas built to hold up under concurrent writes rather than just concurrent reads.",
      "Went through a legacy client platform fixing the API bugs that were actually causing downtime, and cleaned up the backend paths those bugs kept coming back to.",
    ],
  },
  {
    period: "2021 – 2025",
    title: "Rentifa",
    role: "Django developer",
    company: "Chabok Gerayan",
    companyUrl: "https://rentifa.com",
    intro:
      "Close to four years on one Django codebase, full-time until 2024 and part-time after, serving 10,000+ active users across multiple countries. Long enough to see which early decisions aged badly and to be the one fixing them.",
    points: [
      "Built out a multi-language database and API layer covering 5+ languages, so localized responses could be added without every new market turning into a special case.",
      "Rewrote slow API endpoints: fewer queries, fewer joins, ORM calls that did less work per request. Response times dropped by about 40% on average.",
      "Added multi-currency pricing and a multi-currency payment system for ads, plus object storage for media uploads, replacing what used to be handled ad hoc.",
      "Reworked parts of the backend architecture, which brought a roughly 50% improvement in overall speed and stability, and shipped features like an SMS price-alert service that grew past 500 active subscribers and a vehicle comparison tool.",
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

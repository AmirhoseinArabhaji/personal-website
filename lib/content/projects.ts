export type Project = {
  eyebrow: string;
  title: string;
  tagline: string;
  columns: { label: string; text: string }[];
  why: string | null;
  tech: { label: string; value: string }[];
  demoHref: string;
  repoHref: string;
};

export const projects: Project[] = [
  {
    eyebrow: "01 / Weather intelligence platform",
    title: "Weather Fusion",
    tagline: "A forecast is a claim, not a fact.",
    columns: [
      {
        label: "The problem",
        text: "Every weather app is one provider's opinion presented as certainty. Ask three providers about tomorrow and you often get three answers, with no way to tell how much they actually disagree.",
      },
      {
        label: "What it does",
        text: "Fetches forecasts from several providers concurrently, then runs a consensus and confidence engine. Agreement raises confidence; divergence gets surfaced instead of hidden. An LLM layer turns the result into plain language.",
      },
    ],
    why: "I wanted the interesting work to be concurrency and data modelling rather than screens. Fan out to slow third-party APIs, keep the request path fast, and stay honest about uncertainty in the output.",
    tech: [
      { label: "Service", value: "Go · Gin" },
      { label: "Persistence", value: "PostgreSQL" },
      { label: "Cache", value: "Redis" },
      { label: "Client", value: "Next.js · TypeScript" },
    ],
    demoHref: "https://weatherfusion.amirhosein.me",
    repoHref: "https://github.com/AmirhoseinArabhaji/weather-fusion",
  },
  {
    eyebrow: "02 / Personal site",
    title: "amirhosein.me",
    tagline: "Small enough to keep changing.",
    columns: [
      {
        label: "What it is",
        text: "The thing you are reading. A statically served single page on the Next.js App Router, with content kept in typed data and layout kept in components, so adding a project is an edit to one file.",
      },
      {
        label: "Why I built it",
        text: "A place to point people at that is mine rather than a profile page, and a small surface to keep my frontend sharp: metadata, sitemap and robots are generated at build time.",
      },
    ],
    why: null,
    tech: [
      { label: "Framework", value: "Next.js" },
      { label: "Language", value: "TypeScript" },
      { label: "Styling", value: "Tailwind CSS" },
      { label: "Motion", value: "Framer Motion" },
    ],
    demoHref: "https://amirhosein.me",
    repoHref: "https://github.com/AmirhoseinArabhaji/personal-website",
  },
];

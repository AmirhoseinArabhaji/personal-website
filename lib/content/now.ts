export type NowItem = {
  label: string;
  text: string;
  muted?: boolean;
};

export const nowStamp = "Aug 2026";

export const nowItems: NowItem[] = [
  {
    label: "Building",
    text: "Sharpening the consensus engine, and the way confidence gets communicated in a UI.",
  },
  {
    label: "Studying",
    text: "MSc coursework.",
  },
  {
    label: "Exploring",
    text: "Go concurrency patterns, in more depth than a single project requires.",
  },
  {
    label: "Away from the keyboard",
    text: "Cycling, and rebuilding my Persian vocabulary one word at a time.",
  },
];

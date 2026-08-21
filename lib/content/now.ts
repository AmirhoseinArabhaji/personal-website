export type NowItem = {
  label: string;
  text: string;
  muted?: boolean;
};

export const nowStamp = "Aug 2026";

export const nowItems: NowItem[] = [
  {
    label: "Building",
    text: "Nothing shipping this week. most of my time is going into small personal projects between thesis work.",
  },
  {
    label: "Studying",
    text: "My MSc thesis, more than any single course right now.",
  },
  {
    label: "Exploring",
    text: "Distributed systems and system design, past what one course or project requires.",
  },
  {
    label: "Away from the keyboard",
    text: "The gym, a backlog of movies I'm behind on, and wandering around parts of my city I haven't seen yet.",
  },
];

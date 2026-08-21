export type LabNote = {
  date: string;
  kind: string;
  title: string;
  summary: string;
  href?: string;
};

export const labNotes: LabNote[] = [
  // {
  //   date: "2026.03.14",
  //   kind: "Debugging",
  //   title: "Why the slow endpoint was not the database's fault",
  //   summary:
  //     "Six hundred milliseconds that looked like a missing index, and turned out to be serialization doing the same work once per row.",
  // },
  // {
  //   date: "2026.01.28",
  //   kind: "Architecture",
  //   title: "Fanning out to five APIs without letting the slowest one win",
  //   summary:
  //     "Notes from Weather Fusion on timeouts, partial results, and deciding what a response means when one provider never answers.",
  // },
  // {
  //   date: "2025.11.09",
  //   kind: "Design note",
  //   title: "Modelling permissions so you cannot forget to check them",
  //   summary:
  //     "Why access rules that live in the query are harder to get wrong than access rules that live in the view layer.",
  // },
  {
    date: "2026.05.02",
    kind: "Computer Vision",
    title: "Fine-tuning GeoCLIP with LoRA to cut its error by 87%",
    summary:
      "Fine-tuned GeoCLIP with LoRA adapters, updating only 1.4% of its weights, on street-level photos from Italy. Cut mean GPS error by 87% and median error by 79% against the pretrained baseline, with a land-aware penalty added to discourage predictions landing in the sea.",
    href: "https://github.com/AmirhoseinArabhaji/ComputerVisionProject",
  },
];

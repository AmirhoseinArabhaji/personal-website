import { SectionHeading } from "./section-heading";

const notes = [
  {
    date: "2026.03.14",
    kind: "Debugging",
    title: "Why the slow endpoint was not the database's fault",
    summary:
      "Six hundred milliseconds that looked like a missing index, and turned out to be serialization doing the same work once per row.",
  },
  {
    date: "2026.01.28",
    kind: "Architecture",
    title: "Fanning out to five APIs without letting the slowest one win",
    summary:
      "Notes from Weather Fusion on timeouts, partial results, and deciding what a response means when one provider never answers.",
  },
  {
    date: "2025.11.09",
    kind: "Design note",
    title: "Modelling permissions so you cannot forget to check them",
    summary:
      "Why access rules that live in the query are harder to get wrong than access rules that live in the view layer.",
  },
];

export function LabSection() {
  return (
    <section
      id="lab"
      className="mx-auto mt-[clamp(80px,15vh,190px)] max-w-[1080px] scroll-mt-24"
    >
      <SectionHeading number="05" label="Lab notes" trailing="draft section" />
      <p className="m-0 mt-[clamp(28px,5vh,48px)] max-w-[52ch] text-[clamp(16px,1.15vw,18px)] leading-[1.75] text-foreground-2">
        One problem per note: what broke or puzzled me, what I measured, and
        what the answer turned out to be. Two or three paragraphs is a
        finished note. Not a blog, closer to a lab notebook that happens to
        be public.
      </p>
      <ul className="m-0 mt-[clamp(30px,5vh,56px)] list-none p-0">
        {notes.map((note) => (
          <li key={note.title} className="border-t border-border last:border-b">
            <a
              href="#lab"
              className="grid gap-1.5 px-1.5 py-[26px] transition-colors hover:bg-surface"
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em]">
                <span className="text-foreground-3">{note.date}</span>
                <span className="text-accent">{note.kind}</span>
                <span className="text-foreground-3">Placeholder</span>
              </div>
              <span className="font-serif text-[clamp(19px,2vw,27px)] leading-[1.3]">
                {note.title}
              </span>
              <span className="max-w-[62ch] text-[15px] leading-[1.7] text-foreground-2">
                {note.summary}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="m-0 mt-[22px] max-w-[62ch] font-mono text-[11px] leading-[1.9] tracking-[0.06em] text-foreground-3">
        Placeholder entries. Each note is a date, a kind (debugging,
        architecture, design note, benchmark), a title that states the
        finding, and one sentence of what is inside.
      </p>
    </section>
  );
}

import { SectionHeading } from "./section-heading";
import { labNotes as notes } from "@/lib/content/lab-notes";

export function LabSection() {
  return (
    <section
      id="lab"
      className="mx-auto mt-[clamp(80px,15vh,190px)] max-w-[1080px] scroll-mt-24"
    >
      <SectionHeading number="05" label="Lab notes" />
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
              href={note.href ?? "#lab"}
              target={note.href ? "_blank" : undefined}
              rel={note.href ? "noreferrer" : undefined}
              className="grid gap-1.5 px-1.5 py-[26px] transition-colors hover:bg-surface"
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em]">
                <span className="text-foreground-3">{note.date}</span>
                <span className="text-accent">{note.kind}</span>
                {!note.href && (
                  <span className="text-foreground-3">Placeholder</span>
                )}
              </div>
              <span className="font-serif text-[clamp(19px,2vw,27px)] leading-[1.3]">
                {note.title}
              </span>
              <span className="max-w-[62ch] text-[15px] leading-[1.7] text-foreground-2">
                {note.summary}
              </span>
              {note.href && (
                <span className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-3">
                  Read more <span aria-hidden="true">↗</span>
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

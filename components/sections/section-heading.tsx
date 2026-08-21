import type { ReactNode } from "react";

export function SectionHeading({
  number,
  label,
  trailing,
}: {
  number: string;
  label: string;
  trailing?: ReactNode;
}) {
  return (
    <div className="border-t border-border pt-0">
      <div className="h-0.5 w-14 bg-accent" />
      <div className="mt-[26px] flex items-baseline gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-3">
        <span className="text-accent">{number}</span>
        <span>{label}</span>
        {trailing && <span className="ml-auto">{trailing}</span>}
      </div>
    </div>
  );
}

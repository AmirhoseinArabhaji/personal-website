import { Mail } from "lucide-react";

const EMAIL = "amirhosein.arabhaji@gmail.com";

export function ContactSection() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Let&apos;s connect
        </h2>
        <p className="max-w-xl text-sm text-foreground/70 sm:text-base">
          Open to interesting roles, collaborations, and thoughtful technical
          conversations.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground shadow-sm shadow-black/30 transition-colors hover:border-accent-soft hover:bg-accent-soft/20"
        >
          <Mail className="h-4 w-4" />
          <span>{EMAIL}</span>
        </a>
      </div>
    </div>
  );
}

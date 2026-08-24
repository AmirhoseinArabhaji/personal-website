import type { ReactNode } from "react";
import Link from "next/link";
import { profile } from "@/lib/content/profile";

export function SimplePage({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-[clamp(18px,5vw,88px)] py-6">
        <Link
          href="/"
          className="font-mono text-xs uppercase leading-relaxed tracking-[0.12em]"
        >
          A. Arabhaji
          <br />
          <span className="text-foreground-3">backend eng.</span>
        </Link>
      </header>
      <main className="mx-auto max-w-[720px] px-[clamp(18px,5vw,88px)] py-[clamp(48px,10vh,96px)]">
        {children}
      </main>
      <footer className="border-t border-border px-[clamp(18px,5vw,88px)] py-6 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground-3">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        {" · "}
        <Link href="/" className="hover:text-accent">
          Home
        </Link>
      </footer>
    </div>
  );
}

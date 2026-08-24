import Link from "next/link";
import { siteUrl } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[640px] flex-col justify-center gap-6 px-[clamp(18px,5vw,88px)] font-mono text-sm text-foreground">
      <p className="m-0 text-[11px] uppercase tracking-[0.18em] text-foreground-3">
        404
      </p>
      <h1 className="m-0 font-serif text-[clamp(28px,4vw,44px)] leading-tight">
        Page not found
      </h1>
      <p className="m-0 text-foreground-2">
        This path does not exist on {siteUrl.replace(/^https?:\/\//, "")}.
      </p>

      <div className="mt-4 border-t border-border pt-4">
        <p className="m-0 mb-2 text-[11px] uppercase tracking-[0.14em] text-foreground-3">
          Where to look next
        </p>
        <ul className="m-0 flex list-none flex-col gap-2 p-0">
          <li>
            <Link href="/" className="underline hover:text-accent">
              Home
            </Link>
          </li>
          <li>
            <Link href="/sitemap.xml" className="underline hover:text-accent">
              Sitemap
            </Link>
          </li>
          <li>
            <Link href="/llms.txt" className="underline hover:text-accent">
              Agent instructions (llms.txt)
            </Link>
          </li>
          <li>
            <Link href="/about" className="underline hover:text-accent">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="underline hover:text-accent">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

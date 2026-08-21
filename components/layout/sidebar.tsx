"use client";

import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/components/utils/cn";

const groups = [
  {
    label: "Work",
    items: [
      { id: "work", number: "01", label: "Projects" },
      { id: "experience", number: "02", label: "Experience" },
      { id: "engineering", number: "03", label: "Engineering" },
    ],
  },
  {
    label: "Notebook",
    items: [
      { id: "now", number: "04", label: "Now" },
      { id: "lab", number: "05", label: "Lab" },
    ],
  },
  {
    label: "Me",
    items: [
      { id: "about", number: "06", label: "About" },
      { id: "contact", number: "07", label: "Contact" },
    ],
  },
];

const sections = groups.flatMap((group) => group.items);

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  return stored === "dark" ? "dark" : "light";
}

function useThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}

function useActiveSection() {
  const [active, setActive] = useState<string>("work");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) setActive(id);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -60% 0px", threshold: 0.2 },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

function handleNavClick(id: string) {
  return (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
}

function ThemeIcon({ theme }: { theme: "light" | "dark" }) {
  return theme === "dark" ? (
    <Sun className="h-[15px] w-[15px]" />
  ) : (
    <Moon className="h-[15px] w-[15px]" />
  );
}

export function Sidebar() {
  const { theme, toggleTheme } = useThemeToggle();
  const active = useActiveSection();

  return (
    <>
      {/* Wide layout: fixed left rail */}
      <nav
        aria-label="Sections"
        className="fixed inset-y-0 left-0 z-30 hidden w-[200px] flex-col justify-between border-r border-border bg-background px-0 py-9 pl-8 lg:flex"
      >
        <Link
          href="#top"
          className="font-mono text-xs uppercase leading-relaxed tracking-[0.12em]"
        >
          A. Arabhaji
          <br />
          <span className="text-foreground-3">backend eng.</span>
        </Link>

        <div className="flex flex-col gap-[22px] font-mono text-xs uppercase tracking-[0.1em]">
          {groups.map((group, index) => (
            <div key={group.label} className="flex flex-col gap-3">
              {index > 0 && <div className="mb-3 h-px w-16 bg-border" />}
              <p className="m-0 text-[10px] tracking-[0.2em] text-foreground-3">
                {group.label}
              </p>
              {group.items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleNavClick(item.id)}
                  className={cn(
                    "flex gap-3 transition-colors",
                    active === item.id
                      ? "text-accent"
                      : "text-foreground-2 hover:text-accent",
                  )}
                >
                  <span className="text-foreground-3">{item.number}</span>
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          className="inline-flex min-h-[38px] items-center gap-[9px] self-start rounded-full border border-border px-3.5 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-2 transition-colors hover:border-accent hover:text-foreground"
        >
          <ThemeIcon theme={theme} />
          <span>{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
      </nav>

      {/* Narrow layout: sticky top header */}
      <header className="sticky top-0 z-30 border-b border-border bg-background lg:hidden">
        <div className="flex items-center justify-between gap-3 px-[18px] py-3 font-mono text-xs uppercase tracking-[0.12em]">
          <a href="#top">A. Arabhaji</a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground-2"
          >
            <ThemeIcon theme={theme} />
          </button>
        </div>
        <div className="flex gap-5 overflow-x-auto px-[18px] pb-[11px] font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-3">
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleNavClick(item.id)}
              className={cn(
                "whitespace-nowrap",
                active === item.id ? "text-accent" : "text-foreground-2",
              )}
            >
              {item.number} {item.label}
            </a>
          ))}
        </div>
      </header>
    </>
  );
}

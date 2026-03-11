"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/components/utils/cn";

const sections = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState<string>("hero");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

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
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.2,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const initialTheme =
      stored === "light" || stored === "dark"
        ? (stored as "light" | "dark")
        : prefersDark
        ? "dark"
        : "light";

    setTheme(initialTheme);
    root.dataset.theme = initialTheme;
  }, []);

  useEffect(() => {
    if (!theme) return;
    const root = document.documentElement;
    root.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleNavClick = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offset = 96; // account for fixed navbar height
    const targetY = rect.top + scrollTop - offset;

    window.scrollTo({ top: targetY, behavior: "smooth" });
    setActive(id);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4 sm:top-6">
      <div className="mx-auto w-full max-w-6xl">
        <nav className="flex w-full items-center justify-between rounded-full border border-border/70 bg-surface/80 px-4 py-2 text-sm shadow-lg shadow-black/40 backdrop-blur-xl sm:px-6">
          <Link href="#hero" className="font-semibold tracking-tight text-foreground">
            ah.
          </Link>

          <div className="flex flex-1 items-center justify-center gap-1 sm:gap-2">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                onClick={handleNavClick(section.id)}
                className={cn(
                  "relative overflow-hidden rounded-full px-3 py-1 text-xs font-medium sm:text-sm",
                  active === section.id
                    ? "text-background"
                    : "text-foreground/80 hover:bg-surface transition-colors"
                )}
              >
                {active === section.id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{section.label}</span>
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/80 bg-surface text-foreground transition-colors hover:border-accent-soft hover:bg-accent-soft/20"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}


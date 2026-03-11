"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      },
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
    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)",
    ).matches;
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

  const handleNavClick =
    (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const el = document.getElementById(id);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const offset = 96; // account for fixed navbar height
      const targetY = rect.top + scrollTop - offset;

      window.scrollTo({ top: targetY, behavior: "smooth" });
      setActive(id);
      setIsMenuOpen(false);
    };

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4 sm:top-6">
      <div className="mx-auto w-full max-w-6xl">
        <nav className="relative w-full rounded-2xl border border-border/70 bg-surface/80 px-3 py-2 text-sm shadow-lg shadow-black/40 backdrop-blur-xl sm:px-6 sm:py-3 md:rounded-full">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0 flex-1">
              <Link
                href="#hero"
                className="font-semibold tracking-tight text-foreground"
              >
                <span className="flex items-center text-sm sm:text-base">
                  <span className="truncate">Amirhosein Arabhaji</span>
                  <span className="terminal-cursor" aria-hidden="true">
                    _
                  </span>
                </span>
              </Link>
            </div>

            <div className="hidden md:absolute md:left-1/2 md:top-1/2 md:flex md:-translate-x-1/2 md:-translate-y-1/2">
              <div className="flex items-center justify-center gap-1 rounded-full bg-surface/70 p-1 sm:gap-2">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={handleNavClick(section.id)}
                    className={cn(
                      "relative whitespace-nowrap overflow-hidden rounded-full px-3 py-1 text-xs font-medium sm:text-sm",
                      active === section.id
                        ? "text-background"
                        : "text-foreground/80 hover:bg-surface transition-colors",
                    )}
                  >
                    {active === section.id && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-accent"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{section.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-1 items-center justify-end gap-2">
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

              <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/80 bg-surface text-foreground transition-colors hover:border-accent-soft hover:bg-accent-soft/20 md:hidden"
              >
                {isMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="mt-3 rounded-xl border border-border/70 bg-surface/90 p-2 md:hidden">
              <div className="grid grid-cols-2 gap-2">
                {sections.map((section) => (
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={handleNavClick(section.id)}
                    className={cn(
                      "relative overflow-hidden rounded-lg px-3 py-2 text-center text-sm font-medium",
                      active === section.id
                        ? "bg-accent text-background"
                        : "text-foreground/85 hover:bg-surface",
                    )}
                  >
                    {section.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

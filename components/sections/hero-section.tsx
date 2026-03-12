"use client"; // Required for framer-motion

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Send } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative grid gap-10 md:grid-cols-[1fr_2fr] md:items-center">
      {/* Subtle animated background */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-accent-soft/25 blur-3xl"
          animate={{ x: [0, 20, -10, 0], y: [0, -10, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
          animate={{ x: [0, -15, 10, 0], y: [0, 15, -5, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* 1. IMAGE CONTAINER: First in code = Top on Mobile, Left on Desktop */}
      <div className="flex justify-center md:justify-start">
        <motion.div
          className="relative h-48 w-48 overflow-hidden rounded-3xl border border-border/70 bg-surface shadow-2xl shadow-black/60 sm:h-64 sm:w-64"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/avatar.jpg"
            alt="Portrait of Amirhosein"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 13rem, 10rem"
            priority
          />
        </motion.div>
      </div>

      {/* 2. TEXT CONTAINER: Second in code = Bottom on Mobile, Right on Desktop */}
      <div className="space-y-6 text-center md:text-left">
        <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/60">
            Software Engineer
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Amirhosein Arabhaji
          </h1>
        </div>
        <p className="mx-auto max-w-xl text-balance text-sm text-foreground/70 md:mx-0 sm:text-base">
          Building high-performance, scalable backends for the global web.
        </p>
        <p className="mx-auto max-w-xl text-balance text-sm text-foreground/70 md:mx-0 sm:text-base">
          I&apos;m Amirhosein, a Software Engineer specializing in crafting
          resilient server-side architectures with <b>Python</b>, <b>Django</b>,
          and <b>PostgreSQL</b>. I am passionate about optimizing system
          stability, refining complex business logic, and engineering seamless
          multi-language platforms that serve international users.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-foreground/70 md:justify-start">
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/50">
            Connect
          </span>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://github.com/AmirhoseinArabhaji"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-surface text-foreground transition-colors hover:border-accent-soft hover:bg-accent-soft/20"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/amirhosein-arabhaji/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-surface text-foreground transition-colors hover:border-accent-soft hover:bg-accent-soft/20"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com/_amirhosein_ar/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-surface text-foreground transition-colors hover:border-accent-soft hover:bg-accent-soft/20"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://t.me/Amirhosein_Ara"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-surface text-foreground transition-colors hover:border-accent-soft hover:bg-accent-soft/20"
            >
              <Send className="h-4 w-4" />
            </a>
            <a
              href="mailto:amirhosein.arabhaji@gmail.com"
              aria-label="Email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-surface text-foreground transition-colors hover:border-accent-soft hover:bg-accent-soft/20"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

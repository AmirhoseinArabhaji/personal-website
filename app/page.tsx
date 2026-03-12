"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-32 px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-36">
        <section id="hero">
          <HeroSection />
        </section>

        {/*<section id="projects">*/}
        {/*  <ProjectsSection />*/}
        {/*</section>*/}

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

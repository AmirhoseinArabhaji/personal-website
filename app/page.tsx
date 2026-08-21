"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EngineeringSection } from "@/components/sections/engineering-section";
import { NowSection } from "@/components/sections/now-section";
import { LabSection } from "@/components/sections/lab-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Sidebar />
      <main id="top" className="px-[clamp(18px,5vw,88px)] lg:ml-[200px]">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <EngineeringSection />
        <NowSection />
        <LabSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}

import type { Metadata } from "next";

import { WorksSection } from "@/lib/components/works/works-section";

import { WorkHeroSection } from "@/modules/work/ui/sections/work-hero-section";

export const metadata: Metadata = {
  title: "Work - Talal",
  description: "Selected works",
};

export default function WorkPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <WorkHeroSection />
      <WorksSection />
    </main>
  );
}

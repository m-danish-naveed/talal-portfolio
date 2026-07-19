import type { Metadata } from "next";

import { WorksSection } from "@/lib/components/works/works-section";

import { WorkHeroSection } from "@/modules/work/ui/sections/work-hero-section";

export const metadata: Metadata = {
  title: "Work - Sam Kolder",
  description: "Selected works",
};

export default function WorkPage() {
  return (
    <main className="bg-background flex min-h-screen flex-col">
      <WorkHeroSection />
      <WorksSection />
    </main>
  );
}

import type { Metadata } from "next";

import { WorksSection } from "@/lib/components/works/works-section";

import { workConfig } from "@/data/pages/work.config";
import { siteConfig } from "@/data/site.config";
import { WorkHeroSection } from "@/modules/work/ui/sections/work-hero-section";

export const metadata: Metadata = {
  title: `${workConfig.hero.tag} - ${siteConfig.meta.title}`,
  description: workConfig.hero.headline,
};

export default function WorkPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <WorkHeroSection />
      <WorksSection />
    </main>
  );
}

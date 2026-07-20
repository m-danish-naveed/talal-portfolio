import type { Metadata } from "next";

import { WorksSection } from "@/lib/components/works/works-section";
import { constructMetadata } from "@/lib/utils/metadata";

import { workConfig } from "@/data/pages/work.config";
import { WorkHeroSection } from "@/modules/work/ui/sections/work-hero-section";

export const metadata: Metadata = constructMetadata({
  title: workConfig.hero.tag,
  description: workConfig.hero.headline,
  url: "/work",
});

export default function WorkPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <WorkHeroSection />
      <WorksSection />
    </main>
  );
}

import type { Metadata } from "next";

import { constructMetadata } from "@/lib/utils/metadata";

import { workConfig } from "@/data/pages/work.config";
import { WorksSection } from "@/modules/shared/ui/sections/works-section";
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

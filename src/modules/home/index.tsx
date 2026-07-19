import { WorksSection } from "@/lib/components/works/works-section";

import { CtaSection } from "./ui/sections/cta-section";
import { HeroSection } from "./ui/sections/hero-section";
import { LogosSection } from "./ui/sections/logos-section";

export function HomePage() {
  return (
    <main className="flex w-full flex-col items-center">
      <HeroSection />
      <LogosSection />
      <WorksSection />
      <CtaSection />
    </main>
  );
}

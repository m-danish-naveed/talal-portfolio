import { CtaSection } from "./ui/sections/cta-section";
import { HeroSection } from "./ui/sections/hero-section";
import { LogosSection } from "./ui/sections/logos-section";
import { WorksSection } from "./ui/sections/works-section";

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

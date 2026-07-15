import { CtaSection } from "./ui/sections/cta-section";
import { FooterSection } from "./ui/sections/footer-section";
import { HeroSection } from "./ui/sections/hero-section";
import { LogosSection } from "./ui/sections/logos-section";
import { NavSection } from "./ui/sections/nav-section";
import { SocialSection } from "./ui/sections/social-section";
import { WorksSection } from "./ui/sections/works-section";

export function HomePage() {
  return (
    <>
      <NavSection />
      <main className="flex w-full flex-col items-center">
        <HeroSection />
        <LogosSection />
        <WorksSection />
        <CtaSection />
        <SocialSection />
      </main>
      <FooterSection />
    </>
  );
}

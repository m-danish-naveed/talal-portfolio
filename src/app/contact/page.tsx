import type { Metadata } from "next";

import { contactConfig } from "@/data/pages/contact.config";
import { siteConfig } from "@/data/site.config";
import { ContactFormSection } from "@/modules/contact/ui/sections/contact-form-section";
import { ContactHeroSection } from "@/modules/contact/ui/sections/contact-hero-section";

export const metadata: Metadata = {
  title: `${contactConfig.hero.tag} - ${siteConfig.meta.title}`,
  description: contactConfig.hero.headline,
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ContactHeroSection />
      <ContactFormSection />
    </main>
  );
}

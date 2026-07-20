import type { Metadata } from "next";

import { constructMetadata } from "@/lib/utils/metadata";

import { contactConfig } from "@/data/pages/contact.config";
import { ContactFormSection } from "@/modules/contact/ui/sections/contact-form-section";
import { ContactHeroSection } from "@/modules/contact/ui/sections/contact-hero-section";

export const metadata: Metadata = constructMetadata({
  title: contactConfig.hero.tag,
  description: contactConfig.hero.headline,
  url: "/contact",
});

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ContactHeroSection />
      <ContactFormSection />
    </main>
  );
}

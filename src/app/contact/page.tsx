import type { Metadata } from "next";

import { ContactFormSection } from "@/modules/contact/ui/sections/contact-form-section";
import { ContactHeroSection } from "@/modules/contact/ui/sections/contact-hero-section";

export const metadata: Metadata = {
  title: "Contact - Sam Kolder",
  description: "Get in touch",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ContactHeroSection />
      <ContactFormSection />
    </main>
  );
}

import { person } from "./entities/person";
import { type SiteConfig } from "./entities/types";

export const siteConfig: SiteConfig = {
  meta: {
    title: person.fullName,
    description: `A world-renowned ${person.role.toLowerCase()} that inspired a generation of content creators from all around the world.`,
    url: "https://yourdomain.com", // TODO: Update this to your actual domain
    keywords: [
      person.fullName,
      "Filmmaker",
      "Content Creator",
      "Director",
      "Portfolio",
    ],
  },
  contact: {
    email: person.email,
    address: {
      title: "Address",
      lines: person.address,
    },
    location: person.location,
  },
  footer: {
    copyright: `Copyright © 2024 ${person.fullName}.`,
  },
};

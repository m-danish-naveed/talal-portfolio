import { person } from "../entities/person";
import { type HomeConfig } from "../entities/types";

export const homeConfig: HomeConfig = {
  hero: {
    headline: [
      `${person.fullName} is a ${person.role.toLowerCase()}`,
      "crafting fast, clean visuals storytelling",
      "that elevates brand presence",
    ],
    showreel: {
      youtubeUrl: "",
      posterImage: "/videos/notionThumbNail.png",
      videoMp4: "/videos/notion1.mp4",
      videoWebm: "",
    },
  },
  logos: [
    { src: "/images/brand/davinci-resolve.svg", alt: "Davinci Resolve" },
    { src: "/images/brand/figma.svg", alt: "Figma" },
    { src: "/images/brand/capcut.svg", alt: "CapCut" },
    { src: "/images/brand/after-effects.svg", alt: "After Effects" },
    { src: "/images/brand/premiere-pro.svg", alt: "Premiere Pro" },
  ],

  cta: {
    videoMp4: "",
    videoWebm: "/videos/clip.webm",
    posterImage: "/images/sam-clip-poster.webp",
    stats: [
      { value: 4, label: "Experience", suffix: "Y" },
      { value: 50, label: "Creative-Projects", suffix: "+" },
      { value: 100, label: "Client-Focused", suffix: "%" },
    ],
  },
};

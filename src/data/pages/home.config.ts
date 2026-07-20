import { person } from "../entities/person";
import { type HomeConfig } from "../entities/types";

export const homeConfig: HomeConfig = {
  hero: {
    headline: [
      `${person.fullName} is a world-renowned ${person.role.toLowerCase()}`,
      "that inspired a generation of content",
      "creators from all around the world",
    ],
    showreel: {
      youtubeUrl: "https://www.youtube.com/watch?v=7OoSX3KbXOw",
      posterImage: "/images/sam-showreel-poster.webp",
      videoMp4: "",
      videoWebm: "/videos/showreel.webm",
    },
  },
  logos: [
    { src: "/images/brand/logo-canon.svg", alt: "Canon" },
    { src: "/images/brand/logo-youtube.svg", alt: "YouTube" },
    { src: "/images/brand/logo-dji.svg", alt: "DJI" },
    { src: "/images/brand/logo-hyundai.svg", alt: "Hyundai" },
    { src: "/images/brand/logo-musicbed.svg", alt: "Musicbed" },
  ],

  cta: {
    videoMp4: "",
    videoWebm: "/videos/clip.webm",
    posterImage: "/images/sam-clip-poster.webp",
    stats: [
      { value: 1.34, label: "Subscribers", suffix: "M" },
      { value: 1.6, label: "Followers", suffix: "M" },
      { value: 64, label: "Views", suffix: "M" },
    ],
  },
};

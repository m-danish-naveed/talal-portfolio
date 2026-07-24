import { type WorkItem } from "./types";

export const works: WorkItem[] = [
  {
    id: "insta360",
    title: "Insta360 X4",
    client: "Insta360",
    date: "4/22/2024",
    image: "/images/works/insta360.webp", // resolve as @/public/images/works/insta360.webp
    video: "/images/works/insta360.mp4", // resolve as @/public/images/works/insta360.mp4
    link: "#",
  },
  {
    id: "underwater",
    title: "Filming An Entire Short Film 100FT UNDERWATER...",
    client: "Personal",
    date: "7/10/2021",
    image: "/images/works/underwater.webp",
    video: "/images/works/underwater.mp4",
    link: "#",
  },
  {
    id: "drone-clips",
    title: "My Best Drone Clips",
    client: "Personal",
    date: "11/10/2023",
    image: "/images/works/drone-clips.webp",
    video: "/images/works/drone-clips.mp4",
    link: "#",
  },
  {
    id: "avata",
    title: "DJI Avata",
    client: "DJI",
    date: "8/25/2022",
    image: "/images/works/avata.webp",
    video: "/images/works/avata.mp4",
    link: "#",
  },
];

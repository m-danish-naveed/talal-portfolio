import { type WorkItem } from "./types";

export const works: WorkItem[] = [
  {
    id: "insta360",
    title: "Polished Raw Footage",
    client: "Sample Edit",
    date: "4/03/2025",
    image: "/images/works/iman-gadzi-1.webp", // resolve as @/public/images/works/insta360.webp
    video: "/images/works/iman-gadzi-video.mp4", // resolve as @/public/images/works/insta360.mp4
    link: "#",
  },
  {
    id: "drone-clips",
    title: "Motion Design for Crumble",
    client: "Personal",
    date: "11/06/2026",
    image: "/images/works/crumble-thumb-nail.png",
    video: "/images/works/crumble-ad.mp4",
    link: "#",
  },
  {
    id: "underwater",
    title: "Minimalistic Long-Form Edit",
    client: "Personal",
    date: "7/03/2026",
    image: "/images/works/iman-gadzi-2.webp",
    video: "/images/works/iman-gadzi-video-2.mp4",
    link: "#",
  },
  {
    id: "avata",
    title: "Behind the scene",
    client: "Personal",
    date: "23/12/2024",
    image: "/images/works/saas-thumb-nail.webp",
    video: "/images/works/saas.mp4",
    link: "#",
  },
];

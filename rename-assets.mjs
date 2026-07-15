import fs from "fs";
import path from "path";

const basePath = path.join(process.cwd(), "public");

// Map of [directory, search_string, new_name]
const renames = [
  // Images
  ["images", "play.svg", "play.svg"],
  ["images", "mail.svg", "mail.svg"],
  ["images", "showreel-icon.svg", "showreel-icon.svg"],
  ["images", "sam-clip-poster", "sam-clip-poster.jpg"],
  ["images", "sam-showreel-poster", "sam-showreel-poster.jpg"],
  ["images", "pin-location.svg", "pin-location.svg"],
  ["images", "kold-logo.svg", "logo.svg"],
  ["images", "66070477627cb49f0858d7e4_instagram.svg", "instagram.svg"], // the one used for the social icon
  [
    "images",
    "92099875-673c98116312141d14ca1ca3_instagram.svg",
    "instagram-outline.svg",
  ], // other one

  // Works
  ["images/works", "avata.jpg", "avata.jpg"],
  ["images/works", "avata-ezgif.com-optimize.gif", "avata.gif"],
  ["images/works", "drone-clips-ezgif.com-optimize.gif", "drone-clips.gif"],
  ["images/works", "ktwoeqpxpuo-hd.jpg", "drone-clips.jpg"], // renaming to match the gif
  ["images/works", "oneplus9pro-ezgif.com-optimize.gif", "oneplus9pro.gif"],
  ["images/works", "saudi-ezgif.com-optimize.gif", "saudi.gif"],
  ["images/works", "underwater.jpg", "underwater.jpg"],
  ["images/works", "underwater-ezgif.com-optimize.gif", "underwater.gif"],
  ["images/works", "insta360.jpg", "insta360.jpg"],
  ["images/works", "insta360-ezgif.com-optimize.gif", "insta360.gif"],

  // Logos
  ["images/logos", "canon.svg", "canon.svg"],
  ["images/logos", "dji.svg", "dji.svg"],
  ["images/logos", "hyundai.svg", "hyundai.svg"],
  ["images/logos", "musicbed.svg", "musicbed.svg"],
  [
    "images/logos",
    "4723262c-674772083cbd5cde09afc1cf_youtube.svg",
    "youtube-logo.svg",
  ], // Brand strip logo
  [
    "images/logos",
    "904928cf-673c98116312141d14ca1ca2_youtube.svg",
    "youtube-icon.svg",
  ], // Social icon

  // Videos
  ["videos", "sam-showreel-transcode.mp4", "showreel.mp4"],
  ["videos", "sam-showreel-transcode.webm", "showreel.webm"],
  ["videos", "sam-clip-transcode.mp4", "clip.mp4"],
  ["videos", "sam-clip-transcode.webm", "clip.webm"],
];

for (const [dir, search, newName] of renames) {
  const dirPath = path.join(basePath, dir);
  if (!fs.existsSync(dirPath)) continue;

  const files = fs.readdirSync(dirPath);
  const targetFile = files.find((f) => f.includes(search));

  if (targetFile) {
    const oldPath = path.join(dirPath, targetFile);
    const newPath = path.join(dirPath, newName);

    // Check if it's already renamed to prevent overwrite loops
    if (oldPath !== newPath) {
      try {
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed: ${targetFile} -> ${newName}`);
      } catch (e) {
        console.error(`Error renaming ${targetFile}: ${e.message}`);
      }
    }
  } else {
    console.warn(
      `Warning: Could not find file containing '${search}' in ${dir}`
    );
  }
}

// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry is the video itself: this program only hands VIDEO.json to the
// grader by copying it from the repository into /output. Nothing it writes
// about the video is scored; the house reads the video from YouTube.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The grader mounts the repository at /bot and collects /output. Locally
// the same two paths are passed in through the environment instead.
const repoDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath = join(repoDir, "VIDEO.json");
const targetPath = join(outputDir, "VIDEO.json");

let videoJson: string;
try {
  videoJson = readFileSync(sourcePath, "utf8");
} catch (error) {
  console.error(`cannot read ${sourcePath}: ${(error as Error).message}`);
  process.exit(1);
}

// The gate only accepts a JSON object with a url string, so fail loudly
// here instead of handing it a file it would refuse.
let parsed: unknown;
try {
  parsed = JSON.parse(videoJson);
} catch (error) {
  console.error(`VIDEO.json is not valid JSON: ${(error as Error).message}`);
  process.exit(1);
}

if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string"
) {
  console.error("VIDEO.json must be a JSON object with a string url field");
  process.exit(1);
}

// The address must at least be an https URL; the house's gate is the one
// that checks it names a real public YouTube video.
const videoUrl = (parsed as { url: string }).url;
if (!videoUrl.startsWith("https://")) {
  console.error(`VIDEO.json url is not an https address: ${videoUrl}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(targetPath, videoJson);

// One-off script: curate and optimize real door photos from usii_part2/ into public/images/.
// Not part of the app build — run manually with `node scripts/curate-images.mjs`.
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const SRC = path.join(process.cwd(), "usii_part2");
const OUT = path.join(process.cwd(), "public", "images");

// [outputRelativePath, sourceFilename]
const MAP = [
  // Stejar auriu (golden oak) — product/finish showcase
  ["usi/stejar-auriu/stejar-auriu-01.webp", "CLARISA.jpg"],
  ["usi/stejar-auriu/stejar-auriu-02.webp", "IMG-20150530-WA0004.jpg"],
  ["usi/stejar-auriu/stejar-auriu-03.webp", "IMG-20150530-WA0010.jpg"],
  ["usi/stejar-auriu/stejar-auriu-04.webp", "WhatsApp Image 2026-07-22 at 11.28.07.jpeg"],
  ["usi/stejar-auriu/stejar-auriu-05.webp", "WhatsApp Image 2026-07-22 at 11.28.12.jpeg"],
  ["usi/stejar-auriu/stejar-auriu-06.webp", "WhatsApp Image 2026-07-22 at 11.28.15.jpeg"],
  ["usi/stejar-auriu/stejar-auriu-07.webp", "WhatsApp Image 2026-07-22 at 11.28.18.jpeg"],
  ["usi/stejar-auriu/stejar-auriu-08.webp", "IMG-20150603-WA0002 (1).jpg"],
  ["usi/stejar-auriu/stejar-auriu-09.webp", "IMG-20150603-WA0005 (1).jpg"],
  ["usi/stejar-auriu/stejar-auriu-10.webp", "IMG-20150603-WA0007 (1).jpg"],

  // Wenge (dark modern) — product/finish showcase
  ["usi/wenge/wenge-01.webp", "image001.jpg"],
  ["usi/wenge/wenge-02.webp", "WhatsApp Image 2026-07-22 at 11.28.08.jpeg"],
  ["usi/wenge/wenge-03.webp", "WhatsApp Image 2026-07-22 at 11.28.13.jpeg"],
  ["usi/wenge/wenge-04.webp", "WhatsApp Image 2026-07-22 at 11.28.17.jpeg"],
  ["usi/wenge/wenge-05.webp", "WhatsApp Image 2026-07-22 at 11.28.19.jpeg"],
  ["usi/wenge/wenge-06.webp", "WhatsApp Image 2026-07-22 at 11.28.27.jpeg"],
  ["usi/wenge/wenge-07.webp", "WhatsApp Image 2026-07-22 at 11.28.28.jpeg"],

  // Nuc / cireș (mahogany/cherry) — product/finish showcase
  ["usi/nuc-ciresi/nuc-01.webp", "IMG_5761 (1).JPG"],
  ["usi/nuc-ciresi/nuc-02.webp", "iphone 015.JPG"],
  ["usi/nuc-ciresi/nuc-03.webp", "iphone 016.JPG"],
  ["usi/nuc-ciresi/nuc-04.webp", "WhatsApp Image 2026-07-22 at 11.28.16.jpeg"],

  // Decorative cutout model — product/finish showcase
  ["usi/decupaj-decorativ/decupaj-01.webp", "model decupaj usa dormitor.jpg"],

  // Proiecte reale (real installation projects gallery)
  ["proiecte/proiect-01.webp", "IMG_1406.JPG"],
  ["proiecte/proiect-02.webp", "WhatsApp Image 2026-07-22 at 11.28.14.jpeg"],
  ["proiecte/proiect-03.webp", "WhatsApp Image 2026-07-22 at 11.28.23.jpeg"],
  ["proiecte/proiect-04.webp", "usa tip debara 2 foi vopsita alb.JPG"],
  ["proiecte/proiect-05.webp", "WhatsApp Image 2017-06-28 at 12.29.28.jpeg"],
  ["proiecte/proiect-06.webp", "IMG-20150530-WA0006.jpg"],
  ["proiecte/proiect-07.webp", "IMG-20150530-WA0008.jpg"],
  ["proiecte/proiect-08.webp", "IMG-20150530-WA0009.jpg"],
  ["proiecte/proiect-09.webp", "IMG-20150530-WA0011.jpg"],
  ["proiecte/proiect-10.webp", "IMG-20150530-WA0012.jpg"],
  ["proiecte/proiect-11.webp", "IMG-20150530-WA0015.jpg"],
  ["proiecte/proiect-12.webp", "IMG-20150530-WA0018.jpg"],
  ["proiecte/proiect-13.webp", "IMG-20150530-WA0019.jpg"],
  ["proiecte/proiect-14.webp", "IMG-20150530-WA0020.jpg"],
  ["proiecte/proiect-15.webp", "IMG-20150530-WA0021.jpg"],
  ["proiecte/proiect-16.webp", "IMG-20150530-WA0022.jpg"],
  ["proiecte/proiect-17.webp", "IMG-20150530-WA0024.jpg"],
  ["proiecte/proiect-18.webp", "IMG-20150530-WA0027.jpg"],
  ["proiecte/proiect-19.webp", "IMG-20150530-WA0028.jpg"],
  ["proiecte/proiect-20.webp", "IMG-20150530-WA0029.jpg"],
  ["proiecte/proiect-21.webp", "iphone 017.JPG"],
];

const MAX_WIDTH = 2000;
const QUALITY = 80;

async function run() {
  let ok = 0;
  let failed = 0;
  for (const [outRel, srcName] of MAP) {
    const srcPath = path.join(SRC, srcName);
    const outPath = path.join(OUT, outRel);
    if (!fs.existsSync(srcPath)) {
      console.error("MISSING SOURCE:", srcName);
      failed++;
      continue;
    }
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    try {
      await sharp(srcPath)
        .rotate() // respect EXIF orientation
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outPath);
      ok++;
    } catch (err) {
      console.error("FAILED:", srcName, err.message);
      failed++;
    }
  }
  console.log(`Done. Converted: ${ok}, Failed: ${failed}`);
}

run();

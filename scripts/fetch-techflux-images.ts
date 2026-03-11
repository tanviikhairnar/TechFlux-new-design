import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const PROJECT_ROOT = path.resolve(".");
const SRC_DIR = path.join(PROJECT_ROOT, "src");
const IMAGES_DIR = path.join(SRC_DIR, "assets", "images");
const WEBP_DIR = path.join(SRC_DIR, "assets", "webp");
const QUALITY = 80;

const allowedConvert = new Set([".jpg", ".jpeg", ".png"]);
const urlRegex = /https?:\/\/techflux\.in\/img\/assets\/images\/[^"'\s]+/gi;

const ensureDir = async (dir: string): Promise<void> => {
  await fs.mkdir(dir, { recursive: true });
};

const walk = async (dir: string): Promise<string[]> => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }
    if (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")) {
      files.push(fullPath);
    }
  }
  return files;
};

const collectUrls = async (): Promise<string[]> => {
  const files = await walk(path.join(SRC_DIR, "app"));
  const urls = new Set<string>();
  for (const filePath of files) {
    const content = await fs.readFile(filePath, "utf8");
    const matches = content.match(urlRegex);
    if (!matches) continue;
    for (const match of matches) {
      urls.add(match);
    }
  }
  return Array.from(urls).sort();
};

const decodeFileName = (url: string): string => {
  const rawName = url.split("/").pop() ?? "image";
  return decodeURIComponent(rawName);
};

const downloadFile = async (url: string, outPath: string): Promise<void> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Download failed: ${url} (${res.status})`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(outPath, buf);
};

const main = async (): Promise<void> => {
  await ensureDir(IMAGES_DIR);
  await ensureDir(WEBP_DIR);

  const urls = await collectUrls();
  if (urls.length === 0) {
    console.log("No Techflux image URLs found.");
    return;
  }

  let downloaded = 0;
  let converted = 0;
  let copied = 0;
  let failed = 0;

  for (const url of urls) {
    const fileName = decodeFileName(url);
    const outPath = path.join(IMAGES_DIR, fileName);
    const ext = path.extname(fileName).toLowerCase();
    const webpName = fileName.replace(ext, ".webp");
    const webpPath = path.join(WEBP_DIR, webpName);

    try {
      await downloadFile(url, outPath);
      downloaded += 1;

      if (allowedConvert.has(ext)) {
        await sharp(outPath).webp({ quality: QUALITY }).toFile(webpPath);
        converted += 1;
      } else if (ext === ".webp") {
        await fs.copyFile(outPath, webpPath);
        copied += 1;
      }
    } catch (error) {
      failed += 1;
      console.error(`Failed: ${url}`);
      console.error((error as Error)?.message ?? error);
    }
  }

  console.log(
    `Done. Downloaded ${downloaded}, converted ${converted}, copied ${copied}, failed ${failed}.`
  );
};

main().catch((error) => {
  console.error((error as Error)?.message ?? error);
  process.exit(1);
});

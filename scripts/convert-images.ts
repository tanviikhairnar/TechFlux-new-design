import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const inputDir = path.resolve("src/assets");
const outputDir = path.resolve("src/assets/webp");
const quality = 80;
const allowedExts = new Set([".jpg", ".jpeg", ".png"]);

const walk = async (dir: string): Promise<string[]> => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }
    files.push(fullPath);
  }
  return files;
};

const toWebpPath = (filePath: string): string => {
  const rel = path.relative(inputDir, filePath);
  const base = rel.replace(path.extname(rel), ".webp");
  return path.join(outputDir, base);
};

const main = async (): Promise<void> => {
  const files = await walk(inputDir);
  const candidates = files.filter((filePath) =>
    allowedExts.has(path.extname(filePath).toLowerCase())
  );

  let converted = 0;
  let failed = 0;

  for (const filePath of candidates) {
    const outPath = toWebpPath(filePath);
    const outDir = path.dirname(outPath);

    try {
      await fs.mkdir(outDir, { recursive: true });
      await sharp(filePath).webp({ quality }).toFile(outPath);
      converted += 1;
    } catch (error) {
      failed += 1;
      console.error(`Failed: ${filePath}`);
      console.error((error as Error)?.message ?? error);
    }
  }

  console.log(`Done. Converted ${converted}, failed ${failed}.`);
};

main().catch((error) => {
  console.error((error as Error)?.message ?? error);
  process.exit(1);
});

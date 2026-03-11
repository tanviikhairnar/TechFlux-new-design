import fs from "fs/promises";
import path from "path";
import process from "process";
import sharp from "sharp";

const argv = process.argv.slice(2);

const getArg = (flag, fallback) => {
  const idx = argv.indexOf(flag);
  if (idx === -1) return fallback;
  const val = argv[idx + 1];
  if (!val || val.startsWith("--")) return fallback;
  return val;
};

const hasFlag = (flag) => argv.includes(flag);

const inputDir = path.resolve(getArg("--input", "src/assets"));
const outputDir = path.resolve(getArg("--output", path.join(inputDir, "webp")));
const quality = Number.parseInt(getArg("--quality", "80"), 10);
const overwrite = hasFlag("--overwrite");
const recursive = !hasFlag("--no-recursive");
const dryRun = hasFlag("--dry-run");

const allowedExts = new Set([".png", ".jpg", ".jpeg"]);

const toWebpPath = (filePath) => {
  const rel = path.relative(inputDir, filePath);
  const base = rel.replace(path.extname(rel), ".webp");
  return path.join(outputDir, base);
};

const fileExists = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

const walk = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (recursive) {
        files.push(...(await walk(fullPath)));
      }
      continue;
    }
    files.push(fullPath);
  }
  return files;
};

const main = async () => {
  const inputExists = await fileExists(inputDir);
  if (!inputExists) {
    console.error(`Input folder not found: ${inputDir}`);
    process.exit(1);
  }

  const files = await walk(inputDir);
  const candidates = files.filter((filePath) =>
    allowedExts.has(path.extname(filePath).toLowerCase())
  );

  let converted = 0;
  let skipped = 0;
  let failed = 0;

  for (const filePath of candidates) {
    const outPath = toWebpPath(filePath);
    const outDir = path.dirname(outPath);

    if (!overwrite && (await fileExists(outPath))) {
      skipped += 1;
      continue;
    }

    if (dryRun) {
      console.log(`DRY RUN: ${filePath} -> ${outPath}`);
      converted += 1;
      continue;
    }

    try {
      await fs.mkdir(outDir, { recursive: true });
      await sharp(filePath).webp({ quality }).toFile(outPath);
      converted += 1;
    } catch (error) {
      failed += 1;
      console.error(`Failed: ${filePath}`);
      console.error(error?.message ?? error);
    }
  }

  console.log(
    `Done. Converted ${converted}, skipped ${skipped}, failed ${failed}.`
  );
};

main().catch((error) => {
  console.error(error?.message ?? error);
  process.exit(1);
});

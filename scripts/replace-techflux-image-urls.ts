import fs from "fs/promises";
import path from "path";

const PROJECT_ROOT = path.resolve(".");
const SRC_DIR = path.join(PROJECT_ROOT, "src");
const WEBP_RELATIVE = "../../assets/webp";

const urlRegex = /https?:\/\/techflux\.in\/img\/assets\/images\/[^"'\s]+/gi;

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

const decodeFileName = (url: string): string => {
  const rawName = url.split("/").pop() ?? "image";
  return decodeURIComponent(rawName);
};

const toWebpName = (fileName: string): string => {
  const ext = path.extname(fileName).toLowerCase();
  return fileName.replace(ext, ".webp");
};

const escapeRegExp = (value: string): string =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const replaceInFile = async (filePath: string): Promise<boolean> => {
  const content = await fs.readFile(filePath, "utf8");
  const matches = content.match(urlRegex);
  if (!matches) return false;

  let updated = content;
  for (const match of matches) {
    const fileName = decodeFileName(match);
    const webpName = toWebpName(fileName);
    const replacement = `new URL(\"${WEBP_RELATIVE}/${webpName}\", import.meta.url).href`;
    const quoted = new RegExp(`([\"'])${escapeRegExp(match)}\\1`, "g");
    updated = updated.replace(quoted, replacement);
  }

  if (updated === content) return false;
  await fs.writeFile(filePath, updated);
  return true;
};

const main = async (): Promise<void> => {
  const files = await walk(path.join(SRC_DIR, "app"));
  let updatedCount = 0;
  for (const filePath of files) {
    if (await replaceInFile(filePath)) {
      updatedCount += 1;
    }
  }
  console.log(`Done. Updated ${updatedCount} files.`);
};

main().catch((error) => {
  console.error((error as Error)?.message ?? error);
  process.exit(1);
});

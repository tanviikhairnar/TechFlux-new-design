export function applyImagePerformanceDefaults(img: HTMLImageElement) {
  if (!img.loading) {
    img.loading = "lazy";
  }

  if (!img.decoding) {
    img.decoding = "async";
  }

  if (!img.referrerPolicy) {
    img.referrerPolicy = "no-referrer";
  }
}

export function applyDocumentImagePerformanceDefaults(root: ParentNode = document) {
  root.querySelectorAll("img").forEach((img) => applyImagePerformanceDefaults(img));
}

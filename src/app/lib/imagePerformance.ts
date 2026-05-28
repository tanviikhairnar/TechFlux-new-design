const FALLBACK_IMAGE_SRC = "/images/fallback-image.svg";

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

export function enableGlobalLazyLoading() {
  applyDocumentImagePerformanceDefaults();

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return;

        if (node.tagName === "IMG") {
          applyImagePerformanceDefaults(node as HTMLImageElement);
          return;
        }

        applyDocumentImagePerformanceDefaults(node);
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  return observer;
}

export function enableImageFallbacks() {
  document.addEventListener(
    "error",
    (event) => {
      const target = event.target;
      if (!(target instanceof HTMLImageElement)) return;
      if (target.dataset.fallbackApplied === "true") return;

      target.dataset.fallbackApplied = "true";
      target.src = FALLBACK_IMAGE_SRC;
      target.alt = target.alt || "Image unavailable";
    },
    true,
  );
}

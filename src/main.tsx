import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/style.css";

const FALLBACK_IMAGE_SRC = "/images/fallback-image.svg";

function applyImagePerformanceDefaults(img: HTMLImageElement) {
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

function enableGlobalLazyLoading() {
  const existingImages = document.querySelectorAll("img");
  existingImages.forEach((img) => applyImagePerformanceDefaults(img));

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return;

        if (node.tagName === "IMG") {
          applyImagePerformanceDefaults(node as HTMLImageElement);
          return;
        }

        node.querySelectorAll("img").forEach((img) => applyImagePerformanceDefaults(img));
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

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

enableGlobalLazyLoading();

createRoot(document.getElementById("root")!).render(<App />);

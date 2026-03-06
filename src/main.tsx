import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

const FALLBACK_IMAGE_SRC = "/images/fallback-image.svg";

// Global safety net: if any image fails to load, swap to a local fallback asset.
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

createRoot(document.getElementById("root")!).render(<App />);

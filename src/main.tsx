import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { enableGlobalLazyLoading, enableImageFallbacks } from "./app/lib/imagePerformance";
import "./styles/style.css";

enableImageFallbacks();
enableGlobalLazyLoading();

createRoot(document.getElementById("root")!).render(<App />);

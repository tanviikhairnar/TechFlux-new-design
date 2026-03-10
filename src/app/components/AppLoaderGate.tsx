import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import TechfluxLoader from "./TechfluxLoader";

type AppLoaderGateProps = {
  durationMs?: number;
};

export default function AppLoaderGate({ durationMs = 1800 }: AppLoaderGateProps) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowLoader(false);
    }, durationMs);

    return () => {
      window.clearTimeout(timer);
    };
  }, [durationMs]);

  return <AnimatePresence>{showLoader ? <TechfluxLoader /> : null}</AnimatePresence>;
}


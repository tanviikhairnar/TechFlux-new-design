import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import RouteSeo from "./RouteSeo";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const elementId = decodeURIComponent(hash.slice(1));

      window.requestAnimationFrame(() => {
        const target = document.getElementById(elementId);

        if (target) {
          target.scrollIntoView({ block: "start" });
        } else {
          window.scrollTo(0, 0);
        }
      });

      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <RouteSeo />
      <Outlet />
    </>
  );
}

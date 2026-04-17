import { AnimatePresence } from 'framer-motion';
import { RouterProvider } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { router } from './routes';
import TechfluxLoader from './components/TechfluxLoader';

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const head = document.head;
    const linkDefs = [
      { rel: 'preconnect', href: 'https://techflux.in', crossOrigin: 'anonymous' },
      { rel: 'dns-prefetch', href: 'https://techflux.in' },
    ];

    const appendedLinks = linkDefs.map((definition) => {
      const link = document.createElement('link');
      link.rel = definition.rel;
      link.href = definition.href;
      if ('crossOrigin' in definition) {
        link.crossOrigin = definition.crossOrigin;
      }
      head.appendChild(link);
      return link;
    });

    const timer = window.setTimeout(() => {
      setShowLoader(false);
    }, 1800);

    return () => {
      window.clearTimeout(timer);
      appendedLinks.forEach((link) => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, []);

  return (
    <div className="tf-page">
      <RouterProvider router={router} />
      <AnimatePresence>{showLoader ? <TechfluxLoader /> : null}</AnimatePresence>
    </div>
  );
}


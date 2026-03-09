import { AnimatePresence } from 'motion/react';
import { RouterProvider } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { router } from './routes';
import TechfluxLoader from './components/TechfluxLoader';

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowLoader(false);
    }, 1800);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="tf-page">
      <RouterProvider router={router} />
      <AnimatePresence>{showLoader ? <TechfluxLoader /> : null}</AnimatePresence>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { BookStrategyCallButton } from './GetProjectEstimateButton';
const TechfluxLogo =
  "https://techflux.in/public/assets/images/TFlogo.png";

export function Navigation() {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const serviceItems = [
  { label: "SaaS Development", href: "/saas-development#saas-development-heading", useRoute: true },
  { label: "AI Solutions", href: "/ai-solutions#ai-solutions-heading", useRoute: true },
  { label: "On-Demand Applications", href: "/on-demand-solutions#on-demand-applications-heading", useRoute: true },
  { label: "E-Commerce Solutions", href: "/e-commerce-solutions#ecommerce-solutions-heading", useRoute: true },

  // Hidden for now
  // { label: "Unity Game Development", href: "/unity-game-development#unity-game-development-heading", useRoute: true },

  { label: "White-Label Partnership", href: "/services/white-label-partnership#white-label-partnership-heading", useRoute: true },
] as const;

  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <nav className="tf-glass-panel fixed top-0 left-0 right-0 z-50 border-b border-[#10213F] bg-[#030A1C]/88">
      <div className="tf-shell">
        <div className="flex h-[84px] items-center justify-between">
          
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Link to="/" className="flex items-center gap-3">
              <img
                src={TechfluxLogo}
                alt="Techflux Logo"
                loading="eager"
                decoding="async"
                className="h-9 w-9 object-contain"
              />
              <span
                className="text-[20px] font-semibold tracking-[-0.01em] text-[#F9FAFB]"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Techflux Solutions
              </span>
            </Link>
          </motion.div>

          <div className="hidden items-center gap-7 lg:flex">

            <Link
              to="/"
              className="tf-nav-link rounded-md text-[17px] font-medium text-[#94A3B8] transition-[color,opacity] duration-200 hover:text-[#F8FAFC] active:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F80ED]/35"
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onFocusCapture={() => setServicesOpen(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setServicesOpen(false);
                }
              }}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                className="tf-nav-link flex items-center gap-1 rounded-md text-[17px] font-medium text-[#94A3B8] transition-[color,opacity] duration-200 hover:text-[#F8FAFC] active:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F80ED]/35"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="tf-glass-panel absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 overflow-hidden rounded-xl border border-[#1F365A] bg-[#0B162A]/92 shadow-[0_24px_48px_rgba(2,8,23,0.46)] backdrop-blur-xl"
                  >
                    {serviceItems.map((item, i) =>
                      item.useRoute ? (
                        <Link
                          key={i}
                          to={item.href}
                          onClick={() => setServicesOpen(false)}
                          className="block px-5 py-3 text-sm text-[#C7D2E0] transition-[padding,color,background-color] duration-200 hover:bg-[#2F80ED]/10 active:bg-[#2F80ED]/10 hover:pl-6 active:pl-6 hover:text-white active:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2F80ED]/35"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          key={i}
                          href={item.href}
                          onClick={() => setServicesOpen(false)}
                          className="block px-5 py-3 text-sm text-[#C7D2E0] transition-[padding,color,background-color] duration-200 hover:bg-[#2F80ED]/10 active:bg-[#2F80ED]/10 hover:pl-6 active:pl-6 hover:text-white active:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2F80ED]/35"
                        >
                          {item.label}
                        </a>
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/case-studies"
              className="tf-nav-link rounded-md text-[17px] font-medium text-[#94A3B8] transition-[color,opacity] duration-200 hover:text-[#F8FAFC] active:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F80ED]/35"
            >
              Case Studies
            </Link>

            <Link
              to="/blog"
              className="tf-nav-link rounded-md text-[17px] font-medium text-[#94A3B8] transition-[color,opacity] duration-200 hover:text-[#F8FAFC] active:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F80ED]/35"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="tf-nav-link rounded-md text-[17px] font-medium text-[#94A3B8] transition-[color,opacity] duration-200 hover:text-[#F8FAFC] active:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F80ED]/35"
            >
              Contact
            </Link>

            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <BookStrategyCallButton className="tf-button-primary inline-flex h-[48px] items-center rounded-xl bg-gradient-to-r from-[#3AAEFE] to-[#2F80ED] px-6 text-[15px] font-semibold text-white transition-all duration-300 hover:brightness-110 active:brightness-110 hover:shadow-lg active:shadow-lg hover:shadow-[#2F80ED]/30 active:shadow-[#2F80ED]/30" />
            </motion.div>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              if (mobileMenuOpen) {
                setMobileServicesOpen(false);
              }
            }}
            className="rounded-lg p-2 text-[#F9FAFB] transition-colors duration-200 hover:bg-white/5 active:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F80ED]/35 lg:hidden"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="tf-glass-panel border-t border-white/5 bg-[#030A1C]/88 py-4 lg:hidden"
            >
              <div className="flex flex-col gap-3">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="tf-lift-soft rounded-md py-2 text-[17px] text-[#94A3B8] transition-colors duration-200 hover:text-white active:text-white">
                  Home
                </Link>

                <div className="py-1">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className="tf-lift-soft flex w-full items-center justify-between rounded-md py-2 text-[17px] text-[#94A3B8] transition-colors duration-200 hover:text-white active:text-white"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        mobileServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-3 mt-1 overflow-hidden border-l border-white/10 pl-4"
                      >
                        {serviceItems.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="tf-lift-soft block rounded-md py-2 text-[16px] text-[#A6B3C4] transition-colors duration-200 hover:text-white active:text-white"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/case-studies" onClick={() => setMobileMenuOpen(false)} className="tf-lift-soft rounded-md py-2 text-[17px] text-[#94A3B8] transition-colors duration-200 hover:text-white active:text-white">
                  Case Studies
                </Link>
                <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="tf-lift-soft rounded-md py-2 text-[17px] text-[#94A3B8] transition-colors duration-200 hover:text-white active:text-white">
                  Blog
                </Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="tf-lift-soft rounded-md py-2 text-[17px] text-[#94A3B8] transition-colors duration-200 hover:text-white active:text-white">
                  Contact
                </Link>
                <BookStrategyCallButton
                  onClick={() => setMobileMenuOpen(false)}
                  className="tf-button-primary mt-2 rounded-lg bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] px-5 py-3 text-center text-[15px] font-semibold text-white transition-all duration-300 hover:brightness-110 active:brightness-110 hover:shadow-lg active:shadow-lg hover:shadow-[#2F80ED]/30 active:shadow-[#2F80ED]/30"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}


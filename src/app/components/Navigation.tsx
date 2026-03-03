import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import TachfluxLogo from "../../assets/97803067c0aec46e43b07e2df6709083ebfe41e9.png";

export function Navigation() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const serviceItems = [
    { label: "SaaS Development", href: "/saas-development#saas-development-heading", useRoute: true },
    { label: "AI Solutions", href: "/ai-solutions#ai-solutions-heading", useRoute: true },
    { label: "On-Demand Applications", href: "/on-demand-solutions#on-demand-applications-heading", useRoute: true },
    { label: "White-Label Partnership", href: "/become-partner#white-label-partnership-heading", useRoute: true },
    { label: "Unity Game Development", href: "/unity-game-development#unity-game-development-heading", useRoute: true },
    { label: "E-Commerce Solutions", href: "/e-commerce-solutions#ecommerce-solutions-heading", useRoute: true },
  ] as const;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#10213F] bg-[#030A1C]/95 backdrop-blur-md">
      <div className="mx-auto max-w-[1260px] px-4 lg:px-5">
        <div className="flex h-[84px] items-center justify-between">
          
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Link to="/" className="flex items-center gap-3">
              <img
                src={TachfluxLogo}
                alt="Tachflux Logo"
                className="h-9 w-9 object-contain"
              />
              <span
                className="text-[20px] font-semibold tracking-[-0.01em] text-[#F9FAFB]"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Tachflux Solutions
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-7 lg:flex">

            <Link
              to="/"
              className="text-[17px] font-medium text-gray-400 transition-colors duration-200 hover:text-white"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-[17px] font-medium text-gray-400 transition-colors duration-200 hover:text-white">
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 overflow-hidden rounded-xl border border-white/10 bg-[#111827]/95 shadow-2xl backdrop-blur-xl"
                  >
                    {serviceItems.map((item, i) =>
                      item.useRoute ? (
                        <Link
                          key={i}
                          to={item.href}
                          className="block px-5 py-3 text-sm text-gray-300 transition-all hover:bg-[#2F80ED]/10 hover:text-white"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          key={i}
                          href={item.href}
                          className="block px-5 py-3 text-sm text-gray-300 transition-all hover:bg-[#2F80ED]/10 hover:text-white"
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
              className="text-[17px] font-medium text-gray-400 transition-colors duration-200 hover:text-white"
            >
              Case Studies
            </Link>

            <Link
              to="/blog"
              className="text-[17px] font-medium text-gray-400 transition-colors duration-200 hover:text-white"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="text-[17px] font-medium text-gray-400 transition-colors duration-200 hover:text-white"
            >
              Contact
            </Link>

            {/* CTA Button */}
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                to="/book-strategy-call"
                className="inline-flex h-[48px] items-center rounded-xl bg-gradient-to-r from-[#3AAEFE] to-[#2F80ED] px-6 text-[15px] font-semibold text-white transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-[#2F80ED]/30"
              >
                Book Strategy Call
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#F9FAFB] p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-white/5 py-4 bg-[#030A1C]/95 backdrop-blur-md"
            >
              <div className="flex flex-col gap-3">
                <Link to="/" className="text-[17px] text-gray-400 hover:text-white py-2">
                  Home
                </Link>
                <Link to="/saas-development#saas-development-heading" className="text-[17px] text-gray-400 hover:text-white py-2">
                  SaaS Development
                </Link>
                <Link to="/ai-solutions#ai-solutions-heading" className="text-[17px] text-gray-400 hover:text-white py-2">
                  AI Solutions
                </Link>
                <Link to="/on-demand-solutions#on-demand-applications-heading" className="text-[17px] text-gray-400 hover:text-white py-2">
                  On-Demand Applications
                </Link>
                <Link to="/become-partner#white-label-partnership-heading" className="text-[17px] text-gray-400 hover:text-white py-2">
                  White-Label Partnership
                </Link>
                <Link to="/unity-game-development#unity-game-development-heading" className="text-[17px] text-gray-400 hover:text-white py-2">
                  Unity Game Development
                </Link>
                <Link to="/e-commerce-solutions#ecommerce-solutions-heading" className="text-[17px] text-gray-400 hover:text-white py-2">
                  E-Commerce Solutions
                </Link>
                <Link to="/case-studies" className="text-[17px] text-gray-400 hover:text-white py-2">
                  Case Studies
                </Link>
                <Link to="/blog" className="text-[17px] text-gray-400 hover:text-white py-2">
                  Blog
                </Link>
                <Link to="/contact" className="text-[17px] text-gray-400 hover:text-white py-2">
                  Contact
                </Link>
                <Link
                  to="/book-strategy-call"
                  className="mt-2 rounded-lg bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] px-5 py-3 text-center text-[15px] font-semibold text-white transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-[#2F80ED]/30"
                >
                  Book Strategy Call
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}


import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import techfluxLogo from "../../assets/97803067c0aec46e43b07e2df6709083ebfe41e9.png";

export function Navigation() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030A1C]/95 backdrop-blur-md border-b border-[#10213F] h-[84px]">
      <div className="max-w-[1260px] mx-auto px-4 lg:px-5">
        <div className="flex items-center justify-between h-[84px]">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={techfluxLogo} alt="TechFlux Logo" className="w-8 h-8 object-contain" />
            <span className="text-[20px] font-semibold text-[#F9FAFB] leading-none tracking-[-0.01em]" style={{ fontFamily: 'Sora, sans-serif' }}>
              TechFlux Solutions
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            
            <Link to="/" className="text-[16px] leading-none text-[#F9FAFB] hover:text-[#2F80ED] transition-colors font-semibold">
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-[16px] leading-none text-[#F9FAFB] hover:text-[#2F80ED] transition-colors font-semibold">
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
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 rounded-xl bg-[#111827]/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
                  >
                    {[
                      { label: "SaaS Development", href: "/#saas" },
                      { label: "AI Solutions", href: "/#ai" },
                      { label: "On-Demand Apps", href: "/#ondemand" },
                      { label: "White-Label", href: "/#whitelabel" },
                    ].map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        className="block px-5 py-3 text-lg text-[#F9FAFB] hover:bg-[#2F80ED]/10 hover:text-[#2F80ED] transition-all"
                      >
                        {item.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/#portfolio" className="text-[16px] leading-none text-[#F9FAFB] hover:text-[#2F80ED] transition-colors font-semibold">
              Case Studies
            </a>

            <Link to="/become-partner" className="text-[16px] leading-none text-[#F9FAFB] hover:text-[#2F80ED] transition-colors font-semibold">
              Partner
            </Link>

            <Link to="/contact" className="text-[16px] leading-none text-[#F9FAFB] hover:text-[#2F80ED] transition-colors font-semibold">
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              to="/book-strategy-call"
              className="px-7 h-[48px] inline-flex items-center rounded-[16px] bg-gradient-to-r from-[#3AAEFE] to-[#2F80ED] text-white text-[16px] font-semibold leading-none transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-[#2F80ED]/30"
            >
              Book Strategy Call
            </Link>
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
              className="lg:hidden border-t border-white/5 py-4"
            >
              <div className="flex flex-col gap-3">
                <Link to="/" className="text-sm text-[#F9FAFB] hover:text-[#2F80ED] py-2">
                  Home
                </Link>
                <a href="/#saas" className="text-sm text-[#F9FAFB] hover:text-[#2F80ED] py-2">
                  SaaS Development
                </a>
                <a href="/#ai" className="text-sm text-[#F9FAFB] hover:text-[#2F80ED] py-2">
                  AI Solutions
                </a>
                <a href="/#portfolio" className="text-sm text-[#F9FAFB] hover:text-[#2F80ED] py-2">
                  Case Studies
                </a>
                <Link to="/contact" className="text-sm text-[#F9FAFB] hover:text-[#2F80ED] py-2">
                  Contact
                </Link>
                <Link
                  to="/book-strategy-call"
                  className="mt-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] text-white text-sm font-semibold text-center"
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

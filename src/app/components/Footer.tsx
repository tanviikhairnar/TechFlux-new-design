import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { BecomePartnerButton, BookStrategyCallButton } from "./GetProjectEstimateButton";

const imageSources = {
  techfluxLogo: "https://techflux.in/public/assets/images/TFlogo.png",
};

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/techfluxsolutions1/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/techflux_solutions?igsh=MW0zdHl4bnhkajYxYQ==", label: "Instagram" },
  { icon: Github, href: "https://github.com/techfluxsolutions", label: "GitHub" },
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/saas-development" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Careers", to: "/careers" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  const contactIconClass = "mt-1 h-4 w-4 shrink-0 text-[#2F80ED]";

  return (
    <footer className="border-t border-white/5 bg-[#050d1d]">
      <div className="tf-shell pb-10 pt-16">
        
        {/* Top Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <img
                src={imageSources.techfluxLogo}
                alt="Techflux Logo"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="h-9 w-9"
              />
              <span className="font-sora text-xl font-semibold text-white">
                Techflux Solutions
              </span>
            </div>

            <p className="mb-6 max-w-[260px] text-base leading-relaxed text-[#9CA3AF]">
              Building scalable SaaS, AI & On-Demand platforms that drive
              business growth and innovation.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  whileHover={{ y: -3, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-[#9CA3AF] transition-all duration-300 hover:bg-[#2F80ED]/20 hover:text-[#2F80ED]"
                >
                  <item.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 font-sora text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-base">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-[#9CA3AF] transition-colors hover:text-[#2F80ED]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 font-sora text-lg font-semibold text-white">
              Services
            </h3>
            <ul className="space-y-3 text-base">
              {[
                "SaaS Development",
                "AI Solutions",
                "On-Demand Applications",
                "White-Label Partnership",
                "Unity Game Development",
                "E-Commerce Solutions",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-[#9CA3AF] transition-colors hover:text-[#2F80ED]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 font-sora text-lg font-semibold text-white">
              Contact
            </h3>
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3">
                <Mail className={contactIconClass} />
                <div className="text-[#9CA3AF]">
                  <p>sales@techflux.in</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className={contactIconClass} />
                <span className="text-[#9CA3AF]">+91 9730960043</span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className={contactIconClass} />
                <span className="leading-relaxed text-[#9CA3AF]">
                  Office 1: Dhawan Apartment, Maneksha Nagar, Dwarka, Nashik, Maharashtra 422011
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mb-16 rounded-2xl border border-[#1f365f] bg-[#0d1b35] px-8 py-14 text-center"
        >
          <h2 className="mb-4 font-sora text-3xl font-semibold text-white md:text-4xl">
            Ready to Build Something Scalable?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-[#9CA3AF]">
            Let&apos;s discuss your SaaS, AI, or On-Demand project with our
            product experts.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <BookStrategyCallButton className="rounded-xl bg-[#2F80ED] px-7 py-3 text-base font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1C6DD0] hover:shadow-lg hover:shadow-[#2F80ED]/30" />
            <BecomePartnerButton className="rounded-xl border border-[#2F80ED] px-7 py-3 text-base font-medium text-[#2F80ED] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2F80ED]/10" />
          </div>
        </motion.div>

        <div className="border-t border-white/5 pt-6 text-center text-sm text-[#6B7280]">
          &copy; 2026 Techflux Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

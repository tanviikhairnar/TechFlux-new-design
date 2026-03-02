import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import techfluxLogo from "../../assets/97803067c0aec46e43b07e2df6709083ebfe41e9.png";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050d1d]">
      <div className="mx-auto max-w-[1260px] px-4 pb-10 pt-16 lg:px-5">
        
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
              <img src={techfluxLogo} alt="TechFlux Logo" className="h-9 w-9" />
              <span className="font-sora text-xl font-semibold text-white">
                TechFlux Solutions
              </span>
            </div>

            <p className="mb-6 max-w-[260px] text-base leading-relaxed text-[#9CA3AF]">
              Building scalable SaaS, AI & On-Demand platforms that drive
              business growth and innovation.
            </p>

            <div className="flex gap-4">
              {[Linkedin, Twitter, Github].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-[#9CA3AF] transition-all duration-300 hover:bg-[#2F80ED]/20 hover:text-[#2F80ED]"
                >
                  <Icon className="h-4 w-4" />
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
              {["Home", "Services", "Case Studies", "Careers", "Blog", "Contact"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-[#9CA3AF] transition-colors hover:text-[#2F80ED]"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
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
                <Mail className="mt-1 h-4 w-4 text-[#2F80ED]" />
                <span className="text-[#9CA3AF]">hello@techflux.com</span>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 text-[#2F80ED]" />
                <span className="text-[#9CA3AF]">+1 (234) 567-8900</span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-[#2F80ED]" />
                <span className="leading-relaxed text-[#9CA3AF]">
                  123 Innovation Drive
                  <br />
                  San Francisco, CA 94105
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
            <button className="rounded-xl bg-[#2F80ED] px-7 py-3 text-base font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1C6DD0] hover:shadow-lg hover:shadow-[#2F80ED]/30">
              Book Strategy Call
            </button>
            <button className="rounded-xl border border-[#2F80ED] px-7 py-3 text-base font-medium text-[#2F80ED] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2F80ED]/10">
              Become a Partner
            </button>
          </div>
        </motion.div>

        <div className="border-t border-white/5 pt-6 text-center text-sm text-[#6B7280]">
          © 2026 TechFlux Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
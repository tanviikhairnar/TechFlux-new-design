import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
const homeHeroImage = "https://techflux.in/public/assets/images/AI%20(1).webp";

const HomeHero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-[#0B0F1A]">
      
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#2F80ED]/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#2D9CDB]/10 rounded-full blur-[140px]" />

      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#F9FAFB] leading-tight mb-6">
            Building Scalable SaaS, AI & On-Demand Platforms
          </h1>

          <p className="text-lg text-[#9CA3AF] leading-relaxed mb-8 max-w-xl">
            Techflux Solutions partners with startups and agencies to design,
            develop, and scale high-performance digital products.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/book-strategy-call"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] text-white font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2F80ED]/40"
            >
              Book Strategy Call
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="#portfolio"
              className="px-8 py-4 rounded-xl border border-[#2F80ED] text-[#2F80ED] font-semibold transition-all duration-300 hover:bg-[#2F80ED]/10"
            >
              View Case Studies
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-2xl md:aspect-[5/4]">
            <img
              src={homeHeroImage}
              alt="AI Technology"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default HomeHero







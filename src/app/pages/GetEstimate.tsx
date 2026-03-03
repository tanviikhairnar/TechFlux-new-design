import { motion } from 'motion/react';
import { Star, CheckCircle2 } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function GetEstimate() {
  return (
    <div className="w-full min-h-screen bg-[#0B0F1A] overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      {/* Hero Section with Form */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2F80ED]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2D9CDB]/10 rounded-full blur-[120px]" />
        
        <div className="max-w-[1140px] mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 
              className="text-5xl md:text-6xl font-bold text-[#F9FAFB] leading-tight mb-6"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Get a Clear Project Estimate Within 24 Hours
            </h1>
            <p className="text-xl text-[#9CA3AF] leading-relaxed">
              Share your requirements and receive structured guidance.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto rounded-2xl backdrop-blur-xl border border-white/5 p-8 md:p-12"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#F9FAFB] font-medium mb-2">Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-white/10 text-[#F9FAFB] focus:border-[#2F80ED] focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-[#F9FAFB] font-medium mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-white/10 text-[#F9FAFB] focus:border-[#2F80ED] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#F9FAFB] font-medium mb-2">Company</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-white/10 text-[#F9FAFB] focus:border-[#2F80ED] focus:outline-none transition-colors"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block text-[#F9FAFB] font-medium mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-white/10 text-[#F9FAFB] focus:border-[#2F80ED] focus:outline-none transition-colors">
                    <option>SaaS Platform</option>
                    <option>AI Solution</option>
                    <option>On-Demand App</option>
                    <option>White-Label Development</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#F9FAFB] font-medium mb-2">Budget Range</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-white/10 text-[#F9FAFB] focus:border-[#2F80ED] focus:outline-none transition-colors">
                    <option>$10k - $25k</option>
                    <option>$25k - $50k</option>
                    <option>$50k - $100k</option>
                    <option>$100k+</option>
                    <option>To be discussed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#F9FAFB] font-medium mb-2">Timeline</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-white/10 text-[#F9FAFB] focus:border-[#2F80ED] focus:outline-none transition-colors">
                    <option>1-3 months</option>
                    <option>3-6 months</option>
                    <option>6-12 months</option>
                    <option>12+ months</option>
                    <option>Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#F9FAFB] font-medium mb-2">Project Description</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-white/10 text-[#F9FAFB] focus:border-[#2F80ED] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                />
              </div>

              <button 
                type="submit"
                className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] text-white font-semibold hover:shadow-xl hover:shadow-[#2F80ED]/40 transition-all"
              >
                Submit Project Details
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24 relative bg-[#111827]/30">
        <div className="max-w-[1140px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl md:text-5xl font-bold text-[#F9FAFB] mb-4"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              What Happens Next
            </h2>
            <p className="text-lg text-[#9CA3AF]">
              Our streamlined process ensures you get answers fast
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Review',
                desc: 'Our team reviews your requirements within 4 hours'
              },
              {
                step: '2',
                title: 'Strategy Alignment',
                desc: 'We schedule a brief call to clarify details'
              },
              {
                step: '3',
                title: 'Estimate Shared',
                desc: 'Receive detailed proposal within 24 hours'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#2F80ED] flex items-center justify-center font-bold text-white text-2xl mx-auto mb-6 shadow-lg shadow-[#2F80ED]/30">
                  {item.step}
                </div>
                <h3 
                  className="text-xl font-bold text-[#F9FAFB] mb-3"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-[#9CA3AF]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signal */}
      <section className="py-24 relative">
        <div className="max-w-[1140px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto p-8 rounded-2xl backdrop-blur-xl border border-white/8"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#2F80ED] text-[#2F80ED]" />
              ))}
            </div>
            
            <p className="text-[#F9FAFB] leading-relaxed mb-6 text-lg">
              "Tachflux provided a detailed estimate that helped us understand exactly what we were getting. Their transparent approach and clear communication made the decision easy."
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#2F80ED] flex items-center justify-center text-white font-bold">
                A
              </div>
              <div>
                <div className="text-[#F9FAFB] font-semibold">Alex Thompson</div>
                <div className="text-sm text-[#9CA3AF]">Product Manager, TechVenture</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


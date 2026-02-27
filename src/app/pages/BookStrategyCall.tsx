import { motion } from 'motion/react';
import { Calendar, Check, Star, Clock, Users, Target, Code2 } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function BookStrategyCall() {
  return (
    <div className="w-full min-h-screen bg-[#0B0F1A] overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2F80ED]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2D9CDB]/10 rounded-full blur-[120px]" />
        
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5 py-14 md:py-20 relative z-10">
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
              Let's Build Something Scalable
            </h1>
            <p className="text-xl text-[#9CA3AF] leading-relaxed mb-8">
              Schedule a free strategy call to discuss your SaaS, AI, or On-Demand platform.
            </p>
          </motion.div>

          {/* Calendar Embed Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto rounded-2xl backdrop-blur-xl border border-white/5 p-7 md:p-10 text-center"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            <Calendar className="w-16 h-16 text-[#2F80ED] mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-[#F9FAFB] mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
              Calendar Integration
            </h3>
            <p className="text-[#9CA3AF] mb-6">
              Integrate your preferred scheduling tool (Calendly, Cal.com, etc.)
            </p>
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] text-white font-semibold hover:shadow-xl hover:shadow-[#2F80ED]/40 transition-all">
              Book Strategy Call
            </button>
          </motion.div>
        </div>
      </section>

      {/* What We'll Cover */}
      <section className="py-20 md:py-24 relative bg-[#111827]/30">
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5">
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
              What We'll Cover
            </h2>
            <p className="text-lg text-[#9CA3AF]">
              Our strategy call is designed to provide maximum value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Target, text: 'Project feasibility assessment' },
              { icon: Code2, text: 'Architecture planning & recommendations' },
              { icon: Clock, text: 'Timeline & cost guidance' },
              { icon: Users, text: 'Tech stack recommendations' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 rounded-2xl backdrop-blur-xl border border-white/5"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D9CDB]/20 to-[#2F80ED]/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#2F80ED]" />
                </div>
                <span className="text-[#F9FAFB] font-medium text-lg">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TechFlux */}
      <section className="py-20 md:py-24 relative">
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5">
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
              Why TechFlux
            </h2>
            <p className="text-lg text-[#9CA3AF]">
              Trusted by startups and enterprises worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: '8+ Years Experience',
                desc: 'Proven track record in SaaS & AI development'
              },
              {
                title: 'In-House Dev + QA',
                desc: 'Dedicated team of expert engineers'
              },
              {
                title: 'Scalable Architecture',
                desc: 'Enterprise-grade solutions built to grow'
              },
              {
                title: 'Long-Term Support',
                desc: '24/7 availability and ongoing maintenance'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-2xl backdrop-blur-xl border border-white/5 text-center"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
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

      {/* Testimonials */}
      <section className="py-20 md:py-24 relative bg-[#111827]/30">
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                text: "TechFlux transformed our vision into a scalable SaaS platform in record time. Their expertise in multi-tenant architecture and AI integration exceeded our expectations.",
                name: "Sarah Mitchell",
                company: "CEO, DataFlow Analytics"
              },
              {
                text: "Working with TechFlux has been exceptional. They delivered our on-demand marketplace with seamless real-time features and continue to provide outstanding support.",
                name: "Michael Chen",
                company: "Founder, QuickServe Pro"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-2xl backdrop-blur-xl border border-white/8"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#2F80ED] text-[#2F80ED]" />
                  ))}
                </div>
                
                <p className="text-[#F9FAFB] leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#2F80ED] flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[#F9FAFB] font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-[#9CA3AF]">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 relative">
        <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] p-8 md:p-12 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
            <div className="relative z-10">
              <h2 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Ready to Start?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                No commitment required. Let's explore how we can help you succeed.
              </p>
              <button className="px-10 py-5 rounded-xl bg-white text-[#2F80ED] font-bold hover:bg-[#F9FAFB] transition-all shadow-2xl hover:shadow-white/20">
                Book Your Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

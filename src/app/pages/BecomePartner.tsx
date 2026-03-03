import { motion } from 'motion/react';
import { Shield, Users, TrendingUp, Clock, Code2, Check, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function BecomePartner() {
  return (
    <div className="w-full min-h-screen bg-[#0B0F1A] overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2F80ED]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2D9CDB]/10 rounded-full blur-[120px]" />
        
        <div className="max-w-[1140px] mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 
              className="text-5xl md:text-6xl font-bold text-[#F9FAFB] leading-tight mb-6"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Scale Your Agency Without Hiring In-House Developers
            </h1>
            <p className="text-xl text-[#9CA3AF] leading-relaxed mb-8">
              Partner with Tachflux as your dedicated SaaS, AI & On-Demand development team.
            </p>
            <Link 
              to="/book-strategy-call"
              className="inline-flex px-10 py-5 rounded-xl bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] text-white font-semibold hover:shadow-xl hover:shadow-[#2F80ED]/40 transition-all items-center gap-2"
            >
              Schedule Partnership Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For */}
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
              Who This Is For
            </h2>
            <p className="text-lg text-[#9CA3AF]">
              Perfect for agencies and consultants looking to scale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Web Agencies',
              'Marketing Agencies',
              'SaaS Consultants',
              'Startups Without Tech Team'
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl backdrop-blur-xl border border-white/5 text-center"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D9CDB]/20 to-[#2F80ED]/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-[#2F80ED]" />
                </div>
                <h3 
                  className="text-xl font-bold text-[#F9FAFB]"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 relative">
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
              What We Offer
            </h2>
            <p className="text-lg text-[#9CA3AF]">
              Everything you need to deliver world-class solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Dedicated Team',
                desc: 'Assigned developers who work exclusively on your projects'
              },
              {
                icon: Shield,
                title: 'NDA Protection',
                desc: 'Complete confidentiality and IP protection guaranteed'
              },
              {
                icon: TrendingUp,
                title: 'Transparent Pricing',
                desc: 'Clear, predictable costs with no hidden fees'
              },
              {
                icon: Check,
                title: 'In-House QA',
                desc: 'Rigorous testing to ensure bug-free deliverables'
              },
              {
                icon: Clock,
                title: 'Scalable Engagement',
                desc: 'Scale team size up or down based on your needs'
              },
              {
                icon: Code2,
                title: 'Full-Stack Expertise',
                desc: 'SaaS, AI, mobile, and on-demand development'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl backdrop-blur-xl border border-white/5 hover:border-[#2F80ED]/30 transition-all"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2D9CDB]/20 to-[#2F80ED]/20 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-[#2F80ED]" />
                </div>
                <h3 
                  className="text-xl font-bold text-[#F9FAFB] mb-3"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-[#9CA3AF] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Partnership Works */}
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
              How Partnership Works
            </h2>
            <p className="text-lg text-[#9CA3AF]">
              Simple, transparent collaboration process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'You Close Client',
                desc: 'Focus on sales and client relationships'
              },
              {
                step: '2',
                title: 'We Deliver Tech',
                desc: 'Our team builds the solution to spec'
              },
              {
                step: '3',
                title: 'You Manage Brand',
                desc: 'White-label delivery under your brand'
              },
              {
                step: '4',
                title: 'We Support Growth',
                desc: 'Ongoing maintenance and scaling support'
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
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#2F80ED] flex items-center justify-center font-bold text-white text-3xl mx-auto shadow-lg shadow-[#2F80ED]/30">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-[100%] h-[2px] bg-gradient-to-r from-[#2F80ED] to-transparent" />
                  )}
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

      {/* Testimonial */}
      <section className="py-24 relative">
        <div className="max-w-[1140px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto p-8 rounded-2xl backdrop-blur-xl border border-white/8"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#2F80ED] text-[#2F80ED]" />
              ))}
            </div>
            
            <p className="text-[#F9FAFB] leading-relaxed mb-6 text-lg">
              "The white-label partnership with Tachflux has allowed us to scale our agency significantly. Their team is reliable, skilled, and truly understands enterprise development. We can now take on larger projects with confidence."
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2D9CDB] to-[#2F80ED] flex items-center justify-center text-white font-bold">
                E
              </div>
              <div>
                <div className="text-[#F9FAFB] font-semibold">Emily Rodriguez</div>
                <div className="text-sm text-[#9CA3AF]">CTO, Digital Ventures Agency</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative bg-[#111827]/30">
        <div className="max-w-[1140px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] p-12 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
            <div className="relative z-10">
              <h2 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Become a Tech Partner Today
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you scale your agency's development capacity.
              </p>
              <Link 
                to="/book-strategy-call"
                className="inline-flex px-10 py-5 rounded-xl bg-white text-[#2F80ED] font-bold hover:bg-[#F9FAFB] transition-all shadow-2xl hover:shadow-white/20 items-center gap-2"
              >
                Schedule Partnership Call
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


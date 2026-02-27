import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Most SaaS MVPs take 45-60 days. Complex AI solutions may require 3-6 months depending on scope and requirements.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes! We work with clients globally and have experience with different time zones and communication preferences.'
    },
    {
      question: 'What is your development process?',
      answer: 'We follow a 6-step process: Discovery, Architecture, UI/UX, Development, QA Testing, and Launch & Scale. We provide regular updates throughout.'
    },
    {
      question: 'Do you offer post-launch support?',
      answer: 'Absolutely. We provide ongoing maintenance, scaling support, and feature enhancements as your product grows.'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#0B0F1A] overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2F80ED]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2D9CDB]/10 rounded-full blur-[120px]" />
        
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 
              className="text-5xl md:text-6xl font-bold text-[#F9FAFB] leading-tight mb-6"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Let's Discuss Your Project
            </h1>
            <p className="text-xl text-[#9CA3AF] leading-relaxed">
              We respond within 24 hours.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl backdrop-blur-xl border border-white/5 p-8"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <h2 
                className="text-2xl font-bold text-[#F9FAFB] mb-6"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Send Us a Message
              </h2>
              <form className="space-y-6">
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
                <div>
                  <label className="block text-[#F9FAFB] font-medium mb-2">Subject</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-white/10 text-[#F9FAFB] focus:border-[#2F80ED] focus:outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-[#F9FAFB] font-medium mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-white/10 text-[#F9FAFB] focus:border-[#2F80ED] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#2D9CDB] to-[#2F80ED] text-white font-semibold hover:shadow-xl hover:shadow-[#2F80ED]/40 transition-all"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="rounded-2xl backdrop-blur-xl border border-white/5 p-8"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <h2 
                  className="text-2xl font-bold text-[#F9FAFB] mb-6"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D9CDB]/20 to-[#2F80ED]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#2F80ED]" />
                    </div>
                    <div>
                      <h3 className="text-[#F9FAFB] font-semibold mb-1">Email</h3>
                      <p className="text-[#9CA3AF]">hello@techflux.io</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D9CDB]/20 to-[#2F80ED]/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#2F80ED]" />
                    </div>
                    <div>
                      <h3 className="text-[#F9FAFB] font-semibold mb-1">Phone</h3>
                      <p className="text-[#9CA3AF]">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D9CDB]/20 to-[#2F80ED]/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#2F80ED]" />
                    </div>
                    <div>
                      <h3 className="text-[#F9FAFB] font-semibold mb-1">Business Hours</h3>
                      <p className="text-[#9CA3AF]">Mon - Fri: 9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2D9CDB]/20 to-[#2F80ED]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#2F80ED]" />
                    </div>
                    <div>
                      <h3 className="text-[#F9FAFB] font-semibold mb-1">Location</h3>
                      <p className="text-[#9CA3AF]">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl backdrop-blur-xl border border-white/5 p-8 h-64 flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#2F80ED] mx-auto mb-3" />
                  <p className="text-[#9CA3AF]">Map Placeholder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#9CA3AF]">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl backdrop-blur-xl border border-white/5 overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#F9FAFB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#2F80ED] transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-[#9CA3AF] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative CTA */}
      <section className="py-20 relative">
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
                Prefer to Talk?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Book a strategy call to discuss your project in detail with our team.
              </p>
              <Link 
                to="/book-strategy-call"
                className="inline-flex px-10 py-5 rounded-xl bg-white text-[#2F80ED] font-bold hover:bg-[#F9FAFB] transition-all shadow-2xl hover:shadow-white/20"
              >
                Book Strategy Call Instead
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { motion } from 'motion/react';
import { CheckCircle2, Clock3, Users, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const buildItems = [
  {
    title: 'Real-Time Booking Systems',
    desc: 'Instant scheduling, availability management, and automated confirmations.',
  },
  {
    title: 'GPS Tracking & Navigation',
    desc: 'Live location tracking, route optimization, and estimated arrival times.',
  },
  {
    title: 'Multi-Sided Marketplaces',
    desc: 'Connect buyers and sellers with ratings, reviews, and secure transactions.',
  },
  {
    title: 'Payment Processing',
    desc: 'Integrated payment gateways, split payments, and commission management.',
  },
  {
    title: 'Smart Matching Algorithms',
    desc: 'AI-powered matching based on location, preferences, and availability.',
  },
  {
    title: 'Driver/Provider Apps',
    desc: 'Native mobile apps for service providers with earnings tracking.',
  },
];

export default function OnDemandSolutions() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.14),transparent_42%)]" />

        <section className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-20 pt-28 text-center md:pb-24 md:pt-32 lg:px-5">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mx-auto mb-6 inline-flex rounded-full border border-[#2F80ED]/40 bg-[#0C2146] px-4 py-1 text-sm text-[#72B5FF]">
              On-Demand Applications
            </div>
            <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold leading-tight text-[#E5E7EB] sm:text-5xl md:text-6xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              Build Real-Time On-Demand Platforms
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-[#94A3B8]">
              Create marketplaces, booking systems, and delivery platforms that connect service providers with
              customers instantly through intelligent matching, real-time tracking, and seamless payments.
            </p>
            <Link
              to="/book-strategy-call"
              className="inline-flex rounded-xl bg-gradient-to-r from-[#38A9FF] to-[#2B7BDF] px-8 py-4 text-base font-semibold text-white shadow-[0_0_24px_rgba(56,169,255,0.35)] transition-all hover:brightness-110"
            >
              Book Strategy Call
            </Link>
          </motion.div>
        </section>

        <section className="border-y border-white/5 bg-[#0E1A31] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                What We Build
              </h2>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              {buildItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.07 }}
                  className="rounded-xl border border-white/5 bg-[#111D35] p-5"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#2F80ED]" />
                    <h3 className="text-base font-semibold text-[#E5E7EB]">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#94A3B8]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid w-full max-w-[1260px] items-center gap-8 px-4 lg:grid-cols-2 lg:px-5">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="mb-5 text-4xl font-bold text-[#E5E7EB] md:text-[44px]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Success Story: Telemedicine Platform
              </h2>
              <p className="mb-7 text-base leading-relaxed text-[#94A3B8]">
                We built a comprehensive telemedicine platform connecting patients with healthcare providers for
                virtual consultations, prescriptions, and follow-ups.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#A8BEDD]">
                  <Users className="h-4 w-4 text-[#2F80ED]" />
                  <span>5,000+ active users within first 3 months</span>
                </div>
                <div className="flex items-center gap-3 text-[#A8BEDD]">
                  <Clock3 className="h-4 w-4 text-[#2F80ED]" />
                  <span>Average booking time reduced to under 2 minutes</span>
                </div>
                <div className="flex items-center gap-3 text-[#A8BEDD]">
                  <ArrowUpRight className="h-4 w-4 text-[#2F80ED]" />
                  <span>95% customer satisfaction rating</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#111D35] p-2"
            >
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                alt="Telemedicine"
                className="h-full w-full rounded-xl object-cover"
              />
            </motion.div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/5 bg-[#0F1A31] px-8 py-12 text-center md:px-12"
            >
              <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to Build Your On-Demand Platform?
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-[#94A3B8]">
                Let&apos;s discuss your marketplace idea and create a scalable solution that connects users in
                real-time.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/book-strategy-call"
                  className="rounded-xl bg-gradient-to-r from-[#38A9FF] to-[#2B7BDF] px-8 py-3 text-sm font-semibold text-white"
                >
                  Book Strategy Call
                </Link>
                <Link
                  to="/get-estimate"
                  className="rounded-xl border border-[#2F80ED] px-8 py-3 text-sm font-semibold text-[#2F80ED] hover:bg-[#2F80ED]/10"
                >
                  Get Project Estimate
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

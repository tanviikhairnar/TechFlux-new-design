import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Code2, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
const fuztechImage = "https://techflux.in/public/assets/images/repair.webp"

const challengeItems = [
  'Complex repair service categorization',
  'Real-time dynamic pricing calculation',
  'Appointment scheduling conflicts',
  'Dutch language localization requirements',
  'Integration with multiple repair service providers',
];

const architectureItems = ['Booking Platform', 'Real-Time Pricing', 'Dutch Localization', 'Payment Integration'];

const featureItems = [
  { title: 'Repair Selection Dropdown', subtitle: 'Intuitive service category selection' },
  { title: 'Real-Time Pricing', subtitle: 'Instant cost calculation and quotes' },
  { title: 'Appointment Scheduling', subtitle: 'Automated calendar and booking management' },
  { title: 'Dutch Localization', subtitle: 'Complete translation and local payment methods' },
  { title: 'Service Provider Management', subtitle: 'Multi-provider coordination system' },
  { title: 'Order Tracking', subtitle: 'Real-time repair status updates' },
];

const impactItems = [
  {
    icon: Zap,
    title: 'Simplified Booking',
    text: 'Instant repair booking with transparent pricing',
  },
  {
    icon: TrendingUp,
    title: 'Increased Bookings',
    text: 'Streamlined UX boosted conversion rates',
  },
  {
    icon: Users,
    title: 'Enhanced Experience',
    text: 'User-friendly Dutch interface',
  },
  {
    icon: CheckCircle2,
    title: 'Operational Control',
    text: 'Automated scheduling reduced conflicts',
  },
];

export default function FuzTechCaseStudy() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.14),transparent_42%)]" />

        <section className="relative z-10 mx-auto flex w-full max-w-[1260px] items-center px-4 pb-24 pt-[7.5rem] md:pb-28 md:pt-[8.5rem] lg:px-5">
          <div className="w-full">
          <Link to="/case-studies" className="mb-6 inline-flex items-center gap-2 text-sm text-[#6DB6FF] hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span className="mb-5 inline-flex rounded-full bg-[#113262] px-3 py-1 text-xs font-medium text-[#6DB6FF]">
                Repair Services
              </span>

              <h1 className="mb-4 text-4xl font-bold leading-tight text-[#E5E7EB] sm:text-5xl md:text-6xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                FuzTech
              </h1>

              <p className="mb-4 max-w-xl text-base leading-relaxed text-[#94A3B8] md:text-lg">
                FuzTech is an online repair booking platform serving the Dutch market, providing users with instant
                pricing, service selection, and appointment scheduling for electronic repairs.
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {['Booking Platform', 'Real-Time Pricing', 'Dutch Localization', 'Payment Integration'].map((tag) => (
                  <span key={tag} className="rounded-full bg-[#1B2942] px-3 py-1 text-xs text-[#9FB2CD]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/get-estimate"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-7 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(47,128,237,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
                >
                  Start a Similar Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/book-strategy-call"
                  className="inline-flex items-center rounded-xl border border-[#2F80ED]/50 bg-[#193258] px-7 py-3 text-sm font-semibold text-[#E5E7EB] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#23406B]"
                >
                  Book Strategy Call
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="overflow-hidden rounded-2xl border border-white/8 bg-[#101A31]"
            >
              <img
                src={fuztechImage}
                alt="FuzTech repair booking platform"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="h-auto w-full object-contain"
              />
            </motion.div>
          </div>
          </div>
        </section>

        <section className="bg-[#08142A] py-20">
          <div className="mx-auto w-full max-w-[1260px] space-y-14 px-4 lg:px-5">
            <div>
              <h2 className="mb-5 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                The Challenge
              </h2>
              <ul className="space-y-3">
                {challengeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#94A3B8] md:text-base">
                    <Circle className="mt-1 h-3.5 w-3.5 text-[#2F80ED]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Our Solution
              </h2>
              <p className="mb-6 max-w-5xl text-sm leading-relaxed text-[#94A3B8] md:text-base">
                We built an intuitive booking platform featuring a smart dropdown repair selection system, real-time
                pricing engine, automated appointment scheduling, complete Dutch localization, and seamless payment
                integration.
              </p>

              <div className="rounded-2xl border border-white/6 bg-[#101A31] p-6">
                <h3 className="mb-4 text-base font-semibold text-[#E5E7EB]">Architecture Overview</h3>
                <div className="grid gap-4 md:grid-cols-4">
                  {architectureItems.map((item) => (
                    <div key={item} className="rounded-xl border border-white/6 bg-[#111D33] p-4 text-center">
                      <Code2 className="mx-auto mb-2 h-4 w-4 text-[#2F80ED]" />
                      <p className="text-sm font-medium text-[#E5E7EB]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-10 text-center text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Key Features Delivered
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {featureItems.map((item) => (
                <div key={item.title} className="rounded-xl border border-white/6 bg-[#111D33] p-5">
                  <p className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2F80ED]" />
                    <span>
                      <span className="block text-base font-semibold text-[#E5E7EB]">{item.title}</span>
                      <span className="block text-sm text-[#94A3B8]">{item.subtitle}</span>
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#08142A] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-10 text-center text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Results & Impact
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {impactItems.map((item) => (
                <div key={item.title} className="rounded-xl border border-white/6 bg-[#111D33] px-5 py-6 text-center">
                  <item.icon className="mx-auto mb-3 h-5 w-5 text-[#2F80ED]" />
                  <p className="text-2xl font-bold text-[#E5E7EB]">{item.title}</p>
                  <p className="mt-2 text-sm text-[#94A3B8]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <div className="rounded-3xl border border-white/6 bg-[linear-gradient(120deg,#10284B_0%,#1B2E54_55%,#223A66_100%)] px-8 py-14 text-center md:px-12">
              <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Want to Build Something Similar?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-[#B2C3DA]">
                Let&apos;s discuss your project and explore how we can help you achieve similar success.
              </p>
              <Link
                to="/book-strategy-call"
                className="inline-flex rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-8 py-3 text-sm font-semibold text-white"
              >
                Book Strategy Call
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}






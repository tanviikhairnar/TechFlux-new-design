import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Circle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
const servyoImage = new URL("../../assets/webp/iMac - FREE (1).webp", import.meta.url).href;

const challengePoints = [
  'Lack of centralized service booking system',
  'Need for real-time booking and partner management',
  'Subscription-based model integration',
  'Secure payment processing',
  'Real-time updates for customers and partners',
];

const solutionPoints = [
  'Flutter mobile apps (User & Partner)',
  'Web-based admin dashboard',
  'Real-time booking system',
  'Subscription-based platform',
  'Integrated payment gateway',
  'Real-time notifications & updates',
];

const keyFeatures = [
  'Service Booking System',
  'Subscription Plans',
  'Partner Management',
  'Payment Gateway Integration',
  'Real-Time Updates',
  'Admin Dashboard',
];

const techStack = [
  { label: 'Mobile', value: 'Flutter' },
  { label: 'Frontend', value: 'React / Web App' },
  { label: 'Integration', value: 'Payment Gateway' },
  { label: 'Infrastructure', value: 'Cloud Backend' },
];

const resultItems = [
  'Seamless booking experience',
  'Scalable service platform',
  'Real-time operational efficiency',
  'Multi-role system (User, Partner, Admin)',
];

export default function ServyoCaseStudy() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.14),transparent_42%)]" />

        <section className="relative z-10 mx-auto flex w-full max-w-[1260px] items-center px-4 pb-24 pt-[7.5rem] md:pb-28 md:pt-[8.5rem] lg:px-5">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span className="mb-5 inline-flex rounded-full bg-[#113262] px-3 py-1 text-xs font-medium text-[#6DB6FF]">
                Service Industry
              </span>

              <h1 className="mb-4 text-4xl font-bold text-[#E5E7EB] sm:text-5xl md:text-6xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Servyo
              </h1>

              <p className="mb-6 max-w-xl text-base leading-relaxed text-[#94A3B8] md:text-lg">
                On-demand service marketplace connecting users with skilled professionals such as chefs, drivers,
                and gardeners.
              </p>

              <div className="mb-2 text-sm text-[#7C8EA8]">Platform:</div>
              <p className="mb-6 text-sm font-semibold text-[#D2E2F7] md:text-base">
                Flutter Mobile Apps (User & Partner) • Web Admin Panel
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#111D33] px-3 py-2 text-xs text-[#A9BCD7]">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Google Play (User)
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#111D33] px-3 py-2 text-xs text-[#A9BCD7]">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Google Play (Partner)
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#111D33] px-3 py-2 text-xs text-[#A9BCD7]">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Apple App Store
                </span>
              </div>

              <Link
                to="/get-estimate"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-8 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(47,128,237,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_30px_rgba(47,128,237,0.45)]"
              >
                Start a Similar Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="overflow-hidden rounded-2xl border border-white/8 bg-[#101A31]"
            >
              <img
                src={servyoImage}
                alt="Servyo app showcase"
                className="h-auto w-full object-contain"
              />
            </motion.div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1260px] px-4 pb-20 lg:px-5">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/6 bg-[#101A31] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
            >
              <h2 className="mb-4 text-2xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                The Challenge
              </h2>
              <ul className="space-y-3">
                {challengePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-[#94A3B8] md:text-base">
                    <Circle className="mt-1 h-3.5 w-3.5 text-[#2F80ED]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="rounded-2xl border border-white/6 bg-[#101A31] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
            >
              <h2 className="mb-4 text-2xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Our Solution
              </h2>
              <ul className="space-y-3">
                {solutionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-[#94A3B8] md:text-base">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#2F80ED]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#08142A] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-2 text-center text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Key Features
            </h2>
            <p className="mb-10 text-center text-sm text-[#7F91AB] md:text-base">
              Built for seamless service delivery and management
            </p>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {keyFeatures.map((feature) => (
                <div
                  key={feature}
                  className="rounded-xl border border-white/6 bg-[#111D33] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#26497A] bg-[#122C4D]">
                    <CheckCircle2 className="h-5 w-5 text-[#3B82F6]" />
                  </div>
                  <p className="text-base font-semibold text-[#E5E7EB]">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-10 text-center text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Technology Stack
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {techStack.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/6 bg-[#111D33] px-5 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <p className="mb-2 text-xs uppercase tracking-wide text-[#58A8FF]">{item.label}</p>
                  <p className="text-lg font-semibold text-[#E5E7EB]">{item.value}</p>
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
            <div className="grid gap-4 md:grid-cols-2">
              {resultItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/6 bg-[#111D33] px-5 py-4 text-[#C4D4EA] transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <p className="flex items-center gap-3 text-sm md:text-base">
                    <CheckCircle2 className="h-4 w-4 text-[#2F80ED]" />
                    <span>{item}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <div className="rounded-3xl border border-white/6 bg-[linear-gradient(120deg,#10284B_0%,#1B2E54_55%,#223A66_100%)] px-8 py-14 text-center md:px-12">
              <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Build Your On-Demand Platform
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-[#B2C3DA]">
                Ready to launch your own service marketplace? Let&apos;s discuss how we can bring your vision to life.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/book-strategy-call"
                  className="rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_30px_rgba(47,128,237,0.45)]"
                >
                  Book Strategy Call
                </Link>
                <Link
                  to="/case-studies"
                  className="rounded-xl border border-[#2F80ED]/50 bg-[#193258] px-8 py-3 text-sm font-semibold text-[#E5E7EB] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#23406B]"
                >
                  View More Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}






import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

const challengePoints = [
  'Traditional restaurant booking lacks curated experiences',
  'Need for pre-set multi-course selection',
  'Payment integration required',
  'Reward system implementation',
  'Seamless web + mobile experience',
];

const solutionPoints = [
  'Flutter mobile app',
  'React-based web application',
  'Booking platform',
  'Integrated payment gateway',
  'Reward-based loyalty system',
];

const keyFeatures = [
  'Curated Dining Booking',
  'Pre-set Meal Packages',
  'Online Payment',
  'Reward & Coin System',
  'Admin Restaurant Management',
];

const techStack = [
  { label: 'Mobile', value: 'Flutter' },
  { label: 'Web Frontend', value: 'React' },
  { label: 'Integration', value: 'Payment Gateway' },
  { label: 'Infrastructure', value: 'Cloud Backend' },
];

const resultItems = [
  'Premium digital dining experience',
  'Seamless booking workflow',
  'Customer loyalty ecosystem',
  'Scalable hospitality platform',
];

export default function DineRightCaseStudy() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.14),transparent_42%)]" />

        <section className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-16 pt-28 md:pb-20 md:pt-32 lg:px-5">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-[#113262] px-3 py-1 text-xs font-medium text-[#6DB6FF]">
                  Hospitality Industry
                </span>
                <span className="inline-flex rounded-full bg-[#2F80ED] px-3 py-1 text-xs font-medium text-white">
                  Work In Progress
                </span>
              </div>

              <h1 className="mb-4 text-4xl font-bold text-[#E5E7EB] sm:text-5xl md:text-6xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Dine Right
              </h1>

              <p className="mb-6 max-w-xl text-base leading-relaxed text-[#94A3B8] md:text-lg">
                Revolutionizing luxury dining by enabling users to book curated multi-course dining experiences at
                high-end restaurants.
              </p>

              <div className="mb-2 text-sm text-[#7C8EA8]">Platform:</div>
              <p className="mb-6 text-sm font-semibold text-[#D2E2F7] md:text-base">
                Flutter Mobile App - Responsive Web Application
              </p>

              <Link
                to="/get-estimate"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-8 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(47,128,237,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_30px_rgba(47,128,237,0.45)]"
              >
                Start a Similar Platform
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
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80"
                alt="Dine Right platform"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1260px] px-4 pb-10 lg:px-5">
          <div className="rounded-2xl border border-white/6 bg-[#101A31] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20 md:p-7">
            <h2 className="mb-4 text-2xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              About the Project
            </h2>
            <p className="max-w-5xl text-sm leading-relaxed text-[#94A3B8] md:text-base">
              Dine Right revolutionizes luxury dining by enabling users to book curated multi-course dining experiences
              at high-end restaurants. This platform bridges the gap between food enthusiasts and premium dining
              establishments, offering a seamless digital experience for discovering and booking exclusive culinary
              experiences.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1260px] px-4 pb-16 lg:px-5">
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

        <section className="border-y border-white/5 bg-[#08142A] py-16">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-2 text-center text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Key Features
            </h2>
            <p className="mb-10 text-center text-sm text-[#7F91AB] md:text-base">
              Delivering a premium dining booking experience
            </p>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {keyFeatures.map((feature) => (
                <div
                  key={feature}
                  className="rounded-xl border border-white/6 bg-[#111D33] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-[#123667] p-2">
                    <Circle className="h-4 w-4 text-[#6DB6FF]" />
                  </div>
                  <p className="text-base font-semibold text-[#E5E7EB]">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
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

        <section className="border-y border-white/5 bg-[#08142A] py-16">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-2 text-center text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Expected Results
            </h2>
            <p className="mb-10 text-center text-sm text-[#7F91AB] md:text-base">
              Project in development - Anticipated outcomes
            </p>
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

        <section className="py-12">
          <div className="mx-auto grid w-full max-w-[1260px] gap-4 px-4 md:grid-cols-2 lg:px-5">
            <div className="overflow-hidden rounded-xl border border-white/6 bg-[#101A31]">
              <img
                src="https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?auto=format&fit=crop&w=1400&q=80"
                alt="Dine Right experience preview 1"
                className="h-52 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-white/6 bg-[#101A31]">
              <img
                src="https://images.unsplash.com/photo-1556742049-9086b7f2c48e?auto=format&fit=crop&w=1400&q=80"
                alt="Dine Right experience preview 2"
                className="h-52 w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <div className="rounded-3xl border border-white/6 bg-[linear-gradient(120deg,#10284B_0%,#1B2E54_55%,#223A66_100%)] px-8 py-14 text-center md:px-12">
              <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Launch Your Booking Platform
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-[#B2C3DA]">
                Ready to create your own hospitality booking platform? Let&apos;s turn your vision into reality.
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

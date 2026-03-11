import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
const dineRightImage = "https://techflux.in/img/assets/images/dineright.jpg";
const diningPreviewOne = "https://techflux.in/img/assets/images/WhatsApp%20Image%202026-03-10%20at%2015.55.45.jpeg";
const diningPreviewTwo = "https://techflux.in/img/assets/images/hand-touching-mobile-with-applications.jpg";

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
  const listBullet = (
    <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#2F80ED]/90">
      <span className="h-1.5 w-1.5 rounded-full bg-[#2F80ED]" />
    </span>
  );

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#030B1D]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.12),transparent_42%)]" />

        <section className="relative z-10 mx-auto flex w-full max-w-[1260px] items-center px-4 pb-24 pt-[7.5rem] md:pb-28 md:pt-[8.5rem] lg:px-5">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_1.06fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-[#0F2C56] px-3 py-1 text-xs font-medium text-[#6DB6FF]">
                  Hospitality Industry
                </span>
                <span className="inline-flex rounded-full border border-[#2F80ED]/40 bg-[#12274A] px-3 py-1 text-xs font-medium text-[#D5E8FF]">
                  Work In Progress
                </span>
              </div>

              <h1 className="mb-4 text-4xl font-bold text-[#E5E7EB] sm:text-5xl md:text-[58px]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Dine Right
              </h1>

              <p className="mb-7 max-w-xl text-base leading-relaxed text-[#9AAAC0] md:text-lg">
                Revolutionizing luxury dining by enabling users to book curated multi-course dining experiences at
                high-end restaurants.
              </p>

              <div className="mb-2 text-xs text-[#7C8EA8]">Platform:</div>
              <p className="mb-7 text-sm font-semibold text-[#D2E2F7] md:text-base">
                Flutter Mobile App - Responsive Web Application
              </p>

              <Link
                to="/get-estimate"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-7 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(47,128,237,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_28px_rgba(47,128,237,0.42)]"
              >
                Start a Similar Platform
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="overflow-hidden rounded-2xl border border-[#1F3150] bg-[#101A31]"
            >
              <img
                src={dineRightImage}
                alt="Dine Right platform"
                className="h-auto w-full object-contain"
              />
            </motion.div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1260px] px-4 pb-20 lg:px-5">
          <div className="rounded-2xl border border-[#1E2E49] bg-[#111B31] p-6 md:p-7">
            <h2 className="mb-4 text-2xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              About the Project
            </h2>
            <p className="max-w-5xl text-sm leading-relaxed text-[#9AAAC0] md:text-base">
              Dine Right revolutionizes luxury dining by enabling users to book curated multi-course dining experiences
              at high-end restaurants. This platform bridges the gap between food enthusiasts and premium dining
              establishments, offering a seamless digital experience for discovering and booking exclusive culinary
              experiences.
            </p>
          </div>
        </section>

        <section className="bg-[#0A152B] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-[#1E2E49] bg-[#111B31] p-6"
            >
              <h2 className="mb-4 text-[34px] font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                The Challenge
              </h2>
              <ul className="space-y-2.5">
                {challengePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-[#9AAAC0] md:text-base">
                    {listBullet}
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
              className="rounded-2xl border border-[#1E2E49] bg-[#111B31] p-6"
            >
              <h2 className="mb-4 text-[34px] font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Our Solution
              </h2>
              <ul className="space-y-2.5">
                {solutionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-[#9AAAC0] md:text-base">
                    {listBullet}
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-2 text-center text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Key Features
            </h2>
            <p className="mb-10 text-center text-sm text-[#7F91AB] md:text-base">
              Delivering a premium dining booking experience
            </p>

            <div className="mx-auto grid max-w-[980px] gap-4 md:grid-cols-2 lg:grid-cols-3">
              {keyFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex min-h-[98px] flex-col justify-center rounded-xl border border-[#1E2E49] bg-[#111B31] px-4 py-3.5"
                >
                  <Check className="mb-3 h-4 w-4 text-[#57B0FF]" />
                  <p className="text-[15px] font-semibold text-[#E5E7EB]">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0A152B] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-10 text-center text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Technology Stack
            </h2>
            <div className="mx-auto grid max-w-[980px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {techStack.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[#1E2E49] bg-[#111B31] px-5 py-4.5 text-center"
                >
                  <p className="mb-2 text-xs uppercase tracking-wide text-[#58A8FF]">{item.label}</p>
                  <p className="text-base font-semibold text-[#E5E7EB]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-2 text-center text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Expected Results
            </h2>
            <p className="mb-10 text-center text-sm text-[#7F91AB] md:text-base">
              Project in development - Anticipated outcomes
            </p>
            <div className="mx-auto grid max-w-[980px] gap-4 md:grid-cols-2">
              {resultItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#1E2E49] bg-[#111B31] px-5 py-3.5 text-[#C4D4EA]"
                >
                  <p className="flex items-center gap-3 text-sm md:text-base">
                    {listBullet}
                    <span>{item}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0A152B] py-20 md:py-20">
          <div className="mx-auto grid w-full max-w-[1260px] gap-6 px-4 md:grid-cols-2 lg:px-5">
            <div className="group relative overflow-hidden rounded-2xl border border-[#24406A] bg-[#101A31] shadow-[0_14px_36px_rgba(5,20,56,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/45 hover:shadow-[0_18px_44px_rgba(47,128,237,0.28)]">
              <img
                src={diningPreviewOne}
                alt="Dine Right experience preview 1"
                className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-[360px]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#071227]/85 to-transparent" />
            </div>
            <div className="group relative overflow-hidden rounded-2xl border border-[#24406A] bg-[#101A31] shadow-[0_14px_36px_rgba(5,20,56,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/45 hover:shadow-[0_18px_44px_rgba(47,128,237,0.28)]">
              <img
                src={diningPreviewTwo}
                alt="Dine Right experience preview 2"
                className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-[360px]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#071227]/85 to-transparent" />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <div className="rounded-3xl border border-[#23375A] bg-[linear-gradient(120deg,#162A47_0%,#1E2F4D_55%,#223756_100%)] px-8 py-14 text-center md:px-12">
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






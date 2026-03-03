import { motion } from 'motion/react';
import {
  ArrowRight,
  BadgeCheck,
  Cloud,
  Code2,
  Cpu,
  Gamepad2,
  Gauge,
  Globe2,
  Palette,
  ShieldCheck,
  Sword,
  Users2,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const whyChooseUnity = [
  {
    icon: Globe2,
    title: 'Cross-Platform Support',
    desc: 'Ship one codebase across iOS, Android, PC, web, and console ecosystems.',
  },
  {
    icon: Gauge,
    title: 'High-Performance Rendering',
    desc: 'Optimized visuals, lighting, and frame pacing for smooth immersive gameplay.',
  },
  {
    icon: Users2,
    title: 'Multiplayer Capability',
    desc: 'Build cooperative and competitive game modes with scalable network architecture.',
  },
  {
    icon: Palette,
    title: 'Scalable Backend Integration',
    desc: 'Connect gameplay to cloud saves, leaderboards, analytics, and live-ops tooling.',
  },
  {
    icon: Sword,
    title: 'AR/VR Compatibility',
    desc: 'Extend experiences into XR devices with native Unity workflows and tooling.',
  },
  {
    icon: BadgeCheck,
    title: 'Global Reach',
    desc: 'Support localization, market-ready delivery, and long-term growth strategies.',
  },
];

const expertise = [
  { title: '2D Mobile Games', desc: 'Engaging and lightweight game loops for mobile-first audiences.' },
  { title: '3D Action & Adventure', desc: 'Immersive real-time environments with polished controls and combat.' },
  { title: 'Multiplayer Games', desc: 'Real-time co-op and PvP features with reliable sync and matchmaking.' },
  { title: 'Real-Time Strategy Games', desc: 'Large-map simulation, AI behaviors, and scalable battle systems.' },
  { title: 'Gamified Applications', desc: 'Game mechanics for retention, rewards, and product engagement.' },
  { title: 'AR/VR Experiences', desc: 'Interactive simulations and immersive storytelling for XR platforms.' },
];

const techStack = [
  'Unity',
  'C#',
  'Photon',
  'Mirror',
  'Firebase',
  'PlayFab',
  'ARKit',
  'ARCore',
  'Blender',
  'FMOD',
  'TestFlight',
  'GitHub Actions',
];

const process = [
  {
    step: '01',
    title: 'Game Concept & Ideation',
    desc: 'Define mechanics, user personas, economy model, and engagement hooks.',
  },
  {
    step: '02',
    title: 'UI/UX Prototyping',
    desc: 'Create wireframes and gameplay flows for quick validation before production.',
  },
  {
    step: '03',
    title: 'Core Gameplay Development',
    desc: 'Implement movement, interactions, progression, and technical foundations.',
  },
  {
    step: '04',
    title: 'Multiplayer Backend Integration',
    desc: 'Integrate authentication, session sync, matchmaking, and data services.',
  },
  {
    step: '05',
    title: 'QA & Performance Optimization',
    desc: 'Stress-test devices, fix frame drops, and tune memory and loading behavior.',
  },
  {
    step: '06',
    title: 'Launch & Post-Launch Support',
    desc: 'Handle store releases, analytics insights, live updates, and growth support.',
  },
];

const projects = [
  {
    image:
      'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=1200&q=80',
    tag: 'Mobile Shooter',
    title: 'Arena Legends: Battle Royale',
    desc: 'Fast-paced mobile shooter with progression loops and weekly live events.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&w=1200&q=80',
    tag: 'VR Racing',
    title: 'Speed Throne VR',
    desc: 'Low-latency VR racing title with multiplayer rooms and ranked leaderboard.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?auto=format&fit=crop&w=1200&q=80',
    tag: 'Simulation',
    title: 'Hyperreal World',
    desc: 'Interactive simulation game with modular worlds and social experiences.',
  },
];

const whyTechflux = [
  { icon: Code2, title: 'Scalable Architecture', desc: 'Modular systems that support continuous updates and growth.' },
  { icon: Users2, title: 'Multiplayer Excellence', desc: 'Battle-tested patterns for real-time sync and room orchestration.' },
  { icon: ShieldCheck, title: 'In-House QA Team', desc: 'Dedicated testers across device matrices and network conditions.' },
  { icon: Cpu, title: 'Performance Optimization', desc: 'Frame rate, memory, and loading tuned for stable experiences.' },
  { icon: Wrench, title: 'Long-Term Support', desc: 'Roadmap-driven support for features, fixes, and content cadence.' },
  { icon: Cloud, title: 'Cross-Platform Expertise', desc: 'Reliable release pipelines across mobile, desktop, and XR.' },
];

const exploreServices = [
  {
    title: 'AI Solutions',
    desc: 'Intelligent gameplay assistants, analytics, and personalization systems.',
    to: '/ai-solutions',
  },
  {
    title: 'On-Demand Applications',
    desc: 'High-scale backend systems for sessions, matchmaking, and marketplaces.',
    to: '/on-demand-solutions',
  },
  {
    title: 'SaaS Development',
    desc: 'Admin dashboards, live-ops tooling, and subscription product ecosystems.',
    to: '/saas-development',
  },
  {
    title: 'White-Label Partnership',
    desc: 'Dedicated delivery pods for agencies and product teams.',
    to: '/become-partner',
  },
];

export default function UnityGameDevelopment() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.14),transparent_42%)]" />

        <section className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-24 pt-28 md:pb-32 md:pt-40 lg:px-5">
          <div className="grid items-center gap-12 lg:min-h-[520px] lg:grid-cols-[1.05fr_1fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="mb-6 inline-flex rounded-full border border-[#2F80ED]/40 bg-[#0C2146] px-4 py-1 text-sm text-[#72B5FF]">
                Unity Game Development
              </span>
              <h1 id="unity-game-development-heading" className="max-w-[560px] text-4xl font-bold leading-tight text-[#F8FAFC] sm:text-5xl md:text-6xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                High-Performance Unity Game Development
              </h1>
              <p className="mt-5 max-w-[620px] text-base leading-relaxed text-[#9DB0CC] md:text-lg">
                We build scalable, immersive, and cross-platform games using Unity for mobile, PC, and multiplayer
                ecosystems.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/book-strategy-call"
                  className="inline-flex h-[52px] items-center rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-7 text-sm font-semibold text-white shadow-[0_0_24px_rgba(47,128,237,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_30px_rgba(47,128,237,0.45)]"
                >
                  Start Your Unity Game Project
                </Link>
                <Link
                  to="/get-estimate"
                  className="inline-flex h-[52px] items-center rounded-xl border border-[#2F80ED] px-7 text-sm font-semibold text-[#6EB8FF] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2F80ED]/10 hover:shadow-[0_8px_24px_rgba(19,77,151,0.3)]"
                >
                  Get Project Estimate
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="unity-card overflow-hidden rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Unity game development architecture"
                className="h-[360px] w-full object-cover lg:h-[430px]"
              />
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#0E1A31] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Why Choose Unity for Game Development?
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-[#90A4C0]">Unity remains one of the most robust engines for modern interactive products.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {whyChooseUnity.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group rounded-2xl border border-white/5 bg-[#101C34] p-6 transition-all hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <item.icon className="mb-4 h-5 w-5 text-[#2F80ED]" />
                  <h3 className="mb-2 text-lg font-semibold text-[#E2E8F0]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#94A3B8]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Our Unity Game Expertise
              </h2>
              <p className="mt-3 text-[#90A4C0]">From casual mobile experiences to production multiplayer ecosystems.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {expertise.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group rounded-2xl border border-white/5 bg-[#101C34] p-6 transition-all hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Gamepad2 className="h-4 w-4 text-[#2F80ED]" />
                    <h3 className="text-base font-semibold text-[#E2E8F0]">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#94A3B8]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#0E1A31] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Our Unity Technology Stack
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {techStack.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="rounded-lg border border-white/5 bg-[#0F1B33] px-4 py-3 text-center text-sm font-medium text-[#C6D4EA] transition-all hover:border-[#2F80ED]/30 hover:shadow-md hover:shadow-[#2F80ED]/15"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Our Development Process
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {process.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-2xl border border-white/5 bg-[#101C34] p-6 transition-all hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-md border border-[#2F80ED]/40 bg-[#102547] px-2 py-1 text-xs font-semibold text-[#76BCFF]">
                      STEP {item.step}
                    </span>
                    <span className="text-4xl font-bold text-[#2A4168]">{item.step}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#E2E8F0]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#94A3B8]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#0E1A31] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Featured Gaming Projects
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group overflow-hidden rounded-2xl border border-white/5 bg-[#101C34] transition-all hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                  <div className="p-6">
                    <span className="rounded-full bg-[#11294F] px-2 py-1 text-xs text-[#6FB9FF]">{item.tag}</span>
                    <h3 className="mt-3 text-lg font-semibold text-[#E2E8F0]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">{item.desc}</p>
                    <Link to="/case-studies" className="unity-link mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#56AEFF]">
                      View Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Why TechFlux for Unity Development?
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {whyTechflux.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group rounded-2xl border border-white/5 bg-[#101C34] p-6 transition-all hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <item.icon className="mb-3 h-5 w-5 text-[#2F80ED]" />
                  <h3 className="mb-2 text-lg font-semibold text-[#E2E8F0]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#94A3B8]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#0E1A31] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/5 bg-[#162947] px-8 py-12 text-center md:px-12"
            >
              <h2 className="text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to Build Your Next Unity Game?
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-[#9AB0CC]">
                Let&apos;s discuss your game concept, timeline, and technical strategy with our Unity engineering team.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/book-strategy-call"
                  className="inline-flex h-[50px] items-center justify-center rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-8 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_28px_rgba(47,128,237,0.45)]"
                >
                  Book Strategy Call
                </Link>
                <Link
                  to="/get-estimate"
                  className="inline-flex h-[50px] items-center justify-center rounded-xl border border-[#2F80ED] px-8 text-sm font-semibold text-[#69B7FF] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2F80ED]/10 hover:shadow-[0_8px_24px_rgba(19,77,151,0.3)]"
                >
                  Get Project Estimate
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Explore Other Services
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {exploreServices.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-2xl border border-white/5 bg-[#101C34] p-6 transition-all hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <h3 className="text-base font-semibold text-[#E2E8F0]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">{item.desc}</p>
                  <Link to={item.to} className="unity-link mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#62B4FF]">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

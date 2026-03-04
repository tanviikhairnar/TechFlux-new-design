import { motion } from 'motion/react';
import {
  ArrowRight,
  Smartphone,
  Cloud,
  Code2,
  Cpu,
  Eye,
  Gamepad2,
  Globe2,
  ShieldCheck,
  TrendingUp,
  Users2,
  Wrench,
  Zap,
  Layers,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const whyChooseUnity = [
  {
    icon: Smartphone,
    title: 'Cross-Platform Support',
    desc: 'Ship one codebase across iOS, Android, PC, web, and console ecosystems.',
  },
  {
    icon: Zap,
    title: 'High-Performance Rendering',
    desc: 'Optimized visuals, lighting, and frame pacing for smooth immersive gameplay.',
  },
  {
    icon: Users2,
    title: 'Multiplayer Capability',
    desc: 'Build cooperative and competitive game modes with scalable network architecture.',
  },
  {
    icon: Layers,
    title: 'Scalable Backend Integration',
    desc: 'Connect gameplay to cloud saves, leaderboards, analytics, and live-ops tooling.',
  },
  {
    icon: Eye,
    title: 'AR/VR Compatibility',
    desc: 'Extend experiences into XR devices with native Unity workflows and tooling.',
  },
  {
    icon: Globe2,
    title: 'Global Reach',
    desc: 'Support localization, market-ready delivery, and long-term growth strategies.',
  },
];

const expertise = [
  { icon: Smartphone, title: '2D Mobile Games', desc: 'Engaging and lightweight game loops for mobile-first audiences.' },
  { icon: Gamepad2, title: '3D Action & Adventure', desc: 'Immersive real-time environments with polished controls and combat.' },
  { icon: Users2, title: 'Multiplayer Games', desc: 'Real-time co-op and PvP features with reliable sync and matchmaking.' },
  { icon: Cpu, title: 'Real-Time Strategy Games', desc: 'Large-map simulation, AI behaviors, and scalable battle systems.' },
  { icon: TrendingUp, title: 'Gamified Applications', desc: 'Game mechanics for retention, rewards, and product engagement.' },
  { icon: Eye, title: 'AR/VR Experiences', desc: 'Interactive simulations and immersive storytelling for XR platforms.' },
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
    title: 'Game Concept & Design',
    desc: 'Define game mechanics, target audience, monetization strategy, and create detailed game design documents.',
  },
  {
    step: '02',
    title: 'UI/UX & Prototyping',
    desc: 'Design intuitive interfaces, create wireframes, and build playable prototypes to validate core gameplay.',
  },
  {
    step: '03',
    title: 'Core Gameplay Development',
    desc: 'Implement game mechanics, character controllers, physics, animations, and interactive systems.',
  },
  {
    step: '04',
    title: 'Multiplayer / Backend Integration',
    desc: 'Set up networking, cloud saves, matchmaking, leaderboards, and in-app purchase systems.',
  },
  {
    step: '05',
    title: 'QA & Performance Optimization',
    desc: 'Rigorous testing across devices, performance profiling, bug fixes, and optimization for smooth gameplay.',
  },
  {
    step: '06',
    title: 'Launch & Post-Launch Support',
    desc: 'App store submission, marketing support, analytics monitoring, and ongoing updates with new content.',
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
    to: '/services/white-label-partnership',
  },
];

export default function UnityGameDevelopment() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#030914]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-18%,rgba(38,132,255,0.22),transparent_40%)]" />

        <section className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-24 pt-28 md:pb-32 md:pt-40 lg:px-5">
          <div className="grid items-center gap-12 lg:min-h-[520px] lg:grid-cols-[1.05fr_1fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="mb-6 inline-flex rounded-full border border-[#2F80ED]/35 bg-[#0A1F43] px-4 py-1 text-sm text-[#7AB9FF]">
                Unity Game Development
              </span>
              <h1 id="unity-game-development-heading" className="max-w-[560px] text-4xl font-bold leading-tight text-[#F8FAFC] sm:text-5xl md:text-6xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                High-Performance Unity Game Development
              </h1>
              <p className="mt-5 max-w-[620px] text-base leading-relaxed text-[#8A96AA] md:text-lg">
                We build scalable, immersive, and cross-platform games using Unity for mobile, PC, and multiplayer
                ecosystems.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/book-strategy-call"
                  className="inline-flex h-[52px] items-center rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-7 text-sm font-semibold text-white shadow-[0_0_24px_rgba(47,128,237,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_30px_rgba(47,128,237,0.45)]"
                >
                  Book Strategy Call
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

        <section className="border-y border-white/5 bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1320px] px-4 lg:px-5">
            <div className="mb-14 text-center">
              <h2 className="text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Why Choose Unity for Game Development?
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-sm text-[#8A96AA] md:text-[15px]">Unity remains one of the most robust engines for modern interactive products.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {whyChooseUnity.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group rounded-3xl border border-[#1D2A40]/80 bg-[#111A2D] p-10 transition-all hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1B3F73]">
                    <item.icon className="h-7 w-7 text-[#2F80ED]" />
                  </div>
                  <h3 className="mb-3 text-[18px] font-semibold leading-tight text-[#D8DEE8]">{item.title}</h3>
                  <p className="text-[14px] leading-7 text-[#8A96AA]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <div className="mb-14 text-center">
              <h2 className="text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Our Unity Game Expertise
              </h2>
              <p className="mt-3 text-sm text-[#8A96AA] md:text-[15px]">From casual mobile experiences to production multiplayer ecosystems.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {expertise.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group rounded-3xl border border-[#1D2A40]/80 bg-[#111A2D] p-10 transition-all hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <item.icon className="mb-6 h-8 w-8 text-[#2F80ED]" />
                  <h3 className="mb-3 text-[18px] font-semibold leading-tight text-[#D8DEE8]">{item.title}</h3>
                  <p className="text-[14px] leading-7 text-[#8A96AA]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <div className="mb-14 text-center">
              <h2 className="text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Our Unity Technology Stack
              </h2>
              <p className="mt-3 text-sm text-[#8A96AA] md:text-[15px]">We leverage battle-tested tools and frameworks to build scalable games.</p>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
              {techStack.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="flex h-[118px] flex-col items-center justify-center rounded-[20px] border border-[#24324C]/70 bg-[#111A2D] px-4 py-4 text-center transition-all hover:border-[#2F80ED]/35"
                >
                  <Code2 className="mx-auto mb-2.5 h-7 w-7 text-[#2F80ED]" />
                  <span className="text-[15px] font-semibold leading-tight text-[#E2E8F0]">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 bg-[#070F1F]">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">

            {/* Header */}
            <div className="mb-14 text-center">
              <h2
                className="text-3xl font-bold tracking-tight text-[#E6EDF7] sm:text-4xl md:text-[42px]"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Our Development Process
              </h2>

              <p className="mt-4 text-sm text-[#8B97AC] md:text-[16px]">
                A systematic approach to delivering high-quality Unity games from concept to launch.
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {process.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0E1628] p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                >
                  {/* Step Badge */}
                  <span className="inline-flex rounded-full bg-[#132B52] px-4 py-1 text-[12px] font-semibold tracking-wide text-[#4DA3FF]">
                    STEP {item.step.toString().padStart(2, "0")}
                  </span>

                  {/* Big Step Number */}
                  <span className="pointer-events-none absolute right-5 top-4 text-[84px] font-bold leading-none text-[#1E3A6D]/16 sm:right-6 sm:top-5 sm:text-[94px] md:text-[104px]">
                    {item.step.toString().padStart(2, "0")}
                  </span>

                  {/* Title */}
                  <h3 className="mb-3 mt-6 max-w-[90%] text-[30px] font-semibold leading-snug text-[#E6EDF7]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[16px] leading-7 text-[#8B97AC]">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        <section className="border-y border-white/5 bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <div className="mb-14 text-center">
              <h2 className="text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Featured Gaming Projects
              </h2>
              <p className="mt-3 text-sm text-[#8A96AA] md:text-[15px]">See some of our high-impact gaming case studies.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group overflow-hidden rounded-xl border border-white/5 bg-[#0F1B31] transition-all hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                  <div className="p-6">
                    <span className="rounded-full bg-[#11294F] px-2 py-1 text-xs text-[#6FB9FF]">{item.tag}</span>
                    <h3 className="mt-3 text-lg font-semibold text-[#D8DEE8]">{item.title}</h3>
                    <p className="mt-2 text-[13px] leading-6 text-[#8A96AA]">{item.desc}</p>
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
              <h2 className="text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Why Techflux for Unity Development?
              </h2>
              <p className="mt-3 text-sm text-[#8A96AA] md:text-[15px]">Trusted game engineering with performance and scale at the core.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {whyTechflux.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group rounded-xl border border-white/5 bg-[#0F1B31] p-6 transition-all hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <item.icon className="mb-3 h-5 w-5 text-[#2F80ED]" />
                  <h3 className="mb-2 text-lg font-semibold text-[#D8DEE8]">{item.title}</h3>
                  <p className="text-[13px] leading-6 text-[#8A96AA]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/5 bg-[#0D172B] px-8 py-12 text-center md:px-12"
            >
              <h2 className="text-[40px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to Build Your Next Unity Game?
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm text-[#8A96AA] md:text-[15px]">
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
              <h2 className="text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
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
                  className="group rounded-xl border border-white/5 bg-[#0F1B31] p-6 transition-all hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <h3 className="text-base font-semibold text-[#D8DEE8]">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-[#8A96AA]">{item.desc}</p>
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

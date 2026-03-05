import { motion } from 'motion/react';
import {
  Users,
  ArrowUpRight,
  Calendar,
  Truck,
  Layers,
  Repeat,
  MapPin,
  ShoppingCart,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const buildItems = [
  {
    title: 'Service Marketplace Platforms',
    desc: 'Multi-vendor systems connecting service providers with customers in real-time.',
    icon: Users,
  },
  {
    title: 'Booking Applications',
    desc: 'Scheduling, appointments, and reservations with automatic reminders.',
    icon: Calendar,
  },
  {
    title: 'Delivery Apps',
    desc: 'Real-time order tracking, route optimization, and delivery management.',
    icon: Truck,
  },
  {
    title: 'Multi-Vendor Marketplaces',
    desc: 'Platforms supporting multiple sellers with ratings and secure checkout.',
    icon: Layers,
  },
  {
    title: 'Subscription Platforms',
    desc: 'Recurring billing systems with user management and analytics.',
    icon: Repeat,
  },
  {
    title: 'Location-Based Apps',
    desc: 'GPS-enabled services with maps, geofencing, and live updates.',
    icon: MapPin,
  },
];

// technology stack tags used in screenshot
const techTags = [
  'Flutter',
  'React Native',
  'Node.js',
  'Firebase',
  'Google Maps API',
  'Socket.io',
  'PostgreSQL',
  'Redis',
  'AWS',
  'Payment Gateways',
];

// core features for on-demand platforms
const coreFeatures = [
  { title: 'Real-Time Tracking', desc: 'Live GPS tracking and status updates.' },
  { title: 'Smart Booking System', desc: 'Automated scheduling and availability management.' },
  { title: 'Multi-User Roles', desc: 'Customers, providers, and admins with tailor‑made dashboards.' },
  { title: 'Secure Payments', desc: 'Encrypted transactions with multiple gateway support.' },
  { title: 'Analytics Dashboard', desc: 'Operational insights and business reporting.' },
  { title: 'Vendor Management', desc: 'Control over providers, commissions, and ratings.' },
];

// table of solution types
const solutionTableRows = [
  {
    type: 'Booking Platform',
    time: '2-3 months',
    complexity: 'Medium',
    features: 'Scheduling + payments',
    deploy: 'Web + Mobile',
  },
  {
    type: 'Marketplace App',
    time: '3-4 months',
    complexity: 'High',
    features: 'Multi-vendor + tracking',
    deploy: 'Mobile + Admin',
  },
  {
    type: 'Delivery Platform',
    time: '3-5 months',
    complexity: 'Very High',
    features: 'Real-time + logistics',
    deploy: 'Full ecosystem',
  },
];

// typical project investment cards
const pricingCards = [
  {
    title: 'Booking Platform',
    items: [
      'Appointment scheduling',
      'Payment integration',
      'User management',
      'Mobile app',
    ],
  },
  {
    title: 'Marketplace Platform',
    items: [
      'Multi-vendor system',
      'Real-time tracking',
      'Admin dashboard',
      'Mobile apps',
    ],
  },
  {
    title: 'On-Demand Super App',
    items: [
      'Multiple services',
      'Advanced features',
      'Full ecosystem',
      'Custom integrations',
    ],
  },
];

// industries using on-demand apps
const industries = [
  'Home Services',
  'Food Delivery',
  'Transportation',
  'Healthcare',
  'Hospitality',
  'Freelance Marketplaces',
];

// example platform case study
const caseStudy = {
  title: 'Servyo – Service Marketplace',
  desc: 'Multi-service booking platform connecting clients, cleaners, and technicians with features like live booking, subscriptions, and payment gateway integration.',
  img: 'https://images.unsplash.com/photo-1621683637033-5a8de4daee2a?auto=format&fit=crop&w=1200&q=80',
};

// reasons businesses choose TechFlux
const whyItems = [
  { title: 'Real Time Technology', desc: 'Fast, responsive user experiences' },
  { title: 'Location Intelligence', desc: 'Advanced GPS and mapping features' },
  { title: 'Secure Transactions', desc: 'Protected payments and data' },
  { title: 'Quick Launch', desc: 'Get to market faster' },
  { title: 'Proven Architecture', desc: 'Battle-tested platform designs' },
];

// related service links
const relatedServices = [
  { title: 'SaaS Development', link: '/saas-development' },
  { title: 'AI Solutions', link: '/ai-solutions' },
  { title: 'E-commerce Development', link: '/e-commerce-solutions' },
  { title: 'Game Development', link: '/unity-game-development' },
  { title: 'White-Label Partnership', link: '/services/white-label-partnership' },
];



export default function OnDemandSolutions() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#030914]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-18%,rgba(47,128,237,0.24),transparent_42%)]" />

        <section className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-24 pt-28 md:pb-32 md:pt-40 lg:px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto flex min-h-[420px] w-full flex-col justify-center lg:min-h-[520px] lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex mb-6 rounded-full border border-[#2F80ED]/35 bg-[#0A1F43] px-4 py-1 text-sm text-[#7AB9FF]">
                On-Demand Applications
              </div>
              <h1
                id="on-demand-applications-heading"
                className="max-w-[820px] text-4xl font-bold leading-tight text-[#D8DEE8] sm:text-5xl md:text-6xl"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Build Scalable On-Demand Platforms
              </h1>
              <p className="mt-5 max-w-[780px] text-base leading-relaxed text-[#8A96AA] md:text-lg">
                We develop real-time booking and marketplace platforms for service businesses, delivery systems, and multi-vendor marketplaces.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-start">
                <Link
                  to="/get-estimate"
                  className="inline-flex h-[52px] items-center justify-center rounded-[10px] border border-[#2F80ED] px-8 text-sm font-semibold text-[#4CA1FF] hover:bg-[#2F80ED]/10 transition-all"
                >
                  Get Project Estimate
                </Link>
                <Link
                  to="/book-strategy-call"
                  className="inline-flex h-[52px] items-center justify-center rounded-[10px] bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-8 text-sm font-semibold text-white shadow-[0_0_22px_rgba(56,169,255,0.28)] transition-all hover:brightness-110"
                >
                  Book Strategy Call
                </Link>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden w-1/2 lg:block"
            >
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                alt="On-demand app screen"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </motion.div>
        </section>

        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                On-Demand Solutions We Build
              </h2>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {buildItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.07 }}
                  className="group rounded-2xl border border-white/5 bg-[#0C1830] p-6 transition-all duration-300 hover:border-[#2F80ED]/35 hover:shadow-[0_14px_36px_rgba(16,53,110,0.32)]"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#102548]">
                    <item.icon className="h-4 w-4 text-[#2F80ED]" />
                  </div>
                  <h3 className="mb-2 text-[15px] font-semibold leading-6 text-[#E5ECF8]">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-6 text-[#95A4BF]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* technology stack section */}
        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                On-Demand Technology Stack
              </h2>
              <p className="text-sm text-[#8A96AA] md:text-[15px]">
                We use proven technologies to build real-time, scalable platforms that handle high traffic and complex workflows.
              </p>
            </motion.div>
<div className="mx-auto flex max-w-[1400px] flex-wrap justify-center gap-4">
              {techTags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex min-h-[72px] min-w-[120px] items-center justify-center rounded-2xl border border-[#1E2D46] bg-[#121F39] px-8 py-4 text-[16px] font-semibold tracking-wide text-[#D8DEE8] transition-all hover:border-[#2F80ED]/45 hover:bg-[#152645]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* core features section */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Core On-Demand Features
              </h2>
            </motion.div>
            <div className="grid gap-4 md:grid-cols-3">
              {coreFeatures.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.06 }}
                  className="rounded-xl border border-white/5 bg-[#0F1B31] p-6"
                >
                  <h3 className="mb-2 text-lg font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-6 text-[#8A96AA]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* solutions table */}
        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Choose Your On-Demand Solution
              </h2>
            </motion.div>

            <div className="overflow-x-auto rounded-[24px] border border-[#263550] bg-[#141F36]">
              <table className="w-full min-w-[760px]">
                <thead>
                  <tr className="border-b border-[#2A3954]">
                    <th className="px-6 py-5 text-left text-xl font-semibold tracking-[-0.01em] text-[#E5ECF8]">Platform Type</th>
                    <th className="px-6 py-5 text-center text-xl font-semibold tracking-[-0.01em] text-[#E5ECF8]">Development Time</th>
                    <th className="px-6 py-5 text-center text-xl font-semibold tracking-[-0.01em] text-[#E5ECF8]">Complexity</th>
                    <th className="px-6 py-5 text-center text-xl font-semibold tracking-[-0.01em] text-[#E5ECF8]">Core Features</th>
                    <th className="px-6 py-5 text-center text-xl font-semibold tracking-[-0.01em] text-[#E5ECF8]">Deployment</th>
                  </tr>
                </thead>
                <tbody>
                  {solutionTableRows.map((row, i) => (
                    <tr key={i} className="border-b border-[#2A3954] last:border-b-0">
                      <td className="px-6 py-5 text-lg text-[#E5ECF8]">{row.type}</td>
                      <td className="px-6 py-5 text-center text-lg text-[#9AA7BF]">{row.time}</td>
                      <td className="px-6 py-5 text-center text-lg text-[#9AA7BF]">{row.complexity}</td>
                      <td className="px-6 py-5 text-center text-lg text-[#9AA7BF]">{row.features}</td>
                      <td className="px-6 py-5 text-center text-lg text-[#9AA7BF]">{row.deploy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* pricing cards */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Typical Project Investment
              </h2>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-3">
              {pricingCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-white/5 bg-[#0F1B31] p-7"
                >
                  <h3 className="mb-2 text-lg font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {card.title}
                  </h3>
                  <ul className="space-y-2">
                    {card.items.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[13px] text-[#8A96AA]">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#2F80ED]" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* industries grid */}
        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Industries Using On-Demand Apps
              </h2>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-6">
              {industries.map((ind, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-[#0C1527] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#2F80ED]/30 bg-[#0F2A5F] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_18px_rgba(90,170,255,0.35)]">
                    <ShoppingCart className="h-5 w-5 text-[#2F80ED] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(117,192,255,0.55)]" />
                  </div>
                  <p className="text-sm font-medium text-[#D8DEE8]">{ind}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* case study */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                On-Demand Platform We've Built
              </h2>
            </motion.div>
            <div className="rounded-xl border border-white/5 bg-[#0F1B31] overflow-hidden">
              <div className="grid md:grid-cols-2">
                <img src={caseStudy.img} alt={caseStudy.title} className="h-64 object-cover" />
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="mb-4 text-2xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {caseStudy.title}
                  </h3>
                  <p className="mb-6 text-[13px] leading-6 text-[#8A96AA]">{caseStudy.desc}</p>
                  <Link to="/case-studies/servyo" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4CA1FF]">
                    View Case Study <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* why choose TechFlux */}
        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Why Businesses Choose TechFlux
              </h2>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-3">
              {whyItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl border border-white/5 bg-[#0C1527] p-6"
                >
                  <h3 className="mb-2 text-lg font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-6 text-[#8A96AA]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* related services */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Explore Related Services
              </h2>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {relatedServices.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.link}
                    className="block rounded-2xl border border-white/5 bg-[#0C1830] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/35 hover:bg-[#112241] hover:shadow-[0_14px_36px_rgba(16,53,110,0.32)]"
                  >
                    <p className="font-semibold text-[#D8DEE8]">{item.title}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 pt-8">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/5 bg-[#0D172B] px-8 py-12 text-center md:px-12"
            >
              <h2 className="mb-4 text-[40px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to Build Your On-Demand Platform?
              </h2>
              <p className="mx-auto mb-8 max-w-[760px] text-sm text-[#8A96AA] md:text-[15px]">
                Let&apos;s discuss your marketplace idea and create a scalable solution that connects users in
                real-time.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/book-strategy-call"
                  className="rounded-[10px] bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-8 py-3 text-sm font-medium text-white"
                >
                  Book Strategy Call
                </Link>
                <Link
                  to="/get-estimate"
                  className="rounded-[10px] border border-[#2F80ED] px-8 py-3 text-sm font-medium text-[#4CA1FF] hover:bg-[#2F80ED]/10"
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



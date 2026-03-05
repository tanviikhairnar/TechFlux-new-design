import { motion } from 'motion/react';
import {
  BarChart3,
  Building2,
  CheckCircle2,
  Cloud,
  Cog,
  CreditCard,
  Database,
  DollarSign,
  GraduationCap,
  Heart,
  LayoutDashboard,
  Lock,
  Package,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
  Target,
  Users,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const saasSolutions = [
  {
    icon: Rocket,
    title: 'SaaS MVP Development',
    desc: 'Launch your idea fast with a validated MVP focused on core workflows and early traction.',
  },
  {
    icon: Cloud,
    title: 'Multi-Tenant SaaS Platform',
    desc: 'Scalable tenant architecture with clean data isolation and shared cloud infrastructure.',
  },
  {
    icon: CreditCard,
    title: 'Subscription Platform',
    desc: 'Recurring billing, plan upgrades, invoicing, trials, and payment gateway integration.',
  },
  {
    icon: LayoutDashboard,
    title: 'Admin & Analytics Dashboards',
    desc: 'Operational dashboards with business metrics, tenant monitoring, and reporting tools.',
  },
  {
    icon: Workflow,
    title: 'B2B SaaS Products',
    desc: 'Complex workflow products built for teams, approvals, integrations, and role-based access.',
  },
  {
    icon: Building2,
    title: 'Enterprise SaaS Systems',
    desc: 'Enterprise-grade architecture with compliance, SSO, and long-term maintainability.',
  },
];

const stackItems = [
  'React',
  'Next.js',
  'Node.js',
  'Laravel',
  'Python',
  'Flutter',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'Stripe Billing',
];

const essentialFeatures = [
  {
    icon: Database,
    title: 'Subscription Billing',
    desc: 'Flexible plans, trial periods, upgrades, downgrades, and automated renewals.',
  },
  {
    icon: Cloud,
    title: 'Cloud-Based Access',
    desc: 'Secure SaaS access from anywhere with stable uptime and environment isolation.',
  },
  {
    icon: Settings2,
    title: 'API Integration',
    desc: 'Connect with third-party tools, payment providers, CRMs, and internal systems.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    desc: 'Real-time data insights for revenue, usage trends, retention, and user behavior.',
  },
  {
    icon: Users,
    title: 'User Management',
    desc: 'Role-based permissions, team accounts, onboarding, and secure access controls.',
  },
  {
    icon: Server,
    title: 'Multi-Tenant Architecture',
    desc: 'Optimized infrastructure supporting multiple clients on one scalable platform.',
  },
];

const pricingCards = [
  {
    title: 'SaaS MVP Development',
    price: '$5,000',
    bullets: ['Core feature set', 'User authentication', 'Admin dashboard', 'Payment integration'],
  },
  {
    title: 'Custom SaaS Platform',
    price: '$10,000',
    bullets: ['Custom features', 'Multi-tenant setup', 'Advanced analytics', 'Third-party APIs'],
  },
  {
    title: 'Enterprise SaaS Platform',
    price: '$20,000',
    bullets: ['Enterprise features', 'Custom integrations', 'Advanced security', 'Dedicated support'],
  },
];

const industries = [
  { icon: Heart, label: 'Healthcare', tone: 'bg-[#412246] text-[#D07AB9]' },
  { icon: GraduationCap, label: 'EdTech', tone: 'bg-[#154366] text-[#67B7FF]' },
  { icon: DollarSign, label: 'Finance', tone: 'bg-[#125340] text-[#5DD39D]' },
  { icon: Package, label: 'Logistics', tone: 'bg-[#5B3C1A] text-[#E0B25E]' },
  { icon: Target, label: 'Marketplaces', tone: 'bg-[#492960] text-[#C88DFF]' },
  { icon: Cog, label: 'Productivity Tools', tone: 'bg-[#273A74] text-[#90AEFF]' },
];

const whyTechflux = [
  {
    icon: Cloud,
    title: 'Scalable Architecture',
    desc: 'Built to grow from MVP stage to enterprise usage without major rebuilds.',
  },
  {
    icon: Rocket,
    title: 'Fast Development',
    desc: 'Agile delivery cycles with rapid iterations and transparent progress.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    desc: 'Security-first development with role controls and protected data flows.',
  },
  {
    icon: BarChart3,
    title: 'Performance Optimized',
    desc: 'Optimized backend and frontend performance for real-world production workloads.',
  },
  {
    icon: Lock,
    title: 'Long-Term Support',
    desc: 'Ongoing maintenance and feature evolution for sustained product growth.',
  },
];

const relatedServices = [
  { title: 'AI Solutions', to: '/ai-solutions' },
  { title: 'On-Demand Applications', to: '/on-demand-solutions' },
  { title: 'E-commerce Development', to: '/e-commerce-solutions' },
  { title: 'Game Development', to: '/unity-game-development' },
  { title: 'White Label Partnership', to: '/become-partner' },
];

export default function SaaSDevelopment() {
  const ctaMailto = 'mailto:tanvikhairnar03@gmail.com?subject=Techflux%20Inquiry';

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#040B1B]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-18%,rgba(47,128,237,0.24),transparent_42%)]" />

        <section className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-24 pt-28 md:pb-32 md:pt-40 lg:px-5">
          <div className="grid items-center gap-12 lg:min-h-[520px] md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <h1
                className="max-w-[520px] text-4xl font-bold leading-tight text-[#E5ECF8] md:text-5xl"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Scalable SaaS Product Development
              </h1>
              <p className="mt-4 max-w-[550px] text-sm leading-7 text-[#9AA9C4] md:text-base">
                We design and build robust SaaS platforms with subscription systems, multi-tenant architecture, and
                secure admin workflows.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={ctaMailto}
                  className="rounded-[10px] bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(56,169,255,0.28)] transition-all hover:brightness-110"
                >
                  Get Project Estimate
                </a>
                <a
                  href={ctaMailto}
                  className="rounded-[10px] border border-[#2F80ED]/45 bg-[#112241] px-5 py-3 text-sm font-semibold text-[#DDE7F9] transition-all hover:bg-[#18325D]"
                >
                  Book Strategy Call
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#0D1B35]"
            >
              <img
                src="https://images.unsplash.com/photo-1551281044-8ca9f58b3b4c?auto=format&fit=crop&w=1400&q=80"
                alt="SaaS analytics dashboard"
                className="h-[360px] w-full object-cover lg:h-[430px]"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-9 text-center text-3xl font-semibold text-[#E5ECF8]" style={{ fontFamily: 'Sora, sans-serif' }}>
              SaaS Solutions We Build
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {saasSolutions.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-2xl border border-white/5 bg-[#0C1830] p-6 transition-all duration-300 hover:border-[#2F80ED]/35 hover:shadow-[0_14px_36px_rgba(16,53,110,0.32)]"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#102548]">
                    <item.icon className="h-4 w-4 text-[#2F80ED]" />
                  </div>
                  <h3 className="mb-2 text-[15px] font-semibold leading-6 text-[#E5ECF8]">{item.title}</h3>
                  <p className="text-[13px] leading-6 text-[#95A4BF]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#081427] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-3 text-center text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
              SaaS Technology Stack
            </h2>
            <p className="mx-auto mb-10 max-w-[760px] text-center text-sm text-[#8A96AA] md:text-[15px]">
              We leverage modern technologies to build scalable, maintainable, and high-performance SaaS platforms.
            </p>
            <div className="mb-8 h-px w-full bg-white/10" />
            <div className="mx-auto flex max-w-[1400px] flex-wrap justify-center gap-4">
              {stackItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex min-h-[72px] min-w-[120px] items-center justify-center rounded-2xl border border-[#1E2D46] bg-[#121F39] px-8 py-4 text-[16px] font-semibold tracking-wide text-[#D8DEE8] transition-all hover:border-[#2F80ED]/45 hover:bg-[#152645]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-9 text-center text-3xl font-semibold text-[#E5ECF8]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Essential SaaS Features
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {essentialFeatures.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-2xl border border-white/5 bg-[#0C1830] p-6 transition-all duration-300 hover:border-[#2F80ED]/35 hover:shadow-[0_14px_36px_rgba(16,53,110,0.32)]"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#102548]">
                    <item.icon className="h-4 w-4 text-[#2F80ED]" />
                  </div>
                  <h3 className="mb-2 text-[15px] font-semibold leading-6 text-[#E5ECF8]">{item.title}</h3>
                  <p className="text-[13px] leading-6 text-[#95A4BF]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#081427] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-8 text-center text-3xl font-semibold text-[#E5ECF8]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Choose Your SaaS Solution
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#0C1830]">
              <table className="w-full min-w-[760px]">
                <thead>
                  <tr className="border-b border-white/5">
                    {['Solution Type', 'Development Time', 'Scalability', 'Best For', 'Maintenance'].map((head) => (
                      <th key={head} className="px-5 py-4 text-left text-xs font-semibold tracking-wide text-[#D5E0F3]">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['MVP SaaS Platform', '2-3 months', 'Medium', 'Core feature launch', 'Standard'],
                    ['Enterprise SaaS Platform', '4-6 months', 'Very High', 'Mid-size teams', 'Premium'],
                    ['Marketplace SaaS', '3-5 months', 'High', 'Multi-vendor platforms', 'Enterprise'],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-white/5">
                      {row.map((cell) => (
                        <td key={cell} className="px-5 py-4 text-sm text-[#9FB0CF]">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-9 text-center text-3xl font-semibold text-[#E5ECF8]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Typical Project Investment
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {pricingCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-[#1D2B44] bg-[#101B33] p-8 md:p-10"
                >
                  <p className="text-[20px] font-semibold text-[#E7EDF9]">{card.title}</p>
                  <p className="mt-4 text-sm text-[#95A4BF]">Starting from</p>
                  <p className="text-[56px] font-bold leading-[1.1] text-[#2F80ED] md:text-[58px]">
                    {card.price}
                  </p>
                  <ul className="mt-7 space-y-3.5">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3 text-[15px] text-[#9EABC2]">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#2F80ED]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-[#9AA7BF] md:text-[15px]">
              * Final pricing depends on features, integrations, and scalability requirements.
            </p>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#081427] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-9 text-center text-3xl font-semibold text-[#E5ECF8]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Industries Using Our SaaS Solutions
            </h2>
            <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-6">
              {industries.map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex min-h-[200px] flex-col items-center justify-center rounded-2xl border border-[#1E2D45] bg-[#111D36] p-7 text-center"
                >
                  <div className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl ${item.tone}`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <p className="max-w-[150px] text-[17px] font-semibold leading-snug text-[#E3EAF8]">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-8 text-center text-3xl font-semibold text-[#E5ECF8]" style={{ fontFamily: 'Sora, sans-serif' }}>
              SaaS Platform We&apos;ve Built
            </h2>
            <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#0C1830]">
              <div className="grid md:grid-cols-[1.05fr_1fr]">
                <img
                  src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=1200&q=80"
                  alt="Leave Certificate SaaS platform"
                  className="h-[280px] w-full object-cover md:h-[330px]"
                />
                <div className="p-7 md:p-8">
                  <span className="inline-flex rounded-full border border-[#2F80ED]/40 bg-[#102548] px-3 py-1 text-xs text-[#7AB9FF]">
                    Case Study
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-[#E5ECF8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    Leave Certificate - SaaS Platform
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#95A4BF]">
                    Digital document management platform for educational institutions with secure records, multi-user
                    workflows, and automated certificate generation.
                  </p>
                  <Link to="/leave-certificate-case-study" className="mt-5 inline-block text-sm font-semibold text-[#4FB1FF] hover:text-[#79C5FF]">
                    View Case Study
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#081427] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-9 text-center text-3xl font-semibold text-[#E5ECF8]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Why Businesses Choose TechFlux
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {whyTechflux.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl border border-[#1E2D45] bg-[#111D36] p-8 transition-all duration-300 hover:border-[#2F80ED]/35"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center">
                    <item.icon className="h-10 w-10 text-[#2F80ED]" />
                  </div>
                  <h3 className="mb-3 text-[17px] font-semibold leading-tight text-[#E5ECF8]">{item.title}</h3>
                  <p className="text-[15px] leading-7 text-[#95A4BF]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-8 text-center text-3xl font-semibold text-[#E5ECF8]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Explore Related Services
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
              {relatedServices.map((service) => (
                <motion.div key={service.title} whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                  <Link
                    to={service.to}
                    className="flex min-h-[58px] items-center justify-center rounded-lg border border-white/5 bg-[#0C1830] px-4 py-3 text-center text-sm font-medium text-[#D7E2F6] transition-all duration-300 hover:border-[#2F80ED]/35 hover:bg-[#112241] hover:text-white"
                  >
                    {service.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 pt-6 md:pb-24 md:pt-8">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <div className="rounded-2xl border border-[#24406B] bg-[linear-gradient(135deg,#16345D_0%,#223C67_55%,#2A4775_100%)] px-8 py-12 text-center">
              <h2 className="text-3xl font-semibold text-white md:text-4xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to Build Your SaaS Platform?
              </h2>
              <p className="mx-auto mb-8 mt-4 max-w-[700px] text-sm text-[#D0DDF1] md:text-base">
                Let&apos;s discuss your SaaS product vision and build a roadmap for launch and long-term growth.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={ctaMailto}
                  className="rounded-[10px] bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_16px_rgba(56,169,255,0.3)]"
                >
                  Get Project Estimate
                </a>
                <a
                  href={ctaMailto}
                  className="rounded-[10px] border border-[#8FBDF3]/40 bg-[#223F68] px-6 py-3 text-sm font-semibold text-[#E6F0FF]"
                >
                  Book Strategy Call
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

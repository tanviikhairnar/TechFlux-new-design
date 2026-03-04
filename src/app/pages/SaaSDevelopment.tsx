import { motion } from 'motion/react';
import {
  Shield,
  Zap,
  Database,
  Code2,
  TrendingUp,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const challengePoints = [
  'Scaling infrastructure as users grow',
  'Managing complex subscription and billing logic',
  'Ensuring data security and compliance (GDPR, SOC 2)',
  'Building intuitive admin and user dashboards',
  'Integrating with third-party APIs and tools',
];

const buildItems = [
  {
    title: 'Multi-Tenant Architecture',
    desc: 'Efficient data isolation for each customer while sharing infrastructure for cost optimization.',
  },
  {
    title: 'Subscription Management',
    desc: 'Flexible billing plans, trial periods, upgrade/downgrade flows, and automated invoicing.',
  },
  {
    title: 'Admin Dashboard',
    desc: 'Comprehensive control panel for managing users, monitoring metrics, and system configuration.',
  },
  {
    title: 'User Management',
    desc: 'Role-based permissions, team collaboration, SSO integration, and user provisioning.',
  },
  {
    title: 'Analytics & Reporting',
    desc: 'Real-time dashboards, custom reports, usage tracking, and business intelligence.',
  },
  {
    title: 'API Integration',
    desc: 'RESTful APIs, webhooks, third-party integrations, and developer documentation.',
  },
  {
    title: 'Payment Processing',
    desc: 'Stripe, PayPal integration, automatic billing, invoice generation, and tax handling.',
  },
  {
    title: 'Notification System',
    desc: 'Email, SMS, push notifications, in-app alerts, and customizable templates.',
  },
];

const approachCards = [
  {
    icon: Database,
    title: 'Scalable Architecture',
    desc: 'Multi-tenant database design, microservices architecture, and cloud-native infrastructure that grows with your business.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'Role-based access control, data encryption, OWASP integration, and compliance with industry standards.',
  },
  {
    icon: Zap,
    title: 'Fast Development',
    desc: 'Agile methodology with bi-weekly sprints, continuous deployment, and rapid iteration based on user feedback.',
  },
];

const techStack = [
  { title: 'Frontend', stack: 'React, Next.js, TypeScript' },
  { title: 'Backend', stack: 'Node.js, Python, PostgreSQL' },
  { title: 'Cloud', stack: 'AWS, Azure, Google Cloud' },
  { title: 'DevOps', stack: 'Docker, Kubernetes, CI/CD' },
];

export default function SaaSDevelopment() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#030914]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-18%,rgba(38,132,255,0.22),transparent_40%)]" />

        <section className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-24 pt-28 text-center md:pb-32 md:pt-40 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mx-auto flex min-h-[420px] w-full flex-col items-center justify-center lg:min-h-[520px]">
              <div className="mx-auto mb-6 inline-flex rounded-full border border-[#2F80ED]/35 bg-[#0A1F43] px-4 py-1 text-sm text-[#7AB9FF]">
                SaaS Development
              </div>
              <h1
                id="saas-development-heading"
                className="mx-auto max-w-[820px] text-4xl font-bold leading-tight text-[#D8DEE8] sm:text-5xl md:text-6xl"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Build Scalable SaaS Platforms That Drive Growth
              </h1>
              <p className="mx-auto mt-5 max-w-[780px] text-base leading-relaxed text-[#8A96AA] md:text-lg">
                From MVP to enterprise scale, we architect and develop software-as-a-service platforms with robust
                subscription management, multi-tenant architecture, and enterprise-grade security.
              </p>
              <Link
                to="/book-strategy-call"
                className="mt-8 inline-flex h-[52px] items-center rounded-[10px] bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-8 text-sm font-semibold text-white shadow-[0_0_22px_rgba(56,169,255,0.28)] transition-all hover:brightness-110"
              >
                Book Strategy Call
              </Link>
          </motion.div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                SaaS Solutions We Build
              </h2>
              <p className="text-sm text-[#8A96AA] md:text-[15px]">Complete SaaS platforms designed for scalability, security, and rapid growth.</p>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'SaaS MVP Development', desc: 'Launch your SaaS concept quickly with a validated MVP that proves market demand.' },
                { title: 'Multi-Tenant Platforms', desc: 'Efficient data isolation and shared infrastructure for cost-optimized scaling.' },
                { title: 'Subscription & Billing', desc: 'Flexible billing plans, automated invoicing, trial management, and payment processing.' },
                { title: 'Admin & Analytics', desc: 'Comprehensive dashboards for system management, reporting, and business intelligence.' },
                { title: 'User Management & SSO', desc: 'Role-based permissions, team collaboration, and enterprise authentication.' },
                { title: 'API & Integrations', desc: 'RESTful APIs, webhooks, third-party integrations, and developer documentation.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl border border-white/5 bg-[#0F1B31] p-6 hover:border-[#2F80ED]/30 transition-all"
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

        <section className="border-y border-white/5 bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                SaaS Technology Stack
              </h2>
              <p className="text-sm text-[#8A96AA] md:text-[15px]">
                We use battle-tested technologies that ensure reliability, performance, and scalability.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {techStack.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl border border-white/5 bg-[#0C1527] p-6 text-center"
                >
                  <Code2 className="mx-auto mb-4 h-5 w-5 text-[#2F80ED]" />
                  <h3 className="mb-1 text-[15px] font-semibold text-[#D8DEE8]">{item.title}</h3>
                  <p className="text-xs text-[#8A96AA]">{item.stack}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Essential SaaS Features
              </h2>
              <p className="text-sm text-[#8A96AA] md:text-[15px]">Core capabilities we build into every enterprise SaaS platform.</p>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-3">
              {buildItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.06 }}
                  className="rounded-xl border border-white/5 bg-[#0F1B31] p-5"
                >
                  <div className="mb-2 flex items-center gap-2.5">
                    <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#2F80ED]/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2F80ED]" />
                    </span>
                    <h3 className="text-[15px] font-semibold text-[#D8DEE8]">{item.title}</h3>
                  </div>
                  <p className="text-[13px] leading-6 text-[#8A96AA]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Choose Your SaaS Solution
              </h2>
            </motion.div>

            <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#0F1B31]">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#D8DEE8]">Solution Type</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-[#D8DEE8]">MVP Development</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-[#D8DEE8]">Startup SaaS</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-[#D8DEE8]">Enterprise SaaS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Core Features', mvp: '✓', startup: '✓', enterprise: '✓' },
                    { feature: 'Multi-Tenant', mvp: '—', startup: '✓', enterprise: '✓' },
                    { feature: 'Subscription Billing', mvp: '—', startup: '✓', enterprise: '✓' },
                    { feature: 'Admin Dashboard', mvp: 'Basic', startup: '✓', enterprise: '✓' },
                    { feature: 'API & Webhooks', mvp: '—', startup: 'Basic', enterprise: '✓' },
                    { feature: 'SSO/Security', mvp: 'Basic', startup: 'Standard', enterprise: 'Enterprise' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="px-6 py-4 text-sm text-[#D8DEE8]">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-sm text-[#8A96AA]">{row.mvp}</td>
                      <td className="px-6 py-4 text-center text-sm text-[#8A96AA]">{row.startup}</td>
                      <td className="px-6 py-4 text-center text-sm text-[#8A96AA]">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Typical Project Investment
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: 'SaaS MVP Development', price: '$15,000', features: ['Core workflow', 'Basic dashboard', 'User authentication', 'Payment processing'] },
                { title: 'Custom SaaS Platform', price: '$50,000', features: ['Multi-tenant', 'Advanced analytics', 'API integration', 'Enterprise security'] },
                { title: 'Enterprise SaaS Solution', price: '$100,000+', features: ['Full compliance', 'SSO integration', 'Custom workflows', 'Dedicated support'] },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-white/5 bg-[#0F1B31] p-7"
                >
                  <h3 className="mb-2 text-lg font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="mb-5 text-2xl font-bold text-[#2F80ED]">{item.price}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[13px] text-[#8A96AA]">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#2F80ED]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Industries Using Our SaaS Solutions
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-6">
              {['Healthcare', 'FinTech', 'Finance', 'Logistics', 'Manufacturing', 'Productivity'].map((industry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-[#0C1527] p-6 text-center"
                >
                  <div className="h-12 w-12 rounded-lg border border-[#2F80ED]/30 bg-[#0F2A5F] flex items-center justify-center">
                    <Code2 className="h-5 w-5 text-[#2F80ED]" />
                  </div>
                  <p className="text-sm font-medium text-[#D8DEE8]">{industry}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                SaaS Platform We've Built
              </h2>
            </motion.div>

            <div className="rounded-xl border border-white/5 bg-[#0F1B31] overflow-hidden">
              <div className="grid md:grid-cols-2">
                <img src="https://images.unsplash.com/photo-1493857671505-72967e2ceb2d?auto=format&fit=crop&w=600&q=80" alt="Leave Certificate Platform" className="h-64 object-cover" />
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="mb-4 text-2xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    Leave Certificate - SaaS Platform
                  </h3>
                  <p className="mb-6 text-[13px] leading-6 text-[#8A96AA]">
                    Built a comprehensive leave management SaaS serving hundreds of companies, featuring automated leave tracking, approval workflows, and employee self-service portals with role-based access control.
                  </p>
                  <div className="flex gap-3">
                    <div>
                      <p className="text-xs text-[#56A9F5] font-semibold">Companies</p>
                      <p className="text-sm font-semibold text-[#D8DEE8]">500+</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#56A9F5] font-semibold">Active Users</p>
                      <p className="text-sm font-semibold text-[#D8DEE8]">50K+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Why Businesses Choose TechFlux
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: 'Scalable Architecture', desc: 'Built from day one to scale from 100 to 100K+ users without rebuilds.' },
                { title: 'Fast Development', desc: 'Proven frameworks and modular code enable rapid iterations and quick time-to-market.' },
                { title: 'Enterprise Security', desc: 'SOC 2 ready, data encryption, compliance standards, and role-based access control.' },
                { title: 'Performance Optimized', desc: 'Optimized databases, caching strategies, and CDN integration for sub-second responses.' },
                { title: 'Long-Term Support', desc: 'Ongoing maintenance, feature roadmaps, and dedicated technical support included.' },
                { title: 'Transparent Pricing', desc: 'No hidden costs. Clear cost projections and economic viability from the start.' },
              ].map((item, i) => (
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

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Explore Related Services
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {[
                { title: 'AI Solutions', link: '/ai-solutions' },
                { title: 'On-Demand Solutions', link: '/on-demand-solutions' },
                { title: 'E-Commerce Solutions', link: '/e-commerce-solutions' },
                { title: 'White-Label Partnership', link: '/services/white-label-partnership' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.link}
                    className="block rounded-xl border border-white/5 bg-[#0F1B31] p-6 text-center hover:border-[#2F80ED]/30 transition-all"
                  >
                    <p className="font-semibold text-[#D8DEE8]">{item.title}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/5 bg-[#0D172B] px-8 py-12 text-center md:px-12"
            >
              <h2 className="mb-4 text-[40px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to Build Your SaaS Platform?
              </h2>
              <p className="mx-auto mb-8 max-w-[760px] text-sm text-[#8A96AA] md:text-[15px]">
                Let&apos;s discuss your vision and create a roadmap to launch your SaaS product successfully.
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

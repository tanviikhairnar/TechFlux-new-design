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

        <section className="border-y border-white/5 bg-[#081327] py-20">
          <div className="mx-auto grid w-full max-w-[1260px] gap-8 px-4 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="mb-6 text-[42px] font-semibold leading-tight text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                The Challenge
              </h2>
              <p className="mb-5 max-w-[560px] text-sm leading-7 text-[#8A96AA] md:text-[15px]">
                Building a SaaS platform requires more than coding features. You need scalable architecture that can
                handle growth, robust security to protect user data, seamless billing integration, and an intuitive
                user experience that drives adoption.
              </p>
              <p className="max-w-[560px] text-sm leading-7 text-[#8A96AA] md:text-[15px]">
                Many startups struggle with technical debt, performance issues, and costly rewrites because they
                don&apos;t architect for scale from day one. We solve these problems by building it right the first
                time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-[#0F1D34] p-7"
            >
              <h3 className="mb-6 text-[18px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Common SaaS Development Challenges
              </h3>
              <div className="space-y-3.5">
                {challengePoints.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-[#95A2B6]">
                    <span className="mt-[7px] inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-[#2F80ED]/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2F80ED]" />
                    </span>
                    <span className="text-[13px] leading-6 md:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Our SaaS Development Approach
              </h2>
              <p className="text-sm text-[#8A96AA] md:text-[15px]">We build SaaS platforms that are secure, scalable, and designed for long-term success.</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {approachCards.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-white/5 bg-[#0C1527] p-6"
                >
                  <item.icon className="mb-4 h-5 w-5 text-[#2F80ED]" />
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
                What We Build Into Every SaaS Platform
              </h2>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              {buildItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.06 }}
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

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Our SaaS Tech Stack
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

        <section className="border-y border-white/5 bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                SaaS Success Stories
              </h2>
              <p className="text-sm text-[#8A96AA] md:text-[15px]">See how we&apos;ve helped companies build and scale their SaaS platforms.</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    resultIcon: TrendingUp,
                    img: 'https://images.unsplash.com/photo-1551281044-8b95b7f3a1c3?auto=format&fit=crop&w=1200&q=80',
                    title: 'Analytics Dashboard Platform',
                    desc: 'Built a multi-tenant analytics SaaS serving 10,000+ users with real-time data processing and custom reporting.',
                    result: '300% revenue growth in 12 months',
                  },
                  {
                    resultIcon: Users,
                    img: 'https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?auto=format&fit=crop&w=1200&q=80',
                    title: 'Project Management SaaS',
                    desc: 'Developed a collaborative project management platform with real-time updates, team chat, and workflow automation.',
                    result: '15,000+ active teams',
                  },
                ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group overflow-hidden rounded-xl border border-white/5 bg-[#0F1B31] transition-all hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <img src={item.img} alt={item.title} className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="mb-3 text-[13px] leading-6 text-[#8A96AA]">{item.desc}</p>
                    <p className="flex items-center gap-2 text-[13px] font-medium text-[#2F80ED]">
                      <item.resultIcon className="h-4 w-4 shrink-0" />
                      <span>{item.result}</span>
                    </p>
                  </div>
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

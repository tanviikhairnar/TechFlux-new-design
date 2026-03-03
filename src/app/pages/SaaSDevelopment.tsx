import { motion } from 'motion/react';
import {
  Shield,
  Zap,
  Database,
  CheckCircle2,
  Code2,
  Server,
  Cloud,
  Wrench,
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

export default function SaaSDevelopment() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.14),transparent_42%)]" />

        <section className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-20 pt-28 text-center md:pb-24 md:pt-32 lg:px-5">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mx-auto mb-6 inline-flex rounded-full border border-[#2F80ED]/40 bg-[#0C2146] px-4 py-1 text-sm text-[#72B5FF]">
              SaaS Development
            </div>
            <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold leading-tight text-[#E5E7EB] sm:text-5xl md:text-6xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              Build Scalable SaaS Platforms That Drive Growth
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-[#94A3B8]">
              From MVP to enterprise scale, we architect and develop software-as-a-service platforms with robust
              subscription management, multi-tenant architecture, and enterprise-grade security.
            </p>
            <Link
              to="/book-strategy-call"
              className="inline-flex rounded-xl bg-gradient-to-r from-[#38A9FF] to-[#2B7BDF] px-8 py-4 text-base font-semibold text-white shadow-[0_0_24px_rgba(56,169,255,0.35)] transition-all hover:brightness-110"
            >
              Book Strategy Call
            </Link>
          </motion.div>
        </section>

        <section className="border-y border-white/5 bg-[#0E1A31] py-20">
          <div className="mx-auto grid w-full max-w-[1260px] gap-8 px-4 lg:grid-cols-2 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="mb-6 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                The Challenge
              </h2>
              <p className="mb-5 text-base leading-relaxed text-[#94A3B8]">
                Building a SaaS platform requires more than coding features. You need scalable architecture that can
                handle growth, robust security to protect user data, seamless billing integration, and an intuitive
                user experience that drives adoption.
              </p>
              <p className="text-base leading-relaxed text-[#94A3B8]">
                Many startups struggle with technical debt, performance issues, and costly rewrites because they
                don&apos;t architect for scale from day one. We solve these problems by building it right the first
                time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-[#15233E] p-6"
            >
              <h3 className="mb-5 text-xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Common SaaS Development Challenges
              </h3>
              <div className="space-y-3">
                {challengePoints.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-[#9FB2CD]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2F80ED]" />
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Our SaaS Development Approach
              </h2>
              <p className="text-[#94A3B8]">We build SaaS platforms that are secure, scalable, and designed for long-term success.</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
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
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-white/5 bg-[#0F1B33] p-6"
                >
                  <item.icon className="mb-4 h-6 w-6 text-[#2F80ED]" />
                  <h3 className="mb-3 text-xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#94A3B8]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#0E1A31] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
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
                  className="rounded-xl border border-white/5 bg-[#111D35] p-5"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#2F80ED]" />
                    <h3 className="text-base font-semibold text-[#E5E7EB]">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#94A3B8]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Our SaaS Tech Stack
              </h2>
              <p className="text-[#94A3B8]">
                We use battle-tested technologies that ensure reliability, performance, and scalability.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {[
                { icon: Code2, title: 'Frontend', stack: 'React, Next.js, TypeScript' },
                { icon: Server, title: 'Backend', stack: 'Node.js, Python, PostgreSQL' },
                { icon: Cloud, title: 'Cloud', stack: 'AWS, Azure, Google Cloud' },
                { icon: Wrench, title: 'DevOps', stack: 'Docker, Kubernetes, CI/CD' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl border border-white/5 bg-[#0F1B33] p-6 text-center"
                >
                  <item.icon className="mx-auto mb-4 h-5 w-5 text-[#2F80ED]" />
                  <h3 className="mb-1 text-base font-semibold text-[#E5E7EB]">{item.title}</h3>
                  <p className="text-xs text-[#94A3B8]">{item.stack}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#0E1A31] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                SaaS Success Stories
              </h2>
              <p className="text-[#94A3B8]">See how we&apos;ve helped companies build and scale their SaaS platforms.</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  img: 'https://images.unsplash.com/photo-1551281044-8b95b7f3a1c3?auto=format&fit=crop&w=1200&q=80',
                  title: 'Analytics Dashboard Platform',
                  desc: 'Built a multi-tenant analytics SaaS serving 10,000+ users with real-time data processing and custom reporting.',
                  result: '300% revenue growth in 12 months',
                },
                {
                  img: 'https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?auto=format&fit=crop&w=1200&q=80',
                  title: 'Project Management SaaS',
                  desc: 'Developed a collaborative project management platform with real-time updates, team chat, and workflow automation.',
                  result: '2.5x team productivity increase',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group overflow-hidden rounded-2xl border border-white/5 bg-[#101C34] transition-all hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <img src={item.img} alt={item.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="mb-3 text-sm leading-relaxed text-[#94A3B8]">{item.desc}</p>
                    <p className="text-sm font-medium text-[#2F80ED]">{item.result}</p>
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
              className="rounded-3xl border border-white/5 bg-[#0F1A31] px-8 py-12 text-center md:px-12"
            >
              <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to Build Your SaaS Platform?
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-[#94A3B8]">
                Let&apos;s discuss your vision and create a roadmap to launch your SaaS product successfully.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/book-strategy-call"
                  className="rounded-xl bg-gradient-to-r from-[#38A9FF] to-[#2B7BDF] px-8 py-3 text-sm font-semibold text-white"
                >
                  Book Strategy Call
                </Link>
                <Link
                  to="/get-estimate"
                  className="rounded-xl border border-[#2F80ED] px-8 py-3 text-sm font-semibold text-[#2F80ED] hover:bg-[#2F80ED]/10"
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

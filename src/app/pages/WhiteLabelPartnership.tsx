import { motion } from 'motion/react';
import { CheckCircle2, DollarSign, Shield, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

const perfectFor = [
  {
    icon: Users,
    title: 'Digital Agencies',
    text: 'Offer full-stack development without hiring developers',
  },
  {
    icon: ShieldCheck,
    title: 'Consultants',
    text: 'Expand your service offerings with technical expertise',
  },
  {
    icon: DollarSign,
    title: 'Resellers',
    text: 'Create recurring revenue streams with SaaS products',
  },
];

const steps = [
  {
    number: '01',
    title: 'You Find Clients',
    text: 'Focus on sales and client relationships',
  },
  {
    number: '02',
    title: 'We Build Solutions',
    text: 'Our team handles all development work',
  },
  {
    number: '03',
    title: 'Under Your Brand',
    text: 'Deliver projects with your company name',
  },
  {
    number: '04',
    title: 'Revenue Share',
    text: 'Transparent pricing and profit margins',
  },
];

const offers = [
  {
    title: 'Dedicated Development Team',
    text: 'Access to experienced developers, designers, and project managers.',
  },
  {
    title: 'Transparent Process',
    text: 'Regular updates, sprint reviews, and client communication support.',
  },
  {
    title: 'Your Brand, Our Expertise',
    text: 'All deliverables under your company name and branding.',
  },
  {
    title: 'Flexible Engagement',
    text: 'Project-based or retainer models to fit your business needs.',
  },
  {
    title: 'Quality Assurance',
    text: 'Comprehensive testing and QA before every client delivery.',
  },
  {
    title: 'Post-Launch Support',
    text: 'Maintenance, updates, and ongoing support for your clients.',
  },
];

export default function WhiteLabelPartnership() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#030914]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-18%,rgba(38,132,255,0.22),transparent_40%)]" />

        <section className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-24 pt-28 text-center md:pb-32 md:pt-40 lg:px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto flex min-h-[420px] w-full flex-col items-center justify-center lg:min-h-[520px]"
          >
            <div className="mx-auto mb-6 inline-flex rounded-full border border-[#2F80ED]/35 bg-[#0A1F43] px-4 py-1 text-sm text-[#7AB9FF]">
              White-Label Partnership
            </div>
            <h1
              id="white-label-partnership-heading"
              className="mx-auto max-w-[820px] text-4xl font-bold leading-tight text-[#D8DEE8] sm:text-5xl md:text-6xl"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Scale Your Agency Without Hiring Developers
            </h1>
            <p className="mx-auto mt-5 max-w-[780px] text-base leading-relaxed text-[#8A96AA] md:text-lg">
              Partner with TechFlux Solutions to deliver enterprise-grade SaaS and AI solutions to your clients under
              your brand. Focus on sales and relationships while we handle development.
            </p>
            <Link
              to="/become-partner"
              className="mt-8 inline-flex h-[52px] items-center rounded-[10px] bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-8 text-sm font-semibold text-white shadow-[0_0_22px_rgba(56,169,255,0.28)] transition-all hover:brightness-110"
            >
              Become a Partner
            </Link>
          </motion.div>
        </section>

        <section className="border-y border-white/5 bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Who This Is For
              </h2>
              <p className="mx-auto max-w-[760px] text-sm text-[#8A96AA] md:text-[15px]">
                Perfect for agencies, consultants, and businesses looking to offer development services without
                building an in-house team.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {perfectFor.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-white/5 bg-[#0F1B31] px-8 py-8 text-center"
                >
                  <item.icon className="mx-auto mb-4 h-7 w-7 text-[#2F80ED]" />
                  <h3 className="mb-2 text-[22px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-6 text-[#8A96AA]">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                How Partnership Works
              </h2>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-4">
              {steps.map((item, i) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl border border-white/5 bg-[#0F1B31] p-5"
                >
                  <p className="mb-2 text-[37px] font-semibold leading-none text-[#2F80ED]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {item.number}
                  </p>
                  <h3 className="mb-2 text-[15px] font-semibold text-[#D8DEE8]">{item.title}</h3>
                  <p className="text-xs leading-5 text-[#8A96AA]">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                What We Offer
              </h2>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              {offers.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.06 }}
                  className="rounded-xl border border-white/5 bg-[#0F1B31] p-5"
                >
                  <div className="mb-2 flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2F80ED]" />
                    <h3 className="text-[15px] font-semibold text-[#D8DEE8]">{item.title}</h3>
                  </div>
                  <p className="text-[13px] leading-6 text-[#8A96AA]">{item.text}</p>
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
              className="rounded-2xl border border-white/5 bg-[#0D172B] px-8 py-14 text-center md:px-12"
            >
              <Shield className="mx-auto mb-4 h-11 w-11 text-[#2F80ED]" />
              <h2 className="mb-4 text-[40px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to Partner With Us?
              </h2>
              <p className="mx-auto mb-8 max-w-[760px] text-sm text-[#8A96AA] md:text-[15px]">
                Schedule a partnership call to discuss how we can help you scale your agency and deliver exceptional
                results to your clients.
              </p>
              <Link
                to="/book-strategy-call"
                className="inline-flex rounded-[10px] bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-8 py-3 text-sm font-medium text-white"
              >
                Schedule Partnership Call
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

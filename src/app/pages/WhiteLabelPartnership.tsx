import { motion } from 'motion/react';
import {
  Shield,
  Users,
  Globe,
  Layers,
  Code,
  Repeat,
  Server,
  Smartphone,
  Box,
  Cloud,
  ShoppingCart,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

// data for sections based on screenshot
const builtFor = [
  {
    icon: Globe,
    title: 'Digital Marketing Agencies',
    text: 'Expand your service offerings with full‑stack products delivered under your brand.',
  },
  {
    icon: Layers,
    title: 'Web Design Agencies',
    text: 'Turn designs into reality without hiring developers.',
  },
  {
    icon: Code,
    title: 'Startup Consultants',
    text: 'Offer end-to-end technical solutions to early‑stage clients.',
  },
  {
    icon: Box,
    title: 'Product Studios',
    text: 'Scale your capacity and handle more builds simultaneously.',
  },
  {
    icon: Server,
    title: 'Software Companies',
    text: 'Augment engineering teams with on‑demand expertise.',
  },
];

const services = [
  { icon: Server, title: 'SaaS Platform Development', text: 'Build tailored SaaS platforms with subscription billing and admin features.' },
  { icon: Code, title: 'AI Solutions', text: 'AI chatbots, automation systems, and intelligent analytics.' },
  { icon: Layers, title: 'On-Demand Applications', text: 'Booking platforms, marketplaces, and real‑time apps.' },
  { icon: Smartphone, title: 'Mobile App Development', text: 'Cross-platform mobile apps using Flutter and React Native.' },
  { icon: ShoppingCart, title: 'E-commerce Platforms', text: 'Custom e-commerce solutions with Shopify, WooCommerce, or headless stacks.' },
  { icon: Cloud, title: 'Custom Web Applications', text: 'Scalable web apps built with modern frameworks and cloud infrastructure.' },
];

const techTags = [
  'React',
  'Next.js',
  'Flutter',
  'Node.js',
  'Laravel',
  'Python',
  'Shopify',
  'WooCommerce',
  'Unity',
  'AWS',
  'PostgreSQL',
  'Firebase',
  'Stripe',
  'REST APIs',
];

const collaborationSteps = [
  { icon: Users, title: 'Initial Partnership Discussion' },
  { icon: Shield, title: 'NDA & Collaboration Setup' },
  { icon: Layers, title: 'Project Planning & Architecture' },
  { icon: Code, title: 'Development & Delivery' },
  { icon: Repeat, title: 'Long-Term Partnership Support' },
];

const whyItems = [
  { title: '8+ Years Experience', desc: 'Proven track record in software development.' },
  { title: 'Global Clients', desc: 'Serving agencies and enterprises worldwide.' },
  { title: 'Dedicated Development Team', desc: 'Experienced engineers and designers.' },
  { title: 'Scalable Architecture', desc: 'Enterprise-grade technical solutions.' },
];

const caseStudy = {
  title: 'Studio New Media – SaaS CMS Platform',
  desc: 'Custom SaaS CMS platform built for a European digital agency to manage multiple client websites, including multi-tenant architecture, role-based access, and automated billing.',
  img: 'https://images.unsplash.com/photo-1581091870620-e7eea88644bb?auto=format&fit=crop&w=1200&q=80',
};

const partnershipModels = [
  {
    title: 'Project-Based Development',
    items: [
      'Fixed scope projects with clear milestones.',
      'Ideal for one-time client engagements.',
      'Dedicated project manager.',
    ],
  },
  {
    title: 'Dedicated Development Team',
    items: [
      'Your own remote team of developers.',
      'Scale up or down as needed.',
      'Priority delivery and sprint ownership.',
    ],
  },
  {
    title: 'Long-Term Technical Partnership',
    items: [
      'Ongoing maintenance and enhancements.',
      'Co-development and reseller opportunities.',
      'Revenue sharing options.',
    ],
  },
];

const relatedServices = [
  { title: 'SaaS Development', to: '/saas-development' },
  { title: 'AI Solutions', to: '/ai-solutions' },
  { title: 'On-Demand Applications', to: '/on-demand-solutions' },
  { title: 'Game Development', to: '/unity-game-development' },
  { title: 'E-commerce Development', to: '/e-commerce-solutions' },
];


export default function WhiteLabelPartnership() {
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
                White-Label Partnership
              </div>
              <h1
                id="white-label-partnership-heading"
                className="max-w-[820px] text-4xl font-bold leading-tight text-[#D8DEE8] sm:text-5xl md:text-6xl"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                White-Label Development Partner for Agencies
              </h1>
              <p className="mt-5 max-w-[780px] text-base leading-relaxed text-[#8A96AA] md:text-lg">
                TechFlux Solutions works behind the scenes as your trusted development partner, helping agencies deliver
                high‑quality SaaS platforms, mobile apps, and digital products without expanding their internal team.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-start">
                <Link
                  to="/become-partner"
                  className="inline-flex h-[52px] items-center justify-center rounded-[10px] bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-8 text-sm font-semibold text-white shadow-[0_0_22px_rgba(56,169,255,0.28)] transition-all hover:brightness-110"
                >
                  Become a Partner
                </Link>
                <Link
                  to="/book-strategy-call"
                  className="inline-flex h-[52px] items-center justify-center rounded-[10px] border border-[#2F80ED] px-8 text-sm font-semibold text-[#4CA1FF] hover:bg-[#2F80ED]/10 transition-all"
                >
                  Book Partnership Call
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
                src="https://images.unsplash.com/photo-1581091870620-e7eea88644bb?auto=format&fit=crop&w=800&q=80"
                alt="Handshake on laptop screen"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </motion.div>
        </section>

        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Built for Growing Agencies
              </h2>
              <p className="mx-auto max-w-[760px] text-sm text-[#8A96AA] md:text-[15px]">
                Perfect for agencies and businesses looking to expand their technical capabilities without the overhead of hiring.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
              {builtFor.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group rounded-2xl border border-white/5 bg-[#0C1830] px-8 py-8 text-center transition-all duration-300 hover:border-[#2F80ED]/35 hover:shadow-[0_14px_36px_rgba(16,53,110,0.32)]"
                >
                  <div className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#102548]">
                    <item.icon className="h-4 w-4 text-[#2F80ED]" />
                  </div>
                  <h3 className="mb-2 text-[15px] font-semibold leading-6 text-[#E5ECF8]">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-6 text-[#95A4BF]">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        

        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                White-Label Development Services
              </h2>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.06 }}
                  className="group rounded-2xl border border-white/5 bg-[#0C1830] p-6 transition-all duration-300 hover:border-[#2F80ED]/35 hover:shadow-[0_14px_36px_rgba(16,53,110,0.32)]"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#102548]">
                    <item.icon className="h-4 w-4 text-[#2F80ED]" />
                  </div>
                  <h3 className="mb-2 text-[15px] font-semibold leading-6 text-[#E5ECF8]">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-6 text-[#95A4BF]">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* technology expertise tags */}
        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-[42px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Technology Expertise
              </h2>
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

        {/* collaboration process */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Our Collaboration Process
              </h2>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-5">
              {collaborationSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-[#0F1B31] p-6 text-center"
                >
                  <step.icon className="h-8 w-8 text-[#2F80ED]" />
                  <p className="text-sm font-medium text-[#D8DEE8]">{step.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* why partner section */}
        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Why Partner With TechFlux
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

        {/* case study */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                White-Label Platform We&apos;ve Built
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
                  <Link to="/case-studies/studio-new-media" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4CA1FF]">
                    View Case Study <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* partnership models */}
        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Flexible Partnership Models
              </h2>
            </motion.div>
            <div className="overflow-x-auto rounded-[24px] border border-[#263550] bg-[#141F36]">
              <table className="w-full min-w-[760px]">
                <thead>
                  <tr className="border-b border-[#2A3954]">
                    <th className="px-6 py-5 text-left text-xl font-semibold tracking-[-0.01em] text-[#E5ECF8]">Model</th>
                    <th className="px-6 py-5 text-left text-xl font-semibold tracking-[-0.01em] text-[#E5ECF8]">Includes</th>
                  </tr>
                </thead>
                <tbody>
                  {partnershipModels.map((model) => (
                    <tr key={model.title} className="border-b border-[#2A3954] last:border-b-0">
                      <td className="px-6 py-5 text-lg text-[#E5ECF8]">{model.title}</td>
                      <td className="px-6 py-5 text-lg text-[#9AA7BF]">{model.items.join(' | ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.to}
                    className="block rounded-2xl border border-white/5 bg-[#0C1830] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/35 hover:bg-[#112241] hover:shadow-[0_14px_36px_rgba(16,53,110,0.32)]"
                  >
                    <p className="font-semibold text-[#D8DEE8]">{item.title}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* final CTA */}
        <section className="pb-20 pt-8">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/5 bg-[#0D172B] px-8 py-14 text-center md:px-12"
            >
              <Shield className="mx-auto mb-4 h-11 w-11 text-[#2F80ED]" />
              <h2 className="mb-4 text-[40px] font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Looking for a Reliable Development Partner?
              </h2>
              <p className="mx-auto mb-8 max-w-[760px] text-sm text-[#8A96AA] md:text-[15px]">
                Let’s discuss how we can help you deliver exceptional technical solutions to your clients under your brand.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  to="/become-partner"
                  className="inline-flex h-[52px] items-center justify-center rounded-[10px] bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-8 text-sm font-semibold text-white"
                >
                  Become a Partner
                </Link>
                <Link
                  to="/book-strategy-call"
                  className="inline-flex h-[52px] items-center justify-center rounded-[10px] border border-[#2F80ED] px-8 text-sm font-semibold text-[#4CA1FF] hover:bg-[#2F80ED]/10"
                >
                  Book Strategy Call
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



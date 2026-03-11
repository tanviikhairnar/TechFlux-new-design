import { motion } from 'framer-motion';
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
  Award,
  Rocket,
  Handshake,
  CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { ServiceHeroSection } from '../components/ServiceHeroSection';
const whiteLabelImage = "http://techflux.in/img/assets/images/Macbook%20Pro%20-%20FREE%20(1).png";

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
  {
    icon: Users,
    step: '01',
    title: 'Initial Partnership Discussion',
    desc: "We discuss your agency's needs, project types, and collaboration expectations.",
  },
  {
    icon: Shield,
    step: '02',
    title: 'NDA & Collaboration Setup',
    desc: 'Sign confidentiality agreements and set up white-label project workflows.',
  },
  {
    icon: Layers,
    step: '03',
    title: 'Project Planning & Architecture',
    desc: 'Detailed technical planning, timeline estimation, and resource allocation.',
  },
  {
    icon: Code,
    step: '04',
    title: 'Development & Delivery',
    desc: 'Agile development with regular updates, code reviews, and quality assurance.',
  },
  {
    icon: Repeat,
    step: '05',
    title: 'Long-Term Partnership Support',
    desc: 'Ongoing maintenance, feature updates, and dedicated technical support.',
  },
];

const whyItems = [
  {
    icon: Award,
    titleLine1: '12+',
    titleLine2: 'Years Experience',
    desc: 'Proven track record in software development',
  },
  {
    icon: Globe,
    titleLine1: 'Global',
    titleLine2: 'Clients',
    desc: 'Serving agencies and businesses worldwide',
  },
  {
    icon: Users,
    titleLine1: 'Dedicated',
    titleLine2: 'Development Team',
    desc: 'Experienced engineers and designers',
  },
  {
    icon: Layers,
    titleLine1: 'Scalable',
    titleLine2: 'Architecture Expertise',
    desc: 'Enterprise-grade technical solutions',
  },
];

const caseStudy = {
  title: 'Studio New Media – SaaS CMS Platform',
  desc: 'Custom SaaS CMS platform built for a European digital agency to manage multiple client websites, including multi-tenant architecture, role-based access, and automated billing.',
  img: whiteLabelImage,
};

const partnershipModels = [
  {
    icon: Rocket,
    title: 'Project-Based Development',
    description: 'Fixed-scope projects with clear timelines and deliverables. Perfect for one-time client engagements.',
    items: ['Fixed pricing structure', 'Defined project scope', 'Clear milestones', 'Flexible engagement'],
  },
  {
    icon: Users,
    title: 'Dedicated Development Team',
    description: 'Your own remote team of developers working exclusively on your projects. Scale up or down as needed.',
    items: ['Monthly retainer model', 'Dedicated resources', 'Priority support', 'Flexible team size'],
  },
  {
    icon: Handshake,
    title: 'Long-Term Technical Partnership',
    description: 'Strategic partnership for ongoing development needs. We become your extended technical team.',
    items: ['Discounted rates', 'Priority access', 'Joint planning', 'Revenue sharing options'],
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
            className="mx-auto flex w-full flex-col justify-center lg:flex-row lg:items-center lg:justify-between"
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
                Techflux Solutions works behind the scenes as your trusted development partner, helping agencies deliver
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
              className="hidden w-full lg:block lg:w-1/2"
            >
              <div className="mx-auto w-full max-w-[620px] rounded-[22px] border border-[#2F80ED]/20 bg-[#0B1E60] p-6 shadow-[0_24px_60px_rgba(5,20,56,0.45)]">
                <img
                  src={whiteLabelImage}
                  alt="Handshake on laptop screen"
                  className="h-auto w-full rounded-xl object-contain"
                />
              </div>
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
                  <h3 className="mb-2 tf-card-title">
                    {item.title}
                  </h3>
                  <p className="tf-muted-card">{item.text}</p>
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
                  <h3 className="mb-2 tf-card-title">
                    {item.title}
                  </h3>
                  <p className="tf-muted-card">{item.text}</p>
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
              <p className="mx-auto max-w-[820px] text-[17px] leading-8 text-[#8EA2BF]">
                A transparent and structured approach to white-label development partnerships.
              </p>
            </motion.div>
            <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              <div className="pointer-events-none absolute left-[10%] right-[10%] top-14 hidden h-px bg-[#1B3E72] xl:block" />
              {collaborationSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="relative z-10 flex flex-col items-center rounded-2xl border border-white/10 bg-[linear-gradient(145deg,#161F34_0%,#141C2F_100%)] px-7 pb-8 pt-7 text-center"
                >
                  <div className="relative mb-5 flex h-[78px] w-[78px] items-center justify-center rounded-full bg-gradient-to-b from-[#3FAAF7] to-[#2B84E3]">
                    <step.icon className="h-8 w-8 text-white" />
                    <span className="absolute right-[-6px] top-[-8px] inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#2E86E9] bg-[#061733] text-sm font-bold leading-none text-[#3EA4FF]">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mb-3 text-[22px] font-semibold leading-[1.35] text-[#E6EBF5]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-[#95A4BC]">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* why partner section */}
        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#F2F5FA] md:text-[46px]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Why Partner With Techflux
              </h2>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {whyItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex min-h-[300px] flex-col items-center rounded-[20px] border border-[#1E2D46] bg-[#111A2E] px-7 py-8 text-center"
                >
                  <item.icon className="mx-auto mb-6 h-12 w-12 text-[#2F80ED]" />
                  <h3 className="mb-2 text-[42px] font-semibold leading-[1.08] text-[#F2F5FA]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {item.titleLine1}
                  </h3>
                  <h4 className="mb-4 text-[21px] font-semibold leading-[1.25] text-[#F2F5FA]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {item.titleLine2}
                  </h4>
                  <p className="max-w-[260px] text-[15px] leading-7 text-[#9BA7BC]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* case study */}
        <section className="py-20 md:py-28">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                White-Label Platform We&apos;ve Built
              </h2>
            </motion.div>
            <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#0F1B31]">
              <div className="grid md:grid-cols-2">
                <img src={caseStudy.img} alt={caseStudy.title} className="h-[320px] w-full object-cover object-center md:h-full md:min-h-[460px]" />
                <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                  <h3 className="mb-4 text-2xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {caseStudy.title}
                  </h3>
                  <p className="mb-6 tf-muted-card">{caseStudy.desc}</p>
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
              <p className="mx-auto max-w-[760px] text-sm text-[#8A96AA] md:text-[15px]">
                Choose the engagement model that best fits your agency&apos;s needs.
              </p>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {partnershipModels.map((model, i) => (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-3xl border border-[#1D2C48] bg-[linear-gradient(180deg,#111C32_0%,#101A2F_100%)] p-8"
                >
                  <model.icon className="mb-6 h-10 w-10 text-[#2F80ED]" />
                  <h3 className="mb-4 text-[27px] font-semibold leading-[1.2] text-[#E6EBF5]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {model.title}
                  </h3>
                  <p className="mb-7 text-[15px] leading-7 text-[#95A4BC]">{model.description}</p>
                  <ul className="space-y-3">
                    {model.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-[15px] text-[#A4B2C9]">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2F80ED]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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









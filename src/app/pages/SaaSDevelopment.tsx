import { motion } from 'framer-motion';
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
  Lock,
  Package,
  Rocket,
  Shield,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { IndustriesSection } from '../components/IndustriesSection';
import { ServiceHeroSection } from '../components/ServiceHeroSection';
import { CaseStudySection } from '../components/CaseStudySection';
import { CardsSection } from '../components/CardsSection';
import { InvestmentCardsSection } from '../components/InvestmentCardsSection';
import { TechnologyStackSection } from '../components/TechnologyStackSection';
import { GetProjectEstimateButton } from '../components/GetProjectEstimateButton';
const saasHeroImage = new URL("../../assets/webp/SaaS.webp", import.meta.url).href;
const leaveCertificateImage = new URL("../../assets/webp/WhatsApp Image 2026-03-06 at 12.15.24.webp", import.meta.url).href;

const saasSolutions = [
  {
    icon: Zap,
    title: 'SaaS MVP Development',
    desc: 'Launch your Minimum Viable Product quickly to validate your idea and attract early users.',
  },
  {
    icon: Building2,
    title: 'Multi-Tenant SaaS Platforms',
    desc: 'Scalable multi-tenant architecture with complete data isolation and customization.',
  },
  {
    icon: CreditCard,
    title: 'Subscription Platforms',
    desc: 'Recurring billing, payment processing, and subscription management systems.',
  },
  {
    icon: BarChart3,
    title: 'Admin & Analytics Dashboards',
    desc: 'Powerful admin panels with real-time analytics and business intelligence.',
  },
  {
    icon: Users,
    title: 'B2B SaaS Products',
    desc: 'Enterprise-focused SaaS solutions with advanced features and integrations.',
  },
  {
    icon: Shield,
    title: 'Enterprise SaaS Systems',
    desc: 'Large-scale SaaS platforms with enterprise security and compliance.',
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
    icon: CreditCard,
    title: 'Subscription Billing',
    desc: 'Automated recurring payments and invoicing.',
  },
  {
    icon: Shield,
    title: 'Role-Based Access',
    desc: 'Granular permissions and user management.',
  },
  {
    icon: Cog,
    title: 'API Integrations',
    desc: 'Connect with third-party services seamlessly.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboards',
    desc: 'Real-time insights and reporting.',
  },
  {
    icon: Users,
    title: 'User Management',
    desc: 'Complete user lifecycle management.',
  },
  {
    icon: Database,
    title: 'Multi-Tenant Architecture',
    desc: 'Secure data isolation per customer.',
  },
];

const pricingCards = [
  {
    title: 'SaaS MVP Development',
    bullets: ['Core feature set', 'User authentication', 'Admin dashboard', 'Payment integration'],
  },
  {
    title: 'Custom SaaS Platform',
    bullets: ['Custom features', 'Multi-tenant setup', 'Advanced analytics', 'Third-party APIs'],
  },
  {
    title: 'Enterprise SaaS Platform',
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
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#030914]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-18%,rgba(47,128,237,0.24),transparent_42%)]" />

        <ServiceHeroSection
          containerClassName="grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-12"
          title={
            <>
              Scalable SaaS
              <br />
              Product
              <br />
              Development
            </>
          }
          titleClassName="max-w-[560px] text-4xl font-bold leading-[1.06] text-[#E3E8F1] md:text-[66px]"
          description="We design and build scalable Software-as-a-Service platforms with subscription systems, multi-tenant architecture, and enterprise-grade performance."
          descriptionClassName="mt-8 max-w-[560px] text-[17px] leading-[1.65] text-[#A0AABD] md:text-[18px]"
          ctaContainerClassName="mt-8 flex flex-wrap gap-4"
          primaryCta={{
            label: 'Get Project Estimate',
            to: '/get-estimate',
            className:
              'inline-flex h-[56px] items-center justify-center rounded-[16px] bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-8 text-[18px] font-semibold text-white shadow-[0_0_22px_rgba(56,169,255,0.34)] transition-all hover:brightness-110',
          }}
          secondaryCta={{
            label: 'Book Strategy Call',
            to: '/book-strategy-call',
            className:
              'inline-flex h-[56px] items-center justify-center rounded-[16px] border border-white/10 bg-[#111A2D] px-8 text-[18px] font-semibold text-[#E0E7F5] transition-all hover:border-[#2F80ED]/45 hover:bg-[#15233E]',
          }}
          imageSrc={saasHeroImage}
          imageAlt="SaaS analytics dashboard"
          imageVariant="framed"
          imageFit="cover"
          textMotionInitial={{ opacity: 0, y: 22 }}
          imageMotionInitial={{ opacity: 0, y: 22 }}
        />

        <CardsSection title="SaaS Solutions We Build" items={saasSolutions} />

        <TechnologyStackSection
          title="SaaS Technology Stack"
          description="We leverage modern technologies to build scalable, maintainable, and high-performance SaaS platforms."
          items={stackItems}
          headingWrapClassName="mb-10 text-center"
          headingClassName="mb-3 text-[42px] font-semibold text-[#D8DEE8]"
          descriptionClassName="mx-auto max-w-[760px] text-center text-sm text-[#8A96AA] md:text-[15px]"
        />

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-9 text-center text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
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
                  <h3 className="mb-2 tf-card-title">{item.title}</h3>
                  <p className="tf-muted-card">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-8 text-center text-3xl font-semibold leading-[1.15] text-[#D8DEE8]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Choose Your SaaS Solution
            </h2>
            <div className="overflow-x-auto rounded-[24px] border border-[#263550] bg-[#141F36]">
              <table className="w-full min-w-[760px]">
                <thead>
                  <tr className="border-b border-[#2A3954]">
                    {['Solution Type', 'Development Time', 'Scalability', 'Custom Features', 'Maintenance'].map((head) => (
                      <th key={head} className="px-6 py-5 text-left text-xl font-semibold tracking-[-0.01em] text-[#E5ECF8]">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['MVP SaaS Platform', '2-3 months', 'Medium', 'Core features', 'Standard'],
                    ['Enterprise SaaS Platform', '4-6 months', 'Very High', 'Fully custom', 'Premium'],
                    ['Marketplace SaaS', '3-5 months', 'High', 'Custom + integrations', 'Standard+'],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-[#2A3954] last:border-b-0">
                      {row.map((cell) => (
                        <td key={cell} className="px-6 py-5 tf-muted-table">
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

        <InvestmentCardsSection title="Typical Project Investment" cards={pricingCards} showEstimateButton />

        <IndustriesSection title="Industries Using Our SaaS Solutions" items={industries} />

        <CaseStudySection
          title="SaaS Platform We've Built"
          headingWrapClassName="mb-14 text-center"
          headingClassName="mb-3 text-3xl font-semibold text-[#D8DEE8]"
          cardClassName="overflow-hidden rounded-2xl border border-white/5 bg-[linear-gradient(110deg,#0F1B31_0%,#101A2D_55%,#0E1728_100%)]"
          gridClassName="grid items-stretch md:grid-cols-[1.05fr_1fr]"
          imageWrapClassName="h-[280px] overflow-hidden md:h-[440px]"
          imageSrc={leaveCertificateImage}
          imageAlt="Leave Certificate SaaS platform"
          imageClassName="h-full w-full object-cover object-center"
          contentClassName="flex flex-col justify-center p-7 md:p-12"
          badgeText="SaaS Platform"
          badgeClassName="mb-6 inline-flex w-fit rounded-full border border-[#2F80ED]/30 bg-[#0F2A5F] px-5 py-2 text-sm font-medium text-[#56A9F5]"
          cardTitle="servyo - SaaS Platform"
          cardTitleClassName="mb-4 text-2xl font-semibold leading-tight text-[#D8DEE8] md:text-[44px]"
          description="Digital document management platform for educational institutions with secure records, multi-user workflows, and automated certificate generation."
          descriptionClassName="mb-8 max-w-[620px] text-sm leading-8 text-[#8A96AA] md:text-[17px]"
          linkTo="/leave-certificate-case-study"
          linkClassName="inline-flex items-center gap-2 text-xl font-semibold text-[#2F80ED] transition-colors hover:text-[#66B7FF]"
        />

        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-9 text-center text-3xl font-semibold text-[#E5ECF8]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Why Businesses Choose Techflux
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
                    className="flex min-h-[58px] items-center justify-center rounded-lg border border-white/5 bg-[#0C1830] px-4 py-3 text-center text-sm font-medium text-[#D7E2F6] transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/35 hover:bg-[#112241] hover:text-white"
                  >
                    {service.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 pt-6 md:pb-20 md:pt-8">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <div className="rounded-2xl border border-[#24406B] bg-[linear-gradient(135deg,#16345D_0%,#223C67_55%,#2A4775_100%)] px-8 py-12 text-center">
              <h2 className="text-3xl font-semibold text-white md:text-4xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to Build Your SaaS Platform?
              </h2>
              <p className="mx-auto mb-8 mt-4 max-w-[700px] text-sm text-[#D0DDF1] md:text-base">
                Let&apos;s discuss your SaaS product vision and build a roadmap for launch and long-term growth.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <GetProjectEstimateButton className="rounded-[10px] bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_16px_rgba(56,169,255,0.3)]" />
                <Link
                  to="/book-strategy-call"
                  className="rounded-[10px] border border-[#8FBDF3]/40 bg-[#223F68] px-6 py-3 text-sm font-semibold text-[#E6F0FF]"
                >
                  Book Strategy Call
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}







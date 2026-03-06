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
import { IndustriesSection } from '../components/IndustriesSection';
import { ServiceHeroSection } from '../components/ServiceHeroSection';
import { CaseStudySection } from '../components/CaseStudySection';
import { CardsSection } from '../components/CardsSection';
import { InvestmentCardsSection } from '../components/InvestmentCardsSection';
import { TechnologyStackSection } from '../components/TechnologyStackSection';
import { GetProjectEstimateButton } from '../components/GetProjectEstimateButton';
import onDemandImage from '../../assets/images/On Demand.jpg';
import onDemandHeroImage from '../../assets/images/hand-touching-mobile-with-applications.jpg';

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
    bullets: [
      'Appointment scheduling',
      'Payment integration',
      'User management',
      'Mobile app',
    ],
  },
  {
    title: 'Marketplace Platform',
    bullets: [
      'Multi-vendor system',
      'Real-time tracking',
      'Admin dashboard',
      'Mobile apps',
    ],
  },
  {
    title: 'On-Demand Super App',
    bullets: [
      'Multiple services',
      'Advanced features',
      'Full ecosystem',
      'Custom integrations',
    ],
  },
];

// industries using on-demand apps
const industries = [
  { label: 'Home Services', icon: Layers, tone: 'bg-[#4B2C5C] text-[#C79AF2]' },
  { label: 'Food Delivery', icon: Truck, tone: 'bg-[#185345] text-[#66D5AE]' },
  { label: 'Transportation', icon: MapPin, tone: 'bg-[#19486A] text-[#71B8F5]' },
  { label: 'Healthcare', icon: Calendar, tone: 'bg-[#4C2747] text-[#C77DB0]' },
  { label: 'Hospitality', icon: ShoppingCart, tone: 'bg-[#5A3F1F] text-[#E0B26B]' },
  { label: 'Freelance Marketplaces', icon: Users, tone: 'bg-[#2F2E74] text-[#9897FF]' },
];

// example platform case study
const caseStudy = {
  title: 'Servyo – Service Marketplace',
  desc: 'Multi-service booking platform connecting clients, cleaners, and technicians with features like live booking, subscriptions, and payment gateway integration.',
  img: onDemandImage,
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

        <ServiceHeroSection
          containerClassName="grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-12 lg:min-h-[520px]"
          textWrapClassName="text-center lg:text-left"
          badgeText="On-Demand Applications"
          title="Build Scalable On-Demand Platforms"
          titleId="on-demand-applications-heading"
          description="We develop real-time booking and marketplace platforms for service businesses, delivery systems, and multi-vendor marketplaces."
          ctaContainerClassName="mt-8 flex flex-col gap-4 sm:flex-row lg:justify-start"
          primaryCta={{
            label: 'Get Project Estimate',
            to: '/get-estimate',
            className:
              'inline-flex h-[52px] items-center justify-center rounded-[10px] border border-[#2F80ED] px-8 text-sm font-semibold text-[#4CA1FF] transition-all hover:bg-[#2F80ED]/10',
          }}
          secondaryCta={{
            label: 'Book Strategy Call',
            to: '/book-strategy-call',
            className:
              'inline-flex h-[52px] items-center justify-center rounded-[10px] bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-8 text-sm font-semibold text-white shadow-[0_0_22px_rgba(56,169,255,0.28)] transition-all hover:brightness-110',
          }}
          imageSrc={onDemandHeroImage}
          imageAlt="On-demand app screen"
          imageVariant="framed"
          imageFit="cover"
        />

        <CardsSection
          title="On-Demand Solutions We Build"
          items={buildItems}
          sectionClassName="bg-[#081327] py-20"
          headingWrapClassName="mb-14 text-center"
          transitionStep={0.07}
          transitionOffsetFn={(i) => i % 3}
        />

        <TechnologyStackSection
          title="On-Demand Technology Stack"
          description="We use proven technologies to build real-time, scalable platforms that handle high traffic and complex workflows."
          items={techTags}
        />

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

        <InvestmentCardsSection title="Typical Project Investment" cards={pricingCards} />

        <IndustriesSection title="Industries Using On-Demand Apps" items={industries} />

        <CaseStudySection
          title="On-Demand Platform We've Built"
          headingWrapClassName="mb-14 text-center"
          headingClassName="mb-3 text-3xl font-semibold text-[#D8DEE8]"
          cardClassName="overflow-hidden rounded-2xl border border-white/5 bg-[linear-gradient(110deg,#0F1B31_0%,#101A2D_55%,#0E1728_100%)]"
          gridClassName="grid items-stretch md:grid-cols-[1.05fr_1fr]"
          imageWrapClassName="h-[280px] md:h-[440px]"
          imageSrc={caseStudy.img}
          imageAlt={caseStudy.title}
          imageClassName="h-full w-full object-cover"
          contentClassName="flex flex-col justify-center p-7 md:p-12"
          badgeText="On-Demand Platform"
          badgeClassName="mb-6 inline-flex w-fit rounded-full border border-[#2F80ED]/30 bg-[#0F2A5F] px-5 py-2 text-sm font-medium text-[#56A9F5]"
          cardTitle={caseStudy.title}
          cardTitleClassName="mb-4 text-2xl font-semibold leading-tight text-[#D8DEE8] md:text-[44px]"
          description={caseStudy.desc}
          descriptionClassName="mb-8 max-w-[620px] text-sm leading-8 text-[#8A96AA] md:text-[17px]"
          linkTo="/case-studies/servyo"
          linkClassName="inline-flex items-center gap-2 text-xl font-semibold text-[#2F80ED] transition-colors hover:text-[#66B7FF]"
          linkSuffix={<ArrowUpRight className="h-5 w-5" />}
        />

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
                <GetProjectEstimateButton className="rounded-[10px] border border-[#2F80ED] px-8 py-3 text-sm font-medium text-[#4CA1FF] hover:bg-[#2F80ED]/10" />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}



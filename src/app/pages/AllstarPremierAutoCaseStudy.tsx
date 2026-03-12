import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { GetProjectEstimateButton } from '../components/GetProjectEstimateButton';
import { Navigation } from '../components/Navigation';
const allstarImage = "https://techflux.in/public/assets/images/car.webp"

const challengeItems = [
  'Inefficient manual inventory tracking system',
  'Lack of centralized data analytics and reporting',
  'Poor lead capture and conversion tracking',
  'No integrated marketing automation tools',
  'Limited visibility into sales performance metrics',
  'Fragmented customer relationship management',
];

const approachItems = [
  {
    title: 'Discovery & Requirements Analysis',
    text: 'Conducted comprehensive workflow analysis to understand dealership operations, inventory management needs, and customer journey optimization requirements.',
  },
  {
    title: 'Custom Platform Architecture',
    text: 'Designed a scalable web application with modular architecture supporting inventory management, analytics dashboards, and integrated marketing workflows.',
  },
  {
    title: 'Implementation & Integration',
    text: 'Deployed integrated systems with real-time data synchronization, automated reporting, and seamless third-party tool integration.',
  },
];

const featureItems = [
  'Custom Inventory System',
  'Interactive Dashboard',
  'Analytics & Reporting',
  'Marketing Tools',
  'Lead Capture',
  'CRM Integration',
];

const techItems = ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Analytics Engine', 'CRM API'];

const impactItems = [
  {
    title: 'Improved Operational Efficiency',
    text: 'Streamlined inventory management reducing manual work by 70%',
  },
  {
    title: 'Enhanced Lead Conversion',
    text: 'Automated lead capture increased conversion rates significantly',
  },
  {
    title: 'Better Customer Experience',
    text: 'Unified platform providing seamless customer journey',
  },
  {
    title: 'Scalable Infrastructure',
    text: 'Platform ready to support multi-location expansion',
  },
];

const relatedServices = [
  { title: 'SaaS Development', to: '/saas-development' },
  { title: 'On-Demand Applications', to: '/on-demand-solutions' },
  { title: 'AI Solutions', to: '/ai-solutions' },
];

export default function AllstarPremierAutoCaseStudy() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.14),transparent_42%)]" />

        <section className="relative z-10 mx-auto flex w-full max-w-[1260px] items-center px-4 pb-24 pt-[7.5rem] md:pb-28 md:pt-[8.5rem] lg:px-5">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span className="mb-5 inline-flex rounded-full bg-[#113262] px-3 py-1 text-xs font-medium text-[#6DB6FF]">
                Automotive Marketplace
              </span>

              <h1 className="mb-4 text-4xl font-bold leading-tight text-[#E5E7EB] sm:text-5xl md:text-6xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Allstar Premier Auto
              </h1>

              <p className="mb-4 max-w-xl text-base leading-relaxed text-[#94A3B8] md:text-lg">
                Custom web application transforming automotive inventory management and lead generation for premium
                dealerships.
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {['Custom Inventory', 'Analytics Dashboard', 'Lead Generation', 'Marketing Tools'].map((tag) => (
                  <span key={tag} className="rounded-full bg-[#1B2942] px-3 py-1 text-xs text-[#9FB2CD]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/get-estimate"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-7 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(47,128,237,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_30px_rgba(47,128,237,0.45)]"
                >
                  Start a Similar Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/book-strategy-call"
                  className="inline-flex items-center rounded-xl border border-[#2F80ED]/50 bg-[#193258] px-7 py-3 text-sm font-semibold text-[#E5E7EB] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#23406B]"
                >
                  Book Strategy Call
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="overflow-hidden rounded-2xl border border-white/8 bg-[#101A31]"
            >
              <img
                src={allstarImage}
                alt="Allstar Premier Auto inventory"
                className="h-auto w-full object-contain"
              />
            </motion.div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1260px] px-4 pb-14 lg:px-5">
          <div className="grid gap-6 md:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-2xl border border-white/6 bg-[#101A31] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20 md:p-7">
              <h2 className="mb-4 text-2xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                About the Client
              </h2>
              <p className="text-sm leading-relaxed text-[#94A3B8] md:text-base">
                Allstar Premier Auto is a premium automotive dealership focused on delivering exceptional customer
                experiences through innovative digital solutions.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#94A3B8] md:text-base">
                They needed a comprehensive platform to streamline inventory management, enhance CRM engagement, and
                optimize their multi-part dealership sales and lead channels.
              </p>
            </div>

            <div className="rounded-2xl border border-white/6 bg-[#101A31] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20 md:p-7">
              <h3 className="mb-2 text-sm text-[#7F91AB]">Project Type</h3>
              <p className="mb-5 text-base font-semibold text-[#E5E7EB]">Custom Web Application for Automotive Industry</p>
              <h3 className="mb-2 text-sm text-[#7F91AB]">Industry Focus</h3>
              <p className="text-base font-semibold text-[#E5E7EB]">Automotive Sales & Service Marketplace</p>
            </div>
          </div>
        </section>

        <section className="bg-[#08142A] py-14">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-10 text-center text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              The Challenge
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {challengeItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/6 bg-[#111D33] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#26497A] bg-[#122C4D]">
                    <CheckCircle2 className="h-5 w-5 text-[#3B82F6]" />
                  </div>
                  <p className="text-sm text-[#C4D4EA] md:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-10 text-center text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Our Strategic Approach
            </h2>
            <div className="rounded-2xl border border-white/6 bg-[#101A31] p-6 md:p-7">
              <div className="space-y-6">
                {approachItems.map((item, idx) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2F80ED] text-xs font-semibold text-white">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-[#E5E7EB] md:text-lg">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#94A3B8] md:text-base">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#08142A] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-10 text-center text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Key Features Delivered
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featureItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/6 bg-[#111D33] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#26497A] bg-[#122C4D]">
                    <CheckCircle2 className="h-5 w-5 text-[#3B82F6]" />
                  </div>
                  <p className="text-base font-semibold text-[#E5E7EB]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-8 text-center text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Technology Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {techItems.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/8 bg-[#111D33] px-4 py-2 text-sm text-[#C4D4EA] transition-all duration-300 hover:border-[#2F80ED]/40"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#08142A] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-10 text-center text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Business Impact
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {impactItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/6 bg-[#111D33] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <p className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2F80ED]" />
                    <span>
                      <span className="block text-base font-semibold text-[#E5E7EB]">{item.title}</span>
                      <span className="block text-sm text-[#94A3B8] md:text-base">{item.text}</span>
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-8 text-center text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Explore Related Services
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.title}
                  to={service.to}
                  className="rounded-xl border border-white/6 bg-[#111D33] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <p className="text-base font-semibold text-[#E5E7EB]">{service.title}</p>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[#2F80ED]">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <div className="rounded-3xl border border-white/6 bg-[linear-gradient(120deg,#10284B_0%,#1B2E54_55%,#223A66_100%)] px-8 py-14 text-center md:px-12">
              <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to Build Something Similar?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-[#B2C3DA]">
                Transform your business with a custom platform tailored to your unique needs.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/book-strategy-call"
                  className="rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_30px_rgba(47,128,237,0.45)]"
                >
                  Book Strategy Call
                </Link>
                <GetProjectEstimateButton className="rounded-xl border border-[#2F80ED]/50 bg-[#193258] px-8 py-3 text-sm font-semibold text-[#E5E7EB] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#23406B]" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}






import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

const challengeItems = [
  'Generic product discovery experience',
  'Complex logistics for European brands',
  'High cart abandonment rates',
  'Lack of personalization engine',
  'Limited brand differentiation',
];

const featureItems = [
  { title: 'Personalized Recommendations', subtitle: 'AI-driven product suggestions' },
  { title: 'Logistics Integration', subtitle: 'Real-time shipping and tracking' },
  { title: 'UX Optimization', subtitle: 'Streamlined checkout experience' },
  { title: 'Brand Curation', subtitle: 'European fashion focus' },
  { title: 'Inventory Management', subtitle: 'Automated stock control' },
  { title: 'Multi-Currency Support', subtitle: 'International payment processing' },
];

const techItems = ['React', 'Node.js', 'MongoDB', 'Stripe', 'Recommendation Engine', 'AWS'];

const impactItems = [
  {
    icon: TrendingUp,
    title: 'Increased Conversion Rate',
    text: 'Personalized recommendations boosted sales',
  },
  {
    icon: Users,
    title: 'Enhanced User Experience',
    text: 'Streamlined discovery and checkout process',
  },
  {
    icon: Zap,
    title: 'Operational Efficiency',
    text: 'Automated logistics and inventory management',
  },
  {
    icon: CheckCircle2,
    title: 'Brand Differentiation',
    text: 'Unique European fashion curation',
  },
];

export default function MyObscurCaseStudy() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.14),transparent_42%)]" />

        <section className="relative z-10 mx-auto flex w-full max-w-[1260px] min-h-[680px] items-center px-4 pb-24 pt-[7.5rem] md:min-h-[760px] md:pb-28 md:pt-[8.5rem] lg:px-5">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span className="mb-5 inline-flex rounded-full bg-[#113262] px-3 py-1 text-xs font-medium text-[#6DB6FF]">
                Fashion eCommerce
              </span>

              <h1 className="mb-4 text-4xl font-bold leading-tight text-[#E5E7EB] sm:text-5xl md:text-6xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                MyObscur
              </h1>

              <p className="mb-4 max-w-xl text-base leading-relaxed text-[#94A3B8] md:text-lg">
                B2C eCommerce platform delivering personalized fashion discovery with curated European brand
                collections.
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {['eCommerce', 'Personalization', 'Logistics', 'UX Design'].map((tag) => (
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
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80"
                alt="MyObscur ecommerce interface"
                className="h-[340px] w-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1260px] px-4 pb-14 lg:px-5">
          <div className="rounded-2xl border border-white/6 bg-[#101A31] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20 md:p-7">
            <h2 className="mb-4 text-2xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              About the Client
            </h2>
            <p className="text-sm leading-relaxed text-[#94A3B8] md:text-base">
              MyObscur is a premium fashion eCommerce platform specializing in curated European brand collections.
              The platform focuses on delivering a personalized shopping experience through intelligent product
              recommendations and seamless logistics integration, targeting fashion-forward consumers seeking unique,
              high-quality apparel.
            </p>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#08142A] py-14">
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

        <section className="py-16">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <h2 className="mb-10 text-center text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
              Key Features Delivered
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featureItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/6 bg-[#111D33] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#26497A] bg-[#122C4D]">
                    <CheckCircle2 className="h-5 w-5 text-[#3B82F6]" />
                  </div>
                  <p className="text-base font-semibold text-[#E5E7EB]">{item.title}</p>
                  <p className="mt-1 text-sm text-[#94A3B8]">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#08142A] py-16">
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

        <section className="py-16">
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
                    <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#2F80ED]" />
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

        <section className="border-y border-white/5 bg-[#08142A] py-16">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <div className="rounded-3xl border border-white/6 bg-[linear-gradient(120deg,#10284B_0%,#1B2E54_55%,#223A66_100%)] px-8 py-14 text-center md:px-12">
              <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to Build Something Similar?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-[#B2C3DA]">
                Launch your eCommerce platform with personalized shopping experiences.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/book-strategy-call"
                  className="rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_30px_rgba(47,128,237,0.45)]"
                >
                  Book Strategy Call
                </Link>
                <Link
                  to="/get-estimate"
                  className="rounded-xl border border-[#2F80ED]/50 bg-[#193258] px-8 py-3 text-sm font-semibold text-[#E5E7EB] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#23406B]"
                >
                  Get Project Estimate
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

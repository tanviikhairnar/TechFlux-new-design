import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Boxes,
  CreditCard,
  Headset,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  TrendingUp,
  Truck,
  UserRound,
  Wallet,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ServiceHeroSection } from "../components/ServiceHeroSection";
import { CardsSection } from "../components/CardsSection";
import { TechnologyStackSection } from "../components/TechnologyStackSection";
import { InvestmentCardsSection } from "../components/InvestmentCardsSection";
import { IndustriesSection } from "../components/IndustriesSection";
import { CaseStudySection } from "../components/CaseStudySection";
import { GetProjectEstimateButton } from "../components/GetProjectEstimateButton";
const ecommerceHeroImage = "https://techflux.in/img/assets/images/WhatsApp%20Image%202026-03-10%20at%2015.55.45.jpeg";
const ecommerceCaseImage = "https://techflux.in/img/assets/images/3577047_edit.webp";

const ecommerceSolutions = [
  {
    icon: Store,
    title: "Online Store Development",
    desc: "Custom storefronts, product catalog architecture, and conversion-driven UI flows.",
  },
  {
    icon: Smartphone,
    title: "Shopify Plus Development",
    desc: "High-performance Shopify builds with custom themes and tailored checkout experiences.",
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce Development",
    desc: "Scalable WooCommerce implementations with advanced plugins and custom workflows.",
  },
  {
    icon: CreditCard,
    title: "Marketplace Platforms",
    desc: "Multi-vendor commerce systems with commission models, payouts, and seller controls.",
  },
];

const techTags = [
  "Shopify",
  "Shopify Plus",
  "WooCommerce",
  "Magento",
  "Headless Commerce",
  "Next.js",
  "React",
  "Node.js",
  "Stripe",
  "Razorpay",
  "PayPal",
  "Klaviyo",
  "Algolia",
  "Sanity CMS",
];

const featureCards = [
  {
    icon: Search,
    title: "Smart Product Filtering",
    desc: "Fast search and facet filtering for large catalogs with better discoverability.",
  },
  {
    icon: CreditCard,
    title: "Secure Checkout System",
    desc: "Streamlined checkout with fraud checks, wallet support, and payment retries.",
  },
  {
    icon: Boxes,
    title: "Inventory Sync",
    desc: "Real-time stock updates across channels, warehouses, and supplier feeds.",
  },
  {
    icon: UserRound,
    title: "Customer Accounts",
    desc: "Account dashboards, wishlists, order history, and personalized recommendations.",
  },
  {
    icon: BarChart3,
    title: "Conversion Analytics",
    desc: "Sales funnel tracking, attribution views, and campaign performance reporting.",
  },
  {
    icon: Truck,
    title: "Shipping Automation",
    desc: "Carrier integration, rate logic, labels, and delivery status notifications.",
  },
  {
    icon: Sparkles,
    title: "Promotions Engine",
    desc: "Coupons, bundles, pricing rules, and targeted discount logic by segment.",
  },
  {
    icon: Headset,
    title: "Support Integration",
    desc: "Support chat, ticketing workflows, and unified customer interaction history.",
  },
];

const platformRows = [
  {
    platform: "Shopify",
    build: "Fast to launch and scale",
    scalability: "High",
    bestFor: "D2C brands",
    investment: "$2k-$5k",
  },
  {
    platform: "WooCommerce",
    build: "Highly customizable",
    scalability: "Medium-High",
    bestFor: "Content + commerce",
    investment: "$2.5k-$6k",
  },
  {
    platform: "Magento",
    build: "Enterprise-grade",
    scalability: "Very High",
    bestFor: "Complex catalogs",
    investment: "$6k+",
  },
  {
    platform: "Custom Commerce",
    build: "Unique workflows",
    scalability: "Advanced",
    bestFor: "Marketplaces",
    investment: "$8k+",
  },
];

const investmentCards = [
  {
    title: "Shopify Store",
    bullets: ["Theme setup + sections", "Checkout flow", "App integrations", "Launch support"],
  },
  {
    title: "WooCommerce Build",
    bullets: ["Custom storefront", "Plugin stack", "Payment + shipping", "SEO setup"],
  },
  {
    title: "Custom E-commerce",
    bullets: ["Architecture planning", "Custom features", "Advanced analytics", "Scalable backend"],
  },
  {
    title: "Marketplace Platform",
    bullets: ["Vendor onboarding", "Payout system", "Admin controls", "Growth optimization"],
  },
];

const industries = [
  { label: "Fashion Apparel", icon: Sparkles, tone: "bg-[#44295E] text-[#C99AF5]" },
  { label: "Luxury Goods", icon: ShieldCheck, tone: "bg-[#5D421A] text-[#E4B96D]" },
  { label: "Electronics", icon: Smartphone, tone: "bg-[#1D4569] text-[#74BEFF]" },
  { label: "Food & Grocery", icon: ShoppingCart, tone: "bg-[#195743] text-[#67D7AA]" },
  { label: "Automotive", icon: Truck, tone: "bg-[#5C263A] text-[#EE8AAE]" },
  { label: "B2B Wholesale", icon: Boxes, tone: "bg-[#2B2D76] text-[#9EA5FF]" },
  { label: "Digital Products", icon: Wallet, tone: "bg-[#1D516F] text-[#70C6F4]" },
  { label: "Health & Beauty", icon: Store, tone: "bg-[#3A2F6A] text-[#B9A3FF]" },
];

const whyTechflux = [
  { icon: Zap, title: "Fast Delivery", desc: "Accelerated launch cycles with clear sprint-based execution." },
  { icon: TrendingUp, title: "Growth Focus", desc: "Optimized for conversion, retention, and repeat purchases." },
  { icon: Wallet, title: "Checkout Expertise", desc: "Reliable payment and wallet experiences across devices." },
  { icon: BarChart3, title: "Performance Optimization", desc: "Fast storefronts with measurable Core Web Vitals improvements." },
  { icon: Headset, title: "Long-Term Support", desc: "Continuous improvements, feature iterations, and technical support." },
];

const relatedServices = [
  { title: "SaaS Development", link: "/saas-development" },
  { title: "AI Solutions", link: "/ai-solutions" },
  { title: "On-Demand Applications", link: "/on-demand-solutions" },
  { title: "Game Development", link: "/unity-game-development" },
  { title: "White-Label Partnership", link: "/become-partner" },
];

export default function EcommerceSolutions() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#030914]" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-18%,rgba(47,128,237,0.24),transparent_42%)]" />

        <ServiceHeroSection
          containerClassName="grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-12 lg:min-h-[520px]"
          title={
            <>
              High-Performance
              <br />
              E-commerce
              <br />
              Development
            </>
          }
          titleClassName="max-w-[560px] text-4xl font-bold leading-[1.06] text-[#E3E8F1] md:text-[64px]"
          description="We build high-converting e-commerce platforms with secure checkout, scalable catalog architecture, and growth-focused user experiences."
          descriptionClassName="mt-8 max-w-[560px] text-[17px] leading-[1.65] text-[#A0AABD] md:text-[18px]"
          ctaContainerClassName="mt-8 flex flex-wrap gap-4"
          primaryCta={{
            label: "Get Project Estimate",
            to: "/get-estimate",
            className:
              "inline-flex h-[56px] items-center justify-center rounded-[16px] bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-8 text-[18px] font-semibold text-white shadow-[0_0_22px_rgba(56,169,255,0.34)] transition-all hover:brightness-110",
          }}
          secondaryCta={{
            label: "Book Strategy Call",
            to: "/book-strategy-call",
            className:
              "inline-flex h-[56px] items-center justify-center rounded-[16px] border border-white/10 bg-[#111A2D] px-8 text-[18px] font-semibold text-[#E0E7F5] transition-all hover:border-[#2F80ED]/45 hover:bg-[#15233E]",
          }}
          imageSrc={ecommerceHeroImage}
          imageAlt="E-commerce development dashboard"
          imageVariant="framed"
          imageFit="cover"
          textMotionInitial={{ opacity: 0, y: 22 }}
          imageMotionInitial={{ opacity: 0, y: 22 }}
        />

        <CardsSection
          title="Complete E-commerce Solutions"
          items={ecommerceSolutions}
          headingWrapClassName="mb-14 text-center"
          headingClassName="mb-3 text-3xl font-semibold text-[#D8DEE8]"
          gridClassName="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          cardClassName="group rounded-2xl border border-white/5 bg-[#0C1830] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/35 hover:shadow-[0_14px_36px_rgba(16,53,110,0.32)]"
          iconWrapperClassName="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#102548]"
          iconClassName="h-5 w-5 text-[#2F80ED]"
          titleClassName="mb-2 text-[18px] font-semibold leading-7 text-[#E5ECF8]"
          descClassName="tf-muted-card"
          transitionStep={0.06}
        />

        <TechnologyStackSection
          title="Platforms & Technologies We Use"
          description="Modern e-commerce stack selection based on your catalog size, growth stage, integrations, and business model."
          items={techTags}
        />

        <CardsSection
          title="Features That Drive Online Sales"
          items={featureCards}
          headingWrapClassName="mb-14 text-center"
          headingClassName="mb-3 text-3xl font-semibold text-[#D8DEE8]"
          gridClassName="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          cardClassName="group rounded-2xl border border-white/5 bg-[#0C1830] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/35 hover:shadow-[0_14px_36px_rgba(16,53,110,0.32)]"
          iconWrapperClassName="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#102548]"
          iconClassName="h-5 w-5 text-[#2F80ED]"
          titleClassName="mb-2 text-[17px] font-semibold leading-6 text-[#E5ECF8]"
          descClassName="tf-muted-card"
          transitionStep={0.05}
        />

        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: "Sora, sans-serif" }}>
                Choosing the Right E-commerce Platform
              </h2>
            </motion.div>

            <div className="overflow-x-auto rounded-[24px] border border-[#263550] bg-[#141F36]">
              <table className="w-full min-w-[760px]">
                <thead>
                  <tr className="border-b border-[#2A3954]">
                    <th className="px-6 py-5 text-left text-xl font-semibold tracking-[-0.01em] text-[#E5ECF8]">Platform</th>
                    <th className="px-6 py-5 text-left text-xl font-semibold tracking-[-0.01em] text-[#E5ECF8]">Build</th>
                    <th className="px-6 py-5 text-center text-xl font-semibold tracking-[-0.01em] text-[#E5ECF8]">Scalability</th>
                    <th className="px-6 py-5 text-center text-xl font-semibold tracking-[-0.01em] text-[#E5ECF8]">Best For</th>
                    <th className="px-6 py-5 text-center text-xl font-semibold tracking-[-0.01em] text-[#E5ECF8]">Investment</th>
                  </tr>
                </thead>
                <tbody>
                  {platformRows.map((row) => (
                    <tr key={row.platform} className="border-b border-[#2A3954] last:border-b-0">
                      <td className="px-6 py-5 text-lg text-[#E5ECF8]">{row.platform}</td>
                      <td className="px-6 py-5 tf-muted-table">{row.build}</td>
                      <td className="px-6 py-5 text-center tf-muted-table">{row.scalability}</td>
                      <td className="px-6 py-5 text-center tf-muted-table">{row.bestFor}</td>
                      <td className="px-6 py-5 text-center tf-muted-table">{row.investment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <InvestmentCardsSection
          title="Typical Project Investment"
          cards={investmentCards}
          showEstimateButton
          gridClassName="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          cardClassName="rounded-2xl border border-[#1D2B44] bg-[#101B33] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/35 hover:shadow-[0_14px_36px_rgba(16,53,110,0.32)]"
          cardTitleClassName="text-[18px] font-semibold text-[#E7EDF9]"
          bulletItemClassName="flex items-center gap-3 text-[14px] text-[#9EABC2]"
        />

        <IndustriesSection
          title="Industries Using Our E-commerce Solutions"
          items={industries}
          headingWrapClassName="mb-10 text-center"
          headingClassName="text-3xl font-semibold text-[#E5ECF8]"
          gridClassName="grid gap-4 sm:grid-cols-2 md:grid-cols-4"
          cardClassName="group flex min-h-[130px] flex-col items-center justify-center rounded-2xl border border-[#1E2D45] bg-[#111D36] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30"
          iconWrapperClassName="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105"
          iconClassName="h-5 w-5"
          labelClassName="max-w-[140px] text-[15px] font-semibold leading-snug text-[#E3EAF8]"
        />

        <CaseStudySection
          title="E-commerce Platform We've Built"
          headingWrapClassName="mb-14 text-center"
          headingClassName="mb-3 text-3xl font-semibold text-[#D8DEE8]"
          cardClassName="overflow-hidden rounded-2xl border border-white/5 bg-[linear-gradient(110deg,#0F1B31_0%,#101A2D_55%,#0E1728_100%)]"
          gridClassName="grid items-stretch md:grid-cols-[1.05fr_1fr]"
          imageWrapClassName="h-[280px] md:h-[440px]"
          imageSrc={ecommerceCaseImage}
          imageAlt="Fashion e-commerce platform case study"
          imageClassName="h-full w-full object-cover"
          contentClassName="flex flex-col justify-center p-7 md:p-12"
          badgeText="Fashion E-commerce"
          badgeClassName="mb-6 inline-flex w-fit rounded-full border border-[#2F80ED]/30 bg-[#0F2A5F] px-5 py-2 text-sm font-medium text-[#56A9F5]"
          cardTitle="MyObscur - Fashion E-commerce Platform"
          cardTitleClassName="mb-4 text-2xl font-semibold leading-tight text-[#D8DEE8] md:text-[40px]"
          description="A modern fashion commerce platform built with personalized journeys, secure checkout, and performance-focused storefront architecture."
          descriptionClassName="mb-8 max-w-[620px] tf-muted-card"
          linkTo="/case-studies/myobscur"
          linkClassName="inline-flex items-center gap-2 text-xl font-semibold text-[#2F80ED] transition-colors hover:text-[#66B7FF]"
          linkSuffix={<ArrowUpRight className="h-5 w-5" />}
        />

        <section className="bg-[#081327] py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: "Sora, sans-serif" }}>
                Why Businesses Choose Techflux
              </h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-3">
              {whyTechflux.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group rounded-2xl border border-white/5 bg-[#0C1527] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/35 hover:shadow-[0_14px_36px_rgba(16,53,110,0.32)]"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#102548]">
                    <item.icon className="h-4 w-4 text-[#2F80ED]" />
                  </div>
                  <h3 className="mb-2 text-[17px] font-semibold leading-6 text-[#E5ECF8]">{item.title}</h3>
                  <p className="tf-muted-card">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: "Sora, sans-serif" }}>
                Explore Related Services
              </h2>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
              {relatedServices.map((item, i) => (
                <motion.div
                  key={item.title}
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
              <h2 className="mb-4 text-[40px] font-semibold text-[#D8DEE8]" style={{ fontFamily: "Sora, sans-serif" }}>
                Ready to Launch Your E-commerce Platform?
              </h2>
              <p className="mx-auto mb-8 max-w-[760px] text-sm text-[#8A96AA] md:text-[15px]">
                Let&apos;s create a fast, scalable commerce experience built for conversion and long-term growth.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <GetProjectEstimateButton className="rounded-[10px] bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-8 py-3 text-sm font-semibold text-white shadow-[0_0_16px_rgba(56,169,255,0.3)]" />
                <Link
                  to="/book-strategy-call"
                  className="rounded-[10px] border border-[#8FBDF3]/40 bg-[#223F68] px-8 py-3 text-sm font-semibold text-[#E6F0FF]"
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






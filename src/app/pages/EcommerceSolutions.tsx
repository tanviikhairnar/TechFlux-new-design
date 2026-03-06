import { motion } from "motion/react";
import { CheckCircle2, CreditCard, Package, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ServiceHeroSection } from "../components/ServiceHeroSection";
import { GetProjectEstimateButton } from "../components/GetProjectEstimateButton";
import ecommerceImage from "../../assets/images/smiling-models-posing-clothing-shop.jpg";

const solutionPoints = [
  "Custom storefronts with intuitive product browsing",
  "Secure payment gateway integration (Stripe, PayPal, etc.)",
  "Inventory and order management systems",
  "Mobile-responsive design for seamless shopping",
];

const features = [
  {
    icon: ShoppingCart,
    title: "Shopping Cart",
    desc: "Advanced cart with saved items, wishlist, and abandoned cart recovery.",
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    desc: "Multiple payment methods, secure checkout, and fraud prevention.",
  },
  {
    icon: Package,
    title: "Order Management",
    desc: "Track orders, manage fulfillment, and automate shipping labels.",
  },
];

export default function EcommerceSolutions() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#030914]" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-18%,rgba(47,128,237,0.24),transparent_42%)]" />

        <ServiceHeroSection
          containerClassName="grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-12 lg:min-h-[520px]"
          textWrapClassName="text-center lg:text-left"
          badgeText="E-Commerce Solutions"
          title="Build Complete E-Commerce Experiences"
          titleId="ecommerce-solutions-heading"
          description="Create custom e-commerce platforms with seamless checkout experiences, inventory management, payment processing, and mobile commerce capabilities."
          ctaContainerClassName="mt-8 flex flex-col gap-4 sm:flex-row lg:justify-start"
          primaryCta={{
            label: "Get Project Estimate",
            to: "/get-estimate",
            className:
              "inline-flex h-[52px] items-center justify-center rounded-[10px] border border-[#2F80ED] px-8 text-sm font-semibold text-[#4CA1FF] transition-all hover:bg-[#2F80ED]/10",
          }}
          secondaryCta={{
            label: "Book Strategy Call",
            to: "/book-strategy-call",
            className:
              "inline-flex h-[52px] items-center justify-center rounded-[10px] bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-8 text-sm font-semibold text-white shadow-[0_0_22px_rgba(56,169,255,0.28)] transition-all hover:brightness-110",
          }}
          imageSrc={ecommerceImage}
          imageAlt="E-commerce solution showcase"
          imageVariant="framed"
          imageFit="cover"
        />

        <section className="bg-[#081327] py-20">
          <div className="mx-auto grid w-full max-w-[1260px] items-center gap-10 px-4 lg:grid-cols-[1fr_1.02fr] lg:px-5">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="mb-5 text-3xl font-semibold leading-tight text-[#E5ECF8]" style={{ fontFamily: "Sora, sans-serif" }}>
                Modern E-Commerce Solutions
              </h2>

              <p className="mb-8 text-sm leading-7 text-[#8A96AA] md:text-[15px]">
                We build custom e-commerce platforms tailored to your business needs - whether you&apos;re launching a
                new store, migrating from an existing platform, or need advanced B2B functionality.
              </p>

              <div className="space-y-3">
                {solutionPoints.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[14px] text-[#A8BEDD]">
                    <CheckCircle2 className="h-4 w-4 text-[#2F80ED]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-white/10 bg-[#101D34] p-2"
            >
              <img
                src={ecommerceImage}
                alt="E-commerce mobile"
                className="h-[300px] w-full rounded-lg object-cover md:h-[320px]"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="text-3xl font-semibold text-[#E5ECF8]" style={{ fontFamily: "Sora, sans-serif" }}>
                E-Commerce Features
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {features.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-white/5 bg-[#0C1830] p-8 transition-all duration-300 hover:border-[#2F80ED]/35 hover:shadow-[0_14px_36px_rgba(16,53,110,0.32)]"
                >
                  <item.icon className="mb-4 h-7 w-7 text-[#2F80ED]" />
                  <h3 className="mb-3 text-xl font-semibold leading-tight text-[#E5ECF8]" style={{ fontFamily: "Sora, sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-7 text-[#8A96AA]">{item.desc}</p>
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
                Ready to Launch Your E-Commerce Store?
              </h2>

              <p className="mx-auto mb-8 max-w-[760px] text-sm text-[#8A96AA] md:text-[15px]">
                Let&apos;s build a custom e-commerce solution that drives sales and delivers exceptional customer
                experiences.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/book-strategy-call"
                  className="inline-flex h-[52px] items-center justify-center rounded-[10px] bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-8 text-sm font-medium text-white shadow-[0_0_22px_rgba(56,169,255,0.28)] transition-all hover:brightness-110"
                >
                  Book Strategy Call
                </Link>

                <GetProjectEstimateButton className="inline-flex h-[52px] items-center justify-center rounded-[10px] border border-[#2F80ED] px-8 text-sm font-medium text-[#4CA1FF] transition-all hover:bg-[#2F80ED]/10" />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


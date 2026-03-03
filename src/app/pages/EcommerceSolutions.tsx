import { motion } from 'motion/react';
import { CheckCircle2, CreditCard, Package, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const solutionPoints = [
  'Custom storefronts with intuitive product browsing',
  'Secure payment gateway integration (Stripe, PayPal, etc.)',
  'Inventory and order management systems',
  'Mobile-responsive design for seamless shopping',
];

const features = [
  {
    icon: ShoppingCart,
    title: 'Shopping Cart',
    desc: 'Advanced cart with saved items, wishlist, and abandoned cart recovery.',
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    desc: 'Multiple payment methods, secure checkout, and fraud prevention.',
  },
  {
    icon: Package,
    title: 'Order Management',
    desc: 'Track orders, manage fulfillment, and automate shipping labels.',
  },
];

export default function EcommerceSolutions() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.14),transparent_42%)]" />

        <section className="relative z-10 mx-auto flex min-h-[520px] w-full max-w-[1260px] items-center px-4 pb-16 pt-24 text-center md:min-h-[620px] md:pb-20 md:pt-32 lg:px-5">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full">
            <div className="mx-auto mb-6 inline-flex rounded-full border border-[#2F80ED]/40 bg-[#0C2146] px-4 py-1 text-sm text-[#72B5FF]">
              E-Commerce Solutions
            </div>
            <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight text-[#F8FAFC] sm:text-5xl md:text-6xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              Build Complete E-Commerce Experiences
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-[#94A3B8]">
              Create custom e-commerce platforms with seamless checkout experiences, inventory management, payment
              processing, and mobile commerce capabilities.
            </p>
            <Link
              to="/book-strategy-call"
              className="inline-flex h-[52px] items-center rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-8 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-lg hover:shadow-[#2F80ED]/30"
            >
              Book Strategy Call
            </Link>
          </motion.div>
        </section>

        <section className="border-y border-white/5 bg-[#0E1A31] py-20">
          <div className="mx-auto grid w-full max-w-[1260px] items-center gap-10 px-4 lg:grid-cols-[1fr_1.04fr] lg:px-5">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="mb-5 text-4xl font-bold text-[#E5E7EB] md:text-[46px]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Modern E-Commerce Solutions
              </h2>
              <p className="mb-7 text-base leading-relaxed text-[#94A3B8]">
                We build custom e-commerce platforms tailored to your business needs, whether you&apos;re launching a
                new store, migrating from an existing platform, or need advanced B2B functionality.
              </p>
              <div className="space-y-3">
                {solutionPoints.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[#A8BEDD]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2F80ED]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#111D35] p-2"
            >
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80"
                alt="E-commerce on mobile phone"
                className="h-[320px] w-full rounded-xl object-cover lg:h-[360px]"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
              <h2 className="text-4xl font-bold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
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
                  className="group rounded-2xl border border-white/5 bg-[#101C34] p-6 transition-all hover:-translate-y-1 hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
                >
                  <item.icon className="mb-4 h-7 w-7 text-[#2F80ED]" />
                  <h3 className="mb-3 text-2xl font-semibold text-[#E5E7EB]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#94A3B8]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/5 bg-[#121F38] px-8 py-14 text-center md:px-12"
            >
              <h2 className="mb-4 text-4xl font-bold text-[#E5E7EB] md:text-5xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to Launch Your E-Commerce Store?
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-[#94A3B8]">
                Let&apos;s build a custom e-commerce solution that drives sales and delivers exceptional customer
                experiences.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/book-strategy-call"
                  className="inline-flex h-[50px] items-center justify-center rounded-xl bg-gradient-to-r from-[#39AEFE] to-[#2F80ED] px-8 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-lg hover:shadow-[#2F80ED]/30"
                >
                  Book Strategy Call
                </Link>
                <Link
                  to="/get-estimate"
                  className="inline-flex h-[50px] items-center justify-center rounded-xl border border-[#2F80ED] px-8 text-sm font-semibold text-[#69B7FF] transition-all hover:bg-[#2F80ED]/10"
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

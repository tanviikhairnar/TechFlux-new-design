import { motion } from 'motion/react';
import { ArrowRight, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const posts = [
  {
    category: 'SaaS Development',
    readTime: '8 min read',
    title: 'How to Build a SaaS MVP in 45-60 Days (Without Wasting Budget)',
    excerpt:
      "Launching a SaaS product is exciting but most founders lose months (and money) before reaching product-market fit. Here's how to build a lean, scalable SaaS MVP in 45-60 days.",
    date: 'Feb 28, 2026',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'AI & Automation',
    readTime: '10 min read',
    title: 'How AI is Transforming SaaS and On-Demand Applications in 2026',
    excerpt:
      "AI is no longer optional. It's becoming the competitive advantage inside modern digital products. From SaaS dashboards to on-demand platforms, AI is reshaping how users interact with technology.",
    date: 'Feb 25, 2026',
    image:
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'On-Demand Platforms',
    readTime: '9 min read',
    title: 'How On-Demand Platforms Are Scaling Service Industries',
    excerpt:
      "The service industry is evolving rapidly. Platforms like ride-hailing apps, home service marketplaces, and luxury booking systems have changed user expectations forever. Here's how modern on-demand platforms scale successfully.",
    date: 'Feb 22, 2026',
    image:
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Blog() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-8%,rgba(37,99,235,0.14),transparent_44%)]" />

        <section className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-16 pt-28 md:pb-20 md:pt-32 lg:px-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <h1 className="mx-auto mb-6 max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-[#E5E7EB] sm:text-5xl md:text-6xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              Insights on SaaS, AI & Digital Product Engineering
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#93A4BE] md:text-lg">
              Actionable insights, product strategies, and technical deep dives from Techflux experts.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group overflow-hidden rounded-2xl border border-[#24314a] bg-[#101A31] shadow-[0_20px_35px_rgba(2,8,23,0.28)] transition-all hover:border-[#32598b]"
              >
                <img src={post.image} alt={post.title} className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2.5 text-xs">
                    <span className="rounded-full bg-[#123562] px-2.5 py-1 text-[#56A9F5]">{post.category}</span>
                    <span className="flex items-center gap-1 text-[#9AA8BE]">
                      <Clock3 className="h-[13px] w-[13px]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="mb-2.5 text-xl font-semibold leading-[1.3] tracking-[-0.01em] text-[#E5E7EB] md:text-[28px]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {post.title}
                  </h2>
                  <p className="mb-5 text-sm leading-[1.65] text-[#93A4BE] md:text-[15px]">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#8F9FB6] md:text-[13px]">{post.date}</span>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F80ED] transition-all duration-300 hover:text-[#61B8FF] hover:[text-shadow:0_0_14px_rgba(47,128,237,0.75)] group-hover:[text-shadow:0_0_10px_rgba(47,128,237,0.55)]"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#243452] bg-gradient-to-r from-[#1A2D49] to-[#202E4A] px-8 py-12 text-center md:px-12 md:py-14"
            >
              <h2 className="mb-4 text-3xl font-bold tracking-[-0.01em] text-[#E5E7EB] md:text-5xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to Build Something Scalable?
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-lg leading-[1.45] text-[#93A4BE]">
                Whether you&apos;re launching a SaaS MVP, integrating AI, or building an on-demand platform, we can
                help you ship faster.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/book-strategy-call"
                  className="rounded-xl bg-gradient-to-r from-[#38A9FF] to-[#2B7BDF] px-9 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(47,128,237,0.35)]"
                >
                  Book Strategy Call
                </Link>
                <Link
                  to="/get-estimate"
                  className="rounded-xl bg-[#364B69] px-8 py-3 text-sm font-semibold text-[#E5E7EB] hover:bg-[#466087]"
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



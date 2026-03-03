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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.14),transparent_42%)]" />

        <section className="relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-16 pt-28 md:pb-20 md:pt-32 lg:px-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-14 text-center"
          >
            <h1 className="mx-auto mb-6 max-w-5xl text-4xl font-bold leading-tight text-[#E5E7EB] sm:text-5xl md:text-6xl" style={{ fontFamily: 'Sora, sans-serif' }}>
              Insights on SaaS, AI & Digital Product Engineering
            </h1>
            <p className="mx-auto max-w-3xl text-base text-[#94A3B8] md:text-lg">
              Actionable insights, product strategies, and technical deep dives from Tachflux experts.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group overflow-hidden rounded-2xl border border-white/6 bg-[#101A31] transition-all hover:border-[#2F80ED]/30 hover:shadow-lg hover:shadow-[#2F80ED]/20"
              >
                <img src={post.image} alt={post.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-3 text-sm">
                    <span className="rounded-full bg-[#10284D] px-3 py-1 text-[#6DB6FF]">{post.category}</span>
                    <span className="flex items-center gap-1 text-[#94A3B8]">
                      <Clock3 className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="mb-3 text-2xl font-semibold leading-tight text-[#E5E7EB] md:text-3xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {post.title}
                  </h2>
                  <p className="mb-6 text-base leading-relaxed text-[#94A3B8]">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-base">
                    <span className="text-[#94A3B8]">{post.date}</span>
                    <button type="button" className="inline-flex items-center gap-2 font-semibold text-[#2F80ED]">
                      Read More
                      <ArrowRight className="h-4 w-4" />
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
              className="rounded-3xl border border-white/5 bg-[#1A2B46] px-8 py-12 text-center md:px-12"
            >
              <h2 className="mb-4 text-3xl font-bold text-[#E5E7EB] md:text-5xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to Build Something Scalable?
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-lg text-[#94A3B8]">
                Whether you&apos;re launching a SaaS MVP, integrating AI, or building an on-demand platform, we can
                help you ship faster.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/book-strategy-call"
                  className="rounded-xl bg-gradient-to-r from-[#38A9FF] to-[#2B7BDF] px-8 py-3 text-sm font-semibold text-white"
                >
                  Book Strategy Call
                </Link>
                <Link
                  to="/get-estimate"
                  className="rounded-xl bg-[#394f70] px-8 py-3 text-sm font-semibold text-[#E5E7EB] hover:bg-[#466087]"
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


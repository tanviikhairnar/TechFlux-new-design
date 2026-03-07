import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';
import { GetProjectEstimateButton } from './GetProjectEstimateButton';
import { Navigation } from './Navigation';

type ArticleBlock = { type: 'paragraph'; text: string } | { type: 'list'; items: string[] };

export type ArticleSection = {
  title: string;
  blocks: ArticleBlock[];
};

type ArticlePageTemplateProps = {
  category: string;
  title: string;
  subtitle: string;
  sections: ArticleSection[];
  ctaTitle: string;
  ctaDescription: string;
  headingBackgroundImage?: string;
  leftOrbClassName?: string;
  rightOrbClassName?: string;
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#39AEFE]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Section({ section }: { section: ArticleSection }) {
  return (
    <section className="border-t border-white/10 py-10 first:border-t-0 first:pt-0 md:py-12">
      <h2 className="mb-4 text-2xl font-bold leading-tight text-[#E5E7EB] md:text-3xl" style={{ fontFamily: 'Sora, sans-serif' }}>
        {section.title}
      </h2>
      <div className="space-y-4 text-[15px] leading-relaxed text-[#9BB0CC] md:text-base">
        {section.blocks.map((block, index) =>
          block.type === 'paragraph' ? <p key={index}>{block.text}</p> : <BulletList key={index} items={block.items} />
        )}
      </div>
    </section>
  );
}

export function ArticlePageTemplate({
  category,
  title,
  subtitle,
  sections,
  ctaTitle,
  ctaDescription,
  headingBackgroundImage,
  leftOrbClassName = 'pointer-events-none absolute left-[-80px] top-[320px] h-[350px] w-[350px] rounded-full bg-[#1F4E9C]/20 blur-3xl',
  rightOrbClassName = 'pointer-events-none absolute right-[-80px] top-[980px] h-[350px] w-[350px] rounded-full bg-[#39AEFE]/10 blur-3xl',
}: ArticlePageTemplateProps) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#020617]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-8%,rgba(37,99,235,0.16),transparent_42%)]" />
        <div className={leftOrbClassName} />
        <div className={rightOrbClassName} />

        <article className="relative z-10 mx-auto w-full max-w-[1260px] px-0 pb-20 pt-28 md:px-1 lg:px-2 md:pt-32">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-7">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#56A9F5] transition-colors hover:text-[#87CBFF]">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.header
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mb-12 overflow-hidden rounded-3xl border border-[#274468]/70 bg-[#0B1426] px-2 py-8 md:px-3 md:py-10"
          >
            {headingBackgroundImage ? (
              <img src={headingBackgroundImage} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center" />
            ) : null}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/92 via-black/82 to-black/72" />
            <div className="relative z-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.13em] text-[#66BAFF]">{category}</p>
              <h1 className="mb-5 text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-[#E5E7EB] md:text-5xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                {title}
              </h1>
              <p className="max-w-4xl text-base leading-relaxed text-[#CEDAEB] md:text-lg">{subtitle}</p>
            </div>
          </motion.header>

          {sections.map((section) => (
            <Section key={section.title} section={section} />
          ))}

          <section className="mt-8 border-t border-white/10 pt-10">
            <div className="rounded-2xl border border-[#29446A] bg-gradient-to-r from-[#182A45] to-[#213554] px-7 py-8 text-center md:px-10">
              <h3 className="mb-3 text-2xl font-bold text-[#E5E7EB] md:text-3xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                {ctaTitle}
              </h3>
              <p className="mx-auto mb-6 max-w-3xl text-[#9CB0CB]">{ctaDescription}</p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/book-strategy-call" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#38A9FF] to-[#2B7BDF] px-8 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(47,128,237,0.35)]">
                  Book Strategy Call
                </Link>
                <GetProjectEstimateButton
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#364B69] px-8 py-3 text-sm font-semibold text-[#E5E7EB] hover:bg-[#466087]"
                  after={<ArrowRight className="h-4 w-4" />}
                />
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}

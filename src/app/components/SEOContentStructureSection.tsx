import { motion } from "motion/react";

const seoContentBlocks = [
  {
    heading: "Primary SEO Heading (H2)",
    body: "Add your primary SEO paragraph here. Keep this section focused on search intent and core keywords.",
    points: ["Add supporting point 1", "Add supporting point 2", "Add supporting point 3"],
  },
  {
    heading: "Secondary SEO Heading (H2)",
    body: "Add your secondary SEO paragraph here. Explain benefits, outcomes, and differentiators in simple language.",
    points: ["Add supporting point 1", "Add supporting point 2", "Add supporting point 3"],
  },
  {
    heading: "Long-Tail SEO Heading (H2)",
    body: "Add long-tail keyword-focused copy here. Answer specific user queries and include clear intent-based content.",
    points: ["Add supporting point 1", "Add supporting point 2", "Add supporting point 3"],
  },
];

export function SEOContentStructureSection() {
  return (
    <section className="bg-[#081327] py-20">
      <div className="tf-shell">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 text-center">
          <h2 className="mb-3 text-3xl font-semibold text-[#D8DEE8]" style={{ fontFamily: "Sora, sans-serif" }}>
            SEO Content Structure
          </h2>
          <p className="mx-auto max-w-[760px] text-sm text-[#8A96AA] md:text-[15px]">
            This is a placeholder structure. Replace headings, paragraphs, and bullet points with your final SEO content.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {seoContentBlocks.map((block, i) => (
            <motion.article
              key={block.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/5 bg-[#0C1830] p-6"
            >
              <h3 className="mb-3 text-[18px] font-semibold text-[#E5ECF8]">{block.heading}</h3>
              <p className="mb-4 text-[14px] leading-6 text-[#9EABC2]">{block.body}</p>
              <ul className="space-y-2">
                {block.points.map((point, pointIndex) => (
                  <li key={`${block.heading}-${pointIndex}`} className="text-[14px] text-[#9EABC2]">
                    - {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


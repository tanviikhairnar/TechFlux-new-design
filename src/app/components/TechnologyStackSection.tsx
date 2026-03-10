import { motion } from 'framer-motion';

type TechnologyStackSectionProps = {
  title: string;
  description: string;
  items: string[];
  sectionClassName?: string;
  headingWrapClassName?: string;
  headingClassName?: string;
  descriptionClassName?: string;
  tagsWrapClassName?: string;
  tagClassName?: string;
};

export function TechnologyStackSection({
  title,
  description,
  items,
  sectionClassName = 'bg-[#081327] py-20',
  headingWrapClassName = 'mb-14 text-center',
  headingClassName = 'mb-3 text-[42px] font-semibold text-[#D8DEE8]',
  descriptionClassName = 'text-sm text-[#8A96AA] md:text-[15px]',
  tagsWrapClassName = 'mx-auto flex max-w-[1400px] flex-wrap justify-center gap-4',
  tagClassName = 'inline-flex min-h-[72px] min-w-[120px] items-center justify-center rounded-2xl border border-[#1E2D46] bg-[#121F39] px-8 py-4 text-[16px] font-semibold tracking-wide text-[#D8DEE8] transition-all hover:border-[#2F80ED]/45 hover:bg-[#152645]',
}: TechnologyStackSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className="tf-shell">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={headingWrapClassName}>
          <h2 className={headingClassName} style={{ fontFamily: 'Sora, sans-serif' }}>
            {title}
          </h2>
          <p className={descriptionClassName}>{description}</p>
        </motion.div>
        <div className={tagsWrapClassName}>
          {items.map((item) => (
            <span key={item} className={tagClassName}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


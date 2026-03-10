import { motion } from 'framer-motion';
import type { ComponentType } from 'react';

type IndustryItem = {
  label: string;
  icon: ComponentType<{ className?: string }>;
  tone?: string;
};

type IndustriesSectionProps = {
  title: string;
  items: IndustryItem[];
  sectionClassName?: string;
  headingWrapClassName?: string;
  headingClassName?: string;
  gridClassName?: string;
  cardClassName?: string;
  iconWrapperClassName?: string;
  iconClassName?: string;
  labelClassName?: string;
};

export function IndustriesSection({
  title,
  items,
  sectionClassName = 'bg-[#081327] py-20',
  headingWrapClassName = 'mb-9 text-center',
  headingClassName = 'text-3xl font-semibold text-[#E5ECF8]',
  gridClassName = 'grid gap-6 sm:grid-cols-3 md:grid-cols-6',
  cardClassName = 'group flex min-h-[200px] flex-col items-center justify-center rounded-2xl border border-[#1E2D45] bg-[#111D36] p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/30',
  iconWrapperClassName = 'mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_22px_rgba(122,185,255,0.35)]',
  iconClassName = 'h-8 w-8 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]',
  labelClassName = 'max-w-[150px] text-[18px] font-semibold leading-snug text-[#E3EAF8]',
}: IndustriesSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className="tf-shell">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={headingWrapClassName}>
          <h2 className={headingClassName} style={{ fontFamily: 'Sora, sans-serif' }}>
            {title}
          </h2>
        </motion.div>

        <div className={gridClassName}>
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={cardClassName}
            >
              <div className={`${iconWrapperClassName} ${item.tone ?? ''}`}>
                <item.icon className={iconClassName} />
              </div>
              <p className={labelClassName}>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


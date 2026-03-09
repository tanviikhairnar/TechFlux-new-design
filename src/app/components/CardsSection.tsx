import { motion } from 'motion/react';
import type { ComponentType } from 'react';

type CardItem = {
  title: string;
  desc: string;
  icon: ComponentType<{ className?: string }>;
};

type CardsSectionProps = {
  title: string;
  subtitle?: string;
  items: CardItem[];
  sectionClassName?: string;
  containerClassName?: string;
  headingWrapClassName?: string;
  headingClassName?: string;
  subtitleClassName?: string;
  gridClassName?: string;
  cardClassName?: string;
  iconWrapperClassName?: string;
  iconClassName?: string;
  titleClassName?: string;
  descClassName?: string;
  transitionStep?: number;
  transitionOffsetFn?: (index: number) => number;
};

export function CardsSection({
  title,
  subtitle,
  items,
  sectionClassName = 'py-20',
  containerClassName = 'mx-auto w-full max-w-[1260px] px-4 lg:px-5',
  headingWrapClassName = 'mb-9 text-center',
  headingClassName = 'text-3xl font-semibold text-[#D8DEE8]',
  subtitleClassName = 'text-sm text-[#8A96AA] md:text-[15px]',
  gridClassName = 'grid gap-4 md:grid-cols-2 lg:grid-cols-3',
  cardClassName = 'group rounded-2xl border border-white/5 bg-[#0C1830] p-6 transition-all duration-300 hover:border-[#2F80ED]/35 hover:shadow-[0_14px_36px_rgba(16,53,110,0.32)]',
  iconWrapperClassName = 'mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#102548]',
  iconClassName = 'h-4 w-4 text-[#2F80ED]',
  titleClassName = 'mb-2 tf-card-title',
  descClassName = 'tf-muted-card',
  transitionStep = 0.05,
  transitionOffsetFn,
}: CardsSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={headingWrapClassName}>
          <h2 className={headingClassName} style={{ fontFamily: 'Sora, sans-serif' }}>
            {title}
          </h2>
          {subtitle ? <p className={subtitleClassName}>{subtitle}</p> : null}
        </motion.div>

        <div className={gridClassName}>
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (transitionOffsetFn ? transitionOffsetFn(i) : i) * transitionStep }}
              className={cardClassName}
            >
              <div className={iconWrapperClassName}>
                <item.icon className={iconClassName} />
              </div>
              <h3 className={titleClassName}>{item.title}</h3>
              <p className={descClassName}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

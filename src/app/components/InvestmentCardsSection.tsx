import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

type InvestmentCard = {
  title: string;
  bullets: string[];
};

type InvestmentCardsSectionProps = {
  title: string;
  cards: InvestmentCard[];
  sectionClassName?: string;
  headingClassName?: string;
  gridClassName?: string;
  cardClassName?: string;
  cardTitleClassName?: string;
  bulletListClassName?: string;
  bulletItemClassName?: string;
};

export function InvestmentCardsSection({
  title,
  cards,
  sectionClassName = 'py-20',
  headingClassName = 'mb-9 text-center text-3xl font-semibold text-[#E5ECF8]',
  gridClassName = 'grid gap-4 md:grid-cols-3',
  cardClassName = 'rounded-2xl border border-[#1D2B44] bg-[#101B33] p-8 md:p-10',
  cardTitleClassName = 'text-[20px] font-semibold text-[#E7EDF9]',
  bulletListClassName = 'mt-7 space-y-3.5',
  bulletItemClassName = 'flex items-center gap-3 text-[15px] text-[#9EABC2]',
}: InvestmentCardsSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className="mx-auto w-full max-w-[1260px] px-4 lg:px-5">
        <h2 className={headingClassName} style={{ fontFamily: 'Sora, sans-serif' }}>
          {title}
        </h2>
        <div className={gridClassName}>
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={cardClassName}
            >
              <p className={cardTitleClassName}>{card.title}</p>
              <ul className={bulletListClassName}>
                {card.bullets.map((bullet) => (
                  <li key={bullet} className={bulletItemClassName}>
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#2F80ED]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

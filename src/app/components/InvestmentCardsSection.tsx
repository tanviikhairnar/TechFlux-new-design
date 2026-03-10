import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { GetProjectEstimateButton } from './GetProjectEstimateButton';

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
  showEstimateButton?: boolean;
  estimateButtonWrapClassName?: string;
  estimateButtonClassName?: string;
  estimateButtonTo?: string;
  estimateButtonLabel?: string;
};

export function InvestmentCardsSection({
  title,
  cards,
  sectionClassName = 'py-20',
  headingClassName = 'mb-9 text-center text-3xl font-semibold text-[#E5ECF8]',
  gridClassName = 'grid gap-4 md:grid-cols-3',
  cardClassName = 'rounded-2xl border border-[#1D2B44] bg-[#101B33] p-8 md:p-10',
  cardTitleClassName = 'text-[21px] font-semibold text-[#E7EDF9]',
  bulletListClassName = 'mt-7 space-y-3.5',
  bulletItemClassName = 'flex items-center gap-3 text-[16px] text-[#9EABC2]',
  showEstimateButton = false,
  estimateButtonWrapClassName = 'mt-10 flex justify-center',
  estimateButtonClassName = 'inline-flex h-[50px] items-center justify-center rounded-xl bg-gradient-to-r from-[#39AAFF] to-[#2A79D9] px-8 text-sm font-semibold text-white shadow-[0_0_16px_rgba(56,169,255,0.3)] transition-all hover:-translate-y-0.5 hover:brightness-110',
  estimateButtonTo = '/get-estimate',
  estimateButtonLabel = 'Get Project Estimate',
}: InvestmentCardsSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className="tf-shell">
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
        {showEstimateButton ? (
          <div className={estimateButtonWrapClassName}>
            <GetProjectEstimateButton className={estimateButtonClassName} to={estimateButtonTo} label={estimateButtonLabel} />
          </div>
        ) : null}
      </div>
    </section>
  );
}


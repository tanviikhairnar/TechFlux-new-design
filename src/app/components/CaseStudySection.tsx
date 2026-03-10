import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type CaseStudySectionProps = {
  sectionClassName?: string;
  headingWrapClassName?: string;
  headingClassName?: string;
  title: string;
  cardClassName?: string;
  gridClassName?: string;
  imageWrapClassName?: string;
  imageSrc: string;
  imageAlt: string;
  imageFit?: 'cover' | 'contain';
  imageClassName?: string;
  contentClassName?: string;
  badgeText?: string;
  badgeClassName?: string;
  cardTitle: string;
  cardTitleClassName?: string;
  description: string;
  descriptionClassName?: string;
  linkTo: string;
  linkClassName?: string;
  linkLabel?: string;
  linkSuffix?: ReactNode;
};

export function CaseStudySection({
  sectionClassName = 'py-20',
  headingWrapClassName = 'mb-8 text-center',
  headingClassName = 'text-3xl font-semibold text-[#E5ECF8]',
  title,
  cardClassName = 'overflow-hidden rounded-2xl border border-white/5 bg-[#0C1830]',
  gridClassName = 'grid md:grid-cols-[1.05fr_1fr]',
  imageWrapClassName,
  imageSrc,
  imageAlt,
  imageFit = 'cover',
  imageClassName,
  contentClassName = 'p-7 md:p-8',
  badgeText,
  badgeClassName = 'inline-flex rounded-full border border-[#2F80ED]/40 bg-[#102548] px-3 py-1 text-xs text-[#7AB9FF]',
  cardTitle,
  cardTitleClassName = 'mt-4 text-xl font-semibold text-[#E5ECF8]',
  description,
  descriptionClassName = 'mt-3 text-sm leading-7 text-[#95A4BF]',
  linkTo,
  linkClassName = 'mt-5 inline-block text-sm font-semibold text-[#4FB1FF] hover:text-[#79C5FF]',
  linkLabel = 'View Case Study',
  linkSuffix,
}: CaseStudySectionProps) {
  const resolvedImageWrapClassName =
    imageWrapClassName || (imageFit === 'contain' ? 'flex h-[280px] items-center justify-center overflow-hidden bg-[#0E1B34] md:h-[330px]' : undefined);

  const resolvedImageClassName =
    imageClassName ||
    (imageFit === 'contain'
      ? 'h-full w-full object-contain p-4 md:p-6'
      : imageWrapClassName
        ? 'h-full w-full object-cover'
        : 'h-[280px] w-full object-cover md:h-[330px]');

  return (
    <section className={sectionClassName}>
      <div className="tf-shell">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={headingWrapClassName}>
          <h2 className={headingClassName} style={{ fontFamily: 'Sora, sans-serif' }}>
            {title}
          </h2>
        </motion.div>

        <div className={cardClassName}>
          <div className={gridClassName}>
            <div className={resolvedImageWrapClassName}>
              <img src={imageSrc} alt={imageAlt} className={resolvedImageClassName} />
            </div>
            <div className={contentClassName}>
              {badgeText ? <span className={badgeClassName}>{badgeText}</span> : null}
              <h3 className={cardTitleClassName} style={{ fontFamily: 'Sora, sans-serif' }}>
                {cardTitle}
              </h3>
              <p className={descriptionClassName}>{description}</p>
              <Link to={linkTo} className={linkClassName}>
                {linkLabel}
                {linkSuffix}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


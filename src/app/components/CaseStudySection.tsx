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
  equalSplit?: boolean;
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
  headingClassName = 'text-4xl font-semibold text-[#E5ECF8] md:text-[52px]',
  title,
  cardClassName = 'tf-hover-card group overflow-hidden rounded-2xl border border-white/5 bg-[linear-gradient(110deg,#0F1B31_0%,#101A2D_55%,#0E1728_100%)] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 active:-translate-y-1 hover:border-[#2F80ED]/25 active:border-[#2F80ED]/25 hover:shadow-[0_24px_56px_rgba(7,20,48,0.42)] active:shadow-[0_24px_56px_rgba(7,20,48,0.42)]',
  gridClassName,
  equalSplit = true,
  imageWrapClassName,
  imageSrc,
  imageAlt,
  imageFit = 'cover',
  imageClassName,
  contentClassName = 'flex items-center p-7 md:p-8 lg:p-9',
  badgeText,
  badgeClassName = 'inline-flex rounded-full border border-[#2F80ED]/30 bg-[#0F2A5F] px-5 py-2 text-sm font-medium text-[#56A9F5]',
  cardTitle,
  cardTitleClassName = 'mt-5 text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#E5ECF8] md:text-[2.75rem]',
  description,
  descriptionClassName = 'mt-6 text-sm leading-8 text-[#8A96AA] md:text-[17px]',
  linkTo,
  linkClassName = 'inline-flex items-center gap-2 text-xl font-semibold text-[#2F80ED] transition-[color,transform] duration-300 hover:translate-x-1 active:translate-x-1 hover:text-[#66B7FF] active:text-[#66B7FF]',
  linkLabel = 'View Case Study',
  linkSuffix,
}: CaseStudySectionProps) {
  const resolvedGridClassName =
    gridClassName || `grid items-stretch ${equalSplit ? 'md:grid-cols-2' : 'md:grid-cols-[1.08fr_0.92fr]'}`;

  const resolvedImageWrapClassName =
    imageWrapClassName || (imageFit === 'contain' ? 'flex min-h-[320px] items-center justify-center overflow-hidden bg-[#0E1B34] md:min-h-[420px]' : undefined);

  const resolvedImageClassName =
    imageClassName ||
    (imageFit === 'contain'
      ? 'h-full w-full object-contain p-5 md:p-8'
      : imageWrapClassName
        ? 'h-full w-full object-cover'
        : 'min-h-[320px] w-full object-cover md:min-h-[420px]');

  return (
    <section className={sectionClassName}>
      <div className="tf-shell">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={headingWrapClassName}>
          <h2 className={headingClassName} style={{ fontFamily: 'Sora, sans-serif' }}>
            {title}
          </h2>
        </motion.div>

        <div className="mx-auto max-w-[1100px]">
          <div className={cardClassName}>
            <div className={resolvedGridClassName}>
              <div className={resolvedImageWrapClassName}>
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  className={`${resolvedImageClassName} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
                />
              </div>
              <div className={contentClassName}>
                <div className="w-full max-w-[480px]">
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
        </div>
      </div>
    </section>
  );
}

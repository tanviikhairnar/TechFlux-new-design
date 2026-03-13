import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type CtaItem = {
  label: string;
  to?: string;
  href?: string;
  className: string;
};

type ServiceHeroSectionProps = {
  sectionClassName?: string;
  containerClassName?: string;
  textWrapClassName?: string;
  badgeText?: string;
  badgeClassName?: string;
  title: ReactNode;
  titleId?: string;
  titleClassName?: string;
  description: string;
  descriptionClassName?: string;
  ctaContainerClassName?: string;
  primaryCta: CtaItem;
  secondaryCta: CtaItem;
  imageSrc: string;
  imageAlt: string;
  imageVariant?: 'default' | 'framed';
  imageFit?: 'cover' | 'contain';
  imageContainerClassName?: string;
  imageOverlayClassName?: string;
  imageClassName?: string;
  textMotionInitial?: { opacity: number; y: number };
  imageMotionInitial?: { opacity: number; y?: number; x?: number };
};

function CtaButton({ label, to, href, className }: CtaItem) {
  if (to) {
    return (
      <Link to={to} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {label}
    </a>
  );
}

export function ServiceHeroSection({
  sectionClassName = 'relative z-10 tf-shell pb-24 pt-28 md:pb-32 md:pt-40',
  containerClassName = 'grid items-center gap-10 lg:min-h-[520px] lg:grid-cols-[1fr_1.05fr]',
  textWrapClassName = '',
  badgeText,
  badgeClassName = 'mb-6 inline-flex rounded-full border border-[#2F80ED]/35 bg-[#0A1F43] px-4 py-1 text-sm text-[#7AB9FF]',
  title,
  titleId,
  titleClassName = 'max-w-[620px] text-4xl font-bold leading-tight text-[#D8DEE8] sm:text-5xl md:text-6xl',
  description,
  descriptionClassName = 'mt-5 max-w-[620px] text-base leading-relaxed text-[#8A96AA] md:text-lg',
  ctaContainerClassName = 'mt-8 flex flex-col gap-4 sm:flex-row',
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
  imageVariant = 'default',
  imageFit = 'cover',
  imageContainerClassName,
  imageOverlayClassName,
  imageClassName,
  textMotionInitial = { opacity: 0, y: 30 },
  imageMotionInitial = { opacity: 0, y: 22 },
}: ServiceHeroSectionProps) {
  const resolvedImageContainerClassName =
    imageContainerClassName ||
    (imageVariant === 'framed'
      ? `relative overflow-hidden rounded-[28px] bg-[#0E1B34] p-4 shadow-[0_22px_56px_rgba(3,11,27,0.32)] md:p-6 ${
          imageFit === 'contain' ? 'flex items-center justify-center' : ''
        }`
      : 'overflow-hidden rounded-2xl bg-[#0E1B34] shadow-[0_20px_50px_rgba(2,10,28,0.35)]');

  const resolvedImageOverlayClassName =
    imageOverlayClassName;

  const resolvedImageClassName =
    imageClassName ||
    (imageVariant === 'framed'
      ? imageFit === 'contain'
        ? 'relative z-10 h-auto w-full rounded-r-[18px] rounded-tl-[18px] object-contain'
        : 'relative z-10 h-auto w-full rounded-r-[18px] rounded-tl-[18px] object-cover'
      : imageFit === 'contain'
        ? 'h-auto w-full object-contain'
        : 'h-auto w-full object-cover');

  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <motion.div initial={textMotionInitial} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className={textWrapClassName}>
          {badgeText ? <div className={badgeClassName}>{badgeText}</div> : null}
          <h1 id={titleId} className={titleClassName} style={{ fontFamily: 'Sora, sans-serif' }}>
            {title}
          </h1>
          <p className={descriptionClassName}>{description}</p>
          <div className={ctaContainerClassName}>
            <CtaButton {...primaryCta} />
            <CtaButton {...secondaryCta} />
          </div>
        </motion.div>

        <motion.div
          initial={imageMotionInitial}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className={resolvedImageContainerClassName}
        >
          {resolvedImageOverlayClassName ? <div className={resolvedImageOverlayClassName} /> : null}
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className={resolvedImageClassName}
          />
        </motion.div>
      </div>
    </section>
  );
}


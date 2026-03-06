import { motion } from 'motion/react';
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
  sectionClassName = 'relative z-10 mx-auto w-full max-w-[1260px] px-4 pb-24 pt-28 md:pb-32 md:pt-40 lg:px-5',
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
  imageContainerClassName = 'overflow-hidden rounded-2xl border border-white/10 bg-[#0E1B34] shadow-[0_20px_50px_rgba(2,10,28,0.35)]',
  imageOverlayClassName,
  imageClassName = 'h-[300px] w-full object-cover md:h-[380px] lg:h-[460px]',
  textMotionInitial = { opacity: 0, y: 30 },
  imageMotionInitial = { opacity: 0, y: 22 },
}: ServiceHeroSectionProps) {
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
          className={imageContainerClassName}
        >
          {imageOverlayClassName ? <div className={imageOverlayClassName} /> : null}
          <img src={imageSrc} alt={imageAlt} className={imageClassName} />
        </motion.div>
      </div>
    </section>
  );
}

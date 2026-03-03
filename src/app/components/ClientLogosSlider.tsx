import { motion } from 'motion/react';

const logoFiles = import.meta.glob('../../assets/logos/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const clientLogos = Object.entries(logoFiles)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    const filename = path.split('/').pop() || 'logo';
    const cleanName = filename.replace(/\.[^/.]+$/, '').replace(/[_-]+/g, ' ').trim();
    const alt = cleanName.replace(/\b\w/g, (c) => c.toUpperCase());
    return { src, alt };
  });

export function ClientLogosSlider() {
  return (
    <section className="py-10">
      <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5">
        <div className="relative hidden overflow-hidden rounded-2xl border border-white/5 bg-[#0F1B33] py-3 md:block">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0F1B33] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0F1B33] to-transparent" />

          <motion.div
            className="flex w-max items-center gap-8 px-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ ease: 'linear', duration: 24, repeat: Infinity }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="group flex h-20 w-[190px] shrink-0 items-center justify-center rounded-xl border border-white/8 bg-[#162844] px-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2F80ED]/45 hover:bg-[#1A3358] hover:shadow-lg hover:shadow-[#2F80ED]/25"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-11 w-auto max-w-full object-contain grayscale-[0.25] contrast-110 opacity-85 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-white/5 bg-[#0F1B33] py-2 md:hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0F1B33] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#0F1B33] to-transparent" />

          <motion.div
            className="flex w-max items-center gap-5"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ ease: 'linear', duration: 18, repeat: Infinity }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={`mobile-${logo.alt}-${index}`}
                className="group flex h-14 w-[138px] shrink-0 items-center justify-center rounded-lg border border-white/8 bg-[#162844] px-2"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-8 w-auto max-w-full object-contain grayscale-[0.25] contrast-110 opacity-85 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

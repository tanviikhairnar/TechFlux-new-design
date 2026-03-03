import { motion } from 'motion/react';
import allstarLogo from '../../assets/logos/allstar_logo_i.png';
import aqatoLogo from '../../assets/logos/aqato_logo_i.png';
import imageULogo from '../../assets/logos/image_u.png';
import linkedNetLogo from '../../assets/logos/Linked-Net-logo.png';
import myCarePlusLogo from '../../assets/logos/MyCarePlus_Logo.png';
import obscurLogo from '../../assets/logos/obscur.jpg';
import snmLogo from '../../assets/logos/snm_logo_i.png';
import studioNewMediaLogo from '../../assets/logos/Studio new media logo_black_new.png';

const clientLogos = [
  { src: allstarLogo, alt: 'Allstar' },
  { src: aqatoLogo, alt: 'Aqato' },
  { src: imageULogo, alt: 'Image U' },
  { src: linkedNetLogo, alt: 'Linked Net' },
  { src: myCarePlusLogo, alt: 'MyCarePlus' },
  { src: obscurLogo, alt: 'Obscur' },
  { src: snmLogo, alt: 'SNM' },
  { src: studioNewMediaLogo, alt: 'Studio New Media' },
];

export function ClientLogosSlider() {
  return (
    <section className="py-10">
      <div className="w-full max-w-[1260px] mx-auto px-4 lg:px-5">
        <div className="relative overflow-hidden py-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0B0F1A] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0B0F1A] to-transparent" />

          <motion.div
            className="flex w-max items-center gap-8 px-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ ease: 'linear', duration: 24, repeat: Infinity }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="flex h-16 w-[160px] shrink-0 items-center justify-center px-3"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-9 w-auto max-w-full object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

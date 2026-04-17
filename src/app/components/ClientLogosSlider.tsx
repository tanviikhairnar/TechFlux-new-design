const clientLogos = [
  { src: "https://techflux.in/public/assets/images/logo/logo1.webp", alt: "Aqato" },
  { src: "https://techflux.in/public/assets/images/logo/logo2.webp", alt: "Studio New Media" },
  { src: "https://techflux.in/public/assets/images/logo/logo3.webp", alt: "Edited Logo 1" },
  { src: "https://techflux.in/public/assets/images/logo/logo4.webp", alt: "Edited Logo 2" },
  { src: "https://techflux.in/public/assets/images/logo/logo5.webp", alt: "Edited Logo 3" },
  { src: "https://techflux.in/public/assets/images/logo/logo6.png", alt: "Edited Logo 5" },
  { src: "https://techflux.in/public/assets/images/logo/logo7.webp", alt: "Edited Logo 4" },
];

export function ClientLogosSlider() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] py-16">
      <style>{`
        @keyframes client-logo-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes client-logo-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .client-logo-marquee-track {
          animation: client-logo-marquee 28s linear infinite;
        }

        .client-logo-item {
          animation: client-logo-float 4.2s ease-in-out infinite;
        }

        .client-logo-mark {
          transition:
            opacity 280ms ease,
            transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 320ms ease;
        }

        .client-logo-item:hover .client-logo-mark,
        .client-logo-item:focus-within .client-logo-mark {
          transform: scale(1.04);
          opacity: 0.92;
          filter: brightness(1.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .client-logo-marquee-track {
            animation: none;
          }

          .client-logo-item {
            animation: none;
          }

          .client-logo-mark {
            transition: none;
          }
        }
      `}</style>

      <div className="relative w-full mx-auto">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#0B1220] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#0B1220] to-transparent" />

        <div className="client-logo-marquee-track flex w-max items-center">
          {[0, 1].map((groupIndex) => (
            <div
              key={`logo-group-${groupIndex}`}
              className="flex shrink-0 items-center gap-20 pr-20"
              aria-hidden={groupIndex === 1}
            >
              {clientLogos.map((logo) => (
                <div
                  key={`${groupIndex}-${logo.alt}`}
                  className="client-logo-item flex h-24 w-[180px] shrink-0 items-center justify-center"
                  style={{ animationDelay: `${groupIndex * 0.5}s` }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    width={180}
                    height={56}
                    className="client-logo-mark max-h-14 w-auto object-contain brightness-0 invert opacity-65"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

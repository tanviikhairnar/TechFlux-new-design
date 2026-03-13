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

        .client-logo-marquee-track {
          animation: client-logo-marquee 28s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .client-logo-marquee-track {
            animation: none;
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
                  className="group flex h-24 w-[180px] shrink-0 items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-14 w-auto object-contain brightness-0 invert opacity-60 transition-all duration-500 ease-out transform-gpu group-hover:scale-105 group-hover:opacity-80"
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

const logoFiles = import.meta.glob("/src/assets/logos/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const clientLogos = Object.entries(logoFiles)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    const filename = path.split("/").pop() || "logo";
    const cleanName = filename.replace(/\.[^/.]+$/, "").replace(/[_-]+/g, " ").trim();
    const alt = cleanName.replace(/\b\w/g, (c) => c.toUpperCase());
    return { src, alt };
  });

export function ClientLogosSlider() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] py-16">
      <style>{`
        @keyframes client-logo-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="relative w-full mx-auto">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#0B1220] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#0B1220] to-transparent" />

        <div
          className="flex w-max items-center gap-20"
          style={{
            animation: "client-logo-marquee 28s linear infinite",
          }}
        >
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="group flex h-24 w-[180px] shrink-0 items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-14 w-auto object-contain brightness-0 invert opacity-90 transition-transform duration-500 ease-out transform-gpu group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

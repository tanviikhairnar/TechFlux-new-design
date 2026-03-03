import { motion } from "motion/react";

const logoFiles = import.meta.glob("../../assets/logos/*.{png,jpg,jpeg,webp,svg}", {
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
    <section className="relative py-16 overflow-hidden bg-[#0B1220]">

      {/* Same grid pattern – adjusted for dark */}
      <div className="absolute inset-0 
        bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),
             linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-[size:40px_40px]"
      />

      <div className="relative w-full  mx-auto">

        {/* Edge fade updated to match dark background */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#0B1220] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#0B1220] to-transparent" />

        <motion.div
          className="flex w-max items-center gap-20"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 28,
            repeat: Infinity,
          }}
        >
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex h-24 w-[180px] shrink-0 items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="
                  max-h-14 w-auto object-contain
                  grayscale
                  brightness-150 contrast-110
                  opacity-75
                  transition-all duration-300
                  hover:brightness-200 hover:opacity-100
                "
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
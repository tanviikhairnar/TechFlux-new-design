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
    <section className="relative py-16 overflow-hidden bg-background">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]" />

      <div className="relative w-full max-w-[1260px] mx-auto">
 
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

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
                  grayscale opacity-40
                  transition-all duration-300
                  hover:opacity-80 hover:grayscale-0
                "
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
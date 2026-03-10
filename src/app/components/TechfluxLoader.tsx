import { motion } from "framer-motion";

const letters = "TECHFLUX".split("");

const TechfluxLoader = () => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#040A16]">
      <div className="absolute h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[160px]" />

      <div className="relative flex flex-col items-center gap-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute h-72 w-72 rounded-full border border-blue-500/20"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
          className="absolute h-96 w-96 rounded-full border border-blue-400/10"
        />

        <div
          className="flex text-5xl font-semibold tracking-[0.25em] text-white md:text-6xl"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <div className="relative h-[2px] w-64 overflow-hidden rounded bg-[#1A2338]">
          <motion.div
            animate={{ x: ["-120%", "250%"] }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
              ease: "linear",
            }}
            className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-[2px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TechfluxLoader;


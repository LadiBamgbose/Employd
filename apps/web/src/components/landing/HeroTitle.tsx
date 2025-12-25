"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function HeroTitle() {
  return (
    <div className="flex flex-col items-center gap-4 text-center" style={{ perspective: "1000px" }}>
      <motion.h1
        initial={{ opacity: 0, scale: 0.1, rotateY: 1440 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{
          opacity: { duration: 0.3 },
          scale: { duration: 1.5, ease: "easeOut" },
          rotateY: { duration: 1.5, ease: "easeOut" },
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="text-7xl font-bold tracking-tight sm:text-9xl"
        >
        <span
            className="inline-block text-transparent"
            style={{
              backgroundImage:
              "linear-gradient(90deg, #ff1493 0%, #ff69b4 50%, #ff1493 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Employd
        </span>
        </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-base font-medium text-zinc-500 sm:text-lg"
      >
        Our Resume Builder will get you{" "}
        <TypeAnimation
          sequence={[
            "an interview",
            2000,
            "paid more",
            2000,
            "your dream job",
            2000,
            "promoted",
            2000,
          ]}
          wrapper="span"
          speed={20}
          deletionSpeed={30}
          repeat={Infinity}
          className="text-[#ff1493]"
        />
      </motion.p>
    </div>
  );
}

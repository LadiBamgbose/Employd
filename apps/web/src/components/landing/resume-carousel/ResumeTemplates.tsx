"use client";

import { motion, type Variants } from "framer-motion";

import ResumeCard, { type ResumeSlide } from "./ResumeCard";

const resumes: ResumeSlide[] = [
  {
    title: "Modern 01",
    subtitle: "Bold header & clean body",
    image: "/resume-templates/modern_01.avif",
    accent: "from-fuchsia-500/50 via-white/5 to-cyan-400/40",
  },
  {
    title: "Modern 02",
    subtitle: "Two-column professional",
    image: "/resume-templates/modern_02.webp",
    accent: "from-blue-500/50 via-white/5 to-emerald-400/35",
  },
  {
    title: "Modern 03",
    subtitle: "Minimal & legible",
    image: "/resume-templates/modern_03.png",
    accent: "from-amber-400/60 via-white/5 to-pink-500/45",
  },
];

const container: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
      ease: [0.22, 1, 0.36, 1],
      duration: 0.6,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.22, 1, 0.36, 1], duration: 0.45 },
  },
};

export default function ResumeTemplates() {
  return (
    <section className="relative w-full overflow-visible">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,79,216,0.2),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_50%_70%,rgba(16,185,129,0.16),transparent_40%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02),rgba(255,255,255,0.18))] opacity-40" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2.3, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 flex flex-col items-center gap-3 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2.1, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-center text-lg font-medium text-zinc-700 sm:text-xl"
        >
          Choose a template
        </motion.p>
        <motion.svg
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[#ff1493]"
        >
          <path
            d="M12 4 Q16 12 12 18"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M8 16L12 20L16 16"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </motion.svg>
      </motion.div>

      <motion.div
        className="mx-auto grid w-full max-w-8xl grid-cols-1 gap-10 px-8 sm:grid-cols-2 xl:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {resumes.map((resume) => (
          <motion.div key={resume.title} variants={item}>
            <ResumeCard slide={resume} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}


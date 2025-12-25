"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import GradientText from "../GradientText";

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [duration, setDuration] = useState(0);
  const [ready, setReady] = useState(false);

  // RAF throttle so scrubbing doesn't overload decoding
  const rafRef = useRef<number | null>(null);
  const latestPRef = useRef(0);

  // Pinned scene progress (0..1) across the whole section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // --- Timeline (tweak ranges here) ---
  // 0.00 - 0.92  : scrubbing the video
  // 0.92 - 1.00  : "locked" end frame + reveal heading/cards
  const SCRUB_END: number = 0.75;

  const revealProgress = useTransform(scrollYProgress, [SCRUB_END, 1], [0, 1]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.02, 1]);

  // Veil increases slightly near the end for readability
  const veilOpacity = useTransform(scrollYProgress, [0, SCRUB_END, 1], [0.08, 0.12, 0.22]);

  // Heading + cards reveal
  const headingOpacity = useTransform(revealProgress, [0.0, 0.25], [0, 1]);
  const headingY = useTransform(revealProgress, [0.0, 0.25], [16, 0]);
  const headingBlur = useTransform(revealProgress, [0.0, 0.25], [8, 0]);
  const headingFilter = useMotionTemplate`blur(${headingBlur}px)`;


  const cardsOpacity = useTransform(revealProgress, [0.12, 0.55], [0, 1]);
  const cardsY = useTransform(revealProgress, [0.12, 0.55], [18, 0]);

  // Load metadata so we can map scroll -> currentTime (always paused)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // never autoplay; we scrub
    v.pause();

    const onLoadedMeta = () => {
      const d = Number.isFinite(v.duration) ? v.duration : 0;
      setDuration(d);
    };

    const onCanPlay = () => setReady(true);

    v.addEventListener("loadedmetadata", onLoadedMeta);
    v.addEventListener("canplay", onCanPlay);

    // Force fetch
    v.load();

    return () => {
      v.removeEventListener("loadedmetadata", onLoadedMeta);
      v.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  // Scroll -> playhead (paused). Throttled with RAF.
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    latestPRef.current = p;

    if (rafRef.current != null) return;

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;

      const v = videoRef.current;
      if (!v) return;

      if (!v.paused) v.pause();

      if (!duration || !ready) return;

      // Freeze at end: we clamp scrub to SCRUB_END so the final frame holds
      const clamped = Math.min(latestPRef.current, SCRUB_END);

      // map [0..SCRUB_END] -> [0..duration]
      const normalized = SCRUB_END === 0 ? 0 : clamped / SCRUB_END;

      // avoid the exact final frame to reduce decode artifacts
      const t = Math.max(0, Math.min(duration - 0.06, normalized * (duration - 0.06)));

      v.currentTime = t;
    });
  });

  useEffect(() => {
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Variants for staggered card reveal (interactive feel)
  const listVariants = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.12,
          delayChildren: 0.06,
        },
      },
    }),
    []
  );

  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 14, scale: 0.985 },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.45, ease: "easeOut" as const },
      },
    }),
    []
  );

  return (
    <section ref={sectionRef} className="relative h-[770vh] w-full bg-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video (scrubbed by scroll, always paused) */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: videoOpacity, scale: videoScale }}
        >
          <video
            ref={videoRef}
            src="/videos/employd-parallax.scrub.mp4"
            className="h-full w-full object-cover"
            muted
            playsInline
            preload="auto"
          />
        </motion.div>

        {/* Soft veil to improve text contrast (micro: increases near end) */}
        <motion.div
          className="absolute inset-0 bg-white backdrop-blur-[2px]"
          style={{ opacity: veilOpacity }}
        />

        {/* Overlay content: only reveals when video "stops" (after SCRUB_END) */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
          <div className="w-full">
            {/* Heading */}
            <motion.div style={{ opacity: headingOpacity, y: headingY, filter: headingFilter }} className="text-center">

              <h2 className="mt-4">
                <GradientText
                  colors={["#db2777", "#ec4899", "#f472b6", "#f9a8d4", "#ec4899", "#db2777"]}
                  animationSpeed={4}
                  showBorder={false}
                  className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight"
                >
                  Built for modern hiring.
                </GradientText>
              </h2>

              <p className="mt-3 mx-auto max-w-2xl text-base md:text-lg text-zinc-600">
                Only 2% of resumes win. Yours will be one of them!
              </p>
            </motion.div>

            {/* Cards */}
            <motion.div
              style={{ opacity: cardsOpacity, y: cardsY }}
              className="mt-10"
            >
              <motion.div
                variants={listVariants}
                initial="hidden"
                animate="show"
                className="grid gap-4 md:grid-cols-2"
              >
                <BenefitCard
                  variants={cardVariants}
                  icon="↗"
                  title="Import LinkedIn"
                  desc={
                    <ul className="space-y-2 text-left">
                      <li className="relative pl-5 text-base md:text-lg text-zinc-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-pink-500 before:shadow-[0_0_0_4px_rgba(236,72,153,0.18)]">
                        Pull roles, skills, and dates fast.
                      </li>
                      <li className="relative pl-5 text-base md:text-lg text-zinc-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-pink-500 before:shadow-[0_0_0_4px_rgba(236,72,153,0.18)]">
                        Auto-clean titles, overlaps, and gaps.
                      </li>
                      <li className="relative pl-5 text-base md:text-lg text-zinc-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-pink-500 before:shadow-[0_0_0_4px_rgba(236,72,153,0.18)]">
                        Highlight measurable wins instantly.
                      </li>
                    </ul>
                  }
                />
                <BenefitCard
                  variants={cardVariants}
                  icon="🔗"
                  title="Paste a job URL"
                  desc={
                    <ul className="space-y-2 text-left">
                      <li className="relative pl-5 text-base md:text-lg text-zinc-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-pink-500 before:shadow-[0_0_0_4px_rgba(236,72,153,0.18)]">
                        Parse the posting in seconds.
                      </li>
                      <li className="relative pl-5 text-base md:text-lg text-zinc-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-pink-500 before:shadow-[0_0_0_4px_rgba(236,72,153,0.18)]">
                        Surface the must-have keywords.
                      </li>
                      <li className="relative pl-5 text-base md:text-lg text-zinc-700 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-pink-500 before:shadow-[0_0_0_4px_rgba(236,72,153,0.18)]">
                        Rewrite bullets to match the role.
                      </li>
                    </ul>
                  }
                />
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  icon,
  title,
  desc,
  variants,
}: {
  icon: string;
  title: string;
  desc: React.ReactNode;
  variants: any;
}) {
  return (
    <motion.div
      variants={variants}
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className="group relative overflow-hidden rounded-2xl bg-white/40 backdrop-blur-xl p-7 min-h-[230px] border border-white/70 ring-1 ring-white/60 shadow-[0_14px_40px_-14px_rgba(236,72,153,0.45)]"
    >
      {/* Micro glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -inset-24 bg-[radial-gradient(circle,rgba(255,79,216,0.18),transparent_60%)]" />
      </div>

      <div className="relative flex items-start gap-3">
        <motion.div
          whileHover={{ rotate: -6 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 text-pink-600 ring-1 ring-pink-500/10"
        >
          {icon}
        </motion.div>

        <div>
          <div className="text-xl md:text-2xl font-semibold text-zinc-900">{title}</div>
          <div className="mt-2 text-base md:text-lg text-zinc-600">{desc}</div>

          <motion.div
            initial={{ opacity: 0, x: -6 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-pink-600"
          >
            Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

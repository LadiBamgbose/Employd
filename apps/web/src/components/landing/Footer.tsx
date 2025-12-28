"use client";

import { motion } from "framer-motion";

const links = [
  "About Employd",
  "Careers",
  "Security",
  "Status",
  "Press",
  "Blog",
  "Legal",
  "Privacy",
  "Terms",
];

const socials = ["LinkedIn", "Twitter", "YouTube", "Dribbble", "Behance"];

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden rounded-t-[32px] bg-white/30 backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,79,216,0.18),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.14),transparent_45%),radial-gradient(circle_at_50%_70%,rgba(255,105,180,0.18),transparent_42%),radial-gradient(circle_at_30%_80%,rgba(236,72,153,0.18),transparent_50%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6),transparent_62%),linear-gradient(to_bottom,rgba(255,255,255,0.68),rgba(255,255,255,0.32),rgba(255,255,255,0))]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 sm:gap-12 sm:px-10 lg:px-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="space-y-3"
          >
            <h4 className="text-sm font-semibold text-zinc-900">Company</h4>
            <ul className="text-sm text-zinc-600 space-y-1.5">
              {links.map((item) => (
                <li key={item} className="hover:text-zinc-800 transition-colors duration-150">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="space-y-3"
          >
            <h4 className="text-sm font-semibold text-zinc-900">Resources</h4>
            <ul className="text-sm text-zinc-600 space-y-1.5">
              <li>Help Center</li>
              <li>API &amp; Integrations</li>
              <li>Customer Stories</li>
              <li>Accessibility</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="space-y-3"
          >
            <h4 className="text-sm font-semibold text-zinc-900">Social</h4>
            <ul className="text-sm text-zinc-600 space-y-1.5">
              {socials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex flex-col gap-2 pt-4 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-start sm:gap-6"
        >
          <span>© {new Date().getFullYear()} Employd, Inc. All rights reserved.</span>
        </motion.div>
      </div>
    </footer>
  );
}


"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-6 z-30"
    >
      <div className="mx-auto flex w-[min(1100px,92vw)] items-center justify-between rounded-2xl border-2 border-white/40 bg-transparent px-6 py-3 backdrop-blur-sm">
        <div className="text-lg font-semibold tracking-tight text-zinc-900">
          Employd
        </div>
        <div className="flex items-center text-sm">
          <motion.button
            type="button"
            onClick={() => setAuthOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-full px-6 py-2.5 font-semibold text-white transition-all"
            style={{
              background: "linear-gradient(135deg, #ff1493 0%, #ff69b4 50%, #ff10f0 100%)",
              boxShadow: "0 8px 32px rgba(255, 20, 147, 0.4), 0 0 20px rgba(255, 20, 147, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            }}
          >
            <span className="relative z-10">Login or Sign up</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </div>
      </div>
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </motion.nav>
  );
}

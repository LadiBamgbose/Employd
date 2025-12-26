"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Input } from "../ui/Input";

type AuthMode = "login" | "signup";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AuthModal({ open, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<AuthMode>("login");

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[99] flex items-center justify-center px-4 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="absolute inset-0 bg-white/8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/40 bg-white/14 p-8 shadow-[0_40px_140px_-40px_rgba(219,39,119,0.65)] backdrop-blur-2xl"
            initial={{ y: 30, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.16),transparent_65%)]" />
            <div className="pointer-events-none absolute -left-32 -bottom-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.12),transparent_65%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />

            <div className="relative flex items-center justify-between gap-3">
              <div className="flex gap-2 rounded-full bg-white/16 p-1 ring-1 ring-white/30 backdrop-blur">
                {(["login", "signup"] as AuthMode[]).map((val) => (
                  <motion.button
                    key={val}
                    onClick={() => setMode(val)}
                    className="rounded-full px-5 py-2 text-sm font-semibold capitalize"
                    animate={{
                      backgroundColor:
                        mode === val ? "rgba(236,72,153,0.24)" : "rgba(255,255,255,0)",
                      color: mode === val ? "#db2777" : "#0f172a",
                      boxShadow:
                        mode === val
                          ? "0 10px 30px -12px rgba(219,39,119,0.65)"
                          : "0 0 0 rgba(0,0,0,0)",
                    }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ y: -1, scale: 1.01 }}
                  >
                    {val}
                  </motion.button>
                ))}
              </div>
              <motion.button
                onClick={onClose}
                className="h-10 w-10 rounded-full bg-white/35 text-sm font-semibold text-zinc-800 ring-1 ring-white/50 backdrop-blur"
                whileHover={{ rotate: 90, scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
              >
                ✕
              </motion.button>
            </div>

            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="relative mt-7 space-y-5"
            >
              {mode === "signup" && (
                <Field label="Full name">
                  <Input
                    placeholder="Jane Doe"
                    className="border-0 bg-white/10 text-zinc-900 placeholder-zinc-600 ring-1 ring-white/40 focus:ring-2 focus:ring-pink-300/70 backdrop-blur-sm"
                  />
                </Field>
              )}
              <Field label="Email">
                <Input
                  type="email"
                  placeholder="jane@email.com"
                  className="border-0 bg-white/10 text-zinc-900 placeholder-zinc-600 ring-1 ring-white/40 focus:ring-2 focus:ring-pink-300/70 backdrop-blur-sm"
                />
              </Field>
              <Field label="Password">
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="border-0 bg-white/10 text-zinc-900 placeholder-zinc-600 ring-1 ring-white/40 focus:ring-2 focus:ring-pink-300/70 backdrop-blur-sm"
                />
              </Field>
              {mode === "signup" && (
                <Field label="Confirm password">
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="border-0 bg-white/10 text-zinc-900 placeholder-zinc-600 ring-1 ring-white/40 focus:ring-2 focus:ring-pink-300/70 backdrop-blur-sm"
                  />
                </Field>
              )}

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98, y: 0 }}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#db2777] via-[#ec4899] to-[#f472b6] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(219,39,119,0.85)] ring-1 ring-white/30"
              >
                {mode === "login" ? "Log in" : "Sign up"}
              </motion.button>

              <p className="text-center text-xs text-zinc-800">
                {mode === "login"
                  ? "New here? Switch to sign up to create your account."
                  : "Already have an account? Switch to log in instead."}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-1 text-sm font-semibold text-zinc-800">
        <span>{label}</span>
        <span className="text-pink-500">*</span>
      </div>
      <div className="overflow-hidden rounded-2xl ring-1 ring-white/35 shadow-[0_12px_34px_-18px_rgba(219,39,119,0.8)] bg-white/6 backdrop-blur">
        {children}
      </div>
    </div>
  );
}


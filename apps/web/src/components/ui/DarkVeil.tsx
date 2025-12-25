"use client";

import { motion } from "framer-motion";

interface DarkVeilProps {
  className?: string;
  color?: string;
}

export default function DarkVeil({ className = "", color }: DarkVeilProps) {
  const defaultColor = color || "rgba(255, 79, 216, 0.25)";
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} style={{ zIndex: 1 }}>
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${defaultColor} 0%, transparent 70%)`,
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.1, 0.95, 1],
          opacity: [0.4, 0.6, 0.5, 0.4],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 30% 10%, ${defaultColor} 0%, transparent 60%)`,
        }}
        animate={{
          x: [0, -40, 60, 0],
          y: [0, 25, -15, 0],
          scale: [1.1, 1, 1.2, 1.1],
          opacity: [0.3, 0.5, 0.4, 0.3],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 45% at 70% 5%, ${defaultColor} 0%, transparent 65%)`,
        }}
        animate={{
          x: [0, 30, -50, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 1.05, 1],
          opacity: [0.35, 0.55, 0.45, 0.35],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
}


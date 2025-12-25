"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import {
  SiGoogle,
  SiApple,
  SiAmazon,
  SiMeta,
  SiNetflix,
  SiTesla,
  SiAdobe,
  SiSalesforce,
  SiOracle,
  SiIntel,
  SiNvidia,
  SiSpotify,
} from "react-icons/si";

import { FaMicrosoft } from "react-icons/fa";

const companies = [
  { Icon: SiGoogle, name: "Google" },
  { Icon: SiApple, name: "Apple" },
  { Icon: SiAmazon, name: "Amazon" },
  { Icon: SiMeta, name: "Meta" },
  { Icon: SiNetflix, name: "Netflix" },
  { Icon: SiTesla, name: "Tesla" },
  { Icon: SiAdobe, name: "Adobe" },
  { Icon: SiSalesforce, name: "Salesforce" },
  { Icon: SiOracle, name: "Oracle" },
  { Icon: SiNvidia, name: "Nvidia" },
  { Icon: SiIntel, name: "Intel" },
  { Icon: SiSpotify, name: "Spotify" },
  { Icon: FaMicrosoft, name: "Microsoft" },
];

export default function CompanyLogos() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex w-full flex-col items-center gap-8 pt-32 pb-12"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.p
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "linear" }}
          className="text-center text-lg font-medium text-zinc-700 sm:text-xl"
        >
          Our Resumes have got people employed at
        </motion.p>
        <motion.svg
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "linear" }}
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
      </div>

      <motion.div
        initial={{ opacity: 0, x: -600, y: -400, scale: 0.15, rotate: -1080 }}
        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 4, 
          delay: 0.2, 
          ease: "linear",
          rotate: { duration: 0.5, ease: "linear" }
        }}
        className="w-full"
      >
        <Marquee speed={30} gradient={false} pauseOnHover={false}>
          {companies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="mx-8 flex h-20 w-40 items-center justify-center"
            >
              <company.Icon className="h-16 w-16 text-zinc-400 grayscale transition-all hover:grayscale-0 hover:scale-110" />
            </div>
          ))}
        </Marquee>
      </motion.div>
    </motion.div>
  );
}

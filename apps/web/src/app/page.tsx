"use client";

import HeroTitle from "@/src/components/landing/HeroTitle";
import IntakeForm from "@/src/components/landing/IntakeForm";
import Navbar from "@/src/components/landing/Navbar";
import CompanyLogos from "@/src/components/landing/CompanyLogos";
import ResumeTemplates from "@/src/components/landing/resume-carousel/ResumeTemplates";
import Footer from "@/src/components/landing/Footer";
import DarkVeil from "@/src/components/DarkVeil";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.1, 1], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.5, 1], [1, 0.5, 0]);

  return (
    <div className="relative min-h-screen bg-gray-50 text-zinc-900">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[50vh] z-0 overflow-hidden">
        <DarkVeil hueShift={280} speed={2}  warpAmount={3} />
      </div>
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute bottom-[-160px] left-[-120px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(212,212,216,0.35),transparent_70%)]" />
        {/* Random pink blobs */}
        <div className="absolute top-2/3 left-[20%] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.2),transparent_70%)]" />
        <div className="absolute top-1/2 right-[5%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.16),transparent_70%)]" />
        <div className="absolute bottom-1/4 right-[25%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.19),transparent_70%)]" />
        <div className="absolute bottom-[20%] left-[5%] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.21),transparent_70%)]" />
        {/* Pink blobs directly below dark veil */}
        <div className="absolute top-[45vh] left-[10%] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.18),transparent_70%)]" />
        <div className="absolute top-[48vh] right-[8%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.17),transparent_70%)]" />
        <div className="absolute top-[52vh] left-[15%] h-[160px] w-[160px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.15),transparent_70%)]" />
        <div className="absolute top-[50vh] right-[12%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.16),transparent_70%)]" />
        <div className="absolute top-[55vh] left-[8%] h-[140px] w-[140px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.14),transparent_70%)]" />
        <div className="absolute top-[58vh] right-[10%] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.15),transparent_70%)]" />
        {/* Fill top-right empty space */}
        <div className="absolute top-[18%] right-[6%] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.2),transparent_70%)]" />
        <div className="absolute top-[12%] right-[2%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.22),transparent_70%)]" />
        {/* Around intake form area */}
        <div className="absolute top-[62vh] left-[6%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.2),transparent_70%)]" />
        <div className="absolute top-[64vh] right-[6%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.22),transparent_70%)]" />
        <div className="absolute top-[70vh] left-[42%] h-[150px] w-[150px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.18),transparent_70%)]" />
        <div className="absolute top-[74vh] left-[24%] h-[170px] w-[170px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.19),transparent_70%)]" />
        <div className="absolute top-[76vh] right-[24%] h-[160px] w-[160px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.18),transparent_70%)]" />
        <div className="absolute top-[72vh] left-[8%] h-[140px] w-[140px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.16),transparent_70%)]" />
        <div className="absolute top-[66vh] left-[32%] h-[120px] w-[120px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.15),transparent_70%)]" />
        <div className="absolute top-[68vh] right-[34%] h-[130px] w-[130px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.16),transparent_70%)]" />
        <div className="absolute top-[78vh] left-[52%] h-[140px] w-[140px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.17),transparent_70%)]" />
        <div className="absolute top-[80vh] right-[14%] h-[150px] w-[150px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.18),transparent_70%)]" />
        <div className="absolute top-[82vh] left-[16%] h-[160px] w-[160px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.19),transparent_70%)]" />
      </div>
      <Navbar />
      <motion.main
        ref={heroRef}
        style={{ scale, opacity }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-20 pt-18 sm:pt-24"
      >
        <div className="flex w-full max-w-4xl flex-col items-center gap-10">
          <HeroTitle />
          <div className="w-full max-w-2xl">
            <IntakeForm />
          </div>
        </div>
      </motion.main>
      <div className="relative z-10 flex w-full items-center justify-center px-6 pb-16 pt-10 sm:pt-14">
        <div className="w-full">
          <CompanyLogos />
        </div>
      </div>
      <div className="relative z-10 w-full px-0 pb-20 sm:px-6">
        <ResumeTemplates />
      </div>
      <div className="relative z-10 w-full px-0 sm:px-0">
        <Footer />
      </div>
    </div>
  );
}

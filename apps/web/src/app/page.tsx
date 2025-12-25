import HeroTitle from "@/src/components/landing/HeroTitle";
import IntakeForm from "@/src/components/landing/IntakeForm";
import Navbar from "@/src/components/landing/Navbar";
import CompanyLogos from "@/src/components/landing/CompanyLogos";
import DarkVeil from "@/src/components/ui/DarkVeil";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-zinc-900">
      <DarkVeil color="rgba(255, 79, 216, 0.25)" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[540px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(244,244,245,0.9),transparent_70%)]" />
        <div className="absolute -top-24 right-[-120px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.22),transparent_70%)]" />
        <div className="absolute bottom-[-160px] left-[-120px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(212,212,216,0.35),transparent_70%)]" />
        {/* Random pink blobs */}
        <div className="absolute top-1/4 left-[10%] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.18),transparent_70%)]" />
        <div className="absolute top-1/3 right-[15%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.15),transparent_70%)]" />
        <div className="absolute top-2/3 left-[20%] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.2),transparent_70%)]" />
        <div className="absolute top-1/2 right-[5%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.16),transparent_70%)]" />
        <div className="absolute bottom-1/4 right-[25%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.19),transparent_70%)]" />
        <div className="absolute top-[15%] left-[30%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.17),transparent_70%)]" />
        <div className="absolute bottom-[20%] left-[5%] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.21),transparent_70%)]" />
        <div className="absolute -top-24 left-[-120px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.22),transparent_70%)]" />
      </div>
      <Navbar />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-20 pt-18 sm:pt-24">
        <div className="flex w-full max-w-4xl flex-col items-center gap-10">
          <HeroTitle />
          <div className="w-full max-w-2xl">
            <IntakeForm />
          </div>
        </div>
        <div className="w-full">
          <CompanyLogos />
        </div>
      </main>
    </div>
  );
}

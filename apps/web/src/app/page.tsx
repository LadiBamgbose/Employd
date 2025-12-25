import HeroTitle from "@/src/components/landing/HeroTitle";
import IntakeForm from "@/src/components/landing/IntakeForm";
import Navbar from "@/src/components/landing/Navbar";
import CompanyLogos from "@/src/components/landing/CompanyLogos";
import DarkVeil from "@/src/components/DarkVeil";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50 text-zinc-900">
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

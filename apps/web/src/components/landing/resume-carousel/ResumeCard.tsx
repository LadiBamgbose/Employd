import Image from "next/image";

export type ResumeSlide = {
  title: string;
  subtitle: string;
  image: string;
  accent: string;
};

type ResumeCardProps = {
  slide: ResumeSlide;
};

export default function ResumeCard({ slide }: ResumeCardProps) {
  return (
    <article className="group relative w-full overflow-hidden rounded-[30px] border border-white/35 bg-white/35 shadow-[0_26px_90px_-34px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_36px_130px_-42px_rgba(255,79,216,0.65)]">
      <div
        className={`absolute inset-0 bg-linear-to-br ${slide.accent} opacity-60 transition-opacity duration-300 group-hover:opacity-90`}
      />
      <div className="absolute inset-0 bg-white/12" />

      <div className="relative flex flex-col gap-3 px-3 pb-6 pt-7 sm:px-4">
        <div
          className="relative w-full max-w-[94%] overflow-hidden rounded-[20px] bg-white/85 shadow-[0_16px_40px_-18px_rgba(0,0,0,0.5)] backdrop-blur group-hover:shadow-[0_24px_62px_-24px_rgba(255,79,216,0.32)] mx-auto"
          style={{ aspectRatio: "3 / 4.2" }}
        >
          <Image
            src={slide.image}
            alt={`${slide.title} resume preview`}
            fill
            sizes="100vw"
            className="object-contain transition duration-500 group-hover:scale-[1.006]"
            unoptimized
            priority={slide.title === "Modern 01"}
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/12 via-transparent to-transparent opacity-50 mix-blend-multiply" />
          <div className="pointer-events-none absolute inset-0 flex items-end justify-center">
            <div className="mb-4 flex opacity-0 transition duration-300 group-hover:opacity-100">
              <button
                type="button"
                className="pointer-events-auto relative overflow-hidden rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-[0_10px_30px_-12px_rgba(255,20,147,0.45)] ring-2 ring-white/60 backdrop-blur transition duration-200"
                style={{
                  background:
                    "linear-gradient(135deg, #ff1493 0%, #ff69b4 50%, #ff10f0 100%)",
                  boxShadow:
                    "0 8px 28px rgba(255, 20, 147, 0.35), 0 0 16px rgba(255, 20, 147, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.22)",
                }}
              >
                <span className="relative z-10">Choose template</span>
                <span className="pointer-events-none absolute inset-0 bg-linear-to-r from-transparent via-white/18 to-transparent" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}


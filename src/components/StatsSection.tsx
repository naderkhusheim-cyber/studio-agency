import { useHls } from "../hooks/useHls";

const stats = [
  { value: "200+", label: "Sites launched" },
  { value: "98%", label: "Client satisfaction" },
  { value: "3.2x", label: "More conversions" },
  { value: "5 days", label: "Average delivery" },
];

export function StatsSection() {
  const videoRef = useHls(
    "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
  );

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: "saturate(0)" }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-[200px] z-[1]"
        style={{
          background: "linear-gradient(to bottom, black, transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] z-[1]"
        style={{ background: "linear-gradient(to top, black, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="liquid-glass rounded-3xl p-12 md:p-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">
                  {s.value}
                </div>
                <div className="text-white/60 font-body font-light text-sm mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

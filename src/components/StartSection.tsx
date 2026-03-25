import { ArrowUpRight } from "lucide-react";
import { useHls } from "../hooks/useHls";

export function StartSection() {
  const videoRef = useHls(
    "https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
  );

  return (
    <section className="relative min-h-[700px] py-32 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-[200px] z-[1]"
        style={{
          background: "linear-gradient(to bottom, black, transparent)",
        }}
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] z-[1]"
        style={{ background: "linear-gradient(to top, black, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center min-h-[500px] justify-center">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
          How It Works
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          You dream it. We ship it.
        </h2>
        <p className="text-white/60 font-body font-light text-sm max-w-xl mt-6 leading-relaxed">
          Share your vision. Our AI handles the rest&mdash;wireframes, design,
          code, launch. All in days, not quarters.
        </p>
        <button className="liquid-glass-strong rounded-full px-8 py-3.5 text-sm font-medium text-white font-body flex items-center gap-2 mt-10 hover:scale-105 transition-transform">
          Get Started <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

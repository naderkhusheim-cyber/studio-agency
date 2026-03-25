import { useHls } from "../hooks/useHls";

export function CTAFooter() {
  const videoRef = useHls(
    "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
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
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9]">
          Your next website starts here.
        </h2>
        <p className="text-white/60 font-body font-light text-sm max-w-lg mx-auto mt-6 leading-relaxed">
          Book a free strategy call. See what AI-powered design can do.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button className="liquid-glass-strong rounded-full px-8 py-3.5 text-sm font-medium text-white font-body hover:scale-105 transition-transform">
            Book a Call
          </button>
          <button className="bg-white text-black rounded-full px-8 py-3.5 text-sm font-medium font-body hover:bg-white/90 transition-colors">
            View Pricing
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white/40 text-xs font-body">
            &copy; 2026 Studio
          </span>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/40 text-xs font-body hover:text-white/60 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}

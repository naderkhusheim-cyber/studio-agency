import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import { BlurText } from "./BlurText";

export function HeroSection() {
  return (
    <section className="relative overflow-visible h-[1000px] bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-auto object-contain z-0"
        style={{ top: "20%" }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/5 z-0" />
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] h-[300px]"
        style={{
          background: "linear-gradient(to bottom, transparent, black)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-[150px] px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="liquid-glass rounded-full px-1.5 py-1.5 flex items-center gap-2 mb-8"
        >
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-medium font-body">
            New
          </span>
          <span className="text-sm text-white/80 font-body pr-3">
            Introducing AI-powered web design.
          </span>
        </motion.div>

        {/* Heading */}
        <BlurText
          text="The Website Your Brand Deserves"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px] max-w-5xl"
          delay={100}
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-white/60 font-body font-light text-base sm:text-lg max-w-xl mt-8 leading-relaxed"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts.
          This is web design, wildly reimagined.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-6 mt-10"
        >
          <button className="liquid-glass-strong rounded-full px-8 py-3.5 text-sm font-medium text-white font-body flex items-center gap-2 hover:scale-105 transition-transform">
            Get Started <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="text-white/70 hover:text-white font-body text-sm flex items-center gap-2 transition-colors">
            <Play className="w-4 h-4" /> Watch the Film
          </button>
        </motion.div>
      </div>
    </section>
  );
}

import { Zap, Palette, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Days, Not Months",
    description: "Concept to launch at a pace that redefines fast.",
  },
  {
    icon: Palette,
    title: "Obsessively Crafted",
    description: "Every detail considered. Every element refined.",
  },
  {
    icon: BarChart3,
    title: "Built to Convert",
    description: "Layouts informed by data. Decisions backed by performance.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade protection comes standard.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
          Why Us
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          The difference is everything.
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="liquid-glass rounded-2xl p-6">
            <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-4">
              <f.icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-heading italic text-white mb-2">
              {f.title}
            </h3>
            <p className="text-white/60 font-body font-light text-sm">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

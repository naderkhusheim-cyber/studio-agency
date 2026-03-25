const testimonials = [
  {
    quote:
      "A complete rebuild in five days. What we got back was not just beautiful—it converted 3x better than our previous site from day one.",
    name: "Sarah Chen",
    role: "CEO, Luminary",
  },
  {
    quote:
      "Conversions up 4x in the first month. The AI didn't just build a site—it built a growth engine. We haven't looked back.",
    name: "Marcus Webb",
    role: "Head of Growth, Arcline",
  },
  {
    quote:
      "They didn't just design our site—they understood our brand better than we did. The result feels like it was crafted over months, not days.",
    name: "Elena Voss",
    role: "Brand Director, Helix",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
          What They Say
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Don&rsquo;t take our word for it.
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="liquid-glass rounded-2xl p-8">
            <p className="text-white/80 font-body font-light text-sm italic leading-relaxed mb-6">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <div className="text-white font-body font-medium text-sm">
                {t.name}
              </div>
              <div className="text-white/50 font-body font-light text-xs">
                {t.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

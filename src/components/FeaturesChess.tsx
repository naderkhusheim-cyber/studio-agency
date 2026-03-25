export function FeaturesChess() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24">
      {/* Header */}
      <div className="text-center mb-20">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
          Capabilities
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
          Pro features. Zero complexity.
        </h2>
      </div>

      {/* Row 1: Text Left, Image Right */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 mb-24">
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl md:text-3xl font-heading italic text-white tracking-tight">
            Designed to convert. Built to perform.
          </h3>
          <p className="text-white/60 font-body font-light text-sm leading-relaxed max-w-md">
            Every pixel is intentional. Our AI studies what works across
            thousands of top sites&mdash;then builds yours to outperform them
            all.
          </p>
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white font-body hover:scale-105 transition-transform">
            Learn more
          </button>
        </div>
        <div className="flex-1">
          <div className="liquid-glass rounded-2xl overflow-hidden aspect-video bg-white/5 flex items-center justify-center">
            <div className="text-white/20 font-body text-sm">
              Feature Preview
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Image Left, Text Right */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12">
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl md:text-3xl font-heading italic text-white tracking-tight">
            It gets smarter. Automatically.
          </h3>
          <p className="text-white/60 font-body font-light text-sm leading-relaxed max-w-md">
            Your site evolves on its own. AI monitors every click, scroll, and
            conversion&mdash;then optimizes in real time. No manual updates.
            Ever.
          </p>
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white font-body hover:scale-105 transition-transform">
            See how it works
          </button>
        </div>
        <div className="flex-1">
          <div className="liquid-glass rounded-2xl overflow-hidden aspect-video bg-white/5 flex items-center justify-center">
            <div className="text-white/20 font-body text-sm">
              Feature Preview
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

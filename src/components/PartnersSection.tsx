const partners = ["Stripe", "Vercel", "Linear", "Notion", "Figma"];

export function PartnersSection() {
  return (
    <section className="py-16 px-6 flex flex-col items-center">
      <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-8">
        Trusted by the teams behind
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12">
        {partners.map((name) => (
          <span
            key={name}
            className="text-2xl md:text-3xl font-heading italic text-white"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}

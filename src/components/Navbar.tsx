import { ArrowUpRight } from "lucide-react";

const links = ["Home", "Services", "Work", "Process", "Pricing"];

export function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-heading italic text-xl">
          S
        </div>

        {/* Center pill */}
        <div className="hidden md:flex items-center liquid-glass rounded-full px-2 py-2 gap-1">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-white/90 hover:text-white px-4 py-2 transition-colors font-body"
            >
              {link}
            </a>
          ))}
          <button className="bg-white text-black rounded-full px-5 py-2 text-sm font-medium font-body flex items-center gap-1.5 hover:bg-white/90 transition-colors">
            Get Started <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile CTA */}
        <button className="md:hidden bg-white text-black rounded-full px-5 py-2 text-sm font-medium font-body flex items-center gap-1.5">
          Get Started <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}

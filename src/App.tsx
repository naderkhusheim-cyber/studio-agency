import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { PartnersSection } from "./components/PartnersSection";
import { StartSection } from "./components/StartSection";
import { FeaturesChess } from "./components/FeaturesChess";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { StatsSection } from "./components/StatsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CTAFooter } from "./components/CTAFooter";

function App() {
  return (
    <div className="bg-black overflow-visible">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <StartSection />
      <FeaturesChess />
      <FeaturesGrid />
      <StatsSection />
      <TestimonialsSection />
      <CTAFooter />
    </div>
  );
}

export default App;

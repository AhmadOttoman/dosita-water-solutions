
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight text-engineering-navy">
            Engineered for
            <span className="block font-bold text-primary bg-gradient-to-r from-primary to-industrial-blue bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
            High-performance water systems engineered for reliability, 
            compliance, and operational efficiency.
          </p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

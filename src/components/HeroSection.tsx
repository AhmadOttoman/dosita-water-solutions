import { Button } from "@/components/ui/button";
import heroEquipment from "@/assets/hero-equipment.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroEquipment} 
          alt="Industrial water treatment equipment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-engineering-navy/90 via-industrial-blue/80 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Engineered for
            <span className="block text-primary bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
            High-performance water systems engineered for reliability, 
            compliance, and operational efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
            >
              See Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline-white" 
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              Contact Engineering
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
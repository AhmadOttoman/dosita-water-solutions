import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import treatmentSystems from "@/assets/treatment-systems.jpg";
import disinfectionSystems from "@/assets/disinfection-systems.jpg";
import poolEquipment from "@/assets/pool-equipment.jpg";
import { ArrowRight, Droplets, Shield, Waves, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const ProductsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [isPlaying, setIsPlaying] = useState(true);
  const products = [
    {
      id: "treatment",
      title: "Water Treatment",
      description: "Robust water treatment systems designed for efficiency and compliance.",
      image: treatmentSystems,
      icon: <Droplets className="h-8 w-8 text-primary" />,
      features: ["Multi-stage filtration", "Automated controls", "Energy efficient"],
      cta: "View Treatment Systems"
    },
    {
      id: "disinfection",
      title: "Water Disinfection", 
      description: "State-of-the-art disinfection equipment for guaranteed water safety.",
      image: disinfectionSystems,
      icon: <Shield className="h-8 w-8 text-primary" />,
      features: ["UV sterilization", "Chemical-free process", "Real-time monitoring"],
      cta: "View Disinfection Systems"
    },
    {
      id: "pool",
      title: "Swimming Pool Equipment",
      description: "Commercial-grade equipment for pristine and safe aquatic facilities.",
      image: poolEquipment,
      icon: <Waves className="h-8 w-8 text-primary" />,
      features: ["High-capacity pumps", "Advanced filtration", "Smart controls"],
      cta: "View Pool Systems"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!api || !isPlaying) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Auto-advance every 4 seconds

    return () => clearInterval(interval);
  }, [api, isPlaying]);

  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-engineering-navy mb-6">
            Specialized Equipment.
            <span className="block text-primary">Clear Solutions.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three decades of engineering excellence in water treatment, 
            disinfection, and aquatic systems.
          </p>
        </div>

        <div className="relative">
          {/* Beautiful directional arrow indicator */}
          {isPlaying && (
            <div className="absolute top-4 right-4 z-10 flex items-center space-x-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary">Auto</span>
              </div>
              <ChevronRight className="h-4 w-4 text-primary animate-pulse" />
            </div>
          )}
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-professional transition-all duration-300 hover:-translate-y-2 border-0 shadow-card bg-gradient-to-br from-card to-secondary/20 h-full">
                    <CardHeader className="pb-4">
                      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-engineering-navy/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          {product.icon}
                        </div>
                      </div>
                      <CardTitle className="text-2xl text-engineering-navy group-hover:text-primary transition-colors">
                        {product.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        variant="industrial" 
                        className="w-full group-hover:bg-primary group-hover:text-white"
                      >
                        {product.cta}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-card border-border hover:bg-secondary" />
            <CarouselNext className="hidden md:flex -right-12 bg-card border-border hover:bg-secondary" />
          </Carousel>
          
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <a href="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
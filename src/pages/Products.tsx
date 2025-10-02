import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import treatmentSystems from "@/assets/treatment-systems.jpg";
import disinfectionSystems from "@/assets/disinfection-systems.jpg";
import poolEquipment from "@/assets/pool-equipment.jpg";
import uvSystems from "@/assets/uv-systems.jpg";
import copperIonization from "@/assets/copper-ionization.jpg";
import ozoneGenerator from "@/assets/ozone-generator.jpg";
import dosingSystems from "@/assets/dosing-systems.jpg";
import electricHeaters from "@/assets/electric-heaters.jpg";
import circulationPumps from "@/assets/circulation-pumps.jpg";
import { ArrowRight, Droplets, Shield, Waves, Zap, Filter, Settings, Atom, Wind, Beaker, Thermometer, RotateCw } from "lucide-react";

const Products = () => {

  const products = [
    {
      id: "treatment",
      title: "Water Treatment Systems",
      description: "Robust water treatment systems designed for efficiency and compliance with the highest industry standards.",
      image: treatmentSystems,
      icon: <Droplets className="h-8 w-8 text-primary" />,
      features: [
        "Multi-stage filtration technology",
        "Automated control systems", 
        "Energy efficient operations",
        "Real-time water quality monitoring",
        "Customizable treatment protocols",
        "24/7 remote monitoring capabilities"
      ],
      specifications: {
        "Flow Rate": "50-5000 GPM",
        "Filtration": "0.1-100 microns",
        "Automation": "PLC controlled",
        "Compliance": "NSF/ANSI certified"
      }
    },
    {
      id: "disinfection",
      title: "Water Disinfection Equipment", 
      description: "State-of-the-art disinfection equipment for guaranteed water safety and pathogen elimination.",
      image: disinfectionSystems,
      icon: <Shield className="h-8 w-8 text-primary" />,
      features: [
        "UV sterilization technology",
        "Chemical-free disinfection process", 
        "Real-time monitoring systems",
        "Automatic lamp cleaning",
        "Low maintenance requirements",
        "99.99% pathogen elimination"
      ],
      specifications: {
        "UV Dose": "40-300 mJ/cm²",
        "Lamp Life": "12,000+ hours",
        "Power": "120-480V",
        "Material": "316L stainless steel"
      }
    },
    {
      id: "pool",
      title: "Swimming Pool Equipment",
      description: "Commercial-grade equipment for pristine and safe aquatic facilities with advanced automation.",
      image: poolEquipment,
      icon: <Waves className="h-8 w-8 text-primary" />,
      features: [
        "High-capacity circulation pumps",
        "Advanced multi-media filtration", 
        "Smart chemical dosing systems",
        "Automated backwash cycles",
        "Remote monitoring dashboard",
        "Energy optimization controls"
      ],
      specifications: {
        "Pump Capacity": "100-2000 GPM",
        "Filter Media": "Sand, DE, cartridge",
        "Automation": "Web-based controls",
        "Efficiency": "ENERGY STAR rated"
      }
    },
    {
      id: "uv-systems",
      title: "UV Systems",
      description: "Advanced ultraviolet disinfection systems for chemical-free water treatment and pathogen elimination.",
      image: uvSystems,
      icon: <Zap className="h-8 w-8 text-primary" />,
      features: [
        "UV-C technology for disinfection",
        "No chemical residue or byproducts",
        "Low maintenance requirements",
        "Automatic intensity monitoring",
        "Energy efficient LED options",
        "Real-time performance tracking"
      ],
      specifications: {
        "UV Dose": "30-300 mJ/cm²",
        "Lamp Type": "Low/Medium pressure",
        "Power": "120-480V available",
        "Material": "316L stainless steel"
      }
    },
    {
      id: "copper-ionization",
      title: "Copper Ionization Systems",
      description: "Eco-friendly copper ionization systems for natural water sanitization using mineral technology.",
      image: copperIonization,
      icon: <Atom className="h-8 w-8 text-primary" />,
      features: [
        "Natural mineral sanitization",
        "Long-lasting copper electrodes",
        "Mineral-based water treatment", 
        "Reduced chemical requirements",
        "Automatic ion level control",
        "Environmentally friendly process"
      ],
      specifications: {
        "Ion Output": "0.2-2.0 ppm Cu",
        "Electrode Life": "1-3 years",
        "Power": "12-24V DC",
        "Material": "99.9% pure copper"
      }
    },
    {
      id: "ozone-generator",
      title: "Ozone Generation Systems",
      description: "Powerful ozone generation systems for superior water oxidation and advanced disinfection.",
      image: ozoneGenerator,
      icon: <Wind className="h-8 w-8 text-primary" />,
      features: [
        "On-site ozone production",
        "Advanced oxidation process",
        "Eco-friendly disinfection",
        "No chemical storage required",
        "Automated ozone monitoring",
        "Corona discharge technology"
      ],
      specifications: {
        "Ozone Output": "1-100 g/hr",
        "Production": "Corona discharge",
        "Power": "120-480V available",
        "Gas Feed": "Oxygen or air"
      }
    },
    {
      id: "dosing",
      title: "Chemical Dosing Systems",
      description: "Precision chemical dosing pumps and systems for accurate water treatment chemical delivery.",
      image: dosingSystems,
      icon: <Beaker className="h-8 w-8 text-primary" />,
      features: [
        "Precision metering pumps",
        "Automated control systems",
        "Multiple chemical handling",
        "Flow-proportional dosing",
        "Safety interlocks included",
        "Remote monitoring capability"
      ],
      specifications: {
        "Flow Rate": "0.1-500 GPH",
        "Pressure": "Up to 150 PSI",
        "Control": "4-20mA, digital",
        "Materials": "PVDF, 316SS"
      }
    },
    {
      id: "electric-heaters",
      title: "Electric Water Heaters",
      description: "Efficient electric heating systems for optimal water temperature control in all applications.",
      image: electricHeaters,
      icon: <Thermometer className="h-8 w-8 text-primary" />,
      features: [
        "Energy efficient heating elements",
        "Digital temperature controls",
        "Corrosion resistant construction",
        "Multiple power configurations",
        "Safety shutdown systems",
        "Modular design options"
      ],
      specifications: {
        "Power": "5-500 kW available",
        "Voltage": "208-480V, 3-phase",
        "Material": "316L stainless steel",
        "Control": "Digital PID"
      }
    },
    {
      id: "circulation-pumps",
      title: "Water Circulation Pumps",
      description: "High-performance circulation pumps for continuous water flow and optimal system operation.",
      image: circulationPumps,
      icon: <RotateCw className="h-8 w-8 text-primary" />,
      features: [
        "Variable speed drive capability",
        "High hydraulic efficiency",
        "Energy saving operations",
        "Corrosion resistant construction",
        "Low noise operation",
        "Easy maintenance access"
      ],
      specifications: {
        "Flow Rate": "100-5000 GPM",
        "Head": "Up to 200 feet",
        "Power": "1-200 HP available",
        "Efficiency": "Up to 85%"
      }
    },
    {
      id: "industrial",
      title: "Industrial Water Systems",
      description: "Heavy-duty industrial water processing equipment for manufacturing and process applications.",
      image: treatmentSystems,
      icon: <Zap className="h-8 w-8 text-primary" />,
      features: [
        "High-pressure pump systems",
        "Corrosion-resistant materials",
        "Continuous operation capability",
        "Custom engineering solutions",
        "Predictive maintenance alerts",
        "Compliance documentation"
      ],
      specifications: {
        "Pressure": "Up to 1000 PSI",
        "Temperature": "Up to 200°F",
        "Materials": "Hastelloy, Inconel",
        "Certification": "ASME code stamped"
      }
    },
    {
      id: "filtration",
      title: "Advanced Filtration",
      description: "Precision filtration systems for removing contaminants and ensuring water purity standards.",
      image: disinfectionSystems,
      icon: <Filter className="h-8 w-8 text-primary" />,
      features: [
        "Multi-stage filtration process",
        "Automatic backwash systems",
        "Variable speed drive pumps",
        "Modular system design",
        "Low operating costs",
        "Minimal waste generation"
      ],
      specifications: {
        "Filtration": "0.01-500 microns",
        "Flow Rate": "10-10,000 GPM",
        "Backwash": "Fully automated",
        "Efficiency": ">99% removal"
      }
    },
    {
      id: "controls",
      title: "Automation & Controls",
      description: "Smart control systems for automated water treatment operations and remote monitoring.",
      image: poolEquipment,
      icon: <Settings className="h-8 w-8 text-primary" />,
      features: [
        "PLC-based control systems",
        "Web-enabled remote access",
        "Predictive analytics",
        "Alarm notification systems",
        "Data logging capabilities",
        "Mobile app integration"
      ],
      specifications: {
        "Interface": "Touch screen HMI",
        "Communication": "Ethernet, WiFi",
        "Data Storage": "Cloud-based",
        "Protocols": "Modbus, BACnet"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-background to-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-engineering-navy mb-6">
              Professional Equipment.
              <span className="block text-primary">Complete Solutions.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Discover our comprehensive range of water treatment, disinfection, and aquatic systems. 
              Three decades of engineering excellence delivering reliable solutions for every application.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card 
                key={product.id}
                className="group hover:shadow-professional transition-all duration-300 hover:-translate-y-2 border-0 shadow-card bg-gradient-to-br from-card to-secondary/20"
              >
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
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  
                  <Button 
                    variant="industrial" 
                    className="w-full group-hover:bg-primary group-hover:text-white"
                    asChild
                  >
                    <Link to={`/products/${product.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
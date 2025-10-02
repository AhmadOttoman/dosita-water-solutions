import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import treatmentSystems from "@/assets/treatment-systems.jpg";
import disinfectionSystems from "@/assets/disinfection-systems.jpg";
import poolEquipment from "@/assets/pool-equipment.jpg";
import uvSystems from "@/assets/uv-systems.jpg";
import copperIonization from "@/assets/copper-ionization.jpg";
import ozoneGenerator from "@/assets/ozone-generator.jpg";
import dosingSystems from "@/assets/dosing-systems.jpg";
import electricHeaters from "@/assets/electric-heaters.jpg";
import circulationPumps from "@/assets/circulation-pumps.jpg";
import { ArrowLeft, Droplets, Shield, Waves, Zap, Filter, Settings, Atom, Wind, Beaker, Thermometer, RotateCw } from "lucide-react";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: "treatment",
      title: "Water Treatment Systems",
      description: "Robust water treatment systems designed for efficiency and compliance with the highest industry standards.",
      image: treatmentSystems,
      icon: <Droplets className="h-12 w-12 text-primary" />,
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
      icon: <Shield className="h-12 w-12 text-primary" />,
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
      icon: <Waves className="h-12 w-12 text-primary" />,
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
      icon: <Zap className="h-12 w-12 text-primary" />,
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
      icon: <Atom className="h-12 w-12 text-primary" />,
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
      icon: <Wind className="h-12 w-12 text-primary" />,
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
      icon: <Beaker className="h-12 w-12 text-primary" />,
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
      icon: <Thermometer className="h-12 w-12 text-primary" />,
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
      icon: <RotateCw className="h-12 w-12 text-primary" />,
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
      icon: <Zap className="h-12 w-12 text-primary" />,
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
      icon: <Filter className="h-12 w-12 text-primary" />,
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
      icon: <Settings className="h-12 w-12 text-primary" />,
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

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-engineering-navy mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/products')} variant="industrial">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Button 
            onClick={() => navigate('/products')} 
            variant="ghost" 
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Title and Image */}
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  {product.icon}
                  <h1 className="text-4xl md:text-5xl font-bold text-engineering-navy">
                    {product.title}
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground">
                  {product.description}
                </p>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-professional">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-8">
              <Card className="border-0 shadow-card bg-gradient-to-br from-card to-secondary/20">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-engineering-navy mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card bg-gradient-to-br from-card to-secondary/20">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-engineering-navy mb-4">Technical Specifications</h2>
                  <div className="space-y-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                        <span className="text-muted-foreground font-medium">{key}:</span>
                        <span className="text-foreground font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Button 
                variant="industrial" 
                size="lg"
                className="w-full"
              >
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;

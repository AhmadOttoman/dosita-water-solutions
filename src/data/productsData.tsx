import treatmentSystems from "@/assets/treatment-systems.jpg";
import disinfectionSystems from "@/assets/disinfection-systems.jpg";
import poolEquipment from "@/assets/pool-equipment.jpg";
import uvSystems from "@/assets/uv-systems.jpg";
import copperIonization from "@/assets/copper-ionization.jpg";
import ozoneGenerator from "@/assets/ozone-generator.jpg";
import dosingSystems from "@/assets/dosing-systems.jpg";
import electricHeaters from "@/assets/electric-heaters.jpg";
import circulationPumps from "@/assets/circulation-pumps.jpg";
import { Droplets, Shield, Waves, Zap, Filter, Settings, Atom, Wind, Beaker, Thermometer, RotateCw } from "lucide-react";

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: JSX.Element;
  features: string[];
  specifications: Record<string, string>;
}

export const drinkingWaterProducts: Product[] = [
  {
    id: "uv-systems-drinking",
    title: "UV Systems",
    description: "Advanced ultraviolet disinfection systems for chemical-free drinking water treatment and pathogen elimination.",
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
    id: "copper-silver-ionization-drinking",
    title: "Copper Silver Ionization",
    description: "Eco-friendly copper-silver ionization systems for natural drinking water sanitization using mineral technology.",
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
  }
];

export const swimmingPoolProducts: Product[] = [
  {
    id: "uv-systems-pool",
    title: "UV System",
    description: "Advanced ultraviolet disinfection systems for chemical-free swimming pool water treatment and pathogen elimination.",
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
    id: "copper-silver-pool",
    title: "Copper Silver",
    description: "Eco-friendly copper-silver ionization systems for natural swimming pool sanitization using mineral technology.",
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
    id: "swimming-pool-pumps",
    title: "Swimming Pool Pumps",
    description: "High-performance circulation pumps for continuous water flow and optimal swimming pool system operation.",
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
    id: "electrical-heater",
    title: "Electrical Heater",
    description: "Efficient electric heating systems for optimal swimming pool water temperature control in all applications.",
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
    id: "chemical-dosing",
    title: "Chemical Dosing",
    description: "Precision chemical dosing pumps and systems for accurate swimming pool water treatment chemical delivery.",
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
    id: "swimming-pool-sand-filter",
    title: "Swimming Pool Sand Filter",
    description: "Multi-stage sand filtration systems for superior swimming pool water clarity and debris removal.",
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
    id: "accessories",
    title: "Accessories",
    description: "Complete range of swimming pool accessories and components for system enhancement and maintenance.",
    image: poolEquipment,
    icon: <Settings className="h-8 w-8 text-primary" />,
    features: [
      "Wide range of accessories",
      "Compatible with all systems",
      "High-quality materials",
      "Easy installation",
      "Available on demand",
      "Custom solutions available"
    ],
    specifications: {
      "Range": "Complete selection",
      "Availability": "On demand",
      "Quality": "Premium grade",
      "Support": "Technical assistance"
    }
  }
];

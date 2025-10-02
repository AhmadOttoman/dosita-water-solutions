import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (targetId: string) => {
    setIsMenuOpen(false);
    
    // Navigate to home page if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToSection(targetId);
      }, 100);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const offset = 80;
      const elementPosition = targetSection.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-engineering-navy">
              Pool
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" onClick={() => handleNavClick("home")} className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#products" onClick={() => handleNavClick("products")} className="text-foreground hover:text-primary transition-colors cursor-pointer">
              Products
            </a>
            <a href="#about" onClick={() => handleNavClick("about")} className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" onClick={() => handleNavClick("contact")} className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Button variant="industrial" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#home" onClick={() => handleNavClick("home")} className="block text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#products" onClick={() => handleNavClick("products")} className="block text-foreground hover:text-primary transition-colors cursor-pointer">
              Products
            </a>
            <a href="#about" onClick={() => handleNavClick("about")} className="block text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" onClick={() => handleNavClick("contact")} className="block text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Button variant="industrial" size="sm" className="w-full">
              Get Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
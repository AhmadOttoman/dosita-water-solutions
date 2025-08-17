import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-engineering-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">DOSITA</div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Engineering excellence in water treatment solutions. 
              Trusted by businesses worldwide for reliable, 
              efficient, and compliant water systems.
            </p>
            <div className="text-sm text-gray-400">
              <p>© 2024 Dosita. All rights reserved.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Water Treatment</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Disinfection Systems</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pool Equipment</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Technical Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Service Parts</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-600 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Certifications</a>
          </div>
          <div>
            Engineered for Excellence Since 1994
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
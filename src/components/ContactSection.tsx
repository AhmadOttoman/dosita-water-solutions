import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-engineering-navy mb-6">
            Let's Discuss
            <span className="block text-primary">Your Project</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to engineer the perfect water solution for your business? 
            Our experts are here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-professional border-0 bg-gradient-to-br from-card to-secondary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-engineering-navy">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe"
                    className="border-border focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Company"
                    className="border-border focus:ring-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="john@company.com"
                  className="border-border focus:ring-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message"
                  placeholder="Tell us about your water treatment requirements..."
                  rows={5}
                  className="border-border focus:ring-primary"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card border-0 bg-gradient-to-br from-card to-secondary/20">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-engineering-navy">Email Us</h3>
                    <p className="text-muted-foreground">sales@dosita.com</p>
                    <p className="text-muted-foreground">engineering@dosita.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 bg-gradient-to-br from-card to-secondary/20">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-engineering-navy">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground text-sm">Mon-Fri 8AM-6PM EST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 bg-gradient-to-br from-card to-secondary/20">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-engineering-navy">Visit Us</h3>
                    <p className="text-muted-foreground">1234 Industrial Drive</p>
                    <p className="text-muted-foreground">Engineering City, EC 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-primary to-industrial-blue text-white p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Need an Urgent Quote?</h3>
              <p className="text-white/90 text-sm mb-4">
                Our engineering team is standing by for emergency water treatment needs.
              </p>
              <Button variant="outline-white" size="sm">
                Emergency Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { drinkingWaterProducts, swimmingPoolProducts } from "@/data/productsData.tsx";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const allProducts = [...drinkingWaterProducts, ...swimmingPoolProducts];
  const product = allProducts.find(p => p.id === productId);

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

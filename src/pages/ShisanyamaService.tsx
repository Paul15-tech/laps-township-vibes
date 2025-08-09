import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Star, CheckCircle, UtensilsCrossed, ChefHat } from "lucide-react";
import shisanyamaImage from "@/assets/shisanyama-braai.jpg";

const ShisanyamaService = () => {
  const features = [
    "Traditional braai and grilled meats",
    "Boerewors, chicken, and beef specialties", 
    "Pap, chakalaka, and traditional sides",
    "Fresh salads and vegetables",
    "Authentic African cooking methods",
    "Family-style dining atmosphere"
  ];

  const menuItems = [
    { name: "Boerewors", price: "R80", description: "Traditional South African sausage" },
    { name: "Grilled Chicken", price: "R120", description: "Marinated chicken pieces" },
    { name: "Beef Steak", price: "R150", description: "Prime beef cuts grilled to perfection" },
    { name: "Mixed Platter", price: "R200", description: "Selection of meats with sides" }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-ubuntu-orange hover:text-earth-brown mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-earth-brown mb-6">
                Authentic <span className="text-ubuntu-orange">Shisanyama</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
                Experience the true taste of South Africa with our traditional shisanyama. 
                Grilled to perfection over open flames, served with authentic sides and 
                the warm hospitality of African culture.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8">
                <div className="flex items-center text-ubuntu-orange">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Dine-in experience</span>
                </div>
                <div className="flex items-center text-baobab-green">
                  <Star className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Traditional recipes</span>
                </div>
              </div>
              <Link to="/booking">
                <Button size="lg" className="bg-gradient-african text-white hover:opacity-90 px-8 py-4">
                  Make a Reservation
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src={shisanyamaImage}
                alt="Traditional Shisanyama Braai"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-brown mb-4">Popular Menu Items</h2>
            <p className="text-xl text-gray-600">Taste the authentic flavors of South Africa</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="hover-lift border-2 hover:border-ubuntu-orange transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-african rounded-full flex items-center justify-center mx-auto mb-4">
                    <UtensilsCrossed className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-earth-brown">{item.name}</CardTitle>
                  <div className="text-3xl font-bold text-ubuntu-orange">{item.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-brown mb-4">The Complete Experience</h2>
            <p className="text-xl text-gray-600">Every meal comes with authentic sides and atmosphere</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center p-6 bg-white rounded-lg shadow-md hover-lift">
                <CheckCircle className="w-6 h-6 text-baobab-green mr-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-earth-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-savanna-gold mb-4">Why Our Shisanyama?</h2>
            <p className="text-xl text-gray-200">Authentic taste meets traditional hospitality</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Traditional Methods</h3>
              <p className="text-gray-300">Cooked over open flames using time-honored techniques</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <UtensilsCrossed className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Fresh Ingredients</h3>
              <p className="text-gray-300">Only the finest locally sourced meats and vegetables</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Cultural Experience</h3>
              <p className="text-gray-300">More than food - it's a celebration of African culture</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-african text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready for Authentic African Cuisine?</h2>
          <p className="text-xl mb-8">Book your table and experience the true taste of South Africa</p>
          <Link to="/booking">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg">
              Make Reservation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ShisanyamaService;
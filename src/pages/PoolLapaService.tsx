import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Star, CheckCircle, Waves, Sun, Users } from "lucide-react";
import poolLapaImage from "@/assets/swimming-pool-lapa.jpg";

const PoolLapaService = () => {
  const features = [
    "Crystal clear swimming pool",
    "Traditional lapa area", 
    "Poolside seating and shade",
    "Braai facilities available",
    "Family-friendly environment",
    "Pool maintenance and safety"
  ];

  const packages = [
    { name: "Day Pass", price: "R80", description: "Full day access to pool and lapa" },
    { name: "Family Package", price: "R200", description: "Day pass for up to 4 family members" },
    { name: "Group Rate", price: "R50pp", description: "Special rate for groups of 8+" },
    { name: "Private Event", price: "R800", description: "Exclusive use for private functions" }
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
                Swimming Pool & <span className="text-ubuntu-orange">Lapa</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
                Cool off in our crystal-clear swimming pool and relax in our traditional African lapa. 
                Perfect for families, groups, or anyone looking to unwind in a beautiful, 
                peaceful setting with authentic South African charm.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8">
                <div className="flex items-center text-ubuntu-orange">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Daily access</span>
                </div>
                <div className="flex items-center text-baobab-green">
                  <Star className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Day passes available</span>
                </div>
              </div>
              <Link to="/booking">
                <Button size="lg" className="bg-gradient-african text-white hover:opacity-90 px-8 py-4">
                  Book Pool Access
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src={poolLapaImage}
                alt="Swimming Pool and Traditional Lapa"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Access Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-brown mb-4">Access Options</h2>
            <p className="text-xl text-gray-600">Flexible options for individuals, families, and groups</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} className="hover-lift border-2 hover:border-ubuntu-orange transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-african rounded-full flex items-center justify-center mx-auto mb-4">
                    <Waves className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-earth-brown">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-ubuntu-orange">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{pkg.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-brown mb-4">Pool & Lapa Facilities</h2>
            <p className="text-xl text-gray-600">Everything you need for the perfect day by the pool</p>
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

      {/* Why Choose Our Pool & Lapa */}
      <section className="py-20 bg-earth-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-savanna-gold mb-4">Why Choose Our Pool & Lapa?</h2>
            <p className="text-xl text-gray-200">The perfect blend of relaxation and African culture</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Clean & Safe</h3>
              <p className="text-gray-300">Well-maintained pool with regular cleaning and safety measures</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Traditional Lapa</h3>
              <p className="text-gray-300">Authentic African lapa structure for shade and cultural experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Family Friendly</h3>
              <p className="text-gray-300">Safe, welcoming environment perfect for all ages</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-african text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Relax by the Pool?</h2>
          <p className="text-xl mb-8">Book your pool access today and enjoy a perfect day of relaxation</p>
          <Link to="/booking">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg">
              Book Pool Access
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PoolLapaService;
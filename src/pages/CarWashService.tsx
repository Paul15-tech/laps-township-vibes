import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Star, CheckCircle, Car, Sparkles } from "lucide-react";
import carWashImage from "@/assets/car-wash-service.jpg";

const CarWashService = () => {
  const features = [
    "Exterior wash and wax",
    "Interior vacuuming and cleaning", 
    "Tire and rim detailing",
    "Dashboard and upholstery care",
    "Windscreen cleaning",
    "Professional equipment and eco-friendly products"
  ];

  const services = [
    { name: "Basic Wash", price: "R50", duration: "30 mins", description: "Exterior wash and dry" },
    { name: "Standard Wash", price: "R80", duration: "45 mins", description: "Exterior wash, interior vacuum, windows" },
    { name: "Premium Wash", price: "R120", duration: "60 mins", description: "Full service with wax and tire shine" },
    { name: "Deluxe Detail", price: "R150", duration: "90 mins", description: "Complete detailing service" }
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
                Professional <span className="text-ubuntu-orange">Car Wash</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
                Keep your vehicle looking pristine with our professional car wash services. 
                We use eco-friendly products and state-of-the-art equipment to ensure your car 
                gets the care it deserves.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8">
                <div className="flex items-center text-ubuntu-orange">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">30-90 minutes</span>
                </div>
                <div className="flex items-center text-baobab-green">
                  <Star className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Professional Service</span>
                </div>
              </div>
              <Link to="/booking">
                <Button size="lg" className="bg-gradient-african text-white hover:opacity-90 px-8 py-4">
                  Book Car Wash Service
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src={carWashImage}
                alt="Professional Car Wash Service"
                className="rounded-2xl shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-earth-brown mb-4">Service Packages</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Choose the perfect package for your vehicle</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift border-2 hover:border-ubuntu-orange transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-african rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-earth-brown">{service.name}</CardTitle>
                  <div className="text-3xl font-bold text-ubuntu-orange">{service.price}</div>
                  <div className="text-sm text-gray-500">{service.duration}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-earth-brown mb-4">What's Included</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Every car wash service includes these professional treatments</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-savanna-gold mb-4">Why Choose Our Car Wash?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200">Professional service with attention to detail</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Eco-Friendly Products</h3>
              <p className="text-gray-300">We use biodegradable and environmentally safe cleaning products</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Professional Equipment</h3>
              <p className="text-gray-300">State-of-the-art equipment for the best cleaning results</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Quality Guarantee</h3>
              <p className="text-gray-300">100% satisfaction guarantee on all our services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-african text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Your Car Washed?</h2>
          <p className="text-xl mb-8">Book your car wash service today and experience the LAPS difference</p>
          <Link to="/booking">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CarWashService;
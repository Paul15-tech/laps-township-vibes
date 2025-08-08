import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Star, CheckCircle, Bed, Wifi, Car } from "lucide-react";
import accommodationImage from "@/assets/accommodation-room.jpg";

const AccommodationService = () => {
  const features = [
    "Clean, comfortable rooms",
    "En-suite bathrooms", 
    "Air conditioning and heating",
    "TV and Wi-Fi access",
    "24-hour security",
    "Parking facilities"
  ];

  const roomTypes = [
    { name: "Standard Room", price: "R400", description: "Comfortable single/double bed with all amenities" },
    { name: "Deluxe Room", price: "R500", description: "Spacious room with extra comfort features" },
    { name: "Family Room", price: "R600", description: "Perfect for families with additional space" },
    { name: "Executive Suite", price: "R750", description: "Premium accommodation with luxury touches" }
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-earth-brown mb-6">
                Comfortable <span className="text-ubuntu-orange">Accommodation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Rest easy in our clean, comfortable rooms designed for your comfort and convenience. 
                Whether you're traveling for business or leisure, our accommodation provides 
                everything you need for a peaceful stay.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center text-ubuntu-orange">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">24/7 availability</span>
                </div>
                <div className="flex items-center text-baobab-green">
                  <Star className="w-5 h-5 mr-2" />
                  <span className="font-semibold">From R400/night</span>
                </div>
              </div>
              <Link to="/booking">
                <Button size="lg" className="bg-gradient-african text-white hover:opacity-90 px-8 py-4">
                  Book Your Stay
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src={accommodationImage}
                alt="Comfortable Accommodation Room"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-brown mb-4">Room Options</h2>
            <p className="text-xl text-gray-600">Choose the perfect room for your stay</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roomTypes.map((room, index) => (
              <Card key={index} className="hover-lift border-2 hover:border-ubuntu-orange transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-african rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bed className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-earth-brown">{room.name}</CardTitle>
                  <div className="text-3xl font-bold text-ubuntu-orange">{room.price}</div>
                  <div className="text-sm text-gray-500">per night</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{room.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Room Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-brown mb-4">Room Amenities</h2>
            <p className="text-xl text-gray-600">Everything you need for a comfortable stay</p>
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

      {/* Why Stay With Us */}
      <section className="py-20 bg-earth-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-savanna-gold mb-4">Why Choose Our Accommodation?</h2>
            <p className="text-xl text-gray-200">Comfort, convenience, and peace of mind</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Clean & Comfortable</h3>
              <p className="text-gray-300">Spotless rooms with quality bedding and furnishings</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Modern Amenities</h3>
              <p className="text-gray-300">Wi-Fi, TV, air conditioning, and all modern conveniences</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Secure Parking</h3>
              <p className="text-gray-300">Safe, secure parking facilities for your vehicle</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-african text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-8">Reserve your room today and enjoy a comfortable, peaceful night's rest</p>
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

export default AccommodationService;
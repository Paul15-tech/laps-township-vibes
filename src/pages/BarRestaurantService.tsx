import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Star, CheckCircle, Wine, Coffee } from "lucide-react";
import barRestaurantImage from "@/assets/bar-restaurant.jpg";

const BarRestaurantService = () => {
  const features = [
    "Premium local and imported spirits",
    "Local craft beers and ciders", 
    "Wine selection from SA vineyards",
    "Traditional African beverages",
    "Full restaurant menu",
    "Indoor and outdoor seating"
  ];

  const categories = [
    { name: "Spirits & Liquor", icon: Wine, description: "Premium whiskey, gin, vodka, and local spirits" },
    { name: "Local Beers", icon: Coffee, description: "Castle, Black Label, Amstel, and craft selections" },
    { name: "Wine Selection", icon: Wine, description: "Fine wines from Cape Town and local vineyards" },
    { name: "Restaurant Menu", icon: Coffee, description: "Full dining menu with African and international dishes" }
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
                Bar & <span className="text-ubuntu-orange">Restaurant</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Unwind and enjoy our fully stocked bar featuring premium spirits, local beers, 
                and fine wines. Our restaurant serves delicious meals that perfectly complement 
                your drink of choice in a relaxed, welcoming atmosphere.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center text-ubuntu-orange">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Open daily</span>
                </div>
                <div className="flex items-center text-baobab-green">
                  <Star className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Full service bar</span>
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
                src={barRestaurantImage}
                alt="Bar and Restaurant"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-brown mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">From drinks to dining, we have everything you need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover-lift border-2 hover:border-ubuntu-orange transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-african rounded-full flex items-center justify-center mx-auto mb-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-earth-brown">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Available */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-brown mb-4">Full Bar & Restaurant Service</h2>
            <p className="text-xl text-gray-600">Everything you need for the perfect evening out</p>
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

      {/* Atmosphere */}
      <section className="py-20 bg-earth-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-savanna-gold mb-4">The Perfect Atmosphere</h2>
            <p className="text-xl text-gray-200">Relaxed dining with authentic African hospitality</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Wine className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Premium Selection</h3>
              <p className="text-gray-300">Carefully curated drinks from local and international brands</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Comfort Dining</h3>
              <p className="text-gray-300">Relaxed atmosphere perfect for any occasion</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Friendly Service</h3>
              <p className="text-gray-300">Warm, welcoming staff dedicated to your experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-african text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready for Good Food & Drinks?</h2>
          <p className="text-xl mb-8">Join us for an unforgettable dining and drinking experience</p>
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

export default BarRestaurantService;
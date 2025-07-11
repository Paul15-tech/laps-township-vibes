
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Car, 
  UtensilsCrossed, 
  Wine, 
  Bed, 
  Users, 
  Waves,
  Check,
  Printer,
  ArrowRight,
  Star
} from "lucide-react";

const Pricing = () => {
  const carWashPricing = [
    {
      name: "Basic Wash",
      price: "R50",
      description: "Essential car cleaning",
      features: [
        "Exterior wash",
        "Basic interior vacuum",
        "Windscreen cleaning",
        "Tire cleaning"
      ]
    },
    {
      name: "Standard Wash",
      price: "R80",
      description: "Comprehensive cleaning",
      features: [
        "Everything in Basic",
        "Interior deep clean",
        "Dashboard polishing",
        "Door frames cleaning",
        "Mat washing"
      ],
      popular: true
    },
    {
      name: "Premium Wash",
      price: "R150",
      description: "Complete detailing service",
      features: [
        "Everything in Standard",
        "Wax application",
        "Tire shine",
        "Interior conditioning",
        "Engine bay cleaning",
        "Hand drying"
      ]
    }
  ];

  const venueHire = [
    {
      service: "Swimming Pool Day Pass",
      price: "R30 per person",
      description: "Full day access to pool and lapa area"
    },
    {
      service: "Lapa Hire (Half Day)",
      price: "R300",
      description: "4-hour rental for small gatherings"
    },
    {
      service: "Lapa Hire (Full Day)",
      price: "R500",
      description: "8-hour rental for events and parties"
    },
    {
      service: "Conference Room (Half Day)",
      price: "R400",
      description: "4 hours with basic equipment"
    },
    {
      service: "Conference Room (Full Day)",
      price: "R700",
      description: "8 hours with full AV equipment"
    },
    {
      service: "Accommodation (Per Night)",
      price: "R400 - R600",
      description: "Comfortable rooms with amenities"
    }
  ];

  const foodPricing = [
    {
      category: "Braai Specials",
      items: [
        { name: "Boerewors & Pap", price: "R85" },
        { name: "Grilled Chicken Quarter", price: "R95" },
        { name: "T-Bone Steak", price: "R180" },
        { name: "Mixed Grill Platter", price: "R220" }
      ]
    },
    {
      category: "Traditional Meals",
      items: [
        { name: "Pap & Chakalaka", price: "R45" },
        { name: "Samp & Beans", price: "R50" },
        { name: "Morogo & Pap", price: "R65" },
        { name: "Traditional Chicken Stew", price: "R110" }
      ]
    },
    {
      category: "Beverages",
      items: [
        { name: "Local Beer (500ml)", price: "R25" },
        { name: "Soft Drinks", price: "R15" },
        { name: "Traditional Beer", price: "R20" },
        { name: "House Wine (Glass)", price: "R35" }
      ]
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-20 african-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-earth-brown mb-6 fade-in">
            Our <span className="text-ubuntu-orange">Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto slide-up mb-8">
            Transparent, affordable pricing for all our services. 
            Quality you can trust at prices that make sense.
          </p>
          <Button 
            onClick={handlePrint}
            className="bg-baobab-green hover:bg-green-700 text-white hover-lift"
          >
            <Printer className="mr-2 w-5 h-5" />
            Print Pricing List
          </Button>
        </div>
      </section>

      {/* Car Wash Pricing */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Car className="w-8 h-8 text-ubuntu-orange mr-3" />
              <h2 className="text-4xl font-bold text-earth-brown">Car Wash Services</h2>
            </div>
            <p className="text-xl text-gray-600">Professional car cleaning at affordable prices</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {carWashPricing.map((package_, index) => (
              <Card key={index} className={`hover-lift transition-all duration-300 ${
                package_.popular 
                  ? 'border-ubuntu-orange border-2 shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-ubuntu-orange'
              }`}>
                {package_.popular && (
                  <div className="bg-ubuntu-orange text-white text-center py-2 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-earth-brown">{package_.name}</CardTitle>
                  <div className="text-4xl font-bold text-ubuntu-orange mb-2">{package_.price}</div>
                  <p className="text-gray-600">{package_.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {package_.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-baobab-green mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/booking">
                    <Button className={`w-full hover-lift ${
                      package_.popular 
                        ? 'bg-ubuntu-orange hover:bg-orange-600' 
                        : 'bg-baobab-green hover:bg-green-700'
                    } text-white`}>
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Hire Pricing */}
      <section className="py-20 bg-earth-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-savanna-gold mr-3" />
              <h2 className="text-4xl font-bold text-savanna-gold">Venue Hire & Accommodation</h2>
            </div>
            <p className="text-xl text-gray-200">Perfect spaces for your events and stays</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {venueHire.map((item, index) => (
              <Card key={index} className="bg-white/10 border-white/20 hover-lift hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-savanna-gold">{item.service}</h3>
                    <span className="text-2xl font-bold text-white">{item.price}</span>
                  </div>
                  <p className="text-gray-200">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Food & Beverage Pricing */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <UtensilsCrossed className="w-8 h-8 text-ubuntu-orange mr-3" />
              <h2 className="text-4xl font-bold text-earth-brown">Food & Beverages</h2>
            </div>
            <p className="text-xl text-gray-600">Authentic African cuisine and refreshing drinks</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {foodPricing.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="hover-lift border-2 hover:border-ubuntu-orange transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-earth-brown text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <span className="text-gray-700">{item.name}</span>
                        <span className="font-semibold text-ubuntu-orange">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gradient-african text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Special Offers & Packages</h2>
            <p className="text-xl text-gray-100 mb-8">
              Great value combinations for the best experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/10 border-white/20 hover-lift">
              <CardContent className="p-8 text-center">
                <Star className="w-12 h-12 text-savanna-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-savanna-gold mb-4">Weekend Special</h3>
                <p className="text-gray-200 mb-4">
                  Car wash + Braai meal + Pool access
                </p>
                <div className="text-3xl font-bold text-white mb-4">R180</div>
                <p className="text-sm text-gray-300">(Save R25 when booked together)</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 hover-lift">
              <CardContent className="p-8 text-center">
                <Star className="w-12 h-12 text-savanna-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-savanna-gold mb-4">Event Package</h3>
                <p className="text-gray-200 mb-4">
                  Lapa hire + Catering for 20 people
                </p>
                <div className="text-3xl font-bold text-white mb-4">R2200</div>
                <p className="text-sm text-gray-300">(Perfect for celebrations)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-earth-brown mb-6">Ready to Book?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Great prices, great service, great experience. What are you waiting for?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-ubuntu-orange hover:bg-orange-600 text-white px-8 py-4 text-lg hover-lift">
                Make a Booking <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-white px-8 py-4 text-lg hover-lift">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

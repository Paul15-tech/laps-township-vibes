
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
  Sparkles,
  ChefHat,
  Building,
  Palmtree,
  ArrowRight,
  Clock,
  MapPin
} from "lucide-react";

// Import custom service images
import carWashImage from "@/assets/car-wash-service.jpg";
import shisanyamaImage from "@/assets/shisanyama-braai.jpg";
import barRestaurantImage from "@/assets/bar-restaurant.jpg";
import accommodationImage from "@/assets/accommodation-room.jpg";
import conferenceImage from "@/assets/conference-facilities.jpg";
import poolLapaImage from "@/assets/swimming-pool-lapa.jpg";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Full Car Wash Services",
      description: "Professional car cleaning and detailing",
      image: carWashImage,
      link: "/services/car-wash",
      features: [
        "Exterior wash and wax",
        "Interior vacuuming and cleaning",
        "Tire and rim detailing",
        "Dashboard and upholstery care",
        "Windscreen cleaning",
        "Professional equipment and eco-friendly products"
      ],
      pricing: "From R50 - R150",
      duration: "30-60 minutes"
    },
    {
      icon: UtensilsCrossed,
      title: "Shisanyama & Traditional Meals",
      description: "Authentic South African grilled food experience",
      image: shisanyamaImage,
      link: "/services/shisanyama",
      features: [
        "Traditional braai and grilled meats",
        "Boerewors, chicken, and beef specialties",
        "Pap, chakalaka, and traditional sides",
        "Fresh salads and vegetables",
        "Authentic African cooking methods",
        "Family-style dining atmosphere"
      ],
      pricing: "From R80 - R200",
      duration: "Dine-in experience"
    },
    {
      icon: Wine,
      title: "Liquor Bar & Restaurant",
      description: "Full bar service with local and imported beverages",
      image: barRestaurantImage,
      link: "/services/bar-restaurant",
      features: [
        "Premium local and imported spirits",
        "Local craft beers and ciders",
        "Wine selection from SA vineyards",
        "Traditional African beverages",
        "Full restaurant menu",
        "Indoor and outdoor seating"
      ],
      pricing: "Bar prices available",
      duration: "Open daily"
    },
    {
      icon: Bed,
      title: "Accommodation Services",
      description: "Comfortable rooms for overnight stays",
      image: accommodationImage,
      link: "/services/accommodation",
      features: [
        "Clean, comfortable rooms",
        "En-suite bathrooms",
        "Air conditioning and heating",
        "TV and Wi-Fi access",
        "24-hour security",
        "Parking facilities"
      ],
      pricing: "From R400 per night",
      duration: "Overnight stays"
    },
    {
      icon: Users,
      title: "Conference Facilities",
      description: "Professional meeting and event spaces",
      image: conferenceImage,
      link: "/services/conference",
      features: [
        "Fully equipped conference rooms",
        "Audio-visual equipment",
        "High-speed internet",
        "Catering services available",
        "Flexible seating arrangements",
        "Professional event support"
      ],
      pricing: "From R500 per day",
      duration: "Half/full day rates"
    },
    {
      icon: Waves,
      title: "Swimming Pool & Lapa",
      description: "Relaxation and entertainment area",
      image: poolLapaImage,
      link: "/services/pool-lapa",
      features: [
        "Crystal clear swimming pool",
        "Traditional lapa area",
        "Poolside seating and shade",
        "Braai facilities available",
        "Family-friendly environment",
        "Pool maintenance and safety"
      ],
      pricing: "Day passes available",
      duration: "Daily access"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-20 african-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-earth-brown mb-6 fade-in">
            Our <span className="text-ubuntu-orange">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto slide-up">
            From professional car care to authentic African cuisine, accommodation to entertainment - 
            we offer everything you need under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="block">
                <Card className="group hover-lift border-2 hover:border-ubuntu-orange transition-all duration-300 overflow-hidden cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-gradient-african rounded-full flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl text-earth-brown group-hover:text-ubuntu-orange transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600">{service.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center text-ubuntu-orange">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </div>
                      <div className="flex items-center text-baobab-green font-semibold">
                        {service.pricing}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <Sparkles className="w-4 h-4 text-ubuntu-orange mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-ubuntu-orange font-medium">
                          + {service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-earth-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-savanna-gold">
              Why Choose LAPS?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We combine professional service with authentic African hospitality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Authentic Experience</h3>
              <p className="text-gray-300">Traditional methods with modern standards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Community Focus</h3>
              <p className="text-gray-300">Supporting local employment and growth</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Professional Standards</h3>
              <p className="text-gray-300">Quality service you can depend on</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Convenient Location</h3>
              <p className="text-gray-300">Easy access in the heart of Moletji</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-african text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Our Services?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Book any of our services today and discover the LAPS difference. 
            Professional quality with authentic African hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg hover-lift">
                Book Services <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg hover-lift">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

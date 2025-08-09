
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Car, 
  UtensilsCrossed, 
  Bed, 
  Waves, 
  Users, 
  Star,
  ArrowRight,
  MapPin,
  Phone
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Car,
      title: "Car Wash",
      description: "Professional car cleaning services"
    },
    {
      icon: UtensilsCrossed,
      title: "Shisanyama",
      description: "Traditional grilled food & drinks"
    },
    {
      icon: Bed,
      title: "Accommodation",
      description: "Comfortable rooms & conference facilities"
    },
    {
      icon: Waves,
      title: "Swimming Pool",
      description: "Refreshing pool & lapa area"
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center african-pattern">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            Welcome to <span className="text-savanna-gold">LAPS</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-200 slide-up">
            Entertainment Centre
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto slide-up">
            Your premier black-owned township destination in Moletji for car wash, 
            shisanyama, accommodation, and unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
            <Link to="/booking">
              <Button size="lg" className="bg-ubuntu-orange hover:bg-orange-600 text-white px-8 py-4 text-lg hover-lift">
                Book Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-earth-brown px-8 py-4 text-lg hover-lift">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From car care to culinary delights, accommodation to entertainment - 
              we've got everything you need for a complete experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover-lift border-2 hover:border-ubuntu-orange transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-african rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-earth-brown mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-baobab-green hover:bg-green-700 text-white px-8 py-3 hover-lift">
                View All Services <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-earth-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-savanna-gold">
                Proudly Black-Owned
              </h2>
              <p className="text-xl mb-6 text-gray-200">
                Based in the heart of Moletji, LAPS Entertainment Centre is a testament to 
                township entrepreneurship and community spirit. We're more than just a business - 
                we're a cornerstone of our community.
              </p>
              <p className="text-lg mb-8 text-gray-300">
                Our mission is to provide exceptional services while creating jobs and 
                opportunities for our local community. Every rand spent here supports 
                black economic empowerment and township development.
              </p>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-savanna-gold text-savanna-gold hover:bg-savanna-gold hover:text-earth-brown hover-lift">
                  Learn More About Us <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="African landscape representing our heritage"
                className="rounded-lg shadow-2xl hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-african text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for an Amazing Experience?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Book your service today and discover why LAPS Entertainment Centre 
            is Moletji's premier destination for food, fun, and relaxation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg hover-lift">
                Make a Booking
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg hover-lift">
                <Phone className="mr-2 w-5 h-5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

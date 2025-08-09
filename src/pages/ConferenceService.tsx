import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Star, CheckCircle, Users, Presentation, Wifi } from "lucide-react";
import conferenceImage from "@/assets/conference-facilities.jpg";

const ConferenceService = () => {
  const features = [
    "Fully equipped conference rooms",
    "Audio-visual equipment", 
    "High-speed internet",
    "Catering services available",
    "Flexible seating arrangements",
    "Professional event support"
  ];

  const packages = [
    { name: "Half Day", price: "R500", description: "4-hour room rental with basic AV" },
    { name: "Full Day", price: "R800", description: "8-hour rental with full equipment" },
    { name: "Multi-Day", price: "R650/day", description: "Extended events with discounted rates" },
    { name: "Premium Package", price: "R1200", description: "Full day with catering and support" }
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
                Conference <span className="text-ubuntu-orange">Facilities</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
                Host successful meetings, conferences, and events in our professional facilities. 
                Equipped with modern technology and supported by our experienced team, 
                your event will run smoothly from start to finish.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8">
                <div className="flex items-center text-ubuntu-orange">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Half/full day rates</span>
                </div>
                <div className="flex items-center text-baobab-green">
                  <Star className="w-5 h-5 mr-2" />
                  <span className="font-semibold">From R500</span>
                </div>
              </div>
              <Link to="/booking">
                <Button size="lg" className="bg-gradient-african text-white hover:opacity-90 px-8 py-4">
                  Book Conference Room
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src={conferenceImage}
                alt="Professional Conference Facilities"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-brown mb-4">Conference Packages</h2>
            <p className="text-xl text-gray-600">Flexible options for meetings of any size</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} className="hover-lift border-2 hover:border-ubuntu-orange transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-african rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
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

      {/* Facilities & Equipment */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-brown mb-4">Facilities & Equipment</h2>
            <p className="text-xl text-gray-600">Everything you need for a successful event</p>
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

      {/* Why Choose Our Facilities */}
      <section className="py-20 bg-earth-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-savanna-gold mb-4">Why Choose Our Conference Facilities?</h2>
            <p className="text-xl text-gray-200">Professional, reliable, and fully supported</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Presentation className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Modern Equipment</h3>
              <p className="text-gray-300">Latest audio-visual technology for professional presentations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">High-Speed Internet</h3>
              <p className="text-gray-300">Reliable connectivity for virtual meetings and presentations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-savanna-gold">Professional Support</h3>
              <p className="text-gray-300">Dedicated staff to ensure your event runs smoothly</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-african text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Host Your Event?</h2>
          <p className="text-xl mb-8">Book our professional conference facilities for your next meeting or event</p>
          <Link to="/booking">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg">
              Book Conference Room
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ConferenceService;
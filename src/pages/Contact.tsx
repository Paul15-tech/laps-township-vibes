
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Facebook,
  Instagram,
  Navigation
} from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    const message = "Hello! I'd like to know more about LAPS Entertainment Centre services.";
    const phoneNumber = "27123456789";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleCall = () => {
    window.open("tel:+27123456789", "_self");
  };

  const handleEmail = () => {
    window.open("mailto:info@lapsentertainment.co.za", "_self");
  };

  const handleDirections = () => {
    // Replace with actual coordinates
    window.open("https://maps.google.com/?q=Moletji,Limpopo,South+Africa", "_blank");
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-20 african-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-earth-brown mb-6 fade-in">
            Contact <span className="text-ubuntu-orange">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto slide-up">
            Get in touch with us for bookings, inquiries, or just to say hello. 
            We're here to help and can't wait to serve you!
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center hover-lift border-2 hover:border-ubuntu-orange transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-african rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-earth-brown mb-3">Call Us</h3>
                <p className="text-gray-600 mb-4">+27 12 345 6789</p>
                <Button 
                  onClick={handleCall}
                  className="bg-baobab-green hover:bg-green-700 text-white hover-lift"
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift border-2 hover:border-ubuntu-orange transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-african rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-earth-brown mb-3">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Quick & Easy</p>
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white hover-lift"
                >
                  Chat Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift border-2 hover:border-ubuntu-orange transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-african rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-earth-brown mb-3">Email Us</h3>
                <p className="text-gray-600 mb-4 text-sm">info@lapsentertainment.co.za</p>
                <Button 
                  onClick={handleEmail}
                  className="bg-ubuntu-orange hover:bg-orange-600 text-white hover-lift"
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-lift border-2 hover:border-ubuntu-orange transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-african rounded-full flex items-center justify-center mx-auto mb-4">
                  <Navigation className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-earth-brown mb-3">Directions</h3>
                <p className="text-gray-600 mb-4">Moletji, Limpopo</p>
                <Button 
                  onClick={handleDirections}
                  className="bg-baobab-green hover:bg-green-700 text-white hover-lift"
                >
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information & Map */}
      <section className="py-20 bg-earth-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-savanna-gold mb-8">Visit Us Today</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-ubuntu-orange mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-savanna-gold mb-2">Our Location</h3>
                    <p className="text-gray-200">
                      LAPS Entertainment Centre<br />
                      Moletji, Limpopo Province<br />
                      South Africa<br />
                      GPS Coordinates: Available on request
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-ubuntu-orange mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-savanna-gold mb-2">Operating Hours</h3>
                    <div className="text-gray-200 space-y-1">
                      <p>Monday - Thursday: 8:00 AM - 10:00 PM</p>
                      <p>Friday - Saturday: 8:00 AM - 12:00 AM</p>
                      <p>Sunday: 9:00 AM - 10:00 PM</p>
                      <p className="text-ubuntu-orange font-semibold mt-2">Open 7 days a week!</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-ubuntu-orange mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-savanna-gold mb-2">Contact Numbers</h3>
                    <div className="text-gray-200 space-y-1">
                      <p>Main Line: +27 12 345 6789</p>
                      <p>WhatsApp: +27 12 345 6789</p>
                      <p>Emergency: +27 82 123 4567</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-ubuntu-orange mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-savanna-gold mb-2">Email & Social</h3>
                    <div className="text-gray-200 space-y-1">
                      <p>General: info@lapsentertainment.co.za</p>
                      <p>Bookings: bookings@lapsentertainment.co.za</p>
                      <div className="flex space-x-3 mt-3">
                        <Button variant="ghost" size="sm" className="text-savanna-gold hover:text-white p-0">
                          <Facebook className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-savanna-gold hover:text-white p-0">
                          <Instagram className="w-5 h-5" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={handleWhatsApp}
                          className="text-savanna-gold hover:text-white p-0"
                        >
                          <MessageCircle className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div>
              <h2 className="text-4xl font-bold text-savanna-gold mb-8">Find Us on the Map</h2>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.123456789!2d29.123456!3d-23.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMoletji%2C%20Limpopo%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LAPS Entertainment Centre Location"
                  className="hover-lift transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/20 to-transparent pointer-events-none" />
              </div>
              <div className="mt-6 text-center">
                <Button 
                  onClick={handleDirections}
                  className="bg-ubuntu-orange hover:bg-orange-600 text-white px-6 py-3 hover-lift"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-african text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience LAPS?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Don't wait - contact us today and discover why we're Moletji's favorite entertainment destination. 
            Your amazing experience is just a phone call or message away!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsApp}
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg hover-lift"
            >
              <MessageCircle className="mr-2 w-6 h-6" />
              WhatsApp Us Now
            </Button>
            <Button 
              onClick={handleCall}
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg hover-lift"
            >
              <Phone className="mr-2 w-6 h-6" />
              Call Us Direct
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

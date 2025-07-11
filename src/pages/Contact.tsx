
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/27123456789", "_blank");
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('/lovable-uploads/e277210e-aeab-4427-be2a-25bd62a3c460.png')`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Ready to experience the best of Moletji? Contact us today to book your visit or ask any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-earth-brown">Contact Information</CardTitle>
              <CardDescription>Reach out to us through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-ubuntu-orange mt-1" />
                <div>
                  <h3 className="font-semibold text-earth-brown">Address</h3>
                  <p className="text-gray-600">
                    LAPS Entertainment Centre<br />
                    Moletji, Limpopo<br />
                    South Africa
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-ubuntu-orange mt-1" />
                <div>
                  <h3 className="font-semibold text-earth-brown">Phone</h3>
                  <p className="text-gray-600">+27 12 345 6789</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-ubuntu-orange mt-1" />
                <div>
                  <h3 className="font-semibold text-earth-brown">Email</h3>
                  <p className="text-gray-600">info@lapsentertainment.co.za</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-ubuntu-orange mt-1" />
                <div>
                  <h3 className="font-semibold text-earth-brown">Operating Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Thursday: 8AM - 10PM</p>
                    <p>Friday - Saturday: 8AM - 12AM</p>
                    <p>Sunday: 9AM - 10PM</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-earth-brown">Find Us</CardTitle>
              <CardDescription>Located in the heart of Moletji</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.123456789!2d29.123456!3d-24.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDA3JzI0LjQiUyAyOcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-ubuntu-orange/90 backdrop-blur-sm text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Visit Us Today!</h2>
              <p className="text-lg mb-6">
                Experience authentic African hospitality at LAPS Entertainment Centre
              </p>
              <Button
                onClick={handleWhatsApp}
                variant="secondary"
                size="lg"
                className="bg-white text-ubuntu-orange hover:bg-gray-100"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Your Visit Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;

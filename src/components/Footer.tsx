
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/27606095887", "_blank");
  };

  return (
    <footer className="bg-earth-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Business Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-savanna-gold">LAPS Entertainment Centre</h3>
            <p className="text-gray-300">
              Your premier destination for car wash, shisanyama, accommodation, and entertainment in Moletji.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-savanna-gold hover:text-white">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-savanna-gold hover:text-white">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-savanna-gold hover:text-white"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-savanna-gold">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-ubuntu-orange" />
                <span className="text-sm">Moletji, Limpopo, South Africa</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-ubuntu-orange" />
                <span className="text-sm">060 609 5887</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-ubuntu-orange" />
                <span className="text-sm">mohlekhup1@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-savanna-gold">Operating Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-ubuntu-orange" />
                <span>Mon - Thu: 8AM - 10PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-ubuntu-orange" />
                <span>Fri - Sat: 8AM - 12AM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-ubuntu-orange" />
                <span>Sunday: 9AM - 10PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-savanna-gold">Our Services</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Car Wash Services</li>
              <li>Shisanyama & Restaurant</li>
              <li>Liquor Bar</li>
              <li>Accommodation</li>
              <li>Conference Facilities</li>
              <li>Swimming Pool & Lapa</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 LAPS Entertainment Centre. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Proudly Black-Owned • Township Business • Moletji, Limpopo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

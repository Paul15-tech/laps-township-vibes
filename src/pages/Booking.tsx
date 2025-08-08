
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    guests: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Car Wash - Basic (R50)",
    "Car Wash - Standard (R80)",  
    "Car Wash - Premium (R150)",
    "Shisanyama Dining",
    "Pool Day Pass (R30 per person)",
    "Lapa Hire - Half Day (R300)",
    "Lapa Hire - Full Day (R500)",
    "Conference Room - Half Day (R400)",
    "Conference Room - Full Day (R700)",
    "Accommodation Booking",
    "Event Package",
    "Other - Please specify in message"
  ];

  const timeSlots = [
    "08:00", "09:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.service || !formData.date) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Show success message
    setIsSubmitted(true);
    toast.success("Booking request submitted successfully! We'll contact you soon to confirm.");
    
    console.log("Booking submitted:", formData);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-2xl p-12">
            <CheckCircle className="w-24 h-24 text-baobab-green mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-earth-brown mb-6">Booking Confirmed!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for choosing LAPS Entertainment Centre. We've received your booking request 
              and will contact you within 24 hours to confirm all details.
            </p>
            <div className="bg-orange-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-earth-brown mb-4">Your Booking Details:</h3>
              <div className="text-left space-y-2">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Service:</strong> {formData.service}</p>
                <p><strong>Date:</strong> {formData.date}</p>
                {formData.time && <p><strong>Time:</strong> {formData.time}</p>}
                {formData.guests && <p><strong>Guests:</strong> {formData.guests}</p>}
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Next Steps:</strong> Our team will call you at {formData.phone} to confirm 
                availability and finalize your booking.
              </p>
              <Button 
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "", email: "", phone: "", service: "", 
                    date: "", time: "", guests: "", message: ""
                  });
                }}
                className="bg-ubuntu-orange hover:bg-orange-600 text-white hover-lift"
              >
                Make Another Booking
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-20 african-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-earth-brown mb-6 fade-in">
            Make a <span className="text-ubuntu-orange">Booking</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto slide-up">
            Reserve your spot for an amazing experience at LAPS Entertainment Centre. 
            Quick, easy, and convenient booking.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl border-2 border-orange-100">
            <CardHeader className="bg-gradient-african text-white text-center rounded-t-lg">
              <CardTitle className="text-3xl font-bold">Book Your Experience</CardTitle>
              <p className="text-gray-100">Fill in the details below and we'll confirm your booking</p>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center text-earth-brown font-semibold">
                      <User className="w-4 h-4 mr-2" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      className="border-orange-200 focus:border-ubuntu-orange"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center text-earth-brown font-semibold">
                      <Phone className="w-4 h-4 mr-2" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="e.g., 082 123 4567"
                      className="border-orange-200 focus:border-ubuntu-orange"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center text-earth-brown font-semibold">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    className="border-orange-200 focus:border-ubuntu-orange"
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <Label className="flex items-center text-earth-brown font-semibold">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Service Required *
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="border-orange-200 focus:border-ubuntu-orange">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center text-earth-brown font-semibold">
                      <Calendar className="w-4 h-4 mr-2" />
                      Preferred Date *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      className="border-orange-200 focus:border-ubuntu-orange"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center text-earth-brown font-semibold">
                      <Clock className="w-4 h-4 mr-2" />
                      Preferred Time
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                      <SelectTrigger className="border-orange-200 focus:border-ubuntu-orange">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Number of Guests */}
                <div className="space-y-2">
                  <Label htmlFor="guests" className="flex items-center text-earth-brown font-semibold">
                    <User className="w-4 h-4 mr-2" />
                    Number of Guests (if applicable)
                  </Label>
                  <Input
                    id="guests"
                    type="number"
                    value={formData.guests}
                    onChange={(e) => handleInputChange("guests", e.target.value)}
                    placeholder="How many people?"
                    className="border-orange-200 focus:border-ubuntu-orange"
                    min="1"
                  />
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center text-earth-brown font-semibold">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Special Requests or Additional Information
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Any special requirements, dietary restrictions, or additional information..."
                    className="border-orange-200 focus:border-ubuntu-orange min-h-[100px]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button 
                    type="submit" 
                    className="w-full bg-ubuntu-orange hover:bg-orange-600 text-white text-lg py-4 hover-lift"
                  >
                    Submit Booking Request
                  </Button>
                </div>

                <div className="text-center text-sm text-gray-600 pt-4">
                  <p>
                    * Required fields. We'll contact you within 24 hours to confirm your booking.
                  </p>
                  <p className="mt-2">
                    For immediate assistance, call us at <strong>060 609 5887</strong>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-20 bg-earth-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-savanna-gold mb-6">Booking Information</h2>
            <p className="text-xl text-gray-200">Everything you need to know about booking with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-savanna-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-savanna-gold mb-3">Advance Booking</h3>
                <p className="text-gray-200">
                  Book at least 24 hours in advance for car wash services and 
                  48 hours for venue hire to guarantee availability.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-savanna-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-savanna-gold mb-3">Operating Hours</h3>
                <p className="text-gray-200">
                  Mon-Thu: 8AM-10PM<br />
                  Fri-Sat: 8AM-12AM<br />
                  Sunday: 9AM-10PM
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 text-savanna-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-savanna-gold mb-3">Confirmation</h3>
                <p className="text-gray-200">
                  All bookings are confirmed via phone call. We'll contact you 
                  within 24 hours to finalize all details.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;

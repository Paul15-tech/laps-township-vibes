
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Target, Eye, Award, MapPin } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Ubuntu Spirit",
      description: "We believe in the African philosophy of Ubuntu - we are because we are. Community comes first."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every service we provide, maintaining the highest standards."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Supporting local employment and contributing to township economic development."
    },
    {
      icon: Target,
      title: "Customer First",
      description: "Every customer is treated like family, with respect, warmth, and genuine African hospitality."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-20 african-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-earth-brown mb-6 fade-in">
              About <span className="text-ubuntu-orange">LAPS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto slide-up">
              More than just a business - we're a cornerstone of the Moletji community, 
              proudly black-owned and committed to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-earth-brown mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                LAPS Entertainment Centre was born from a dream to create something special 
                in the heart of Moletji. Founded by passionate entrepreneurs who saw the need 
                for a comprehensive entertainment and service destination in our township.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a simple car wash has grown into a full-service entertainment 
                centre that serves our community's diverse needs. From keeping your vehicle 
                spotless to hosting memorable celebrations, we've become the go-to destination 
                for quality services with that authentic African touch.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to employ dozens of local residents, contribute to our 
                community's economic growth, and maintain our reputation as Moletji's 
                premier entertainment destination.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Beautiful African landscape representing our roots"
                className="rounded-lg shadow-2xl hover-lift"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-african rounded-full flex items-center justify-center">
                <MapPin className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover-lift border-2 hover:border-ubuntu-orange transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-african rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-earth-brown">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To provide exceptional services that exceed customer expectations while 
                  creating sustainable employment opportunities for our community. We strive 
                  to be a catalyst for economic development in Moletji, proving that 
                  township businesses can compete at the highest level.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift border-2 hover:border-ubuntu-orange transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-african rounded-full flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-earth-brown">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become Limpopo's premier black-owned entertainment destination, 
                  known for exceptional service, authentic African hospitality, and 
                  positive community impact. We envision a future where LAPS serves 
                  as a model for successful township entrepreneurship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-earth-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-savanna-gold">Our Values</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              These core values guide everything we do and shape our interactions 
              with customers, employees, and the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/10 border-white/20 hover-lift transition-all duration-300 hover:bg-white/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-savanna-gold to-ubuntu-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-savanna-gold">{value.title}</h3>
                  <p className="text-gray-200 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Black Ownership Pride */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-8">
              Proudly Black-Owned & Community Focused
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                LAPS Entertainment Centre stands as a beacon of black excellence in Moletji. 
                We're not just running a business - we're building a legacy, creating opportunities, 
                and proving that township enterprises can deliver world-class service.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Every rand spent at LAPS directly supports black economic empowerment, 
                local job creation, and community development. We believe in the power 
                of supporting our own and building sustainable wealth within our community.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-ubuntu-orange mb-2">25+</div>
                  <p className="text-gray-600">Local Jobs Created</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-ubuntu-orange mb-2">5+</div>
                  <p className="text-gray-600">Years Serving Community</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-ubuntu-orange mb-2">1000+</div>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

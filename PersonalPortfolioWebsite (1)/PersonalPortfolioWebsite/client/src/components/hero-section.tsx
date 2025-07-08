import { Phone, Mail, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/1672807500875_1751991111093.jpeg";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Hello, I'm <span className="text-primary">Md. Fazle Rabbi</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light">
                Nutritionist & Development Professional
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Experienced professional with expertise in INGO project implementation, 
              human nutrition, and agro-food processing industry development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="bg-primary hover:bg-blue-700 text-white px-8 py-3"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("#about")}
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
              >
                Learn More
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+8801877861298" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                +880 1877-861298
              </a>
              <a href="mailto:fazlerabbi.nfs.bd@gmail.com" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                fazlerabbi.nfs.bd@gmail.com
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
              <img 
                src={profileImage} 
                alt="Md. Fazle Rabbi - Nutrition & Development Professional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

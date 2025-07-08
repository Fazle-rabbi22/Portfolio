import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">
            Ready to collaborate on nutrition and development projects
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-primary" />
                    <span>+880 1877-861298</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary" />
                    <span>fazlerabbi.nfs.bd@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-primary" />
                    <span>Purbasatty, Ulania, Mehendiganj, Barishal-8272, Bangladesh</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional References */}
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional References</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-gray-900">Noor Akter</h4>
                    <p className="text-gray-600 text-sm">Chief of Party, USAID Feed the Future Shamortha Plus Activity</p>
                    <p className="text-gray-600 text-sm">Helvetas Swiss Intercooperation Bangladesh</p>
                    <p className="text-gray-500 text-sm">noor.akter@helvetas.org | +880 1730-073313</p>
                  </div>
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold text-gray-900">M. M. Mehedi Hasan</h4>
                    <p className="text-gray-600 text-sm">Assistant Professor, Dept. of Human Nutrition and Dietetics</p>
                    <p className="text-gray-600 text-sm">Patuakhali Science and Technology University</p>
                    <p className="text-gray-500 text-sm">mehedi@pstu.ac.bd | +880 1320-853935</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-50">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Message Subject"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-blue-700 text-white font-medium py-3 px-6"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2" size={16} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

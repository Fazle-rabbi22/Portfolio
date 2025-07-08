import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated professional committed to making meaningful contributions in nutrition and development
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Professional Objective</h3>
            <p className="text-gray-700 leading-relaxed">
              I am an experienced young professional with a strong academic profile and background in INGO project implementation within the workforce of the agro-food processing industry. My journey began during my undergraduate degree, driven by a commitment to prepare myself through prior learning and make meaningful contributions, especially in areas where my expertise aligns with industry needs.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="text-center p-4">
                  <div className="text-3xl font-bold text-primary">3,800+</div>
                  <div className="text-sm text-gray-600">Training Beneficiaries</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-center p-4">
                  <div className="text-3xl font-bold text-primary">83</div>
                  <div className="text-sm text-gray-600">Training Sessions</div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Key Highlights</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-emerald-500 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">USAID Project Experience</h4>
                  <p className="text-gray-600">Led implementation of Feed the Future Shamortha Plus Activity</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-emerald-500 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Academic Excellence</h4>
                  <p className="text-gray-600">MS in Human Nutrition with 3.98/4.00 GPA</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-emerald-500 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Research & Analytics</h4>
                  <p className="text-gray-600">Proficient in SPSS, Python, R, and data analysis</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-emerald-500 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Leadership & Volunteer</h4>
                  <p className="text-gray-600">Active in community development and emergency response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

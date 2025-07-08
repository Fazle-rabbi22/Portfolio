import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600">
            Building expertise through hands-on project implementation
          </p>
        </div>
        <div className="space-y-8">
          {/* Project Assistant */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Project Assistant</h3>
                  <p className="text-primary font-medium">Helvetas Swiss Intercooperation Bangladesh</p>
                  <p className="text-gray-600">USAID funded Feed the Future Shamortha Plus Activity</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-600 font-medium">September 2024 - March 2025</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                    <p className="text-gray-700">Led on-the-ground implementation of project activities within the agrifood processing sector</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                    <p className="text-gray-700">Coordinated and tracked 83 training sessions based on Competency-Based Training (CBT)</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                    <p className="text-gray-700">Developed and monitored monthly and quarterly action plans</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                    <p className="text-gray-700">Co-developed industry-specific training modules with technical experts</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                    <p className="text-gray-700">Supported MEAL processes and USAID's Development Information Solution (DIS)</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                    <p className="text-gray-700">Ensured MEL compliance and reporting accuracy through DQAs</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Programme Intern */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Programme Intern (Paid)</h3>
                  <p className="text-primary font-medium">Helvetas Swiss Intercooperation Bangladesh</p>
                  <p className="text-gray-600">USAID funded Feed the Future Shamortha Plus Activity</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-600 font-medium">February 2024 - August 2024</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                    <p className="text-gray-700">Coordinated field activities including orientation, skills training, and job placement</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                    <p className="text-gray-700">Supported delivery of 30+ training sessions improving employability for 1500+ participants</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                    <p className="text-gray-700">Managed beneficiary data using KoboToolbox and Excel with 100% accuracy</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <ArrowRight className="text-primary mt-1 flex-shrink-0" size={16} />
                    <p className="text-gray-700">Supported MEAL in monitoring and data reporting for real-time decisions</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

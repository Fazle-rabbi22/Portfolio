import { FlaskConical, Book, Calendar, User, HandHeart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects & Research</h2>
          <p className="text-lg text-gray-600">
            Research initiatives and thesis work in nutrition and health
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Research Project */}
          <Card className="bg-gradient-to-br from-gray-50 to-gray-100">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <FlaskConical className="text-primary text-2xl mr-3" />
                <h3 className="text-xl font-semibold">IFA and Deworming Project</h3>
              </div>
              <div className="space-y-4">
                
                <div className="flex items-center text-gray-600">
                  <User className="mr-2" size={16} />
                  <span>Project Manager</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <HandHeart className="mr-2" size={16} />
                  <span>Supported by Nutrition Club of PSTU</span>
                </div>
                <p className="text-gray-700">
                  Ensured consumption of iron-folic acid (IFA) and deworming tablets among adolescent girls through monitoring and supervision via mobile phone calls for three months.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">Data Collection</Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">Awareness Seminars</Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">Research Analysis</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Thesis Work */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Book className="text-blue-600 text-2xl mr-3" />
                <h3 className="text-xl font-semibold">Thesis Research</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900">MS Thesis</h4>
                  <p className="text-gray-700 text-sm">
                    Prevalence and Associated Factors of Night Eating Syndrome Among Shift Workers of Food Processing Industry in Bangladesh
                  </p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-semibold text-gray-900">B.Sc. Thesis</h4>
                  <p className="text-gray-700 text-sm">
                    Prevalence and associated factors of disorder eating attitude and behavior among adolescent students in Barisal division: A cross-sectional study
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-600">Cross-sectional Study</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-600">Statistical Analysis</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-600">Health Research</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-lg text-gray-600">
            Strong academic foundation in nutrition and food science
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-primary to-blue-700 text-white">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-3xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">MS in Human Nutrition and Dietetics</h3>
                  <p className="text-blue-100">2023</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">Patuakhali Science and Technology University (PSTU)</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-3xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">B.Sc. in Nutrition and Food Science</h3>
                  <p className="text-green-100">2021</p>
                </div>
              </div>
              <p className="text-green-100 mb-4">Patuakhali Science and Technology University (PSTU)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

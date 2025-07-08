import { Trophy, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AwardsSection() {
  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Awards & Leadership</h2>
          <p className="text-lg text-gray-600">
            Recognition and leadership experience in academic and professional settings
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Awards */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Trophy className="text-yellow-500 mr-3" />
                Honors & Awards
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Dean's Merit Scholarship Award</h4>
                  <p className="text-gray-600">Faculty of Nutrition and Food Science, PSTU - 2021</p>
                  <p className="text-sm text-gray-500">Recognition for outstanding academic results</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">National Science and Technology (NST) Fellowship</h4>
                  <p className="text-gray-600">Ministry of Science and Technology, Bangladesh - 2024-25</p>
                  <p className="text-sm text-gray-500">Award for MS thesis proposal and research expertise recognition</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leadership */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Users className="text-primary mr-3" />
                Leadership Experience
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900">Moderator - Nutrition Club of PSTU</h4>
                  <p className="text-gray-600">November 2023 - Present</p>
                  <p className="text-sm text-gray-500">Constitutional effectiveness and policy implementation</p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-semibold text-gray-900">President - Nutrition Club of PSTU</h4>
                  <p className="text-gray-600">October 2022 - November 2023</p>
                  <p className="text-sm text-gray-500">Strategic leadership overseeing 7 functional wings</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900">Senior Rover Mate - Rover Scout Unit</h4>
                  <p className="text-gray-600">PSTU (BS ID: BE8297)</p>
                  <p className="text-sm text-gray-500">Emergency response in Cyclone Amphan (2020) and Mocha (2023)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

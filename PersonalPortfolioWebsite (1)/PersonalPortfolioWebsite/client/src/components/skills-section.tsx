import { 
  TrendingUp, 
  ClipboardCheck, 
  Briefcase, 
  Users, 
  Microscope, 
  MessageCircle 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "IT & Data Analysis",
    icon: TrendingUp,
    color: "text-primary",
    bgColor: "bg-primary/10",
    badgeColor: "bg-primary/10 text-primary",
    skills: ["MS Office", "SPSS", "Python (Pandas)", "Excel", "KoboToolbox", "R (basic)"]
  },
  {
    title: "Monitoring & Evaluation",
    icon: ClipboardCheck,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    badgeColor: "bg-emerald-100 text-emerald-600",
    skills: ["ITT", "Logframe", "DIS", "KII", "FGD", "DQA"]
  },
  {
    title: "Project Management",
    icon: Briefcase,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    badgeColor: "bg-blue-100 text-blue-600",
    skills: ["CBT Facilitation", "Action Planning", "Stakeholder Coordination", "Field Operations"]
  },
  {
    title: "Training & Development",
    icon: Users,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    badgeColor: "bg-orange-100 text-orange-600",
    skills: ["Training Coordination", "Module Development", "Adult Learning", "Youth Empowerment"]
  },
  {
    title: "Research Skills",
    icon: Microscope,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    badgeColor: "bg-purple-100 text-purple-600",
    skills: ["Research Design", "Literature Review", "Scientific Writing", "Data Analysis"]
  },
  {
    title: "Communication & Leadership",
    icon: MessageCircle,
    color: "text-pink-500",
    bgColor: "bg-pink-50",
    badgeColor: "bg-pink-100 text-pink-600",
    skills: ["Public Speaking", "Report Writing", "Team Leadership", "Problem Solving"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600">
            Comprehensive skill set spanning technical, analytical, and leadership capabilities
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <IconComponent className={`${category.color} text-2xl mr-3`} />
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className={category.badgeColor}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

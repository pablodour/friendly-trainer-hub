import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">About Your Trainer</h1>
          <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-6" />
          <h2 className="text-2xl font-semibold mb-2">John Smith</h2>
          <p className="text-gray-600">Certified Personal Trainer & Nutrition Specialist</p>
        </div>
        
        <div className="prose max-w-none">
          <p className="mb-6">
            With over 10 years of experience in personal training and fitness coaching, I've helped hundreds of clients achieve their fitness goals and transform their lives. My approach combines science-based training methods with personalized attention to ensure you get the results you want.
          </p>
          
          <h3 className="text-xl font-semibold mb-4">Certifications</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>NASM Certified Personal Trainer</li>
            <li>Precision Nutrition Level 1 Coach</li>
            <li>CrossFit Level 2 Trainer</li>
            <li>First Aid and CPR Certified</li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Call Now
          </Button>
          <Button className="flex items-center gap-2" variant="secondary">
            <Mail className="h-4 w-4" />
            Email Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
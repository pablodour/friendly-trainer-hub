import { useState } from "react";
import { Dumbbell, Utensils, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "1-on-1 Training",
    description: "Personalized workout plans and dedicated attention to help you achieve your fitness goals.",
    icon: Dumbbell,
    details: "Experience transformative results with our personalized 1-on-1 training sessions. Our certified trainers will create custom workout plans tailored to your specific goals, whether it's weight loss, muscle gain, or overall fitness improvement. Each session includes form correction, progress tracking, and continuous motivation.",
  },
  {
    title: "Group Classes",
    description: "High-energy group sessions that combine fun and effective workouts in a motivating environment.",
    icon: Users,
    details: "Join our dynamic group fitness classes where you'll find motivation and support from both our trainers and fellow members. Classes include HIIT, strength training, cardio kickboxing, and more. Perfect for those who thrive in a social workout environment.",
  },
  {
    title: "Nutrition Planning",
    description: "Custom nutrition plans that complement your training and maximize your results.",
    icon: Utensils,
    details: "Get expert guidance on nutrition with personalized meal plans that support your fitness goals. Our nutrition experts will help you understand macro and micronutrients, portion control, and how to make sustainable dietary changes that complement your workout routine.",
  },
];

export const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <section className="py-16 px-8 bg-accent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className={`hover:shadow-lg transition-all duration-300 cursor-pointer ${
                expandedService === service.title ? 'md:col-span-3' : ''
              }`}
              onClick={() => setExpandedService(expandedService === service.title ? null : service.title)}
            >
              <CardHeader>
                <service.icon className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {expandedService === service.title ? service.details : service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
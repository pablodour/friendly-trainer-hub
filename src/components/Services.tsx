import { Dumbbell, Utensils, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "1-on-1 Training",
    description: "Personalized workout plans and dedicated attention to help you achieve your fitness goals.",
    icon: Dumbbell,
  },
  {
    title: "Group Classes",
    description: "High-energy group sessions that combine fun and effective workouts in a motivating environment.",
    icon: Users,
  },
  {
    title: "Nutrition Planning",
    description: "Custom nutrition plans that complement your training and maximize your results.",
    icon: Utensils,
  },
];

export const Services = () => {
  return (
    <section className="py-16 px-8 bg-accent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
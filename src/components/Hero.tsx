import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white p-8">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center max-w-3xl mx-auto animate-fade-up">
        <h1 className="text-5xl font-bold mb-6">Transform Your Life Through Fitness</h1>
        <p className="text-xl mb-8">
          Professional personal training tailored to your goals. Whether you're just starting or looking to level up, we're here to guide you every step of the way.
        </p>
        <Button className="bg-white text-primary hover:bg-gray-100" size="lg">
          Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
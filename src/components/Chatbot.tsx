import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X } from "lucide-react";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-[350px] h-[500px] flex flex-col">
          <div className="p-4 bg-primary text-white flex justify-between items-center">
            <h3 className="font-semibold">Fitness Assistant</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 p-4 overflow-auto">
            <p className="text-sm">Hi! How can I help you with your fitness journey today?</p>
          </div>
          <div className="p-4 border-t">
            <Input placeholder="Type your message..." className="w-full" />
          </div>
        </Card>
      ) : (
        <Button onClick={() => setIsOpen(true)} className="rounded-full h-14 w-14">
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};
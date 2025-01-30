import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedService, setSelectedService] = useState("");
  const { toast } = useToast();

  const handleBooking = () => {
    if (!date || !selectedService) {
      toast({
        title: "Error",
        description: "Please select both a date and service",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Confirmed",
      description: `Your ${selectedService} session has been booked for ${date.toLocaleDateString()}`,
    });
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-primary">My Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Book a Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Select Service</label>
                <Select onValueChange={setSelectedService} value={selectedService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal-training">1-on-1 Training</SelectItem>
                    <SelectItem value="group-class">Group Class</SelectItem>
                    <SelectItem value="nutrition">Nutrition Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Select Date</label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>

              <Button onClick={handleBooking} className="w-full">
                Book Session
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>My Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your upcoming sessions will appear here after booking.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
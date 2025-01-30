import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type ServicePackage = {
  id: string;
  name: string;
  description: string;
  price: number;
  sessions?: number;
  duration?: string;
};

const servicePackages: ServicePackage[] = [
  { id: "single", name: "Single Session", description: "One personal training session", price: 50 },
  { id: "pack-5", name: "5 Sessions Pack", description: "Pack of 5 personal training sessions", price: 225, sessions: 5 },
  { id: "pack-10", name: "10 Sessions Pack", description: "Pack of 10 personal training sessions", price: 400, sessions: 10 },
  { id: "diet-1", name: "1 Month Diet Plan", description: "Personalized nutrition plan for 1 month", price: 150, duration: "1 month" },
  { id: "diet-3", name: "3 Months Diet Plan", description: "Personalized nutrition plan for 3 months", price: 400, duration: "3 months" },
];

const timeSlots = [
  "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
];

const Dashboard = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const { toast } = useToast();

  const handleBooking = () => {
    if (!date || !selectedPackage) {
      toast({
        title: "Error",
        description: "Please select both a package and date",
        variant: "destructive",
      });
      return;
    }

    const selectedService = servicePackages.find(pkg => pkg.id === selectedPackage);
    
    toast({
      title: "Booking Confirmed",
      description: `Your ${selectedService?.name} has been booked${selectedTimeSlot ? ` for ${date.toLocaleDateString()} at ${selectedTimeSlot}` : ''}`,
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
                <label className="block text-sm font-medium mb-2">Select Package</label>
                <Select onValueChange={setSelectedPackage} value={selectedPackage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a package" />
                  </SelectTrigger>
                  <SelectContent>
                    {servicePackages.map((pkg) => (
                      <SelectItem key={pkg.id} value={pkg.id}>
                        {pkg.name} - ${pkg.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedPackage && (
                  <p className="mt-2 text-sm text-gray-600">
                    {servicePackages.find(pkg => pkg.id === selectedPackage)?.description}
                  </p>
                )}
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

              {selectedPackage && !selectedPackage.includes('diet') && (
                <div>
                  <label className="block text-sm font-medium mb-2">Select Time Slot</label>
                  <Select onValueChange={setSelectedTimeSlot} value={selectedTimeSlot}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <Button onClick={handleBooking} className="w-full">
                Book Package
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>My Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your upcoming sessions and active packages will appear here after booking.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { useState } from "react";
import { Calendar, Clock, DollarSign, MapPin, Users, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const HostRide = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    seats: "",
    price: "",
    notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation checks
    if (!formData.from || !formData.to || !formData.date || !formData.time || !formData.seats) {
      toast.error("Please fill in all required fields");
      return;
    }

    // In a real app, this would call an API to create the ride
    toast.success("Your ride has been posted successfully!");
    
    // Reset form
    setFormData({
      from: "",
      to: "",
      date: "",
      time: "",
      seats: "",
      price: "",
      notes: ""
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-golocal-secondary text-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">Host a Ride</h1>
            <p className="mt-2">Offer rides to fellow students and earn money</p>
          </div>
        </section>
        
        {/* Host Form */}
        <section className="py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card">
              <h2 className="text-2xl font-bold text-golocal-secondary mb-6">Ride Details</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Route Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Route Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="from">From (required)</Label>
                        <div className="relative">
                          <Input
                            id="from"
                            name="from"
                            placeholder="Pickup location"
                            className="pl-9"
                            value={formData.from}
                            onChange={handleChange}
                          />
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="to">To (required)</Label>
                        <div className="relative">
                          <Input
                            id="to"
                            name="to"
                            placeholder="Destination"
                            className="pl-9"
                            value={formData.to}
                            onChange={handleChange}
                          />
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Schedule */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Schedule</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Date (required)</Label>
                        <div className="relative">
                          <Input
                            id="date"
                            name="date"
                            type="date"
                            className="pl-9"
                            value={formData.date}
                            onChange={handleChange}
                          />
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="time">Time (required)</Label>
                        <div className="relative">
                          <Input
                            id="time"
                            name="time"
                            type="time"
                            className="pl-9"
                            value={formData.time}
                            onChange={handleChange}
                          />
                          <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Ride Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Ride Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="seats">Available Seats (required)</Label>
                        <div className="relative">
                          <Select 
                            onValueChange={(value) => handleSelectChange("seats", value)}
                            value={formData.seats}
                          >
                            <SelectTrigger className="pl-9">
                              <SelectValue placeholder="Select seats" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Seat</SelectItem>
                              <SelectItem value="2">2 Seats</SelectItem>
                              <SelectItem value="3">3 Seats</SelectItem>
                              <SelectItem value="4">4 Seats</SelectItem>
                              <SelectItem value="5">5 Seats</SelectItem>
                              <SelectItem value="6">6 Seats</SelectItem>
                            </SelectContent>
                          </Select>
                          <Users className="absolute left-3 top-3 h-4 w-4 text-gray-500 z-10" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="price">Price per Seat ($)</Label>
                        <div className="relative">
                          <Input
                            id="price"
                            name="price"
                            type="number"
                            step="0.01"
                            min="0"
                            placeholder="0.00"
                            className="pl-9"
                            value={formData.price}
                            onChange={handleChange}
                          />
                          <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        placeholder="Any special instructions or details about your ride"
                        value={formData.notes}
                        onChange={handleChange}
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                  
                  {/* Disclaimer */}
                  <div className="bg-amber-50 border border-amber-200 rounded-md p-4 flex items-start">
                    <Info className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-amber-800">
                      By hosting a ride, you agree to our terms of service and confirm that your vehicle 
                      is properly registered, insured, and that you have a valid driver's license.
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <Button type="submit" className="w-full md:w-auto">
                      Host Ride
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        
        {/* Tips Section */}
        <section className="py-10 bg-golocal-light">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-golocal-secondary mb-6 text-center">Tips for Hosting a Great Ride</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-golocal-secondary mb-2">Be Punctual</h3>
                <p className="text-gray-600">
                  Always arrive at the pickup location 5 minutes early. Respect your passengers' time.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-golocal-secondary mb-2">Clean Vehicle</h3>
                <p className="text-gray-600">
                  Ensure your car is clean and presentable. A good impression leads to better ratings.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-golocal-secondary mb-2">Fair Pricing</h3>
                <p className="text-gray-600">
                  Set reasonable prices. Remember, this is about sharing costs, not profit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HostRide;

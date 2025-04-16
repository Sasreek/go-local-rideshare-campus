
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RideCard from "@/components/RideCard";
import { toast } from "sonner";

// Mock data for available rides
const mockRides = [
  {
    id: 1,
    from: "North Campus Housing",
    to: "Engineering Building",
    date: "Apr 17, 2025",
    time: "8:30 AM",
    price: 3.50,
    seats: 4,
    seatsAvailable: 2,
    driverName: "Michael S.",
    driverRating: 4.8,
  },
  {
    id: 2,
    from: "Student Center",
    to: "South Campus Apartments",
    date: "Apr 17, 2025",
    time: "2:15 PM",
    price: 2.75,
    seats: 3,
    seatsAvailable: 1,
    driverName: "Sarah L.",
    driverRating: 4.9,
  },
  {
    id: 3,
    from: "Main Library",
    to: "Athletic Complex",
    date: "Apr 17, 2025",
    time: "5:00 PM",
    price: 4.00,
    seats: 4,
    seatsAvailable: 3,
    driverName: "Jason T.",
    driverRating: 4.7,
  }
];

const BookRide = () => {
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
  });
  const [availableRides, setAvailableRides] = useState(mockRides);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would call an API to get matching rides
    // For now, we'll just show a toast and filter the mock data
    toast.success("Searching for rides...");
    
    // Filter mock rides (in a real app this would be done server-side)
    const filtered = mockRides.filter(ride => {
      if (searchParams.from && !ride.from.toLowerCase().includes(searchParams.from.toLowerCase())) {
        return false;
      }
      if (searchParams.to && !ride.to.toLowerCase().includes(searchParams.to.toLowerCase())) {
        return false;
      }
      return true;
    });
    
    setAvailableRides(filtered);
  };

  const handleBookRide = (rideId: number) => {
    // In a real app, this would call an API to book the ride
    toast.success("Booking ride...");
    setTimeout(() => {
      navigate("/past-bookings");
    }, 1500);
  };

  const handleViewDetails = (rideId: number) => {
    toast("Viewing ride details", {
      description: `You selected ride #${rideId}`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-golocal-secondary text-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">Book a Ride</h1>
            <p className="mt-2">Find available rides to your destination</p>
          </div>
        </section>
        
        {/* Search Form */}
        <section className="py-8 bg-golocal-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSearch} className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="from">From</Label>
                  <div className="relative">
                    <Input
                      id="from"
                      placeholder="Pickup location"
                      className="pl-9"
                      value={searchParams.from}
                      onChange={(e) => setSearchParams({ ...searchParams, from: e.target.value })}
                    />
                    <MapPinIcon className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="to">To</Label>
                  <div className="relative">
                    <Input
                      id="to"
                      placeholder="Destination"
                      className="pl-9"
                      value={searchParams.to}
                      onChange={(e) => setSearchParams({ ...searchParams, to: e.target.value })}
                    />
                    <MapPinIcon className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <div className="relative">
                    <Input
                      id="date"
                      type="date"
                      className="pl-9"
                      value={searchParams.date}
                      onChange={(e) => setSearchParams({ ...searchParams, date: e.target.value })}
                    />
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <div className="relative">
                    <Select
                      onValueChange={(value) => setSearchParams({ ...searchParams, time: value })}
                    >
                      <SelectTrigger className="pl-9">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (6AM - 12PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                        <SelectItem value="evening">Evening (5PM - 10PM)</SelectItem>
                      </SelectContent>
                    </Select>
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-500 z-10" />
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Button type="submit" className="flex items-center">
                  <Search className="mr-2 h-4 w-4" />
                  Search Rides
                </Button>
              </div>
            </form>
          </div>
        </section>
        
        {/* Available Rides */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-golocal-secondary mb-6">Available Rides</h2>
            
            {availableRides.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {availableRides.map((ride) => (
                  <RideCard
                    key={ride.id}
                    from={ride.from}
                    to={ride.to}
                    date={ride.date}
                    time={ride.time}
                    price={ride.price}
                    seats={ride.seats}
                    seatsAvailable={ride.seatsAvailable}
                    driverName={ride.driverName}
                    driverRating={ride.driverRating}
                    onViewDetails={() => handleViewDetails(ride.id)}
                    onBookRide={() => handleBookRide(ride.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No rides available matching your criteria.</p>
                <p className="mt-2 text-gray-500">Try adjusting your search parameters or check back later.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Internal component for map pin icon
const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default BookRide;

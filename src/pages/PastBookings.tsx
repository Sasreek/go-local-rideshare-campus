
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RideCard from "@/components/RideCard";
import { toast } from "sonner";

// Mock data for past rides and offered rides
const pastRides = [
  {
    id: 1,
    from: "Student Center",
    to: "North Campus Housing",
    date: "Apr 10, 2025",
    time: "4:15 PM",
    price: 3.25,
    seats: 4,
    seatsAvailable: 0,
    driverName: "Robert K.",
    driverRating: 4.7,
  },
  {
    id: 2,
    from: "Engineering Building",
    to: "Downtown Apartments",
    date: "Apr 8, 2025",
    time: "6:30 PM",
    price: 4.50,
    seats: 3,
    seatsAvailable: 0,
    driverName: "Emily P.",
    driverRating: 4.9,
  },
];

const offeredRides = [
  {
    id: 101,
    from: "North Campus Housing",
    to: "University Center",
    date: "Apr 12, 2025",
    time: "9:00 AM",
    price: 3.50,
    seats: 4,
    seatsAvailable: 2,
    passengersCount: 2,
    earnings: 7.00,
  },
  {
    id: 102,
    from: "South Campus Apartments",
    to: "Library",
    date: "Apr 5, 2025",
    time: "2:30 PM",
    price: 2.75,
    seats: 3,
    seatsAvailable: 0,
    passengersCount: 3,
    earnings: 8.25,
  },
];

const upcomingRides = [
  {
    id: 201,
    from: "Main Library",
    to: "Off-Campus Housing",
    date: "Apr 18, 2025",
    time: "5:30 PM",
    price: 3.75,
    seats: 4,
    seatsAvailable: 0,
    driverName: "Thomas W.",
    driverRating: 4.6,
  }
];

const PastBookings = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

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
            <h1 className="text-3xl font-bold">My Rides</h1>
            <p className="mt-2">View your upcoming, past, and offered rides</p>
          </div>
        </section>
        
        {/* Rides Tabs */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="upcoming" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past Rides</TabsTrigger>
                <TabsTrigger value="offered">Rides I've Offered</TabsTrigger>
              </TabsList>
              
              {/* Upcoming Rides */}
              <TabsContent value="upcoming">
                <h2 className="text-2xl font-bold text-golocal-secondary mb-6">Upcoming Rides</h2>
                
                {upcomingRides.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {upcomingRides.map((ride) => (
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
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-gray-500 text-lg">No upcoming rides.</p>
                    <p className="mt-2 text-gray-500">Book a ride to see it here!</p>
                  </div>
                )}
              </TabsContent>
              
              {/* Past Rides */}
              <TabsContent value="past">
                <h2 className="text-2xl font-bold text-golocal-secondary mb-6">Past Rides</h2>
                
                {pastRides.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pastRides.map((ride) => (
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
                        isHistoryCard={true}
                        onViewDetails={() => handleViewDetails(ride.id)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-gray-500 text-lg">No past rides.</p>
                  </div>
                )}
              </TabsContent>
              
              {/* Offered Rides */}
              <TabsContent value="offered">
                <h2 className="text-2xl font-bold text-golocal-secondary mb-6">Rides I've Offered</h2>
                
                {offeredRides.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {offeredRides.map((ride) => (
                      <div key={ride.id} className="card hover:shadow-lg transition-shadow duration-300">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center mb-1">
                              <MapPinIcon size={18} className="text-golocal-primary mr-2" />
                              <span className="font-medium">From: {ride.from}</span>
                            </div>
                            <div className="flex items-center mt-2">
                              <MapPinIcon size={18} className="text-golocal-accent mr-2" />
                              <span className="font-medium">To: {ride.to}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-semibold text-golocal-primary">
                              ${ride.earnings.toFixed(2)}
                            </div>
                            <div className="text-sm text-gray-500">
                              Total earnings
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-4">
                          <div className="flex items-center">
                            <CalendarDaysIcon size={16} className="text-gray-500 mr-2" />
                            <span className="text-sm">{ride.date}</span>
                          </div>
                          <div className="flex items-center">
                            <ClockIcon size={16} className="text-gray-500 mr-2" />
                            <span className="text-sm">{ride.time}</span>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center">
                          <UsersIcon size={16} className="text-gray-500 mr-2" />
                          <span className="text-sm">
                            {ride.passengersCount} passenger{ride.passengersCount !== 1 ? 's' : ''}
                          </span>
                        </div>

                        <div className="mt-4 flex justify-end">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewDetails(ride.id)}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-gray-500 text-lg">You haven't offered any rides yet.</p>
                    <p className="mt-2 text-gray-500">Host a ride to share your journey!</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Internal components for icons
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

const CalendarDaysIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
    <path d="M8 14h.01" />
    <path d="M12 14h.01" />
    <path d="M16 14h.01" />
    <path d="M8 18h.01" />
    <path d="M12 18h.01" />
    <path d="M16 18h.01" />
  </svg>
);

const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default PastBookings;

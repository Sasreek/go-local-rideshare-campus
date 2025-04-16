
import { Link } from "react-router-dom";
import { Car, Clock, DollarSign, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Engineering Student",
      rating: 5,
      text: "Go Local saved me so much money on my daily commute to campus. Found some great friends along the way too!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Maya Rodriguez",
      role: "Business Major",
      rating: 4,
      text: "As someone without a car, this app has been a lifesaver. The fare calculator makes splitting costs super fair.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "David Chen",
      role: "Computer Science Student",
      rating: 5,
      text: "I offset my car costs by offering rides. The app makes it easy to find students going my way.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-golocal-secondary to-golocal-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in">Campus Ridesharing Made Easy</h1>
              <p className="mt-6 text-lg md:text-xl text-gray-200">
                Connect with fellow students for affordable, convenient rides around campus and beyond. Save money, reduce emissions, and make friends along the way.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/book-ride">
                  <Button size="lg" className="bg-golocal-accent text-golocal-secondary hover:bg-golocal-accent/90">
                    Book a Ride
                  </Button>
                </Link>
                <Link to="/host-ride">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Offer a Ride
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <img 
                src="https://images.unsplash.com/photo-1531891570158-e71b35a485bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Students carpooling" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Go Local Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-golocal-secondary">What is Go Local?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              A campus-focused ridesharing platform built specifically for college students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="card text-center">
              <div className="mx-auto bg-golocal-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <Car size={32} className="text-golocal-primary" />
              </div>
              <h3 className="text-xl font-semibold text-golocal-secondary">Easy Ride Sharing</h3>
              <p className="mt-2 text-gray-600">
                Connect with students going the same way, whether you need a ride or have extra seats.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="mx-auto bg-golocal-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <Clock size={32} className="text-golocal-primary" />
              </div>
              <h3 className="text-xl font-semibold text-golocal-secondary">Save Time</h3>
              <p className="mt-2 text-gray-600">
                Skip waiting for public transit with direct rides to your destination.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="mx-auto bg-golocal-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <DollarSign size={32} className="text-golocal-primary" />
              </div>
              <h3 className="text-xl font-semibold text-golocal-secondary">Save Money</h3>
              <p className="mt-2 text-gray-600">
                Split costs with our fair calculator. Much cheaper than taxis or rideshare apps.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="mx-auto bg-golocal-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <Shield size={32} className="text-golocal-primary" />
              </div>
              <h3 className="text-xl font-semibold text-golocal-secondary">Campus Safety</h3>
              <p className="mt-2 text-gray-600">
                Only verified students can use the platform, ensuring a safe community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-golocal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-golocal-secondary">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with Go Local in just three simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="relative">
              <div className="card h-full">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-golocal-primary text-white flex items-center justify-center font-bold text-lg">1</div>
                <h3 className="text-xl font-semibold text-golocal-secondary mb-3">Sign Up</h3>
                <p className="text-gray-600">
                  Create an account using your student email. Complete your profile with your common routes.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="card h-full">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-golocal-primary text-white flex items-center justify-center font-bold text-lg">2</div>
                <h3 className="text-xl font-semibold text-golocal-secondary mb-3">Find or Offer Rides</h3>
                <p className="text-gray-600">
                  Browse available rides or post your own. Our system matches students with similar routes.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="card h-full">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-golocal-primary text-white flex items-center justify-center font-bold text-lg">3</div>
                <h3 className="text-xl font-semibold text-golocal-secondary mb-3">Ride Together</h3>
                <p className="text-gray-600">
                  Connect, ride, and pay through the app. Rate your experience afterward to help the community.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/book-ride">
              <Button size="lg">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-golocal-secondary">What Students Say</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from fellow students who are already using Go Local.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                rating={testimonial.rating}
                text={testimonial.text}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-golocal-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Go Local?</h2>
          <p className="mt-4 text-xl max-w-2xl mx-auto">
            Join thousands of students already saving money and time on their commutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-ride">
              <Button size="lg" className="bg-white text-golocal-primary hover:bg-gray-100">
                Book a Ride
              </Button>
            </Link>
            <Link to="/host-ride">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Offer a Ride
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

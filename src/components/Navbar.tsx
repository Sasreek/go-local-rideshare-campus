
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Car className="h-8 w-8 text-golocal-primary" />
              <span className="ml-2 text-xl font-bold text-golocal-secondary">Go Local</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-golocal-secondary hover:text-golocal-primary transition-colors">
                Home
              </Link>
              <Link to="/book-ride" className="text-golocal-secondary hover:text-golocal-primary transition-colors">
                Book a Ride
              </Link>
              <Link to="/host-ride" className="text-golocal-secondary hover:text-golocal-primary transition-colors">
                Host a Ride
              </Link>
              <Link to="/past-bookings" className="text-golocal-secondary hover:text-golocal-primary transition-colors">
                Past Bookings
              </Link>
              <Link to="/contact" className="text-golocal-secondary hover:text-golocal-primary transition-colors">
                Contact
              </Link>
              <Button className="ml-4 flex items-center" variant="outline">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-golocal-secondary hover:text-golocal-primary"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-golocal-secondary hover:bg-golocal-light"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/book-ride" 
              className="block px-3 py-2 rounded-md text-base font-medium text-golocal-secondary hover:bg-golocal-light"
              onClick={toggleMenu}
            >
              Book a Ride
            </Link>
            <Link 
              to="/host-ride" 
              className="block px-3 py-2 rounded-md text-base font-medium text-golocal-secondary hover:bg-golocal-light"
              onClick={toggleMenu}
            >
              Host a Ride
            </Link>
            <Link 
              to="/past-bookings" 
              className="block px-3 py-2 rounded-md text-base font-medium text-golocal-secondary hover:bg-golocal-light"
              onClick={toggleMenu}
            >
              Past Bookings
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-golocal-secondary hover:bg-golocal-light"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button className="w-full mt-4 flex items-center justify-center" variant="outline">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

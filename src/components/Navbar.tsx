
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Car, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, profile, signOut, loading } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Get initials for avatar
  const getInitials = () => {
    if (profile?.full_name) {
      return profile.full_name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .substring(0, 2);
    }
    return user?.email?.substring(0, 2).toUpperCase() || "U";
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
              {user && (
                <Link to="/past-bookings" className="text-golocal-secondary hover:text-golocal-primary transition-colors">
                  Past Bookings
                </Link>
              )}
              <Link to="/contact" className="text-golocal-secondary hover:text-golocal-primary transition-colors">
                Contact
              </Link>
              
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <Avatar className="h-10 w-10 border border-golocal-primary/20">
                        <AvatarFallback className="bg-golocal-primary/10 text-golocal-primary">
                          {getInitials()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-0.5 leading-none">
                        <p className="font-medium text-sm">{profile?.full_name || 'User'}</p>
                        <p className="w-[200px] truncate text-xs text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="cursor-pointer">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/past-bookings" className="cursor-pointer">My Bookings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      className="text-red-500 cursor-pointer" 
                      onClick={() => signOut()} 
                      disabled={loading}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to="/auth">
                  <Button className="ml-4 flex items-center" variant="outline">
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
              )}
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
            {user && (
              <Link 
                to="/past-bookings" 
                className="block px-3 py-2 rounded-md text-base font-medium text-golocal-secondary hover:bg-golocal-light"
                onClick={toggleMenu}
              >
                Past Bookings
              </Link>
            )}
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-golocal-secondary hover:bg-golocal-light"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            
            {user ? (
              <>
                <div className="px-3 py-2 flex items-center">
                  <Avatar className="h-8 w-8 mr-2 border border-golocal-primary/20">
                    <AvatarFallback className="bg-golocal-primary/10 text-golocal-primary text-xs">
                      {getInitials()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{profile?.full_name || 'User'}</span>
                    <span className="text-xs text-gray-500 truncate w-40">{user.email}</span>
                  </div>
                </div>
                <Link 
                  to="/profile" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-golocal-secondary hover:bg-golocal-light"
                  onClick={toggleMenu}
                >
                  Profile
                </Link>
                <button
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-500 hover:bg-golocal-light flex items-center"
                  onClick={() => {
                    signOut();
                    toggleMenu();
                  }}
                  disabled={loading}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/auth" onClick={toggleMenu}>
                <Button className="w-full mt-4 flex items-center justify-center" variant="outline">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

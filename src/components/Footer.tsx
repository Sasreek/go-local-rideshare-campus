
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Car } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-golocal-secondary text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center">
              <Car className="h-7 w-7 text-golocal-primary" />
              <span className="ml-2 text-xl font-bold">Go Local</span>
            </div>
            <p className="mt-4">Connecting college students for affordable, eco-friendly campus transportation.</p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-white hover:text-golocal-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-golocal-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-golocal-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-golocal-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/book-ride" className="hover:text-golocal-primary transition-colors">Book a Ride</Link>
              </li>
              <li>
                <Link to="/host-ride" className="hover:text-golocal-primary transition-colors">Host a Ride</Link>
              </li>
              <li>
                <Link to="/past-bookings" className="hover:text-golocal-primary transition-colors">Past Bookings</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-golocal-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-golocal-primary transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-golocal-primary transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-golocal-primary" />
                <span>Campus Center, University Drive</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-golocal-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-golocal-primary" />
                <span>support@golocal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700">
          <p className="text-center text-sm">© {new Date().getFullYear()} Go Local. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      subject: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Your message has been sent!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-golocal-secondary text-white py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="mt-2">We're here to help with any questions or concerns</p>
          </div>
        </section>
        
        {/* Contact Form and Info */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="card h-full">
                  <h2 className="text-2xl font-bold text-golocal-secondary mb-6">Get in Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin size={24} className="text-golocal-primary mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg text-golocal-secondary">Address</h3>
                        <p className="text-gray-600 mt-1">
                          Campus Center, Room 204<br />
                          University Drive<br />
                          College Town, ST 12345
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail size={24} className="text-golocal-primary mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg text-golocal-secondary">Email</h3>
                        <p className="text-gray-600 mt-1">
                          support@golocalrides.com<br />
                          partnerships@golocalrides.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone size={24} className="text-golocal-primary mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg text-golocal-secondary">Phone</h3>
                        <p className="text-gray-600 mt-1">
                          +1 (555) 123-4567<br />
                          Mon-Fri: 9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <h3 className="font-semibold text-lg text-golocal-secondary mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="p-2 bg-golocal-primary/10 text-golocal-primary rounded-full hover:bg-golocal-primary/20 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="p-2 bg-golocal-primary/10 text-golocal-primary rounded-full hover:bg-golocal-primary/20 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="p-2 bg-golocal-primary/10 text-golocal-primary rounded-full hover:bg-golocal-primary/20 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="card">
                  <h2 className="text-2xl font-bold text-golocal-secondary mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select onValueChange={handleSelectChange} value={formData.subject}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[160px]"
                      />
                    </div>
                    
                    <Button type="submit" disabled={isSubmitting} className="flex items-center">
                      {isSubmitting ? "Sending..." : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-10 bg-golocal-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-golocal-secondary mb-6 text-center">Find Us On Campus</h2>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              {/* This would be replaced with an actual map component */}
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                <p className="text-lg text-gray-600">Interactive Campus Map</p>
                {/* In a real implementation, you would integrate with Google Maps or similar */}
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-golocal-secondary mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-golocal-secondary mb-2">How do I sign up for Go Local?</h3>
                <p className="text-gray-600">
                  Signing up is easy! Download our app or visit our website and register with your student email address. 
                  Once you verify your student status, you can start booking or offering rides.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-golocal-secondary mb-2">Is Go Local available at all colleges?</h3>
                <p className="text-gray-600">
                  We're currently available at select campuses and expanding rapidly. Check our app or website to see if we're 
                  active at your campus. If not, you can join our waitlist for notification when we launch at your school.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-golocal-secondary mb-2">How does payment work?</h3>
                <p className="text-gray-600">
                  Payments are processed securely through our app. Riders can pay with credit/debit cards or campus cash 
                  accounts. Drivers receive direct deposits to their bank accounts weekly.
                </p>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-golocal-secondary mb-2">Is there customer support available?</h3>
                <p className="text-gray-600">
                  Yes! Our support team is available 7 days a week from 8am to 10pm. You can contact us through the app, 
                  email, or phone for any assistance you may need.
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

export default Contact;

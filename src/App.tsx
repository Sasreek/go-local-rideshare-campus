
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import BookRide from "./pages/BookRide";
import HostRide from "./pages/HostRide";
import PastBookings from "./pages/PastBookings";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";

// Move the queryClient inside the App component to ensure it's created
// when React is fully initialized
const App = () => {
  // Create a new QueryClient instance inside the component
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/book-ride" element={<BookRide />} />
              <Route path="/host-ride" element={<HostRide />} />
              <Route path="/past-bookings" element={<PastBookings />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;

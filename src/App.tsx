
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import CarWashService from "./pages/CarWashService";
import ShisanyamaService from "./pages/ShisanyamaService";
import BarRestaurantService from "./pages/BarRestaurantService";
import AccommodationService from "./pages/AccommodationService";
import ConferenceService from "./pages/ConferenceService";
import PoolLapaService from "./pages/PoolLapaService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/car-wash" element={<CarWashService />} />
              <Route path="/services/shisanyama" element={<ShisanyamaService />} />
              <Route path="/services/bar-restaurant" element={<BarRestaurantService />} />
              <Route path="/services/accommodation" element={<AccommodationService />} />
              <Route path="/services/conference" element={<ConferenceService />} />
              <Route path="/services/pool-lapa" element={<PoolLapaService />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

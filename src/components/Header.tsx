import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone, Search, Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    setActiveSection(window.location.pathname);
  }, []);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* --- Top Info Bar --- */}
      <div className="bg-white text-primary py-2 border-b border-gray-200 overflow-hidden">
        <div className="animate-slide flex items-center justify-center gap-8 sm:gap-12 text-xs sm:text-sm whitespace-nowrap">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Phone className="h-4 w-4 text-primary" />
            <span className="font-medium hidden sm:inline">Emergency:</span>
            <a href="tel:+97756493780" className="text-blue-600 hover:underline">
              +977 56 493780
            </a>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <Clock className="h-4 w-4 text-primary" />
            <span className="font-medium hidden sm:inline">Work Hour:</span>
            <span className="hidden sm:inline">09:00 - 20:00</span>
            <span className="sm:hidden">9AM - 8PM</span>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="font-medium hidden sm:inline">Location:</span>
            <span className="hidden sm:inline">Bharatpur-10, Chitwan</span>
            <span className="sm:hidden">Chitwan, Nepal</span>
          </div>
        </div>
      </div>

      {/* --- Main Nav Bar --- */}
      <div className="bg-primary text-primary-foreground py-4 relative">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="CEH logo" className="h-10 md:h-16" />
          </a>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:hidden">
            {/*<Button variant="ghost" size="icon" className="hover:bg-primary/80">
              <Search className="h-5 w-5" />
            </Button>*/}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-primary-foreground"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className={`font-bold transition-colors ${activeSection === "/" ? "text-accent border-b-2 border-accent pb-1" : "hover:text-accent"}`}>Home</a>
            <a href="/about" className={`font-bold transition-colors ${activeSection === "/about" ? "text-accent border-b-2 border-accent pb-1" : "hover:text-accent"}`}>About us</a>
            <a href="/services" className={`font-bold transition-colors ${activeSection === "/services" ? "text-accent border-b-2 border-accent pb-1" : "hover:text-accent"}`}>Services</a>
            <a href="/doctors" className={`font-bold transition-colors ${activeSection === "/doctors" ? "text-accent border-b-2 border-accent pb-1" : "hover:text-accent"}`}>Doctors</a>
            <a href="/contact" className={`font-bold transition-colors ${activeSection === "/contact" ? "text-accent border-b-2 border-accent pb-1" : "hover:text-accent"}`}>Contact</a>
          </nav>

          {/* Desktop Appointment */}
          <div className="hidden md:flex items-center gap-3">
            {/*<Button variant="ghost" size="icon" className="hover:bg-primary/80">
              <Search className="h-5 w-5" />
            </Button>}*/}
            <a href="/appointment">
              <Button
                size="lg"
                className="flex items-center gap-2 bg-[#BFD2F8] text-[#1b1b1b] rounded-full px-6 py-2 hover:bg-[#AFC9F0] focus:outline-none"
              >
                Appointment
              </Button>
            </a>
          </div>
        </div>

        {/* --- Mobile Dropdown Menu --- */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full bg-[#cdd9ff] text-[#1b1b1b] shadow-lg flex flex-col items-center py-6 space-y-4 animate-fadeIn">
            <nav className="flex flex-col items-center gap-3 text-base font-medium">
              <a href="/" className="font-semibold">Home</a>
              <a href="/about">About us</a>
              <a href="/services">Services</a>
              <a href="/doctors">Doctors</a>
              <a href="/contact">Contact</a>
            </nav>
            <a href="/appointment">
            <Button className="mt-2 bg-[#2b1b6a] text-white rounded-full px-10 py-2 hover:bg-[#24125e]">
              Appointment
            </Button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

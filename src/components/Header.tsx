import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone, Search, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* --- Top Info Bar --- */}
      <div className="bg-white text-primary py-2 border-b border-gray-200">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <span className="font-medium">Emergency:</span>
            <a href="tel:237681812255" className="text-blue-600 hover:underline">
              (237) 681-812-255
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="font-medium">Work Hour:</span>
            <span>09:00 - 20:00 Everyday</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="font-medium">Location:</span>
            <span>0123 Some Place</span>
          </div>
        </div>
      </div>

      {/* --- Main Nav Bar --- */}
      <div className="bg-primary text-primary-foreground py-4 relative">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="CEH logo" className="h-8 md:h-10" />
          </a>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-primary/80">
              <Search className="h-5 w-5" />
            </Button>
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
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <a href="/about" className="hover:text-accent transition-colors">About us</a>
            <a href="/services" className="hover:text-accent transition-colors">Services</a>
            <a href="/doctors" className="hover:text-accent transition-colors">Doctors</a>
            <a href="/#contact" className="hover:text-accent transition-colors">Contact</a>
          </nav>

          {/* Desktop Appointment */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hover:bg-primary/80">
              <Search className="h-5 w-5" />
            </Button>
            <a href="https://www.example.com">
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
            <a href="https://www.example.com">
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

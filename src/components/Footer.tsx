import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">CEH</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Leading the way in medical excellence, caring for life.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20 h-9 w-9">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20 h-9 w-9">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20 h-9 w-9">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm">Important Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#appointment" className="hover:text-accent transition-colors">Appointment</a></li>
              <li><a href="#doctors" className="hover:text-accent transition-colors">Doctors</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Call: (+237) 681-812-255</li>
              <li>Email: contact@Chitwan.com</li>
              <li>Address: 0123 Some Place</li>
              <li>9876 Some Country</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-sm">Newsletter</h4>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-white/60"
              />
              <Button variant="accent">→</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2025 Hospital's Name All Rights Reserved by PNTEC-LTD</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

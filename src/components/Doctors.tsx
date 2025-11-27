import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroDoctor from "@/assets/hero-doctor.jpg";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { useState, useEffect } from "react";

const Doctors = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "NEUROLOGY",
      image: heroDoctor,
    },
    {
      name: "Dr. Michael Chen",
      specialty: "CARDIOLOGY",
      image: heroDoctor,
    },
    {
      name: "Dr. Emily Davis",
      specialty: "PEDIATRICS",
      image: heroDoctor,
    },
    {
      name: "Dr. James Wilson",
      specialty: "ORTHOPEDICS",
      image: heroDoctor,
    },
    {
      name: "Dr. Lisa Anderson",
      specialty: "DERMATOLOGY",
      image: heroDoctor,
    },
    {
      name: "Dr. Robert Taylor",
      specialty: "UROLOGY",
      image: heroDoctor,
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (doctors.length - 2));
    }, 5000);
    return () => clearInterval(interval);
  }, [doctors.length]);

  return (
    <section className="py-20 bg-background" id="doctors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">Trust our experts</p>
          <h2 className="text-4xl font-bold text-foreground">Our Doctors</h2>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {doctors.slice(currentSlide, currentSlide + 3).map((doctor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent p-6 text-white">
                    <p className="text-xs font-semibold tracking-wider uppercase">{doctor.specialty}</p>
                    <h3 className="text-xl font-bold">{doctor.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6 bg-primary text-center">
                  <div className="flex justify-center gap-4">
                    <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20 h-8 w-8">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20 h-8 w-8">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20 h-8 w-8">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Slide Indicators - Clickable dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: doctors.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all ${
                  index === currentSlide ? 'bg-primary w-8 h-2 rounded-full' : 'bg-gray-300 w-2 h-2 rounded-full'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;

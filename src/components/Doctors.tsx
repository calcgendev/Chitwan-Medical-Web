import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroDoctor from "@/assets/hero-doctor.jpg";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const Doctors = () => {
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
  ];

  return (
    <section className="py-20 bg-background" id="doctors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">Trust our experts</p>
          <h2 className="text-4xl font-bold text-foreground">Our Doctors</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {doctors.map((doctor, index) => (
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

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;

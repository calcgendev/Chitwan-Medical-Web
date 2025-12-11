import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Bone, Eye, Baby, Activity, Syringe, Pill, EyeOff, Droplet, Target, Scissors } from "lucide-react";

const Specialties = () => {
  const specialties = [
    { icon: EyeOff, name: "Glaucoma" },
    { icon: Droplet, name: "Cornea" },
    { icon: Target, name: "Retina" },
    { icon: Eye, name: "Ophthalmology" },
    { icon: Baby, name: "Pediatrics" },
    { icon: Scissors, name: "Oculoplasty" },
    { icon: Syringe, name: "Laboratory" },
    { icon: Pill, name: "Pharmacy" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">Always Caring</p>
          <h2 className="text-4xl font-bold text-foreground">Our Specialties</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border border-gray-200 hover:bg-[#1F2B6C] hover:text-white"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-white/30">
                  <specialty.icon className="h-8 w-8 text-current" />
                </div>
                <h3 className="font-semibold">{specialty.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;

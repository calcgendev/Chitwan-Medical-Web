import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Heart, Stethoscope, TestTube } from "lucide-react";
import consultation from "@/assets/consultation.jpg";
import doctorsTeam from "@/assets/doctors-team.jpg";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Free Checkup",
      points: [
        "General health screening",
        "Blood pressure",
        "Diabetic checkup",
        "Weight management",
      ],
    },
    {
      icon: Heart,
      title: "Cardiogram",
      points: [
        "Heart monitoring",
        "ECG testing",
        "Cardiac consultation",
        "Emergency care",
      ],
    },
    {
      icon: TestTube,
      title: "DNA Testing",
      points: [
        "Genetic screening",
        "Ancestry testing",
        "Health predisposition",
        "Personalized care",
      ],
    },
    {
      icon: Activity,
      title: "Blood Bank",
      points: [
        "Blood donation",
        "Blood storage",
        "Transfusion services",
        "Emergency supply",
      ],
    },
  ];

  return (
    <section className="py-20 bg-secondary/30" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">
            Care you can believe in
          </p>
          <h2 className="text-4xl font-bold text-foreground">Our Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <Card className="bg-primary text-primary-foreground border-0">
              <CardContent className="p-6">
                <div className="bg-white/20 p-3 rounded-lg w-fit mb-4">
                  <Activity className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  A passion for putting patients first
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">✓</span> A Passion for Healing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">✓</span> 5-Star Care
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">✓</span> All our best
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">✓</span> Believe in Us
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">✓</span> Always Caring
                  </li>
                </ul>
                <Button variant="accent" className="mt-4 w-full">
                  View All
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border border-gray-200 hover:bg-[#1F2B6C] hover:text-white"
                >
                  <CardContent className="p-4 text-center">
                    <div className="bg-accent/10 p-3 rounded-lg w-fit mx-auto mb-2 group-hover:bg-white/30">
                      <service.icon className="h-6 w-6 text-current" />
                    </div>
                    <h4 className="font-semibold text-sm">{service.title}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <img
              src={consultation}
              alt="Doctor consulting with patient"
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Comprehensive Care
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  We provide a full range of medical services from preventive
                  care to specialized treatment. Our team is dedicated to your
                  health and wellbeing.
                </p>
                <a href="/services">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">
                  Expert Medical Team
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Our healthcare professionals bring years of experience and
                  compassionate care to every patient interaction.
                </p>
                <a href="/doctors">
                  <Button variant="outline" className="w-full">
                    Meet Our Doctors
                  </Button>
                </a>
              </CardContent>
            </Card>
            <img
              src={doctorsTeam}
              alt="Medical team smiling"
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

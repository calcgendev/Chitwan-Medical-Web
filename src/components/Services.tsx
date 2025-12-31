import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ScanEye, ShieldPlus, Siren, Glasses } from "lucide-react";
import consultation from "@/assets/consultation.jpg";
import doctorsTeam from "@/assets/doctors-team.jpg";

const Services = () => {
  const services = [
    {
      icon: Eye,
      title: "Comprehensive Eye Exams",
      points: [
        "Vision assessment",
        "Eye pressure test",
        "Refraction test",
        "Early disease detection",
      ],
    },
    {
      icon: ScanEye,
      title: "Cataract Surgery",
      points: [
        "Phaco surgery",
        "Lens implantation",
        "Pre & post-op care",
        "Advanced technology",
      ],
    },
    {
      icon: ShieldPlus,
      title: "Retina & Glaucoma Care",
      points: [
        "Diabetic retinopathy",
        "Glaucoma screening",
        "Laser treatment",
        "Long-term monitoring",
      ],
    },
    {
      icon: Siren,
      title: "Eye Emergency Care",
      points: [
        "Eye injuries",
        "Sudden vision loss",
        "Infections & redness",
        "24/7 emergency support",
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
          <h2 className="text-4xl font-bold text-foreground">
            Our Eye Care Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <Card className="bg-primary text-primary-foreground border-0">
              <CardContent className="p-6">
                <div className="bg-white/20 p-3 rounded-lg w-fit mb-4">
                  <Glasses className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Dedicated to Protecting Your Vision
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">✓</span> Advanced Eye Care
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">✓</span> Experienced
                    Specialists
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">✓</span> Modern Technology
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-accent">✓</span> Always Caring
                  </li>
                </ul>
                <Button variant="accent" className="mt-4 w-full">
                  View All Services
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
                  Comprehensive Eye Care
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  From routine eye checkups to advanced surgical procedures, we
                  provide complete eye care services using the latest medical
                  technology.
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
                  Expert Eye Specialists
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Our team of experienced ophthalmologists and eye care
                  professionals are committed to delivering personalized and
                  compassionate care.
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
              alt="Eye hospital medical team"
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

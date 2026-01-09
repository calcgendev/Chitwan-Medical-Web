import consultation from "@/assets/consultation.jpeg";
import doctorsTeam from "@/assets/doctors-team.jpeg";
import heroDoctor from "@/assets/hero-doctor.jpg";
import imageAsset from "@/assets/image.jpg";
import medicalTeam from "@/assets/image1.jpeg";
import eyeHospital from "@/assets/Super-Speciality-Eye-Hospital.jpg";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Eye, EyeOff, Glasses, Users, Wrench } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: Eye,
      title: "Eye Check‑ups & Vision Testing",
      description: "Regular exams to check vision and eye health.",
      points: [
        "Routine eye exams",
        "Vision testing & prescription updates",
        "Early detection of eye problems",
      ],
      image: eyeHospital,
    },
    {
      icon: EyeOff,
      title: "Diagnosis & Treatment of Eye Conditions",
      description: "Identifying and managing various eye diseases.",
      points: [
        "Cataracts, glaucoma, dry eyes",
        "Diabetic retinopathy care",
        "Allergy & infection treatment",
      ],
      image: consultation,
    },
    {
      icon: Wrench,
      title: "Surgical Services",
      description: "Surgeries to restore or improve vision.",
      points: [
        "Cataract surgery",
        "LASIK / refractive procedures",
        "Retinal & corneal surgeries",
      ],
      image: heroDoctor,
    },
    {
      icon: AlertCircle,
      title: "Emergency Eye Care",
      description: " Immediate care for urgent eye problems.",
      points: [
        "Treatment for eye injuries",
        "Care for sudden vision loss",
        "Removal of foreign bodies",
      ],
      image: medicalTeam,
    },
    {
      icon: Users,
      title: "Pediatric Eye Care",
      description: " Specialized eye care for children.",
      points: [
        "Vision screening",
        "Amblyopia treatment",
        "Strabismus management",
        "Preventive care",
      ],
      image: imageAsset,
    },
    {
      icon: Glasses,
      title: "Optical Shop & Eyewear",
      description: "Vision correction products and fitting.",
      points: [
        "Glasses, frames, lenses",
        "Contact lens fitting",
        "Adjustment & repair services",
      ],
      image: doctorsTeam,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with background image and breadcrumb */}
      <section
        className="relative h-80 md:h-96 bg-cover bg-center bg-fixed flex items-end"
        style={{ backgroundImage: `url(${medicalTeam})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 w-full pb-8 md:pb-12">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <div className="text-white mb-4 text-sm">
              <a href="/" className="hover:text-accent">
                Home
              </a>
              <span className="mx-2">/</span>
              <span>Services</span>
            </div>
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Our Services
            </h1>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">
              Care you can believe in
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Comprehensive Medical Services
            </h2>
            <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
              We provide a full range of medical services from preventive care
              to specialized treatment. Our team is dedicated to your health and
              wellbeing.
            </p>
          </div>

          {/* Services Grid - 3 columns */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all hover:-translate-y-2 cursor-pointer border border-gray-200 overflow-hidden"
              >
                {/* Service Image with Icon Badge */}
                <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Icon Badge */}
                  <div className="absolute bottom-4 right-4 bg-cyan-100 rounded-full p-3 shadow-lg">
                    <service.icon className="h-6 w-6 text-cyan-600" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-foreground/70 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-accent font-bold">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="mt-4 w-full hover:bg-accent/10"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Additional Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-7 order-2 md:order-1">
              <div>
                <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">
                  Our Commitment
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Quality Healthcare for Everyone
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  We believe that quality healthcare should be accessible to
                  everyone. Our mission is to provide compassionate,
                  comprehensive medical services that improve the health and
                  well-being of our community.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  With a team of experienced doctors and state-of-the-art
                  facilities, we are committed to delivering the highest
                  standard of medical care to all our patients.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 md:order-2">
              <div
                className="rounded-2xl shadow-2xl w-full bg-cover bg-center h-80 md:h-96"
                style={{ backgroundImage: `url(${doctorsTeam})` }}
                role="img"
                aria-label="Medical team professionals"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      <Footer />
    </div>
  );
};

export default ServicesPage;

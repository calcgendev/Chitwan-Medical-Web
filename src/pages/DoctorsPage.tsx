import consultation from "@/assets/consultation.jpg";
import doctorsTeam from "@/assets/doctors-team.jpg";
import heroDoctor from "@/assets/hero-doctor.jpg";
import imageAsset from "@/assets/image.jpg";
import medicalTeam from "@/assets/medical-team.jpg";
import eyeHospital from "@/assets/Super-Speciality-Eye-Hospital.jpg";
import Contact from "@/components/Contact";
import Doctors from "@/components/Doctors";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { useState, useEffect } from "react";

const DoctorsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const pageDoctor = [
    {
      name: "Doctor's Name",
      specialty: "NEUROLOGY",
      image: heroDoctor,
    },
    {
      name: "Doctor's Name",
      specialty: "NEUROLOGY",
      image: heroDoctor,
    },
    {
      name: "Doctor's Name",
      specialty: "NEUROLOGY",
      image: heroDoctor,
    },
    {
      name: "Doctor's Name",
      specialty: "NEUROLOGY",
      image: heroDoctor,
    },
    {
      name: "Doctor's Name",
      specialty: "NEUROLOGY",
      image: heroDoctor,
    },
    {
      name: "Doctor's Name",
      specialty: "NEUROLOGY",
      image: heroDoctor,
    },
  ];

  const testimonials = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
      author: "John Doe",
    },
    {
      quote: "Exceptional care and professional staff. The team is dedicated to patient satisfaction and provides outstanding medical services with compassion.",
      author: "Jane Smith",
    },
    {
      quote: "Amazing experience at this hospital. The doctors are highly skilled and the facilities are top-notch. Highly recommended!",
      author: "Michael Johnson",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
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
              <a href="/" className="hover:text-accent">Home</a>
              <span className="mx-2">/</span>
              <span>Doctors</span>
            </div>
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white">Doctors</h1>
          </div>
        </div>
      </section>
    <div>
      {/* Doctors Section with 6 cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">Trust our experts</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Doctors</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pageDoctor.map((doctor, index) => (
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
                      <a href="https://www.facebook.com/chitwaneye.hospital/" target="_blank" rel="noopener noreferrer"></a>
                    </Button>
                    <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20 h-8 w-8">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section - Slider */}
      <section
        className="relative py-24 text-white flex items-center justify-center min-h-96"
        style={{
          backgroundImage: `url(${consultation})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 w-full">
          <div className="text-center space-y-8">
            {/* Quote icon */}
            <div className="text-6xl text-white/30">„</div>

            {/* Testimonial text */}
            <p className="text-xl md:text-2xl leading-relaxed font-light">
              {testimonials[currentTestimonial].quote}
            </p>

            {/* Divider line */}
            <div className="flex justify-center">
              <div className="w-20 h-1 bg-white/40"></div>
            </div>

            {/* Author name */}
            <p className="text-lg font-semibold">{testimonials[currentTestimonial].author}</p>

            {/* Slide Indicators - Clickable dots */}
            <div className="flex gap-2 justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all ${
                    index === currentTestimonial ? 'bg-white w-8 h-2 rounded-full' : 'bg-white/50 w-2 h-2 rounded-full'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      <Footer />
    </div>
  </div>
  );
};

export default DoctorsPage;
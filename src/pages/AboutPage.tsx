import Header from "@/components/Header";
import Footer from "@/components/Footer";
import medicalTeam from "@/assets/medical-team.jpg";
import Doctors from "@/components/Doctors";
import Contact from "@/components/Contact";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const AboutPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    { text: "A Passion for Healing" },
    { text: "5-Star Care" },
    { text: "All our best" },
    { text: "Believe in Us" },
    { text: "Always Caring" },
    { text: "A Legacy of Excellence" },
  ];

  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
      author: "John Doe",
    },
    {
      quote:
        "Exceptional care and professional staff. The team is dedicated to patient satisfaction and provides outstanding medical services with compassion.",
      author: "Jane Smith",
    },
    {
      quote:
        "Amazing experience at this hospital. The doctors are highly skilled and the facilities are top-notch. Highly recommended!",
      author: "Michael Johnson",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
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
              <a href="/" className="hover:text-accent">
                Home
              </a>
              <span className="mx-2">/</span>
              <span>About</span>
            </div>
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              About us
            </h1>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div>
              <div
                className="rounded-2xl shadow-2xl w-full bg-cover bg-center h-80 md:h-96"
                style={{ backgroundImage: `url(${medicalTeam})` }}
                role="img"
                aria-label="Medical team professionals"
              />
            </div>

            {/* Right Column - Content */}
            <div className="space-y-7">
              <div>
                <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">
                  Welcome to hospital name
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Best Care for Your Good Health
                </h2>
              </div>

              {/* Features Grid - 2 columns */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-0">●</span>
                    <span className="text-foreground font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  About Chitwan Eye Hospital Chitwan Eye Hospital is a trusted
                  eye hospital in Nepal, providing advanced eye services from
                  Bharatpur, Chitwan. Our experienced eye specialists in Nepal
                  offer comprehensive care, including eye exams, cataract
                  surgery, retina care, and emergency treatment, so patients do
                  not need to travel far for quality care.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  As one of the best eye hospital in Nepal–level providers
                  outside Kathmandu, we focus on safe, affordable treatment and
                  a patient‑first approach. Thousands of patients from Chitwan
                  and neighbouring districts rely on us each year to protect and
                  restore their vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section - Slider */}
      <section
        className="relative py-24 text-white flex items-center justify-center min-h-96"
        style={{
          backgroundImage: "url(/src/assets/consultation.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
            <p className="text-lg font-semibold">
              {testimonials[currentTestimonial].author}
            </p>

            {/* Slide Indicators - Clickable dots */}
            <div className="flex gap-2 justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all ${
                    index === currentTestimonial
                      ? "bg-white w-8 h-2 rounded-full"
                      : "bg-white/50 w-2 h-2 rounded-full"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <Doctors />

      {/* Contact Section */}
      <Contact />

      <Footer />
    </div>
  );
};

export default AboutPage;

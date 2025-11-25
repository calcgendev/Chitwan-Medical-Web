import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickActions from "@/components/QuickActions";
import About from "@/components/About";
import Services from "@/components/Services";
import Specialties from "@/components/Specialties";
import AppointmentForm from "@/components/AppointmentForm";
import Doctors from "@/components/Doctors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <QuickActions />
      <About />
      <Services />
      <Specialties />
      <AppointmentForm />
      <Doctors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

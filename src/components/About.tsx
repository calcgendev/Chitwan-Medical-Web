import { Button } from "@/components/ui/button";
import medicalTeam from "@/assets/image1.jpeg";

const About = () => {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">
            WELCOME TO CHITWAN EYE HOSPITAL
          </p>
          <h2 className="text-4xl font-bold text-foreground">
            A Great Place to Receive Eye Care
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Chitwan Eye Hospital is a trusted eye hospital in Nepal, located in
            Bharatpur, Chitwan. We provide comprehensive eye services delivered
            by experienced eye specialists in Nepal, helping thousands of
            patients restore and protect their vision each year. Whether you
            need a routine eye exam, cataract surgery, or advanced retina care
            we offer affordable, high-quality treatment without the need to
            travel to Kathmandu
          </p>
          <a href="/about" className="inline-block">
            <Button variant="link" className="mt-4 text-accent">
              Learn More →
            </Button>
          </a>
        </div>

        <div className="mt-12">
          <div
            className="rounded-2xl shadow-2xl w-full bg-cover bg-center h-64 md:h-96 lg:h-[480px]"
            style={{ backgroundImage: `url(${medicalTeam})` }}
            role="img"
            aria-label="Medical team professionals"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

import { Button } from "@/components/ui/button";
import medicalTeam from "@/assets/medical-team.jpg";

const About = () => {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">Welcome to CEH</p>
          <h2 className="text-4xl font-bold text-foreground">A Great Place to Receive Care</h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. 
            Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
          </p>
          <Button variant="link" className="mt-4">Learn More →</Button>
        </div>

        <div className="mt-12">
          <img 
            src={medicalTeam} 
            alt="Medical team professionals" 
            className="rounded-2xl shadow-2xl w-full h-auto object-cover max-h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

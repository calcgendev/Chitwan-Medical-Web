import { Button } from "@/components/ui/button";
import heroDoctor from "@/assets/image.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-secondary pt-20 pb-8 overflow-hidden min-h-[640px] md:min-h-[840px]" id="home">
      {/* background image with fixed size */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0"
        style={{ width: "100vw", height: "45vw" }}
      >
        <img
          src={heroDoctor}
          alt="Professional doctor with stethoscope"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-accent/10" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-20 relative max-w-xl">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase">Caring for life</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
              Leading the Way in Medical Excellence
            </h1>
            <Button size="lg" className="mt-4 z-30">
              Our Services
            </Button>
          </div>
          {/* empty column to preserve spacing on small screens; content is visually covered by the full image on the right */}
          <div className="hidden md:block" />
        </div>

        {/* (background image moved outside container to fill section) */}
      </div>
    </section>
  );
};

export default Hero;

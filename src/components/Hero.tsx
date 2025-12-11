import { Button } from "@/components/ui/button";
import heroDoctor from "@/assets/image.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-secondary pt-6 md:pt-16 pb-4 md:pb-6 overflow-hidden min-h-[320px] md:min-h-[520px]" id="home">
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

      <div className="container mx-auto px-4 md:px-0 relative">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 items-center justify-center" style={{ minHeight: 'min(35vw, 520px)' }}>
          <div className="space-y-3 md:space-y-4 z-20 relative max-w-xl w-full">
            <p className="text-accent text-xs md:text-sm font-semibold tracking-wider uppercase">Caring for life</p>
            <h1 className="text-xl sm:text-3xl md:text-6xl font-bold leading-tight text-foreground">
              Leading the Way in Medical Excellence
            </h1>
            <div className="pt-1 md:pt-6">
              <a href="/services" className="inline-block">
              <Button size="lg" className="bg-[#BFD2F8] text-black shadow-lg px-4 md:px-6 py-4 md:py-5 rounded-md text-sm md:text-base hover:text-white hover:bg-[#9fb3e8] transition-colors duration-300">
                Our Services →
              </Button>
              </a>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import medicalTeam from "@/assets/image2.jpeg";
import Contact from "@/components/Contact";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

const ContactPage = () => {
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
              <span>Contact</span>
            </div>
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Our Contacts
            </h1>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <iframe
              width="80%"
              height="400"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1759767696844!2d84.42993417614039!3d27.6809554266538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb2e88bac14b%3A0x24bd6c0b4ccc3f96!2sChitwan%20Eye%20Hospital!5e0!3m2!1sen!2snp!4v1764317633011!5m2!1sen!2snp"
            />
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">
              Get in touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Contact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Left Column - Form */}
            <div className="flex justify-start">
              <Card className="bg-primary text-primary-foreground border-0 shadow-2xl w-full rounded-xl overflow-hidden flex flex-col h-full">
                <CardContent className="p-0 flex flex-col flex-1">
                  <form className="space-y-0 flex flex-col flex-1">
                    {/* Dark segmented input area */}
                    <div className="bg-[#1F2B6C] text-white p-0 flex-1">
                      <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name" className="text-white/80">
                              Name
                            </Label>
                            <Input
                              id="name"
                              placeholder="Your name"
                              className="bg-transparent border-b border-white/20 text-white placeholder:text-white/60 rounded-none"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email" className="text-white/80">
                              Email
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your@email.com"
                              className="bg-transparent border-b border-white/20 text-white placeholder:text-white/60 rounded-none"
                            />
                          </div>
                        </div>

                        <div className="mt-4">
                          <Label htmlFor="subject" className="text-white/80">
                            Subject
                          </Label>
                          <Input
                            id="subject"
                            placeholder="Message subject"
                            className="bg-transparent border-b border-white/20 text-white placeholder:text-white/60 rounded-none"
                          />
                        </div>

                        <div className="mt-4">
                          <Label htmlFor="message" className="text-white/80">
                            Message
                          </Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us your message..."
                            className="bg-transparent border-b border-white/20 text-white placeholder:text-white/60 min-h-32 rounded-none resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit button */}
                    <Button
                      type="submit"
                      className="w-full bg-[#C8D8FF] text-[#1F2B6C] hover:bg-[#B8C8FF] font-semibold py-3 rounded-none"
                    >
                      SUBMIT
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Contact Info Cards */}
            <div className="flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                {/* Emergency Card */}
                <Card className="bg-accent/10 text-accent border-0 hover:shadow-xl hover:bg-[#1F2B6C] hover:text-white transition-all cursor-pointer group">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="bg-accent/20 p-4 rounded-full w-fit mx-auto mb-3 sm:mb-4">
                      <Phone className="h-6 sm:h-8 w-6 sm:w-8 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold mb-2 sm:mb-3 uppercase tracking-wider text-xs sm:text-sm group-hover:text-white transition-colors">
                      EMERGENCY
                    </h3>
                    <p className="text-xs sm:text-sm text-[#192243cc] group-hover:text-white transition-colors break-words">
                      (+977) 56490799
                    </p>
                    <p className="text-xs sm:text-sm text-[#192243cc] group-hover:text-white transition-colors break-words">
                      (+977) 56493780
                    </p>
                  </CardContent>
                </Card>

                {/* Location Card */}
                <Card className="bg-accent/10 text-accent border-0 hover:shadow-xl hover:bg-[#1F2B6C] hover:text-white transition-all cursor-pointer group">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="bg-white/20 p-4 rounded-full w-fit mx-auto mb-3 sm:mb-4">
                      <MapPin className="h-6 sm:h-8 w-6 sm:w-8 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold mb-2 sm:mb-3 uppercase tracking-wider text-xs sm:text-sm group-hover:text-white transition-colors">
                      LOCATION
                    </h3>
                    <p className="text-xs sm:text-sm text-[#192243cc] group-hover:text-white transition-colors break-words">
                      Bharatpur-10, Chitwan, Nepal
                    </p>
                    <p className="text-xs sm:text-sm text-[#192243cc] group-hover:text-white transition-colors break-words">
                      Nepal
                    </p>
                  </CardContent>
                </Card>

                {/* Email Card */}
                <Card className="bg-accent/10 text-accent border-0 hover:shadow-xl hover:bg-[#1F2B6C] hover:text-white transition-all cursor-pointer group">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="bg-accent/20 p-4 rounded-full w-fit mx-auto mb-3 sm:mb-4">
                      <Mail className="h-6 sm:h-8 w-6 sm:w-8 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold mb-2 sm:mb-3 uppercase tracking-wider text-xs sm:text-sm group-hover:text-white transition-colors">
                      EMAIL
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/80 group-hover:text-white transition-colors break-words">
                      chitwaneyehospital@gmail.com
                    </p>
                  </CardContent>
                </Card>

                {/* Working Hours Card */}
                <Card className="bg-accent/10 text-accent border-0 hover:shadow-xl hover:bg-[#1F2B6C] hover:text-white transition-all cursor-pointer group">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="bg-accent/20 p-4 rounded-full w-fit mx-auto mb-3 sm:mb-4">
                      <Clock className="h-6 sm:h-8 w-6 sm:w-8 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold mb-2 sm:mb-3 uppercase tracking-wider text-xs sm:text-sm group-hover:text-white transition-colors">
                      WORKING HOURS
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/80 group-hover:text-white transition-colors break-words">
                      Mon-Sat: 09:00-20:00
                    </p>
                    <p className="text-xs sm:text-sm text-foreground/80 group-hover:text-white transition-colors break-words">
                      Sunday: Emergency only
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;

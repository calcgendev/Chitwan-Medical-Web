import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Emergency",
      content: ["(+237) 681-812-255", "(+237) 666-331-894"],
      bgColor: "bg-accent/10 text-accent",
    },
    {
      icon: MapPin,
      title: "Location",
      content: ["0123 Some place", "9876 Some country"],
      bgColor: "bg-primary text-primary-foreground",
    },
    {
      icon: Mail,
      title: "Email",
      content: ["contact@Chitwan.com", "appointments@Chitwan.com"],
      bgColor: "bg-accent/10 text-accent",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: ["Mon-Sat 09:00-20:00", "Sunday Emergency Only"],
      bgColor: "bg-accent/10 text-accent",
    },
  ];

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">Get in touch</p>
          <h2 className="text-4xl font-bold text-foreground">Contact</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <Card key={index} className={`${info.bgColor} border-0 hover:shadow-xl transition-shadow`}>
              <CardContent className="p-6 text-center">
                <div className={`${index === 1 ? 'bg-white/20' : 'bg-accent/20'} p-4 rounded-full w-fit mx-auto mb-4`}>
                  <info.icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-3 uppercase tracking-wider text-sm">{info.title}</h3>
                {info.content.map((line, i) => (
                  <p key={i} className={`text-sm ${index === 1 ? 'text-primary-foreground/90' : 'text-foreground/80'}`}>
                    {line}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

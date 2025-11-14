import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Phone } from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      icon: Calendar,
      title: "Book an Appointment",
      description: "Schedule your visit online",
      bgColor: "bg-primary",
    },
    {
      icon: MapPin,
      title: "Find Our Location",
      description: "Get directions to our facility",
      bgColor: "bg-[#BFD2F8]",
      textColor: "text-[#1b1b1b]",
    },
    {
      icon: Phone,
      title: "Call for Emergency",
      description: "24/7 emergency services",
      bgColor: "bg-accent",
    },
  ];

  return (
    <section className="py-8 -mt-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {actions.map((action, index) => (
            <Card
              key={index}
              className={`${action.bgColor} ${action.textColor ?? 'text-white'} p-6 cursor-pointer group hover:shadow-xl transition-colors border-0`}
            >
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30">
                  <action.icon className="h-8 w-8 text-current" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{action.title}</h3>
                  <p className="text-sm opacity-90">{action.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;

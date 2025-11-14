import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import consultation from "@/assets/consultation.jpg";

const AppointmentForm = () => {
  return (
    <section className="relative py-20 min-h-[320px] md:min-h-[520px]" id="book-appointment">
      {/* full-bleed background image with overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-40"
        style={{ backgroundImage: `url(${consultation})` }}
        aria-hidden={true}
      />
      <div className="absolute inset-0 bg-black/5 md:bg-black/20" aria-hidden={true} />

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-md">
              <h2 className="text-4xl font-bold text-foreground mb-6">Book an Appointment</h2>
              <p className="text-black mb-4">
                Schedule your visit with our expert medical team. We offer flexible appointment times to fit your schedule.
              </p>
              <p className="text-black">
                Fill out the form and our staff will contact you within 24 hours to confirm your appointment.
              </p>
            </div>

            <div className="flex justify-end">
              <Card className="bg-primary text-primary-foreground border-0 shadow-2xl max-w-lg w-full rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <form className="space-y-0">
                    {/* dark segmented input area */}
                    <div className="bg-[#1F2B6C] text-white p-0">
                      <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name" className="text-white/80">Name</Label>
                            <Input id="name" placeholder="Your name" className="bg-transparent border-b border-white/20 text-white placeholder:text-white/60 rounded-none" />
                          </div>
                          <div>
                            <Label htmlFor="gender" className="text-white/80">Gender</Label>
                            <Select>
                              <SelectTrigger className="bg-transparent border-b border-white/20 text-white rounded-none">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                          <div>
                            <Label htmlFor="email" className="text-white/80">Email</Label>
                            <Input id="email" type="email" placeholder="your@email.com" className="bg-transparent border-b border-white/20 text-white placeholder:text-white/60 rounded-none" />
                          </div>
                          <div>
                            <Label htmlFor="phone" className="text-white/80">Phone</Label>
                            <Input id="phone" type="tel" placeholder="+1 234 567 890" className="bg-transparent border-b border-white/20 text-white placeholder:text-white/60 rounded-none" />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                          <div>
                            <Label htmlFor="date" className="text-white/80">Date</Label>
                            <Input id="date" type="date" className="bg-transparent border-b border-white/20 text-white rounded-none" />
                          </div>
                          <div>
                            <Label htmlFor="time" className="text-white/80">Time</Label>
                            <Input id="time" type="time" className="bg-transparent border-b border-white/20 text-white rounded-none" />
                          </div>
                        </div>

                        <div className="mt-4">
                          <Label htmlFor="department" className="text-white/80">Department</Label>
                          <Select>
                            <SelectTrigger className="bg-transparent border-b border-white/20 text-white rounded-none">
                              <SelectValue placeholder="Choose department" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cardiology">Cardiology</SelectItem>
                              <SelectItem value="neurology">Neurology</SelectItem>
                              <SelectItem value="orthopedics">Orthopedics</SelectItem>
                              <SelectItem value="pediatrics">Pediatrics</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="mt-4">
                          <Label htmlFor="message" className="text-white/80">Message</Label>
                          <Textarea id="message" placeholder="Tell us about your concerns..." className="bg-transparent border-b border-white/20 text-white placeholder:text-white/60 min-h-24 rounded-none" />
                        </div>
                      </div>
                    </div>

                    {/* submit button */}
                    <Button type="submit" className="w-full bg-[#C8D8FF] text-[#1F2B6C] hover:bg-[#B8C8FF] font-semibold py-3 rounded-none">
                      SUBMIT
                    </Button>
                  </form>
                </CardContent>
              </Card>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AppointmentForm;

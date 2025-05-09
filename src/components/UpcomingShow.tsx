import React from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
const showData = [
  {
    id: 1,
    title: "Upcoming Orchestra Show",
    date: {
      display: "May 24, 2025",
      icon: "CalendarDays",
    },
    time: {
      display: "8:00 PM",
      icon: "Clock",
    },
    location: {
      display: "Ahmedabad",
      icon: "MapPin",
    },
    button: {
      text: "Register Now",
      className:
        "bg-music-purple hover:bg-music-purple/90 text-white px-8 py-6 rounded text-lg",
    },
  },
];

const UpcomingShow: React.FC = () => {
  return (
    <section className="py-16 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="space-y-8">
          {showData.map((show) => (
            <div
              key={show.id}
              className="max-w-4xl mx-auto bg-music-gray/50 p-8 rounded-md border border-white/10"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    <span className="text-gradient">{show.title}</span>
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 my-3">
                    <CalendarDays className="h-5 w-5 text-music-purple" />
                    <span>{show.date.display}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80 mb-3">
                    <Clock className="h-5 w-5 text-music-purple" />
                    <span>{show.time.display}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <MapPin className="h-5 w-5 text-music-purple" />
                    <span>{show.location.display}</span>
                  </div>
                </div>

                <WhatsAppButton
                  className={show.button.className}
                  phoneNumber="9664621135"
                  message="Hey, I'm interested in your service!"
                >
                  {show.button.text}
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingShow;

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const Background_Desktop =
  "https://ik.imagekit.io/zh57cbpyz/images/latest-shows/background-main_5uj05CyOu.png?updatedAt=1746886135372";

const Background_Mobile =
  "https://ik.imagekit.io/zh57cbpyz/images/latest-shows/background-mobile.png?updatedAt=1746887095712";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center hidden md:block"
        style={{
          backgroundImage: `url(${Background_Desktop})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
      </div>

      {/* Mobile Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center block md:hidden"
        style={{
          backgroundImage: `url(${Background_Mobile})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-white animate-fade-in">
          Your Stage.<span className="text-music-purple">Your Symphony.</span>
        </h1>

        <p
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          We create unforgettable live music experiences
        </p>

        <WhatsAppButton
          className="bg-music-purple hover:bg-music-purple/90 text-white  px-8 py-6 text-lg animate-fade-in flex items-center justify-center gap-2"
          size="sm"
          phoneNumber="9664621135"
          message="Hey, I'm interested to sponsor your show!"
        >
          Sponsor Us
        </WhatsAppButton>
      </div>

      {/* Scroll Down Indicator */}

      <div className="absolute bottom-10 left-0 right-0 mx-auto w-fit flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

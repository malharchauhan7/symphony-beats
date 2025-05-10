import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import WhatsAppButton from "./WhatsAppButton";

interface NavbarProps {
  className?: string;
}

const Logo =
  "https://ik.imagekit.io/zh57cbpyz/images/Logo-1-nobg_ZTjfuandY.png?updatedAt=1746886125402";

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        scrolled
          ? "bg-black/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-6",
        className
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white tracking-tight">
          {/* BEAT<span className="text-music-purple">LIFE</span> */}
          {Logo ? (
            <img src={Logo} className="h-12 md:h-16 " />
          ) : (
            <div>
              Symphony<span className="text-music-purple"> Beats</span>
            </div>
          )}
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-white hover:text-music-purple transition-colors"
          >
            Home
          </a>
          <a
            href="#gallery"
            className="text-white hover:text-music-purple transition-colors"
          >
            Gallery
          </a>
          <a
            href="#about"
            className="text-white hover:text-music-purple transition-colors"
          >
            About
          </a>
          {/* <a
            href="#testimonials"
            className="text-white hover:text-music-purple transition-colors"
          >
            Testimonials
          </a> */}
          <a
            href="#contact"
            className="text-white hover:text-music-purple transition-colors"
          >
            Contact
          </a>
        </div>

        <div className=" md:flex gap-5">
          {/* <WhatsAppButton
            className="hover:bg-white hover:text-black text-white font-medium bg-transparent "
            phoneNumber="9664621135"
            message="Hey, I want to register in your upcoming show!"
            size="sm"
          >
            Register here
          </WhatsAppButton> */}
          <WhatsAppButton
            className="bg-music-purple hover:bg-music-purple/90 text-white font-medium"
            size="sm"
            phoneNumber="9664621135"
            message="Hey, I'm interested to sponsor your show!"
          >
            Sponsor Us
          </WhatsAppButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

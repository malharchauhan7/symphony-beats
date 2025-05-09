import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UpcomingShow from "@/components/UpcomingShow";
import Gallery from "@/components/Gallery";
import Showcase from "@/components/Showcase";
import Musicians from "@/components/Musicians";
import Singers from "@/components/Singers"; // Added import for Singers
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-music-darker text-white ">
      <Navbar />
      <Hero />
      <UpcomingShow />
      <Gallery />
      <Showcase />
      <Musicians />
      <Singers />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy load non-critical components
const UpcomingShow = React.lazy(() => import("@/components/UpcomingShow"));
const Gallery = React.lazy(() => import("@/components/Gallery"));
const Showcase = React.lazy(() => import("@/components/Showcase"));
const Musicians = React.lazy(() => import("@/components/Musicians"));
const Singers = React.lazy(() => import("@/components/Singers"));
const About = React.lazy(() => import("@/components/About"));
const Testimonials = React.lazy(() => import("@/components/Testimonials"));
const Contact = React.lazy(() => import("@/components/Contact"));
const Footer = React.lazy(() => import("@/components/Footer"));

// Loading component
const SectionLoader = () => (
  <div className="h-screen flex items-center justify-center bg-music-darker">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-music-purple"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-music-darker text-white">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <UpcomingShow />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Showcase />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Musicians />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Singers />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;

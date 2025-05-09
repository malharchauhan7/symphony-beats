import React from "react";
import OrganizersImage from "/images/organizers.png";

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-music-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative h-[500px] z-10 rounded-lg overflow-hidden purple-glow">
              <img
                src={OrganizersImage}
                alt="Organizers"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-[-20px] right-[-20px] w-[200px] h-[200px] bg-music-purple opacity-20 rounded-full blur-3xl"></div>
          </div>

          <div className="animate-slide-in">
            <h2 className="text-4xl font-bold mb-6">
              Meet <span className="text-music-purple">Organisers</span>
            </h2>

            <p className="text-gray-300 mb-6">
              Founded in 2015, BeatLife emerged from a shared passion for live
              music and a vision to create experiences that transcend the
              ordinary. What began as a small collective of music enthusiasts
              has evolved into a leading force in the event production industry.
            </p>

            <p className="text-gray-300 mb-6">
              Our journey has been defined by a commitment to excellence,
              innovation, and the belief that music has the power to unite and
              inspire. We've collaborated with emerging artists and established
              names alike, always focusing on creating an authentic connection
              between performers and audiences.
            </p>

            <p className="text-gray-300 mb-8">
              Today, we're proud to have produced over 200 successful shows
              across the country, each one a unique celebration of sound, light,
              and human connection. Our team brings together diverse talents and
              perspectives, united by the mission to bring the beat to life in
              ways that leave lasting impressions.
            </p>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-music-darker p-4 rounded-lg">
                <h4 className="text-music-purple text-3xl font-bold mb-2">
                  200+
                </h4>
                <p className="text-gray-400 text-sm">Shows Produced</p>
              </div>
              <div className="bg-music-darker p-4 rounded-lg">
                <h4 className="text-music-purple text-3xl font-bold mb-2">
                  50+
                </h4>
                <p className="text-gray-400 text-sm">Venues</p>
              </div>
              <div className="bg-music-darker p-4 rounded-lg">
                <h4 className="text-music-purple text-3xl font-bold mb-2">
                  100K+
                </h4>
                <p className="text-gray-400 text-sm">Happy Fans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

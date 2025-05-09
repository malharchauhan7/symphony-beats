import React from "react";
import { cn } from "@/lib/utils";
// import BackgroundImage from "../../public/images/background-main.png";
// import StutiImage from "../../public/images/Latest Shows/stuti.png";
// import SingerPerforming from "../../public/images/Latest Shows/singerperforming.png";

const IMAGES_DIR = "/images/latest-shows";

const galleryImages = [
  {
    id: 1,
    src: `${IMAGES_DIR}/background-main.png`,
    alt: "",
    className: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 2,
    src: `${IMAGES_DIR}/stuti.png`,
    alt: "Started with ganesh stuti",
    className: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: `${IMAGES_DIR}/singerperforming.png`,
    alt: "Singer performing on stage",
    className: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: `${IMAGES_DIR}/audience.jpg`,
    alt: "200+ Audience",
    className: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 5,
    src: `${IMAGES_DIR}/sponser.jpg`,
    alt: "Show sponser Mahendra Verma",
    className: "col-span-1 row-span-1",
  },
  {
    id: 7,
    src: `${IMAGES_DIR}/backstage.jpg`,
    alt: "Back stage masti",
    className: "col-span-1 row-span-1",
  },
  {
    id: 8,
    src: `${IMAGES_DIR}/musicians.jpg`,
    alt: "The heartbeat of our show",
    className: "col-span-1 row-span-1",
  },
  {
    id: 9,
    src: `${IMAGES_DIR}/anchor.jpg`,
    alt: "The voice that guides the show",
    className: "col-span-1 row-span-1",
  },
  {
    id: 10,
    src: `${IMAGES_DIR}/fullteam.jpg`,
    alt: "Voices that bring the stage to life",
    className: "col-span-2 row-span-1",
  },
  {
    id: 10,
    src: `${IMAGES_DIR}/garba.jpg`,
    alt: "No celebration is complete without Garba!",
    className: "col-span-1 row-span-1",
  },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="section bg-music-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Latest <span className="text-music-purple">Show</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Capturing the energy and emotion of our most recent live music
            experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={cn(
                "gallery-item overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg relative group",
                image.className
              )}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

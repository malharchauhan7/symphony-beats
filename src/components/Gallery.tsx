import React from "react";
import { cn } from "@/lib/utils";
import LazyImage from "./LazyImage";
const galleryImages = [
  {
    id: 1,
    src: `https://ik.imagekit.io/zh57cbpyz/images/latest-shows/background-main_5uj05CyOu.png?updatedAt=1746886135372`,
    alt: "",
    className: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 2,
    src: `https://ik.imagekit.io/zh57cbpyz/images/latest-shows/stuti_tOpQkH-DF.png?updatedAt=1746886136179`,
    alt: "Started with ganesh stuti",
    className: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: `https://ik.imagekit.io/zh57cbpyz/images/latest-shows/singerperforming_TFdfI8mao.png?updatedAt=1746886137090`,
    alt: "Singer performing on stage",
    className: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: `https://ik.imagekit.io/zh57cbpyz/images/latest-shows/audience_Jft1xHNJ9z.jpg?updatedAt=1746886131231`,
    alt: "200+ Audience",
    className: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 5,
    src: `https://ik.imagekit.io/zh57cbpyz/images/latest-shows/sponser_4o0E46SvC.jpg?updatedAt=1746886136719`,
    alt: "Show sponser Mahendra Verma",
    className: "col-span-1 row-span-1",
  },
  {
    id: 7,
    src: `https://ik.imagekit.io/zh57cbpyz/images/latest-shows/backstage_gvWuHSShJ.jpg?updatedAt=1746886135197`,
    alt: "Back stage masti",
    className: "col-span-1 row-span-1",
  },
  {
    id: 8,
    src: `https://ik.imagekit.io/zh57cbpyz/images/latest-shows/musicians_1FLKTJyvde.jpg?updatedAt=1746886135546`,
    alt: "The heartbeat of our show",
    className: "col-span-1 row-span-1",
  },
  {
    id: 9,
    src: `https://ik.imagekit.io/zh57cbpyz/images/latest-shows/anchor_hdXePst6N.jpg?updatedAt=1746886131133`,
    alt: "The voice that guides the show",
    className: "col-span-1 row-span-1",
  },
  {
    id: 10,
    src: `https://ik.imagekit.io/zh57cbpyz/images/latest-shows/fullteam_EpUVU_EymX.jpg?updatedAt=1746886135369`,
    alt: "Voices that bring the stage to life",
    className: "col-span-2 row-span-1",
  },
  {
    id: 11,
    src: `https://ik.imagekit.io/zh57cbpyz/images/latest-shows/garba_gucjYQVGfv.jpg?updatedAt=1746886135707`,
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
              <LazyImage
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

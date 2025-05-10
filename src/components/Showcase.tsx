import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Youtube } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const showcaseEvents = [
  {
    id: 1,
    title: "Mega Orchestra Show",
    date: "May 3, 2025",
    location: "Gujarat Sahitya Parisad Hall, Ahmedabad",
    image: `https://ik.imagekit.io/zh57cbpyz/images/latest-shows/background-main_5uj05CyOu.png?updatedAt=1746886135372`,
    description:
      "Mega Orchestra Show with 12+ singers and 200+ audience—an unforgettable night of music and energy!",
    gallery: [
      `https://ik.imagekit.io/zh57cbpyz/images/latest-shows/background-main_5uj05CyOu.png?updatedAt=1746886135372`,
      `https://ik.imagekit.io/zh57cbpyz/images/latest-shows/audience_Jft1xHNJ9z.jpg?updatedAt=1746886131231`,
      `https://ik.imagekit.io/zh57cbpyz/images/latest-shows/sponser_4o0E46SvC.jpg?updatedAt=1746886136719`,
      `https://ik.imagekit.io/zh57cbpyz/images/latest-shows/musicians_1FLKTJyvde.jpg?updatedAt=1746886135546`,
      `https://ik.imagekit.io/zh57cbpyz/images/latest-shows/fullteam_EpUVU_EymX.jpg?updatedAt=1746886135369`,
      `https://ik.imagekit.io/zh57cbpyz/images/latest-shows/garba_gucjYQVGfv.jpg?updatedAt=1746886135707`,
    ],
    videos: [""],
  },
  // {
  //   id: 2,
  //   title: "Urban Beats Concert",
  //   date: "September 8, 2024",
  //   location: "Downtown Arena",
  //   image:
  //     "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //   description:
  //     "Celebrating urban culture with hip-hop and R&B performances in the heart of the city.",
  //   gallery: [
  //     "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //     "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  //     "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  //   ],
  //   videos: [
  //     "https://www.youtube.com/embed/hTWKbfoikeg",
  //     "https://www.youtube.com/embed/fJ9rUzIMcZQ",
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "Acoustic Nights",
  //   date: "November 24, 2024",
  //   location: "Heritage Hall",
  //   image:
  //     "https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  //   description:
  //     "An intimate evening with acoustic performances from talented singer-songwriters.",
  //   gallery: [
  //     "https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  //     "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  //     "https://images.unsplash.com/photo-1476136236990-838240be4859?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  //   ],
  //   videos: [
  //     "https://www.youtube.com/embed/A_MjCqQoLLA",
  //     "https://www.youtube.com/embed/1G4isv_Fylg",
  //   ],
  // },
];

const Showcase: React.FC = () => {
  const [openGallery, setOpenGallery] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("images");

  const handleOpenGallery = (eventId: number) => {
    setOpenGallery(eventId);
    setActiveTab("images");
  };

  const handleCloseGallery = () => {
    setOpenGallery(null);
  };

  const currentEvent = showcaseEvents.find((event) => event.id === openGallery);

  return (
    <section className="section bg-music-darker">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Successful <span className="text-[#FE3598]">Shows</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our most impactful events that have left lasting impressions on
            audiences and artists alike
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseEvents.map((event) => (
            <div
              key={event.id}
              className="bg-black rounded-lg overflow-hidden shadow-lg group transition-transform hover:-translate-y-1 duration-300 border border-gray-800"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-[#FE3598] text-white text-sm px-3 py-1 rounded">
                  {event.date}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{event.location}</p>
                <p className="text-gray-300 mb-6">{event.description}</p>
                <Button
                  variant="outline"
                  className="text-[#FE3598] border-[#FE3598] hover:bg-[#FE3598]/10 w-full"
                  onClick={() => handleOpenGallery(event.id)}
                >
                  View Gallery
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/all-shows">
            <Button className="bg-[#FE3598] hover:bg-[#FE3598]/90 text-white inline-flex items-center">
              View All Shows
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Gallery Dialog with Tabs for Images and Videos */}
      <Dialog open={openGallery !== null} onOpenChange={handleCloseGallery}>
        <DialogContent className="sm:max-w-4xl bg-black border-gray-800">
          {currentEvent && (
            <div className="py-4">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-white">
                {currentEvent.title}{" "}
                <span className="text-[#FE3598]">Gallery</span>
              </h3>

              <Tabs
                defaultValue="images"
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2 bg-gray-900 mb-6">
                  <TabsTrigger
                    value="images"
                    className="data-[state=active]:bg-[#FE3598] data-[state=active]:text-white"
                  >
                    Images
                  </TabsTrigger>
                  <TabsTrigger
                    value="videos"
                    className="data-[state=active]:bg-[#FE3598] data-[state=active]:text-white"
                  >
                    <Youtube className="mr-2 h-4 w-4" />
                    Videos
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="images">
                  <Carousel className="w-full max-w-3xl mx-auto">
                    <CarouselContent>
                      {currentEvent.gallery.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <div className="overflow-hidden rounded-lg h-64 sm:h-80 md:h-96">
                              <img
                                src={image}
                                alt={`${currentEvent.title} - Image ${
                                  index + 1
                                }`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/70 border-gray-700 text-white" />
                    <CarouselNext className="right-2 bg-black/50 hover:bg-black/70 border-gray-700 text-white" />
                  </Carousel>
                </TabsContent>

                <TabsContent value="videos">
                  <Carousel className="w-full max-w-3xl mx-auto">
                    <CarouselContent>
                      {currentEvent.videos.map((videoUrl, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <div className="overflow-hidden rounded-lg h-64 sm:h-80 md:h-96">
                              <iframe
                                src={videoUrl}
                                title={`${currentEvent.title} - Video ${
                                  index + 1
                                }`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                              />
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/70 border-gray-700 text-white" />
                    <CarouselNext className="right-2 bg-black/50 hover:bg-black/70 border-gray-700 text-white" />
                  </Carousel>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Showcase;

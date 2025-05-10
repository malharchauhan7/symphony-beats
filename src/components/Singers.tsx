import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Image, Youtube } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const IMAGES_DIR = "/public/images/singers";

const singers = [
  {
    id: 1,
    name: "Jignesh Chauhan",
    role: "Singer & Organiser",
    mainImage: `https://ik.imagekit.io/zh57cbpyz/images/singers/jigneshchauhan_XDBJjA2Gb.JPG?updatedAt=1746886131157`,
    gallery: [
      `https://ik.imagekit.io/zh57cbpyz/images/singers/jigneshchauhan_XDBJjA2Gb.JPG?updatedAt=1746886131157`,
      `https://ik.imagekit.io/zh57cbpyz/images/singers/jigneshchauhan-2.jpg?updatedAt=1746887977645`,
    ],
    videos: ["h89hNIkQVP4", ""],
  },
  {
    id: 2,
    name: "Hardik Soni",
    role: "Singer & Organiser",
    mainImage: `https://ik.imagekit.io/zh57cbpyz/images/singers/hardiksoni_R0dZ_1bvr.jpg?updatedAt=1746886125749`,
    gallery: [
      `https://ik.imagekit.io/zh57cbpyz/images/singers/hardiksoni_R0dZ_1bvr.jpg?updatedAt=1746886125749`,
      `https://ik.imagekit.io/zh57cbpyz/images/singers/hardiksoni-2.jpg?updatedAt=1746887977687`,
    ],
    videos: ["", ""],
  },
  {
    id: 3,
    name: "Raaj Pandit",
    role: "Singer & Musician",
    mainImage: `https://ik.imagekit.io/zh57cbpyz/images/singers/raajpandit_Iqj_7ElSjU.jpg?updatedAt=1746886125755`,
    gallery: [
      `https://ik.imagekit.io/zh57cbpyz/images/singers/raajpandit_Iqj_7ElSjU.jpg?updatedAt=1746886125755`,
      `https://ik.imagekit.io/zh57cbpyz/images/musicians/IMG_0307_Z4aRupIVuT.JPG?updatedAt=1746886131381`,
    ],
    videos: ["", ""],
  },
];

const Singers: React.FC = () => {
  const [selectedSinger, setSelectedSinger] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("images");

  const handleOpenGallery = (singerId: number) => {
    setSelectedSinger(singerId);
    setActiveTab("images");
  };

  const currentSinger = singers.find((s) => s.id === selectedSinger);

  return (
    <section className="py-24 bg-music-darker" id="singers">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-gradient">The Singers</span>
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {singers.map((singer) => (
              <CarouselItem
                key={singer.id}
                className="pl-4 md:basis-1/2 lg:basis-1/4"
              >
                <div className="relative group overflow-hidden rounded-md">
                  <div className="aspect-square overflow-hidden bg-music-gray/20">
                    <img
                      src={singer.mainImage}
                      alt={singer.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-xl font-bold text-white">
                      {singer.name}
                    </h3>
                    <p className="text-white/80 mb-3">{singer.role}</p>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-black/50 border-white/20 hover:bg-music-purple/20 hover:border-music-purple text-xs py-1 h-7"
                        onClick={() => handleOpenGallery(singer.id)}
                      >
                        <Image className="w-3 h-3 mr-1" />
                        <span>View Gallery</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static left-0 right-auto translate-y-0 mr-4" />
            <CarouselNext className="relative static right-0 left-auto translate-y-0" />
          </div>
        </Carousel>
      </div>

      {/* Gallery Dialog */}
      <Dialog
        open={selectedSinger !== null}
        onOpenChange={() => setSelectedSinger(null)}
      >
        <DialogContent className="sm:max-w-4xl bg-black border-gray-800">
          {currentSinger && (
            <div className="py-4">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-white">
                {currentSinger.name}{" "}
                <span className="text-music-purple">Gallery</span>
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
                    className="data-[state=active]:bg-music-purple data-[state=active]:text-white"
                  >
                    Images
                  </TabsTrigger>
                  <TabsTrigger
                    value="videos"
                    className="data-[state=active]:bg-music-purple data-[state=active]:text-white"
                  >
                    <Youtube className="mr-2 h-4 w-4" />
                    Videos
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="images">
                  <Carousel className="w-full max-w-3xl mx-auto">
                    <CarouselContent>
                      {currentSinger.gallery.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <div className="overflow-hidden rounded-lg h-64 sm:h-80 md:h-96">
                              <img
                                src={image}
                                alt={`${currentSinger.name} - Image ${
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
                      {currentSinger.videos.map((videoId, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <div className="overflow-hidden rounded-lg h-64 sm:h-80 md:h-96">
                              <iframe
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title={`${currentSinger.name} - Video ${
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

export default Singers;

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { cn } from "@/lib/utils";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      className={cn("w-full h-full object-cover", className)}
      wrapperClassName="w-full h-full"
      threshold={100}
      placeholderSrc={`${src}?tr=bl-30,q-50,w-20`}
    />
  );
};

export default LazyImage;

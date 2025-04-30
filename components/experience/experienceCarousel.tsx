import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import { FC, useState } from "react";
import Card from "../ui/card";
import { CarouselControls, CarouselCounter } from "./carouselControls";

interface ExperienceCarouselProps {
  images: string[];
  company: string;
}

export const ExperienceCarousel: FC<ExperienceCarouselProps> = ({
  images,
  company,
}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      position: "absolute" as const,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setImageIndex((prev) => {
      if (newDirection > 0) {
        return prev === images.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={imageIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.3 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <Image
              src={images[imageIndex]}
              alt={`${company} screenshot ${imageIndex + 1}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <CarouselControls
          onNext={() => paginate(1)}
          onPrev={() => paginate(-1)}
        />
        <CarouselCounter 
          current={imageIndex + 1} 
          total={images.length} 
        />
      </div>
    </Card>
  );
};

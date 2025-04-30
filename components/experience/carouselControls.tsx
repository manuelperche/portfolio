import { motion } from "framer-motion";
import { FC } from "react";

interface CarouselControlsProps {
  onNext: () => void;
  onPrev: () => void;
}

export const CarouselControls: FC<CarouselControlsProps> = ({ onNext, onPrev }) => (
  <div className="absolute inset-0 flex items-center justify-between p-4 z-10">
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onPrev}
      className="bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors"
      aria-label="Previous image"
    >
      ←
    </motion.button>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onNext}
      className="bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors"
      aria-label="Next image"
    >
      →
    </motion.button>
  </div>
);

interface CarouselCounterProps {
  current: number;
  total: number;
}

export const CarouselCounter: FC<CarouselCounterProps> = ({ current, total }) => (
  <div className="bg-background/80 absolute bottom-4 right-4 rounded-full px-3 py-1 text-sm z-10">
    {current} / {total}
  </div>
); 
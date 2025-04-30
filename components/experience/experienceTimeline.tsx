"use client";

import { cn } from "@/lib/utils";
import { FC, useRef } from "react";
import { MotionEffect } from "../ui/animations/motion-effect";
import { Experience } from "./types";
import { ExperienceContent } from "./experienceContent";
import { ExperienceCarousel } from "./experienceCarousel";
import experiences from "./data";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ExperienceCard: FC<{
  experience: Experience;
  index: number;
  isLeft: boolean;
}> = ({ experience, index, isLeft }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const blurValue = useTransform(scrollYProgress, [0, 0.5], [10, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ 
        opacity,
        y,
        filter: useTransform(blurValue, (value) => `blur(${value}px)`)
      }}
      className={cn(
        "relative mb-8 flex w-full flex-col gap-8 md:items-center md:flex-row",
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Content Side */}
      <div className="w-full md:w-1/2">
        <ExperienceContent experience={experience} />
      </div>

      {/* Image Side */}
      <div className="w-full md:w-1/2">
        {experience.images && (
          <ExperienceCarousel images={experience.images} company={experience.company} />
        )}
      </div>
    </motion.div>
  );
};

const ExperienceTimeline: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // First smooth the progress
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 25,
    stiffness: 150,
    restDelta: 0.001,
    bounce: 0
  });

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <MotionEffect
        fade
        blur="10px"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.15,
        }}
        inView
      >
        <h2 className="text-accent-foreground mb-16 text-center text-3xl font-bold">
          Work Experience
        </h2>
      </MotionEffect>

      <div className="relative" ref={containerRef}>
        {/* Timeline line with gradient and blur */}
        <motion.div 
          className="hidden md:block absolute left-1/2 h-full w-0.5 -translate-x-1/2"
          style={{
            filter: useTransform(smoothProgress, (value) => 
              value <= 0.1 ? `blur(${(1 - value * 10) * 10}px)` : "blur(0px)"
            ),
            opacity: useTransform(smoothProgress, [0, 0.1], [0.3, 1])
          }}
        >
          {/* Background line */}
          <div className="absolute inset-0 bg-muted/20" />
          
          {/* Animated color fill line */}
          <motion.div 
            className="absolute inset-0 origin-top"
            style={{ 
              scaleY: useTransform(smoothProgress, [0, 1], [0, 1], { clamp: true }),
              background: useTransform(
                smoothProgress,
                [0, 0.5, 1],
                [
                  "rgb(45, 212, 191)",
                  "rgb(167, 139, 250)",
                  "rgb(251, 113, 133)",
                ]
              )
            }}
          />
          
          {/* Animated Circle */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 size-4 rounded-full shadow-lg ring-2 ring-white dark:ring-black"
            style={{ 
              top: useTransform(smoothProgress, [0, 1], ["0%", "100%"], { clamp: true }),
              background: useTransform(
                smoothProgress,
                [0, 0.5, 1],
                [
                  "rgb(45, 212, 191)",
                  "rgb(167, 139, 250)",
                  "rgb(251, 113, 133)",
                ]
              )
            }}
          />
        </motion.div>

        {/* Experience Cards */}
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.company}
            experience={experience}
            index={index}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;

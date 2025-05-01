"use client";

import Heading from "@/components/heading/main";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FC, useRef } from "react";
import { MotionEffect } from "../ui/animations/motion-effect";
import MainTitle from "../ui/main-title";
import experiences from "./data";
import { ExperienceCarousel } from "./experienceCarousel";
import { ExperienceContent } from "./experienceContent";
import { Experience } from "./types";

const ExperienceCard: FC<{
  experience: Experience;
  index: number;
  isLeft: boolean;
}> = ({ experience, index, isLeft }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
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
        filter: useTransform(blurValue, (value) => `blur(${value}px)`),
      }}
      className={cn(
        "relative mb-8 flex w-full flex-col gap-8 md:flex-row md:items-center",
        isLeft ? "md:flex-row" : "md:flex-row-reverse",
      )}
    >
      {/* Content Side */}
      <div className="w-full md:w-1/2">
        <ExperienceContent experience={experience} />
      </div>

      {/* Image Side */}
      <div className="w-full md:w-1/2">
        {experience.images && (
          <ExperienceCarousel
            images={experience.images}
            company={experience.company}
          />
        )}
      </div>
    </motion.div>
  );
};

const ExperienceTimeline: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // First smooth the progress
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 25,
    stiffness: 150,
    restDelta: 0.001,
    bounce: 0,
  });

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <Heading variant="default">
        <MotionEffect
          fade
          blur="10px"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          inView
        >
          <MainTitle
            title="Experience"
            description="Some of the places I've worked at."
            className="mx-auto mt-6 mb-14 max-w-3xl px-4 sm:px-6 lg:px-8"
          />
        </MotionEffect>
      </Heading>

      <div className="relative" ref={containerRef}>
        {/* Timeline line with gradient and blur */}
        <motion.div
          className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 md:block"
          style={{
            filter: useTransform(smoothProgress, (value) =>
              value <= 0.1 ? `blur(${(1 - value * 10) * 10}px)` : "blur(0px)",
            ),
            opacity: useTransform(smoothProgress, [0, 0.1], [0.3, 1]),
          }}
        >
          {/* Background line */}
          <div className="bg-muted/20 absolute inset-0" />

          {/* Animated color fill line */}
          <motion.div
            className="absolute inset-0 origin-top"
            style={{
              scaleY: useTransform(smoothProgress, [0, 1], [0, 1], {
                clamp: true,
              }),
              background: useTransform(
                smoothProgress,
                [0, 0.5, 1],
                [
                  "rgb(45, 212, 191)",
                  "rgb(167, 139, 250)",
                  "rgb(251, 113, 133)",
                ],
              ),
            }}
          />

          {/* Animated Circle */}
          <motion.div
            className="absolute left-1/2 size-4 -translate-x-1/2 rounded-full shadow-lg ring-2 ring-white dark:ring-black"
            style={{
              top: useTransform(smoothProgress, [0, 1], ["0%", "100%"], {
                clamp: true,
              }),
              background: useTransform(
                smoothProgress,
                [0, 0.5, 1],
                [
                  "rgb(45, 212, 191)",
                  "rgb(167, 139, 250)",
                  "rgb(251, 113, 133)",
                ],
              ),
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

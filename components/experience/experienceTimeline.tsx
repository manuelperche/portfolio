"use client";

import { cn } from "@/lib/utils";
import { FC } from "react";
import { MotionEffect } from "../ui/animations/motion-effect";
import { Experience } from "./types";
import { ExperienceContent } from "./experienceContent";
import { ExperienceCarousel } from "./experienceCarousel";
import experiences from "./data";

const ExperienceCard: FC<{
  experience: Experience;
  index: number;
  isLeft: boolean;
}> = ({ experience, index, isLeft }) => (
  <MotionEffect
    fade
    blur="10px"
    transition={{
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.3 + index * 0.1,
    }}
    inView
  >
    <div className={cn(
      "relative mb-8 flex w-full flex-col gap-8 md:items-center md:flex-row",
      isLeft ? "md:flex-row" : "md:flex-row-reverse"
    )}>
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

      {/* Timeline dot - only visible on desktop */}
      <div className="hidden md:block bg-background border-border absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 z-10" />
    </div>
  </MotionEffect>
);

const ExperienceTimeline: FC = () => (
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

    <div className="relative">
      {/* Timeline line - only visible on desktop */}
      <div className="hidden md:block bg-border absolute left-1/2 h-full w-0.5 -translate-x-1/2" />

      <div className="relative">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            experience={exp}
            index={index}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceTimeline;

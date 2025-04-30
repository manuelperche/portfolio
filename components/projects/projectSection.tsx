import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Heading from "@/components/heading/main";
import ProjectItem from "@/components/project/main";
import { MotionEffect } from "@/components/ui/animations/motion-effect";
import MainTitle from "@/components/ui/main-title";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import { HEAD } from "@/config/seo";
import { getBaseUrl } from "@/lib/utils";
import { HeadType, ProjectType } from "@/types";
import { allProjects } from "content-collections";
import { Metadata } from "next";
import { Fragment } from "react";

export default async function ProjectSection() {
  const projects: ProjectType[] = allProjects.sort((a, b) => a.order - b.order);

  return (
    <Fragment>
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
            title="Projects"
            description="Check out some of the projects I've worked on."
            className="mx-auto mt-6 mb-14 max-w-3xl px-4 sm:px-6 lg:px-8"
          />
        </MotionEffect>
      </Heading>
      <div className="border-border bg-background relative min-h-[50vh] max-w-full border-t">
        <div className="relative mx-auto -mt-12 max-w-3xl px-4 sm:px-6 lg:px-8">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} className="mb-8" />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

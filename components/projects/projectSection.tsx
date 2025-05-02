import Heading from "@/components/heading/main";
import ProjectItemSkeleton from "@/components/project/main-skeleton";
import { MotionEffect } from "@/components/ui/animations/motion-effect";
import MainTitle from "@/components/ui/main-title";
import { ProjectType } from "@/types";
import { allProjects } from "content-collections";
import dynamic from "next/dynamic";
import { Fragment, Suspense } from "react";

const ProjectItem = dynamic(() => import("@/components/project/main"), {
  loading: () => <ProjectItemSkeleton />,
  ssr: true,
});

export default async function ProjectSection() {
  const projects: ProjectType[] = allProjects.sort((a, b) => a.order - b.order);

  return (
    <Fragment>
      <Heading variant="default">
        <MotionEffect
          fade
          blur="5px"
          transition={{
            duration: 0.3,
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
            <Suspense key={index} fallback={<ProjectItemSkeleton />}>
              <ProjectItem project={project} className="mb-8" index={index} />
            </Suspense>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

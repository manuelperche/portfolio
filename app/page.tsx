import AboutCard from "@/components/about/aboutCard";
import ExperienceTimeline from "@/components/experience/experienceTimeline";
import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Heading from "@/components/heading/main";
import Profile from "@/components/home/profile";
import ProjectSection from "@/components/projects/projectSection";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import { ProjectType } from "@/types";
import { allProjects } from "content-collections";
import { Fragment } from "react";

export default async function HomePage() {
  const projects: ProjectType[] = allProjects
    .filter((project) => project.featured === true)
    .sort((a, b) => a.order - b.order);

  return (
    <Fragment>
      <Header />
      <div id="home">
        <Heading variant="home">
          <Profile className="z-10 mt-8 mb-14" />
        </Heading>
      </div>

      <div id="about">
        <AboutCard />
      </div>

      <div id="projects">
        <ProjectSection />
      </div>

      <div id="experience">
        <ExperienceTimeline />
      </div>

      <Footer />
      <ScrollToTopButton />
    </Fragment>
  );
}

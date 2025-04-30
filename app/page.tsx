import AboutCard from "@/components/about/aboutCard";
import ExperienceTimeline from "@/components/experience/experienceTimeline";
import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Heading from "@/components/heading/main";
import Profile from "@/components/home/profile";
import ProjectItem from "@/components/project/main";
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
      <Heading variant="home">
        <Profile className="z-10 mt-8 mb-14" />
      </Heading>

      <AboutCard />

      <ExperienceTimeline />

      <Footer />
      <ScrollToTopButton />
    </Fragment>
  );
}

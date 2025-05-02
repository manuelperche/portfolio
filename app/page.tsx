import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import AboutCard from "@/components/about/aboutCard";
import Footer from "@/components/footer/main";
import Header from "@/components/header/main";
import Heading from "@/components/heading/main";
import Profile from "@/components/home/profile";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";
import { ProjectType } from "@/types";
import { allProjects } from "content-collections";
import { Fragment } from "react";

// Dynamic imports for components below the fold
const ProjectSection = dynamic(() => import("@/components/projects/projectSection"));
const ExperienceTimeline = dynamic(() => import("@/components/experience/experienceTimeline"));
const ContactForm = dynamic(() => import("@/components/contact/contact-form"));

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

        <AboutCard />
      </div>

      <Suspense fallback={<div className="min-h-[50vh]" />}>
        <div id="projects">
          <ProjectSection />
        </div>
      </Suspense>

      <Suspense fallback={<div className="min-h-[50vh]" />}>
        <div id="experience">
          <ExperienceTimeline />
        </div>
      </Suspense>

      <Suspense fallback={<div className="min-h-[50vh]" />}>
        <div id="contact">
          <ContactForm />
        </div>
      </Suspense>

      <Footer />
      <ScrollToTopButton />
    </Fragment>
  );
}

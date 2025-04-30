import { cn } from "@/lib/utils";
import { FC } from "react";
import { MotionEffect } from "../ui/animations/motion-effect";
import Card from "../ui/card";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Full Stack Developer",
    company: "3Sixty",
    period: "June 2024 — Present",
    description: "Employee relocation online marketplace.",
    responsibilities: [
      "Ship new features for the 3Sixty web app, which is a turborepo with multiple next.js micro-frontends.",
      "Fixing known bugs in the app detected by the QA team.",
      "Maintaining the codebase with good practices and refactoring old and deprecated code to be efficient and scalable for further developments.",
    ],
    achievements: [
      "Successfully added Storybook to the multiple frontend apps, which sped up the development of new components and streamlined the process of prototyping full features with the UI/UX team continuous feedback.",
      "Set up a global unit testing package, helping the team to adopt a TDD methodology, reducing the numbers of bugs shipped to production.",
      "Developed multiple features from a figma design.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Storybook", "TDD"],
  },
  {
    title: "Senior Full Stack Developer",
    company: "Ucrop.it",
    period: "September 2023 — June 2024",
    description: "Collaborative platform used by farmers to tell the story of their crops.",
    responsibilities: [
      "Designing and building a whole new QR code app used by companies and consumers to track the materials and ingredients used in their products.",
      "Build a scalable GraphQL API used by the QR platform to populate the app telling the crop stories.",
    ],
    achievements: [
      "Developed an intuitive administrative dashboard, facilitating data input for clients and enhancing the efficiency of QR code deployment processes.",
      "Successfully integrated a robust QR code API and database into the main application, optimizing data management and retrieval for enhanced user experience.",
      "Spearheaded the release of several dynamic websites, using static data initially and then transitioning to API-driven content consumption, enhancing scalability and flexibility in content management.",
      "Received positive feedback from clients and stakeholders on the user-friendly interface and functionality of the administrative dashboard, contributing to increased client satisfaction and retention.",
    ],
    technologies: ["React", "GraphQL", "Node.js", "QR Code API", "Database Design"],
  },
  {
    title: "Semi-Senior Web/Mobile Developer",
    company: "Epidata",
    period: "June 2021 — August 2023",
    description: "Assigned to project Galeno, an insurance company based on Argentina.",
    responsibilities: [
      "Building new functionalities for both a web and mobile applications made with ReactJS and React Native, supporting both iOS and Android devices compatibility.",
      "Collaborating with the UI/UX team to update existing parts of the application to a newer design.",
      "Responsible for deploying the web app and building the mobile application for production.",
    ],
    achievements: [
      "Identified the presence of many bugs in the iOS build of the application and proceeded to resolve and eliminate most of them, resulting in a smoother experience when using the app.",
      "Refactored old codebases, resulting in 25% performance increase of the website and mobile app using better practices and optimization techniques.",
      "Started implementing Unit Testing in both old and new functionalities, increasing code quality and reducing bugs by about 40% before they reached production.",
    ],
    technologies: ["React", "React Native", "iOS", "Android", "Unit Testing"],
  },
  {
    title: "Full Stack Web Developer",
    company: "321 Ignition",
    period: "June 2019 — June 2021",
    description: "Production grade application for car dealership websites. Made with the Static Site Generator CogearJS, built mainly with VueJS Components which later started migrating to a ReactJS and NextJS app.",
    responsibilities: [
      "Building an easily customizable and extensive template for multiple mobile-first websites.",
      "Developing new dealership websites from design to production with high attention to detail.",
      "Collaborating with product and design teams to implement new features on deployed websites.",
      "Deploying every site to production.",
    ],
    achievements: [
      "Led the support and client requests team of 10 people, upgrading and deploying existing websites to production with 99% client satisfaction.",
      "Built and released more than 30 websites to production using the customizable template and Static Site Generator.",
      "Started migrating the existing platform to a newer, more scalable and maintainable infrastructure made with newer technologies, leading to an increased performance and a faster workflow.",
    ],
    technologies: ["Vue.js", "React", "Next.js", "CogearJS", "Static Site Generation"],
  },
];

const ExperienceTimeline: FC = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-8">
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
        <h2 className="text-accent-foreground mb-8 text-center text-3xl font-bold">
          Work Experience
        </h2>
      </MotionEffect>

      <div className="relative">
        {/* Timeline line */}
        <div className="bg-border absolute left-1/2 h-full w-0.5 -translate-x-1/2" />

        {experiences.map((exp, index) => (
          <MotionEffect
            key={index}
            fade
            blur="10px"
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.3 + index * 0.1,
            }}
            inView
          >
            <Card className="relative mb-8 w-full max-w-2xl">
              {/* Timeline dot */}
              <div className="bg-background border-border absolute top-0 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2" />

              <div className="p-6">
                <div className="mb-4">
                  <p className="text-foreground text-sm font-medium">{exp.period}</p>
                  <h3 className="text-foreground text-xl font-bold">
                    {exp.title} -{" "}
                    <span className="text-accent-foreground font-bold hover:text-accent transition-colors">{exp.company}</span>
                  </h3>
                  <p className="text-foreground mt-2 italic">{exp.description}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-foreground mb-2 font-semibold">Key Responsibilities:</h4>
                  <ul className="text-foreground ml-4 list-disc space-y-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-foreground mb-2 font-semibold">Achievements:</h4>
                  <ul className="text-foreground ml-4 list-disc space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                {exp.technologies && (
                  <div>
                    <h4 className="text-foreground mb-3 font-semibold">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-accent/10 hover:bg-accent/20 text-foreground hover:text-accent-foreground rounded-md px-2.5 py-1 text-sm font-medium transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </MotionEffect>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;

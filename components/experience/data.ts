import { Experience } from "./types";

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
    images: [
      "/images/experience/sixty/sixty-1.jpg",
      "/images/experience/sixty/sixty-2.jpg",
    ],
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
    images: [
      "/images/experience/Ucropit/ucropit-1.jpg",
      "/images/experience/Ucropit/ucropit-2.jpg",
    ],
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
    images: [
      "/images/experience/Epidata/epidata-1.jpg",
      "/images/experience/Epidata/epidata-2.jpg",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company: "321 Ignition (Overfuel)",
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
    images: [
      "/images/experience/321Ignition/321ignition-1.jpg",
      "/images/experience/321Ignition/321ignition-2.jpg",
    ],
  },
];

export default experiences;
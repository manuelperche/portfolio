import { Experience } from "./types";

const experiences: Experience[] = [
  {
    title: "Senior Full Stack Engineer - AI Integrations",
    company: "Vettx",
    period: "June 2025 — Present",
    description: "Automotive lead management platform and private party vehicle acquisition system based in the USA.",
    responsibilities: [],
    achievements: [
      "Led the integration of AI/ML capabilities into the platform, including a vehicle listing classification model with image recognition, an AI dealer orchestrator that automates acquisition workflows, and an AI-powered search bar with a built-in assistant, enabling dealerships to evaluate inventory opportunities faster and with higher confidence.",
      "Architected real-time cross-platform communication infrastructure using Socket.IO with Azure Web PubSub, bridging the Vettx platform with external marketplaces like Facebook Marketplace. Implemented the WebSocket layer, enabling live outbound message delivery to third-party platforms, bidirectional conversation sync, and instant notifications at scale.",
      "Researched, designed, and initiated a shared UI component library strategy for the frontend ecosystem, defining extraction governance, cross-project distribution via GitHub Packages, TailwindCSS peer dependency architecture, and Vite Library Mode as the build tooling, establishing the foundation for incremental component reuse across the web and desktop applications with centralized Storybook documentation."
    ],
    technologies: ["React", "TypeScript", "Electron", "Tailwind CSS", "NestJS", "MySQL", "Socket.IO", "Python", "AI/ML Model Integration", "Storybook", "GitHub Packages", "Jest", "Node.js", "Redis", "Docker"],
    images: [
      "/images/experience/vettx/vettx-1.png",
      "/images/experience/vettx/vettx-2.png",
      "/images/experience/vettx/vettx-3.png",
    ],
  },
  {
    title: "Senior Full Stack Developer",
    company: "3Sixty",
    period: "June 2024 — June 2025",
    description: "Employee relocation online marketplace leveraging a turborepo architecture with multiple Next.js micro-frontends.",
    responsibilities: [
      "Shipped new features and enhancements for the 3Sixty web app.",
      "Resolved bugs identified by QA, ensuring a smooth user experience.",
      "Refactored legacy code for scalability and maintainability.",
      "Collaborated with UI/UX and product teams to deliver high-quality features."
    ],
    achievements: [
      "Integrated Storybook across all frontend apps, accelerating UI/UX prototyping and improving design consistency.",
      "Established a global unit testing package, promoting TDD and reducing production bugs by 30%.",
      "Developed and launched features directly from Figma designs, reducing time-to-market.",
      "Mentored junior developers, fostering a culture of code quality and best practices.",
      "Optimized CI/CD pipelines, resulting in faster deployments and improved developer productivity."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Python", "Django", "Material UI", "AWS", "Storybook", "TDD", "Docker", "CI/CD", "Git and Github"],
    images: [
      "/images/experience/sixty/sixty-1.jpg",
      "/images/experience/sixty/sixty-2.jpg",
    ],
  },
  {
    title: "Senior Full Stack Developer",
    company: "Ucrop.it",
    period: "September 2023 — June 2024",
    description: "Collaborative platform enabling farmers to track and share the story of their crops.",
    responsibilities: [
      "Designed and built a new QR code app for product traceability.",
      "Developed a scalable GraphQL API to power the QR platform.",
      "Enhanced the administrative dashboard for efficient client data input.",
      "Transitioned websites from static to API-driven content for scalability."
    ],
    achievements: [
      "Launched a robust QR code system for product traceability, printed on the product packaging.",
      "Streamlined QR code deployment, reducing client onboarding time by 40%.",
      "Received positive client feedback for intuitive dashboard design.",
      "Championed the adoption of modern backend technologies (Nest.js, GraphQL).",
      "Improved data management and retrieval, enhancing user experience."
    ],
    technologies: ["React", "Next.js", "React Native", "GraphQL", "Node.js", "Nest.js", "QR Code API", "PostgreSQL", "AWS", "Git and Github"],
    images: [
      "/images/experience/Ucropit/ucropit-1.jpg",
      "/images/experience/Ucropit/ucropit-2.jpg",
    ],
  },
  {
    title: "Semi-Senior Web/Mobile Developer",
    company: "Epidata",
    period: "June 2021 — August 2023",
    description: "Contributed to Galeno, an insurance company project, building and maintaining web and mobile applications for iOS and Android.",
    responsibilities: [
      "Developed new features for web and mobile apps using ReactJS and React Native.",
      "Collaborated with UI/UX to modernize application design.",
      "Managed deployments and production builds for web and mobile."
    ],
    achievements: [
      "Resolved critical iOS bugs, significantly improving app stability.",
      "Refactored codebases, boosting performance by 25%.",
      "Introduced unit testing, reducing pre-production bugs by 40%.",
      "Enhanced cross-platform compatibility, ensuring seamless user experience.",
      "Contributed to a culture of continuous improvement and code quality."
    ],
    technologies: ["React", "React Native", "iOS", "Android", "Material UI", "Unit Testing", "AWS"],
    images: [
      "/images/experience/Epidata/epidata-1.jpg",
      "/images/experience/Epidata/epidata-2.jpg",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company: "321 Ignition (Overfuel)",
    period: "June 2019 — June 2021",
    description: "Developed and maintained a production-grade platform for car dealership websites, migrating from Vue.js to React/Next.js.",
    responsibilities: [
      "Built customizable, mobile-first website templates.",
      "Developed new dealership websites from design to production.",
      "Collaborated with product and design teams to implement new features.",
      "Managed deployments and client support."
    ],
    achievements: [
      "Led a 10-person support team, maintaining 99% client satisfaction.",
      "Built and launched 30+ mobile-first websites using a scalable template.",
      "Initiated migration to a modern, maintainable React/Next.js infrastructure.",
      "Improved site performance and SEO, increasing organic traffic.",
      "Automated deployment processes, reducing manual errors and downtime."
    ],
    technologies: ["Vue.js", "React", "Next.js", "CogearJS", "Static Site Generation", "AWS", "Git and Github"],
    images: [
      "/images/experience/321Ignition/321ignition-1.jpg",
      "/images/experience/321Ignition/321ignition-2.jpg",
    ],
  },
];

export default experiences;
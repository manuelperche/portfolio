import { Experience } from "./types";
import Card from "../ui/card";
import { FC } from "react";

interface ExperienceContentProps {
  experience: Experience;
}

export const ExperienceContent: FC<ExperienceContentProps> = ({ experience }) => (
  <Card className="relative p-6">
    <div className="mb-4">
      <p className="text-foreground text-sm font-medium">{experience.period}</p>
      <h3 className="text-foreground text-xl font-bold">
        {experience.title} -{" "}
        <span className="text-accent-foreground font-bold hover:text-accent transition-colors">
          {experience.company}
        </span>
      </h3>
      <p className="text-foreground mt-2 italic">{experience.description}</p>
    </div>

    {/* <ExperienceSection title="Key Responsibilities:" items={experience.responsibilities} /> */}
    <ExperienceSection title="Achievements:" items={experience.achievements} />
    
    {experience.technologies && (
      <TechnologyTags technologies={experience.technologies} />
    )}
  </Card>
);

interface ExperienceSectionProps {
  title: string;
  items: string[];
}

const ExperienceSection: FC<ExperienceSectionProps> = ({ title, items }) => (
  <div className="mb-4">
    <h4 className="text-foreground mb-2 font-semibold">{title}</h4>
    <ul className="text-foreground ml-4 list-disc space-y-1">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

interface TechnologyTagsProps {
  technologies: string[];
}

const TechnologyTags: FC<TechnologyTagsProps> = ({ technologies }) => (
  <div>
    <h4 className="text-foreground mb-3 font-semibold">Technologies:</h4>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="bg-accent/10 hover:bg-accent/20 text-foreground hover:text-accent-foreground rounded-md px-2.5 py-1 text-sm font-medium transition-colors"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
); 
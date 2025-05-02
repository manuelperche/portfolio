import { FC } from "react";
import { Github } from "lucide-react";

interface GitHubIconProps {
  className?: string;
}

const GitHubIcon: FC<GitHubIconProps> = ({ className }) => {
  return <Github className={className} />;
};

export default GitHubIcon; 
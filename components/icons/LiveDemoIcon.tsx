import { FC } from "react";
import { ExternalLink } from "lucide-react";

interface LiveDemoIconProps {
  className?: string;
}

const LiveDemoIcon: FC<LiveDemoIconProps> = ({ className }) => {
  return <ExternalLink className={className} />;
};

export default LiveDemoIcon; 
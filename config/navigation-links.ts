import { truncateDescription } from "@/lib/seo";
import { NavigationLink, ProjectSubNavType } from "@/types";
import {
  UserIcon as AboutMeIcon,
  BriefcaseIcon as ExperienceIcon,
  HomeIcon,
  MailIcon,
  ArchiveIcon as ProjectsIcon,
} from "lucide-react";

const navigationLinks: NavigationLink[] = [
  {
    icon: HomeIcon,
    href: "/",
    label: "Home",
  },
  {
    icon: ProjectsIcon,
    href: "/projects",
    label: "Projects",
  },
  {
    icon: ExperienceIcon,
    href: "/experience",
    label: "Experience",
  },
  {
    icon: MailIcon,
    href: "/contact",
    label: "Contact",
  },
];

export default navigationLinks;

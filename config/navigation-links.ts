import { truncateDescription } from "@/lib/seo";
import { NavigationLink, ProjectSubNavType } from "@/types";
import {
  UserIcon as AboutMeIcon,
  HomeIcon,
  MailIcon,
  ArchiveIcon as ProjectsIcon,
  BriefcaseIcon as ExperienceIcon,
} from "lucide-react";

const navigationLinks: NavigationLink[] = [
  {
    icon: HomeIcon,
    href: "/",
    label: "Home",
  },
  {
    icon: AboutMeIcon,
    href: "/about",
    label: "About",
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

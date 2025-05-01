import {
  FaEnvelope as EmailIcon,
  FaFacebook as FacebookIcon,
  FaGithub as GitHubIcon,
  FaLinkedin as LinkedInIcon,
  FaXTwitter as XPlatformIcon,
} from "react-icons/fa6";
import { SocialType } from "../types";

const socialConfig: SocialType[] = [
  {
    href: "mailto:perchedev@gmail.com",
    icon: EmailIcon,
    label: "Email",
  },
  {
    href: "https://github.com/manuelperche",
    icon: GitHubIcon,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/manuelperche/",
    icon: LinkedInIcon,
    label: "LinkedIn",
  },
];

export default socialConfig;

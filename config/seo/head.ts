import { truncateDescription, truncateTitle } from "@/lib/seo";
import type { HeadType } from "@/types";

const HEAD: HeadType[] = [
  {
    page: "Home",
    title: truncateTitle("Manuel Perche | Full Stack Software Engineer"),
    description: truncateDescription(
      "I'm a full stack software engineer with a passion for building scalable and efficient web applications.",
    ),
    slug: "/",
  },
];

export default HEAD;

import Link from "next/link";
import React from "react";

interface TechLink {
  label: string;
  href: string;
}

const defaultClass =
  "text-muted-foreground hover:text-accent-foreground underline underline-offset-4 transition-colors";

const techLinks: TechLink[] = [
  { label: "Next.js", href: "https://nextjs.org/" },
  { label: "Tailwind CSS", href: "https://tailwindcss.com/" },
  { label: "Framer Motion", href: "https://www.framer.com/motion/" },
  { label: "Vercel", href: "https://vercel.com/" },
];

const TechStacks: React.FC = () => (
  <div className="mx-auto mt-4 max-w-xl flex-row items-center justify-center">
    <p className="text-foreground hidden text-center text-sm leading-5 sm:block">
      Built with{" "}
      <Link
        href={techLinks[0].href}
        target="_blank"
        rel="noopener noreferrer"
        className={defaultClass}
      >
        {techLinks[0].label}
      </Link>{" "}
      ,{" "}
      <Link
        href={techLinks[1].href}
        target="_blank"
        rel="noopener noreferrer"
        className={defaultClass}
      >
        {techLinks[1].label}
      </Link>{" "}
      and{" "}
      <Link
        href={techLinks[2].href}
        target="_blank"
        rel="noopener noreferrer"
        className={defaultClass}
      >
        {techLinks[2].label}
      </Link>{" "}
      , deployed with{" "}
      <Link
        href={techLinks[3].href}
        target="_blank"
        rel="noopener noreferrer"
        className={defaultClass}
      >
        {techLinks[3].label}
      </Link>
      .
    </p>
  </div>
);

export default TechStacks;

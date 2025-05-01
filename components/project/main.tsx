import Card from "@/components/ui/card";
import { MDXContent } from "@content-collections/mdx/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ProjectType } from "types";
import { FadeUp } from "../ui/animations/fade-up";
import { GitHubStarsButton } from "../ui/animations/github-stars-button";
import { MotionEffect } from "../ui/animations/motion-effect";
import BrowserWrapper from "./browser";
import Category from "./category";
import LinkButtons from "./link-buttons";
import { Button } from "@/components/ui/button";

interface Props {
  project: ProjectType;
  className?: string;
}

const renderMdxComponents = {
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p
      className="text-foreground my-2 text-lg leading-relaxed text-pretty"
      {...props}
    />
  ),
  a: (props: React.HTMLProps<HTMLAnchorElement>) => {
    const className =
      "text-foreground hover:text-accent-foreground underline underline-offset-4";
    if (props.href?.startsWith("/")) {
      return (
        <Link href={props.href} className={className} {...props}>
          {props.children}
        </Link>
      );
    }
    if (props.href?.startsWith("#")) {
      return (
        <a href={props.href} className={className} {...props}>
          {props.children}
        </a>
      );
    }
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {props.children}
      </a>
    );
  },
  strong: (props: React.HTMLProps<HTMLElement>) => (
    <strong className="text-foreground font-medium" {...props} />
  ),
};

const ProjectImages: FC<{ image: string; title: string }> = ({
  image,
  title,
}) => {
  const isGif = image.toLowerCase().endsWith('.gif');

  return (
    <>
      <Image
        className="z-1 mx-auto hidden max-w-full sm:block"
        src={`/images/projects/${image}`}
        alt={`Screenshot of ${title}`}
        width={1024}
        height={300}
        priority
        quality={85}
        unoptimized={isGif}
        placeholder="blur"
        blurDataURL={`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAElYAABYWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTY3LjIyOUFTRjo/Tj4yMkhiSk46NjVBQVRAQkBAQEBAQED/2wBDAR4eHh0aHTQaGjRAOC40QEA0QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQED/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=`}
        sizes="(max-width: 640px) 100vw, 1024px"
      />
      <Image
        className="z-1 mx-auto block max-w-full sm:hidden"
        src={`/images/projects/${isGif ? image : `mobile/${image}`}`}
        alt={`Screenshot of ${title} - Mobile view`}
        width={512}
        height={384}
        quality={85}
        unoptimized={isGif}
        placeholder="blur"
        blurDataURL={`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAElYAABYWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTY3LjIyOUFTRjo/Tj4yMkhiSk46NjVBQVRAQkBAQEBAQED/2wBDAR4eHh0aHTQaGjRAOC40QEA0QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQED/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=`}
        sizes="(max-width: 640px) 512px, 100vw"
      />
    </>
  );
};

const ProjectItem: FC<Props> = ({ project, className }) => {
  return (
    <FadeUp delay={0.6} duration={0.3}>
      <Card className={className}>
        <MotionEffect
          fade
          blur="10px"
          delay={0.5}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          inView
        >
          <article className="z-1 mx-auto mt-4 gap-x-4 px-8 py-4 pb-3 text-center sm:px-10 sm:pb-0">
            <h2 className="text-accent-foreground text-3xl font-bold tracking-tight text-pretty sm:text-4xl">
              {project.title}
            </h2>

            <div className="mx-auto mt-4 flex justify-center">
              <Category
                category={project.category}
                className="text-md text-foreground font-semibold"
              />
            </div>

            {/* Description */}
            <div className="prose prose-sm dark:prose-invert mx-auto mt-4">
              <MDXContent code={project.mdx} components={renderMdxComponents} />
            </div>

            <div className="mx-auto mt-4 flex w-fit max-w-xs gap-2">
              {project.githubUrl && (
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary text-primary-foreground flex h-10 items-center gap-2 px-4 py-2 text-sm font-medium cursor-pointer">
                    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    GitHub Code
                  </Button>
                </Link>
              )}
              {(project.webUrl || project.youtubeUrl) && (
                <Link 
                  href={project.webUrl || project.youtubeUrl || ""} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="hover:ring-border cursor-pointer overflow-hidden rounded-lg h-10 px-4 py-2 text-sm font-medium [--liquid-button-color:var(--accent)] [background:_linear-gradient(var(--liquid-button-color)_0_0)_no-repeat_calc(200%-var(--liquid-button-fill,0%))_100%/200%_var(--liquid-button-fill,0.2em)] [transition:_background_0.3s_var(--liquid-button-delay,0s),_color_0.3s_var(--liquid-button-delay,0s),_background-position_0.3s_calc(0.3s_-_var(--liquid-button-delay,0s))] hover:ring-2 hover:[--liquid-button-delay:0.3s] hover:[--liquid-button-fill:100%]"
                  >
                    <svg className="size-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </Button>
                </Link>
              )}
            </div>
          </article>
        </MotionEffect>
        <div className="mt-6 px-8">
          <Link
            href={project.webUrl || project.youtubeUrl || ""}
            target="_blank"
            className="group"
          >
            <BrowserWrapper>
              <ProjectImages image={project.image} title={project.title} />
            </BrowserWrapper>
          </Link>
        </div>
      </Card>
    </FadeUp>
  );
};

export default ProjectItem;

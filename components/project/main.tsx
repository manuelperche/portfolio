import GitHubIcon from "@/components/icons/GitHubIcon";
import LiveDemoIcon from "@/components/icons/LiveDemoIcon";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { MDXContent } from "@content-collections/mdx/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ProjectType } from "types";
import { FadeUp } from "../ui/animations/fade-up";
import { MotionEffect } from "../ui/animations/motion-effect";
import BrowserWrapper from "./browser";
import Category from "./category";

interface Props {
  project: ProjectType;
  className?: string;
  index: number;
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

const ProjectImages: FC<{ image: string; title: string; index: number }> = ({
  image,
  title,
  index,
}) => {
  const isGif = image.toLowerCase().endsWith(".gif");

  return (
    <>
      <Image
        className="z-1 mx-auto hidden max-w-full sm:block"
        src={`/images/projects/${image}`}
        alt={`Screenshot of ${title}`}
        width={800}
        height={450}
        priority={index < 2}
        loading={index < 2 ? "eager" : "lazy"}
        quality={85}
        unoptimized={isGif}
        placeholder="blur"
        blurDataURL={`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAElYAABYWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTY3LjIyOUFTRjo/Tj4yMkhiSk46NjVBQVRAQkBAQEBAQED/2wBDAR4eHh0aHTQaGjRAOC40QEA0QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQED/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
      />
      <Image
        className="z-1 mx-auto block max-w-full sm:hidden"
        src={`/images/projects/${isGif ? image : `mobile/${image}`}`}
        alt={`Screenshot of ${title} - Mobile view`}
        width={400}
        height={300}
        priority={index < 2}
        loading={index < 2 ? "eager" : "lazy"}
        quality={85}
        unoptimized={isGif}
        placeholder="blur"
        blurDataURL={`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ZXh0AAAAAElYAABYWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTY3LjIyOUFTRjo/Tj4yMkhiSk46NjVBQVRAQkBAQEBAQED/2wBDAR4eHh0aHTQaGjRAOC40QEA0QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQED/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
      />
    </>
  );
};

const ProjectItem: FC<Props> = ({ project, className, index }) => {
  return (
    <FadeUp delay={0.2} duration={0.2}>
      <Card className={className}>
        <MotionEffect
          fade
          blur="5px"
          delay={0.1}
          transition={{
            duration: 0.2,
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
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary text-primary-foreground flex h-10 cursor-pointer items-center gap-2 px-4 py-2 text-sm font-medium">
                    <GitHubIcon className="size-[18px]" />
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
                    className="hover:ring-border h-10 cursor-pointer overflow-hidden rounded-lg px-4 py-2 text-sm font-medium [--liquid-button-color:var(--accent)] [background:_linear-gradient(var(--liquid-button-color)_0_0)_no-repeat_calc(200%-var(--liquid-button-fill,0%))_100%/200%_var(--liquid-button-fill,0.2em)] [transition:_background_0.3s_var(--liquid-button-delay,0s),_color_0.3s_var(--liquid-button-delay,0s),_background-position_0.3s_calc(0.3s_-_var(--liquid-button-delay,0s))] hover:ring-2 hover:[--liquid-button-delay:0.3s] hover:[--liquid-button-fill:100%]"
                  >
                    <LiveDemoIcon className="size-[18px]" />
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
              <ProjectImages
                image={project.image}
                title={project.title}
                index={index}
              />
            </BrowserWrapper>
          </Link>
        </div>
      </Card>
    </FadeUp>
  );
};

export default ProjectItem;

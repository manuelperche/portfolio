'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";

const GitHubIcon = dynamic(() => import('../icons/GitHubIcon'), { ssr: false });
const LiveDemoIcon = dynamic(() => import('../icons/LiveDemoIcon'), { ssr: false });

interface ProjectButtonsProps {
  githubUrl?: string;
  demoUrl?: string;
}

export default function ProjectButtons({ githubUrl, demoUrl }: ProjectButtonsProps) {
  return (
    <div className="mx-auto mt-4 flex w-fit max-w-xs gap-2">
      {githubUrl && (
        <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Button className="bg-primary text-primary-foreground flex h-10 items-center gap-2 px-4 py-2 text-sm font-medium cursor-pointer">
            <GitHubIcon className="size-[18px]" />
            GitHub Code
          </Button>
        </Link>
      )}
      {demoUrl && (
        <Link 
          href={demoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="hover:ring-border cursor-pointer overflow-hidden rounded-lg h-10 px-4 py-2 text-sm font-medium [--liquid-button-color:var(--accent)] [background:_linear-gradient(var(--liquid-button-color)_0_0)_no-repeat_calc(200%-var(--liquid-button-fill,0%))_100%/200%_var(--liquid-button-fill,0.2em)] [transition:_background_0.3s_var(--liquid-button-delay,0s),_color_0.3s_var(--liquid-button-delay,0s),_background-position_0.3s_calc(0.3s_-_var(--liquid-button-delay,0s))] hover:ring-2 hover:[--liquid-button-delay:0.3s] hover:[--liquid-button-fill:100%]"
          >
            <LiveDemoIcon className="size-[18px]" />
            Live Demo
          </Button>
        </Link>
      )}
    </div>
  );
} 
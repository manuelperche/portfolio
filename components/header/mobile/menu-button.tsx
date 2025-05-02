"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import navigationLinks from "@/config/navigation-links";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { FC, memo, useCallback, useState } from "react";
import SubNavigationItem from "./sub-navigation-item";

interface Props {
  currentPath: string;
  className?: string;
}

const extractActivePath = (path: string): string => {
  return path.split("/")[1] ? `/${path.split("/")[1]}` : path;
};

const MenuButton: FC<Props> = memo(({ currentPath, className }) => {
  const activePath = extractActivePath(currentPath);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close the menu after clicking
    }
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  }, []);

  const handleNavigation = useCallback((href: string) => {
    // Handle sections that need scroll behavior
    if (['/projects', '/experience', '/', '/contact'].includes(href)) {
      const sectionId = href === '/' ? 'home' : href.slice(1);
      scrollToSection(sectionId);
      return;
    }
    // Handle other navigation normally
    window.location.href = href;
  }, [scrollToSection]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          variant="ghost"
          size="icon"
          className={cn("group hover:bg-accent rounded-full", className)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? (
            <X className="text-foreground group-hover:text-accent-foreground size-6" />
          ) : (
            <Menu className="text-foreground group-hover:text-accent-foreground size-6" />
          )}
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="z-1 mt-10"
        onKeyDown={handleKeyDown}
        id="mobile-navigation"
      >
        <VisuallyHidden>
          <SheetTitle>Mobile Navigation</SheetTitle>
        </VisuallyHidden>

        <div className="bg-background">
          <ScrollArea className="h-[calc(100vh-10rem)]">
            <Accordion type="single" collapsible>
              {navigationLinks.map((menuItem) => {
                const isActive = activePath === menuItem.href;
                if (menuItem.href === "/about" && menuItem.subNavigationLinks) {
                  return (
                    <AccordionItem key={menuItem.href} value={menuItem.href}>
                      <AccordionTrigger
                        className={cn(
                          "group inline-flex w-full gap-2 px-6 py-4",
                          {
                            "bg-accent/50 shadow-xs": isActive,
                            "hover:bg-accent hover:shadow-xs": !isActive,
                          },
                        )}
                        aria-label={`${menuItem.label} menu`}
                      >
                        <span className="text-foreground group-hover:text-accent-foreground">
                          {menuItem.label}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="divide-border divide-y">
                          {menuItem.href === "/about" &&
                            menuItem.subNavigationLinks.map((subItem) => (
                              <li key={subItem.href}>
                                <SubNavigationItem
                                  href={subItem.href}
                                  onClick={() => handleNavigation(subItem.href)}
                                  label={subItem.label ?? ""}
                                  description={subItem.description ?? ""}
                                  icon={
                                    subItem.icon
                                      ? React.createElement(subItem.icon)
                                      : null
                                  }
                                  className="group flex w-full gap-2 px-6 py-4"
                                  isLoading={isLoading}
                                />
                              </li>
                            ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  );
                }
                return (
                  <li key={menuItem.href} className="list-none">
                    <button
                      onClick={() => handleNavigation(menuItem.href)}
                      className={cn(
                        "group border-border inline-flex w-full gap-2 border-b px-6 py-4",
                        {
                          "bg-accent/50 shadow-xs": isActive,
                          "hover:bg-accent hover:shadow-xs": !isActive,
                        }
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span className="text-foreground group-hover:text-accent-foreground font-medium">
                        {menuItem.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </Accordion>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
});

MenuButton.displayName = "MenuButton";

export default MenuButton;

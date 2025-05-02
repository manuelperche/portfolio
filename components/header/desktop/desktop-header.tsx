import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Skeleton } from "@/components/ui/skeleton";
import navigationLinks from "@/config/navigation-links";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, memo, Suspense, useCallback, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeSwitcher } from "../shared/theme-switcher";
import LogoButton from "./logo";
import NavigationAbout from "./navigations/about/navigation-about";
import NavigationBlog from "./navigations/blog/navigation-blog";
import NavigationProjects from "./navigations/projects/navigation-projects";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  activePath: string;
}

// Reusable styles
const navItemStyles = {
  base: "nav-base",
  active: "bg-accent"
};

const NavigationContentFallback = () => (
  <div className="w-[540px] p-4">
    <Skeleton className="h-24 w-full" />
  </div>
);

const NavigationErrorFallback = () => (
  <div className="w-[540px] p-4 text-center text-sm text-red-500">
    Failed to load navigation content. Please try again.
  </div>
);

const DesktopHeader: FC<Props> = memo(({ activePath }) => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, first navigate to home
    if (pathname !== '/') {
      router.push('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: sectionId === 'home' ? 0 : offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      // If we're already on the home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: sectionId === 'home' ? 0 : offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const isActive = useCallback((path: string) => {
    if (path === "/") {
      // Only check pathname match for SSR
      return activePath === "/";
    }
    if (path === "/blog") return activePath.startsWith("/blog");
    return activePath === path;
  }, [activePath]);

  const getNavItemClassName = useCallback(
    (path: string) =>
      cn(
        navigationMenuTriggerStyle(),
        "text-md font-semibold transition-colors duration-200",
        isActive(path) ? navItemStyles.active : navItemStyles.base
      ),
    [isActive],
  );

  useEffect(() => {
    const handleScroll = () => {
      const homeButton = document.querySelector('[data-section="/"]');
      if (homeButton) {
        const isAtTop = window.scrollY < 100;
        if (isAtTop) {
          homeButton.classList.add(navItemStyles.active);
          homeButton.classList.remove(navItemStyles.base);
        } else {
          homeButton.classList.remove(navItemStyles.active);
          homeButton.classList.add(navItemStyles.base);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavigationItem = useCallback(
    (link: (typeof navigationLinks)[0]) => {
      const isDropdown =
        link.subNavigationLinks && link.subNavigationLinks.length > 0;

      // Handle sections that need scroll behavior
      if (['/projects', '/experience', '/', '/contact'].includes(link.href)) {
        const sectionId = link.href === '/' ? 'home' : link.href.slice(1);
        return (
          <NavigationMenuItem key={link.href}>
            <button
              onClick={() => scrollToSection(sectionId)}
              data-section={link.href}
              className={getNavItemClassName(link.href)}
            >
              <div className="flex items-center gap-1">{link.label}</div>
            </button>
          </NavigationMenuItem>
        );
      }

      // Handle dropdown menus and external links as before
      if (isDropdown) {
        return (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuTrigger
              aria-current={isActive(link.href) ? "page" : undefined}
              className={getNavItemClassName(link.href)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1"
                prefetch
              >
                {link.label}
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ErrorBoundary FallbackComponent={NavigationErrorFallback}>
                <Suspense fallback={<NavigationContentFallback />}>
                  {link.label === "About" && <NavigationAbout />}
                  {link.label === "Blog" && <NavigationBlog />}
                  {link.label === "Projects" && <NavigationProjects />}
                </Suspense>
              </ErrorBoundary>
            </NavigationMenuContent>
          </NavigationMenuItem>
        );
      }

      return (
        <NavigationMenuItem key={link.href}>
          <NavigationMenuLink
            href={link.href}
            aria-current={isActive(link.href) ? "page" : undefined}
            className={getNavItemClassName(link.href)}
          >
            <div className="flex items-center gap-1">{link.label}</div>
          </NavigationMenuLink>
        </NavigationMenuItem>
      );
    },
    [isActive, getNavItemClassName],
  );

  return (
    <NavigationMenu className="mx-auto hidden w-full max-w-5xl md:block">
      <div className="flex h-18 w-full items-center justify-between">
        <div className="flex flex-1 justify-start">
          <LogoButton />
        </div>
        <NavigationMenuList
          className="flex items-center gap-5"
          aria-label="Main navigation"
        >
          {navigationLinks.map(renderNavigationItem)}
        </NavigationMenuList>

        <div className="flex flex-1 justify-end">
          <ThemeSwitcher />
        </div>
      </div>
    </NavigationMenu>
  );
});

DesktopHeader.displayName = "DesktopHeader";

export default DesktopHeader;

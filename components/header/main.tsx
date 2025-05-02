"use client";

import { usePathname } from "next/navigation";
import { FC } from "react";
import DesktopHeader from "./desktop/desktop-header";
import MobileHeader from "./mobile/mobile-header";

const Header: FC = () => {
  const path = usePathname();

  return (
    <div className="bg-background border-border/50 sticky inset-x-0 top-0 z-50 h-auto items-center border-b">
      <div className="relative mx-auto w-full px-3 lg:px-4 xl:px-0">
        <DesktopHeader activePath={path} />
        <MobileHeader currentPath={path} />
      </div>
    </div>
  );
};

export default Header;

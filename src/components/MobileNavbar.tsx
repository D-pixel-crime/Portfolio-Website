"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Content, asLink } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";

interface sidebarProps {
  openSidebar: boolean;
  setOpenSidebar: (openSidebar: boolean) => void;
  commonSettings: Content.CommonSettingsDocument;
}

const MobileNavbar = ({
  openSidebar,
  setOpenSidebar,
  commonSettings,
}: sidebarProps) => {
  const pathName = usePathname();

  return (
    <div
      className={`sm: hidden ${!openSidebar ? "-translate-x-[120%]" : ""} flex-center h-full fixed top-0 left-0 w-2/3 bg-slate-800 z-[100]`}
      style={{ transition: "all 1s", boxShadow: "2px 0px 20px 0px black" }}
    >
      <div className="flex justify-between items-center h-1/2 flex-col gap-8 w-full px-4">
        <div className="flex justify-end w-full mb-4">
          <Icon
            icon="maki:cross"
            className="size-7 text-red-500"
            onClick={() => setOpenSidebar(false)}
          />
        </div>
        {commonSettings.data.nav_item.map(({ label, link }, index) => (
          <div
            key={index}
            className={`${pathName.includes(asLink(link) as string) ? "border-b-4 border-violet-500" : "hover:text-violet-400 hover:scale-105 transition"} text-2xl`}
          >
            <PrismicNextLink
              field={link}
              className={`${pathName.includes(asLink(link) as string) && "cursor-default"}`}
              onClick={() => setOpenSidebar(false)}
            >
              {label}
            </PrismicNextLink>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MobileNavbar;

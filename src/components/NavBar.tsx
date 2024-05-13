"use client";

import { Content, asLink } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = ({
  commonSettings,
}: {
  commonSettings: Content.CommonSettingsDocument;
}) => {
  const pathName = usePathname();

  return (
    <header className="top-0 z-50 mx-auto max-w-7xl md:sticky text-xl border-b-2 border-slate-700 py-7 bg-slate-800 shadow-2xl shadow-black">
      <nav className="mx-5">
        <ul className="flex justify-between">
          <li
            className={`${pathName === "/" ? "border-b-4 border-violet-500" : "hover:scale-105 transition hover:text-violet-400"}`}
          >
            <Link href="/" aria-label="Home Page">
              {commonSettings.data.name}
            </Link>
          </li>
          <div className="flex gap-5">
            {commonSettings.data.nav_item.map(({ label, link }, index) => (
              <li
                key={index}
                className={`${pathName.includes(asLink(link) as string) ? "border-b-4 border-violet-500" : "hover:text-violet-400 hover:scale-105 transition"}`}
              >
                <PrismicNextLink
                  field={link}
                  className={`${pathName.includes(asLink(link) as string) && "cursor-default"}`}
                >
                  {label}
                </PrismicNextLink>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;

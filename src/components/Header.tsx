import React from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";

const Header = async () => {
  const client = createClient();
  const commonSettings = await client.getSingle("common_settings");

  return (
    <header className="top-0 z-50 mx-auto max-w-7xl md:sticky">
      <nav>
        <ul>
          <li>
            <Link href="/" aria-label="Home Page">
              {commonSettings.data.name}
            </Link>
          </li>
          {commonSettings.data.nav_item.map(({ label, link }, index) => (
            <li key={index}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;

"use client";

import { createClient } from "@/prismicio";
import { Icon } from "@iconify/react/dist/iconify.js";
import { PrismicNextLink } from "@prismicio/next";
import { useState } from "react";

const Footer = async () => {
  const client = createClient();
  const footer = await client.getSingle("footer");
  const [isMobileView, setIsMobileView] = useState(false);

  return (
    <footer
      className={`max-sm:translate-x-[80%] fixed right-0 top-[50%] translate-y-[-50%] z-50 px-3 rounded-l-xl block py-4 bg-slate-800`}
      style={{ boxShadow: "-4px 1px 20px black" }}
    >
      <div>
        <ul className="flex gap-4 flex-col justify-evenly items-center">
          {footer.data.footer_links.map(({ label, url, icon }, index) => {
            return (
              <li key={index - 4738274}>
                <PrismicNextLink
                  field={url}
                  className="flex items-center max-sm:gap-1"
                >
                  <div>
                    <Icon icon={icon!} className="sm:size-8 size-6" />
                  </div>
                  {/* <div className="sm:hidden">{label}</div> */}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;

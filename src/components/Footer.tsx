"use client";

import { createClient } from "@/prismicio";
import { Icon } from "@iconify/react/dist/iconify.js";
import { PrismicNextLink } from "@prismicio/next";

const Footer = async () => {
  const client = createClient();
  const footer = await client.getSingle("footer");

  return (
    <footer className="bottom-0 z-50 border-t-2 border-slate-700 mt-10 mx-5 md:px-10 block py-10">
      <div>
        <ul className="flex justify-evenly items-center max-sm:justify-between">
          {footer.data.footer_links.map(({ label, url, icon }, index) => {
            return (
              <li key={index - 4738274}>
                <PrismicNextLink
                  field={url}
                  className="flex gap-1 items-center"
                >
                  <div>
                    <Icon icon={icon!} className="sm:size-8" />
                  </div>
                  <div className="max-sm:text-xs">/{label}</div>
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

"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

const SocialLinks = ({ footer }: { footer: Content.FooterDocument }) => {
  return (
    <footer
      className={`sm:fixed social-links sm:right-0 sm:top-[50%] sm:translate-y-[-50%] z-50 sm:px-3 sm:rounded-l-xl block py-4 max-sm:py-7 max-sm:border-t-2 border-slate-700 sm:bg-slate-800 max-sm:bottom-0`}
    >
      <div>
        <ul className="flex gap-4 sm:flex-col justify-evenly items-center">
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
                  <div className="sm:hidden text-xs">/{label}</div>
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};
export default SocialLinks;

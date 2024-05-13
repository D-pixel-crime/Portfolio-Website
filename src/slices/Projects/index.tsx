"use client";

import CommonBounded from "@/components/CommonBounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import { SquareArrowOutUpRight, SquareArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  const eachProjectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.utils.toArray(".each-project").forEach((project: any, index) => {
      gsap.fromTo(
        project,
        {
          opacity: 0,
          x: index % 2 === 0 ? 200 : -200,
        },
        {
          delay: 0.5,
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "power3.inOut",
        }
      );
    });
  }, []);

  return (
    <CommonBounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="min-[770px]:grid min-[770px]:grid-cols-[2fr,1fr] items-center mb-20">
        <div className="col-start-1">
          <Heading size="xl" className="mb-8">
            {slice.primary.heading}
          </Heading>
          <div className="prose prose-xl prose-invert mb-10">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
        <PrismicNextImage
          field={slice.primary.fallback_item_image}
          className="sm:col-start-2 max-sm:hidden rounded-xl opacity-80"
        />
      </div>
      <div className="overflow-hidden">
        {slice.items.map(
          (
            {
              project_title,
              project_description,
              project_link,
              project_screenshot,
            },
            index
          ) => {
            return (
              <div
                className="each-project bg-slate-900 opacity-0 relative overflow-hidden my-5 py-5"
                ref={eachProjectRef}
                key={index}
                style={{
                  backgroundBlendMode: `overlay`,
                }}
              >
                <PrismicNextImage
                  field={project_screenshot}
                  className="absolute top-0 left-0 w-full opacity-60 h-auto z-0 blur-sm"
                />
                <div className="z-10 relative flex flex-row max-sm:flex-col max-sm:gap-4 items-center bg-cover bg-no-repeat justify-between py-7 px-2">
                  <div className="flex flex-col gap-3 max-sm:items-center">
                    <Heading size="sm">{project_title}</Heading>
                    <div className="prose prose-lg prose-invert text-white max-sm:text-justify">
                      <PrismicRichText field={project_description} />
                    </div>
                  </div>
                  <PrismicNextLink
                    field={project_link}
                    className="flex-center max-sm:text-yellow-500 gap-2 hover:scale-105 transition hover:text-yellow-400 cursor-pointer"
                  >
                    {slice.primary.view_project}
                    <SquareArrowOutUpRight />
                  </PrismicNextLink>
                </div>
              </div>
            );
          }
        )}
      </div>
    </CommonBounded>
  );
};

export default Projects;

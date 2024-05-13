"use client";

import CommonBounded from "@/components/CommonBounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Props for `Experience`.
 */
export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

/**
 * Component for "Experience" Slices.
 */
const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top center",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      gsap.utils
        .toArray(".each-experience")
        .forEach((experience: any, index) => {
          tl.fromTo(
            experience,
            {
              opacity: 0,
              scale: 0.5,
              y: index % 2 === 0 ? 200 : -200,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 2,
              ease: "power4.out",
            },
            index * 1
          );
        });
    }, experienceRef);

    return () => context.revert();
  });

  return (
    <CommonBounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="border-t-2 border-slate-700 mt-16 md:mx-4"
      ref={experienceRef}
    >
      <Heading size="lg">{slice.primary.heading}</Heading>
      <div className="grid grid-cols-1 min-[660px]:grid-cols-2 gap-2 px-2 mt-16 mb-8">
        {slice.items.map(({ role, company, duration, location }, index) => {
          return (
            <div
              key={index * 500}
              className="each-experience border-2 border-slate-600 rounded-xl bg-slate-800 py-8 px-5 flex items-center justify-between shadow-2xl shadow-black max-sm:px-2"
            >
              <div className="flex flex-col gap-2">
                <div className="sm:text-2xl text-xl text-slate-300">{role}</div>
                <div className="text-slate-400">
                  {company} ({location})
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 max-sm:text-xs">
                <em>{duration}</em>
              </div>
            </div>
          );
        })}
      </div>
    </CommonBounded>
  );
};

export default Experience;

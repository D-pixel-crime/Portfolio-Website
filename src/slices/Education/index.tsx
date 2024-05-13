"use client";

import CommonBounded from "@/components/CommonBounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Props for `Education`.
 */
export type EducationProps = SliceComponentProps<Content.EducationSlice>;

/**
 * Component for "Education" Slices.
 */
const Education = ({ slice }: EducationProps): JSX.Element => {
  const cardsRef = useRef(null);

  useEffect(() => {
    let context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top bottom",
          end: "center center",
          scrub: 1,
        },
      });

      gsap.utils.toArray(".eachCard").forEach((card: any, index) => {
        tl.fromTo(
          card,
          {
            opacity: 0,
            scale: index % 2 === 0 ? 0.5 : 1.5,
            x: index % 2 === 0 ? 200 : -200,
            y: index % 2 === 0 ? 200 : -200,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 3,
            x: 0,
            y: 0,
            ease: "power3.inOut",
          },
          index * 2
        ); // Adjust the delay for staggering effect
      });
    }, cardsRef);

    return () => context.revert();
  });

  return (
    <CommonBounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="border-b-2 border-slate-700 md:mx-5 overflow-hidden"
    >
      <Heading size="lg" className="mb-12">
        {slice.primary.heading}
      </Heading>
      <div ref={cardsRef}>
        {slice.items.map(
          (
            {
              institute_type,
              institute_name,
              duration_or_time,
              score,
              course_or_degree,
            },
            index
          ) => {
            return (
              <div
                className="eachCard flex justify-between border-2 rounded-lg my-8 py-6 px-4 max-sm:px-1 border-slate-700 bg-slate-800 shadow-2xl shadow-black"
                key={index + 500}
              >
                <div className="flex flex-col">
                  <p className="text-2xl max-sm:text-lg text-slate-300">
                    {institute_name}
                  </p>
                  <p className="text-slate-400 max-sm:text-sm">
                    <em>
                      {course_or_degree} ({score})
                    </em>
                  </p>
                </div>
                <div className="flex flex-col items-end max-sm:text-xs">
                  <p className="text-slate-300">{institute_type}</p>
                  <p className="text-slate-400">
                    <em>{duration_or_time}</em>
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </CommonBounded>
  );
};

export default Education;

"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CommonBounded from "@/components/CommonBounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

gsap.registerPlugin(ScrollTrigger);

/**
 * Props for `Skills`.
 */
export type SkillsProps = SliceComponentProps<Content.SkillsSlice>;

/**
 * Component for "Skills" Slices.
 */
const Skills = ({ slice }: SkillsProps): JSX.Element => {
  const skillComponent = useRef(null);

  useEffect(() => {
    let context = gsap.context(() => {
      const t1 = gsap.timeline({
        trigger: skillComponent.current,
        scrollTrigger: {
          start: "top bottom",
          end: "bottom top",
          scrub: 7,
        },
      });

      t1.fromTo(
        ".skill-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power3.out ",
        }
      );
    }, skillComponent);
    return () => context.revert();
  });

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={skillComponent}
      className="overflow-hidden"
    >
      <CommonBounded as="div">
        <Heading size="lg" as="h2">
          {slice.primary.heading}
        </Heading>
      </CommonBounded>
      {slice.items.map(({ skill, relatedcolor, icon_string }, index) => (
        <div
          key={index}
          aria-label={skill!}
          className="skill-row flex-center gap-4 mb-5 text-slate-600"
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className="individual-skill text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter"
                style={{
                  color: index === 7 && relatedcolor ? relatedcolor : "inherit",
                }}
              >
                {skill}
              </span>
              <span className="flex-center">
                <Icon icon={icon_string!} className="size-[2rem]" />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Skills;

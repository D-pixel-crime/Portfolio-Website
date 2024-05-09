import CommonBounded from "@/components/CommonBounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { GitCommitHorizontal, GitCompareArrows } from "lucide-react";
import React from "react";

/**
 * Props for `Skills`.
 */
export type SkillsProps = SliceComponentProps<Content.SkillsSlice>;

/**
 * Component for "Skills" Slices.
 */
const Skills = ({ slice }: SkillsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <CommonBounded as="div" className="mb-3 md:mb-6 mt-5">
        <Heading size="lg" as="h2">
          {slice.primary.heading}
        </Heading>
      </CommonBounded>
      {slice.items.map(({ skill, relatedcolor }, index) => (
        <div
          key={index}
          className="skill-row flex-center gap-4 my-3.5 text-slate-600"
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className="individual-skill text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tighter"
                style={{
                  color: index === 7 && relatedcolor ? relatedcolor : "inherit",
                }}
              >
                {skill}
              </span>
              <span className="flex-center">
                <GitCompareArrows />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Skills;

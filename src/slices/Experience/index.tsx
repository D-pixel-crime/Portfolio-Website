import CommonBounded from "@/components/CommonBounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Experience`.
 */
export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

/**
 * Component for "Experience" Slices.
 */
const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  return (
    <CommonBounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="border-t-2 border-slate-700 mt-16 md:mx-4"
    >
      <Heading size="lg">{slice.primary.heading}</Heading>
      <div className="grid grid-cols-2 gap-2 px-2 mt-10">
        {slice.items.map(({ role, company, duration, location }, index) => {
          return (
            <div
              key={index * 500}
              className="border-2 border-slate-600 rounded-xl py-5 px-2.5 flex items-center justify-between"
            >
              <div className="flex flex-col gap-2">
                <div>{role}</div>
                <div>
                  {company} ({location})
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div>{duration}</div>
              </div>
            </div>
          );
        })}
      </div>
    </CommonBounded>
  );
};

export default Experience;

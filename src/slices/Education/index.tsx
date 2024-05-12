"use client";

import CommonBounded from "@/components/CommonBounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Education`.
 */
export type EducationProps = SliceComponentProps<Content.EducationSlice>;

/**
 * Component for "Education" Slices.
 */
const Education = ({ slice }: EducationProps): JSX.Element => {
  return (
    <CommonBounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="border-b-2 border-slate-700 md:mx-5"
    >
      <Heading size="lg" className="mb-12">
        {slice.primary.heading}
      </Heading>
      <div>
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
                className="flex justify-between border-2 rounded-lg my-8 py-6 px-4 border-slate-700 bg-slate-800 shadow-2xl shadow-black"
                key={index + 500}
              >
                <div className="flex flex-col">
                  <p className="text-2xl text-slate-300">{institute_name}</p>
                  <p className="text-slate-400">
                    <em>
                      {course_or_degree} ({score})
                    </em>
                  </p>
                </div>
                <div className="flex flex-col items-end">
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

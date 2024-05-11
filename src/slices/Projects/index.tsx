import CommonBounded from "@/components/CommonBounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicRichTextProps,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  return (
    <CommonBounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="xl" className="mb-8">
        {slice.primary.heading}
      </Heading>
      <div className="prose prose-xl prose-invert mb-10">
        <PrismicRichText field={slice.primary.description} />
      </div>
    </CommonBounded>
  );
};

export default Projects;

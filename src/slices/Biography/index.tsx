import Button from "@/components/Button";
import CommonBounded from "@/components/CommonBounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }: BiographyProps): JSX.Element => {
  return (
    <CommonBounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-14 gap-y-6 md:grid-cols-[1fr,2fr]">
        <Heading as="h2" size="xl" className="col-start-2">
          {slice.primary.heading}
        </Heading>
        <div className="prose prose-xl prose-slate prose-invert col-start-2 text-justify">
          <PrismicRichText field={slice.primary.description} />
          <Button
            link={slice.primary.button_link}
            label={slice.primary.button_text}
            showIcon
          />
        </div>
        <PrismicNextImage
          field={slice.primary.avatar}
          className="mt-10 rounded-xl col-start-1 row-start-1 md:col-start-1 md:row-end-3"
        />
      </div>
    </CommonBounded>
  );
};

export default Biography;
import Avatar from "@/components/Avatar";
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
        <Heading
          as="h2"
          size="lg"
          className="flex-center md:col-start-2 max-md:row-start-2 md:row-start-1 md:row-end-2"
        >
          {slice.primary.heading}
        </Heading>
        <div className="flex-center flex-col prose prose-xl prose-slate prose-invert md:col-start-2 text-justify">
          <PrismicRichText field={slice.primary.description} />
          <Button
            link={slice.primary.button_link}
            label={slice.primary.button_text}
            showIcon
            buttonColor="bg-violet-400"
          />
        </div>
        <Avatar
          image={slice.primary.avatar}
          className="md:mt-20 rounded-xl row-start-1 md:col-start-1 md:row-end-3"
        />
      </div>
    </CommonBounded>
  );
};

export default Biography;

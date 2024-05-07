import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const splitEachLetter = (name: KeyTextField) => {
    if (!name) return;

    return name.split("").map((letter, index) => (
      <span key={index} className="inline-block name-animation opacity-0">
        {letter}
      </span>
    ));
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[70vh]">
        <div className="cols-start-1 md:row-start-1">
          <h1
            className="font-extrabold leading-none text-[clamp(3rem,12vw,20rem)]"
            aria-label={slice.primary.name!}
          >
            <span className="block">{splitEachLetter(slice.primary.name)}</span>
          </h1>
          <span className="mt-4 block bg-gradient-to-br from-violet-200 to-50% via-purple-500 to-violet-300 bg-clip-text text-2xl lg:text-4xl font-bold uppercase text-transparent opacity-100">
            {slice.primary.intro_tag}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

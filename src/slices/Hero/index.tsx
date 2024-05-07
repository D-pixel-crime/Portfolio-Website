"use client";

import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const component = useRef(null);

  const splitEachLetter = (name: KeyTextField) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span key={index} className="inline-block name-animation opacity-0">
        {letter}
      </span>
    ));
  };

  useEffect(() => {
    let context = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.fromTo(
        ".name-animation",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1.2,0.3)",
          duration: 1.5,
          transformOrigin: "left top",
          stagger: {
            each: 0.1,
            from: "random",
          },
        }
      );

      const t2 = gsap.timeline();
      t2.fromTo(
        ".intro-tag",
        { opacity: 0, y: 20, scale: 1.2 },
        {
          opacity: 1,
          duration: 1.5,
          ease: "elastic.out(1.3,0.2)",
          y: 0,
          scale: 1,
        }
      );
      t2.delay(1);
    }, component);
    return () => context.revert();
  }, []);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[70vh]">
        <div className="cols-start-1 md:row-start-1">
          <h1
            className="font-extrabold leading-none text-[clamp(3rem,12vw,20rem)]"
            aria-label={slice.primary.name!}
          >
            <span className="block">{splitEachLetter(slice.primary.name)}</span>
          </h1>
          <span className="mt-4 intro-tag block bg-gradient-to-br from-violet-200 to-50% via-purple-500 to-violet-300 bg-clip-text text-2xl lg:text-4xl font-bold uppercase text-transparent opacity-0">
            {slice.primary.intro_tag}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

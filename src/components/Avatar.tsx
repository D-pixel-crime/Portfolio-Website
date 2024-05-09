"use client";

import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { rotate } from "three/examples/jsm/nodes/Nodes.js";

interface PropsAvatar {
  image: ImageField;
  className?: string;
}

const Avatar = ({ image, className }: PropsAvatar) => {
  const avatarComponent = useRef(null);

  useEffect(() => {
    let context = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".avatar",
          {
            opacity: 0,
            scale: 1.4,
            rotate: -50,
          },
          {
            opacity: 1,
            scale: 0.9,
            duration: 1.3,
            rotate: 2,
            ease: "power3.in",
          }
        )
        .to(".avatar", {
          scale: 1,
          duration: 1,
          rotate: 0,
        });
    }, avatarComponent);
    return () => context.revert();
  }, []);

  return (
    <div
      ref={avatarComponent}
      className={clsx("relative h-fit w-fit", className)}
    >
      <div className="avatar overflow-hidden rounded-3xl border-2 border-slate-700 opacity-0">
        <PrismicNextImage
          field={image}
          className="avatar-image object-fill w-fit h-fit"
        />
        <div className="highlight absolute inset-0 hidden w-fit scale-110 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 md:block"></div>
      </div>
    </div>
  );
};

export default Avatar;

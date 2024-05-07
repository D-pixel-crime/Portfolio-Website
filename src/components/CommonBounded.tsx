import clsx from "clsx";
import React from "react";

interface CommonBoundedProps {
  className?: string;
  children?: React.ReactNode;
}

const CommonBounded = React.forwardRef<HTMLDivElement, CommonBoundedProps>(
  ({ className, children, ...restProps }, ref) => {
    return (
      <section
        className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
        ref={ref}
        {...restProps}
      >
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      </section>
    );
  }
);

CommonBounded.displayName = "CommonBounded";

export default CommonBounded;

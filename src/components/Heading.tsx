import clsx from "clsx";

interface PropsHeading {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  className?: string;
}

const Heading = ({
  as: Temp = "h1",
  className,
  children,
  size = "lg",
}: PropsHeading) => {
  return (
    <Temp
      className={clsx(
        "font-bold text-slate-300",
        size === "xl" ? "text-7xl md:text-9xl" : "",
        size === "lg" ? "text-6xl md:text-8xl" : "",
        size === "md" ? "text-5xl md:text-6xl" : "",
        size === "sm" ? "text-3xl md:text-4xl" : "",
        className
      )}
    >
      {children}
    </Temp>
  );
};

export default Heading;

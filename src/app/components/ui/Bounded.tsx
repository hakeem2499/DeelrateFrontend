import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx(
        "px-4 py-14 first:pt-10  md:px-6 lg:px-4 md:py-24 lg:py-28",
        className,
      )}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-6xl py-4  gap-4 md:gap-8  flex-col items-center">
        {children}
      </div>
    </Comp>
  );
}
// src/components/ButtonLink.tsx

import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export default function ButtonLink({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx(
        "w-60 transform rounded-none border inline-flex justify-center hover:border-gray-950 border-gray-300  px-6 py-4 font-medium text-background hover:text-foreground transition-all duration-300 hover:-translate-y-0.5 dark:hover:text-amber-50 hover:bg-gray-100 dark:border-gray-700 bg-foreground dark:hover:border-brand  dark:hover:bg-gray-900",
        className,
      )}
      {...restProps}
    />
  );
}
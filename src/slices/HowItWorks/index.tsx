import { FC, SVGProps } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/ui/Bounded";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { PrismicNextImage } from "@prismicio/next";
import { Token, Managed, Owned, Payments } from "./IconSvgs";

/**
 * Props for `HowItWorks`.
 */
export type HowItWorksProps = SliceComponentProps<Content.HowItWorksSlice>;

/**
 * Component for "HowItWorks" Slices.
 */

const Icons = {
  Tokens: <Token />,
  Managed: <Managed />,
  Owned: <Owned />,
  Payments: <Payments />

}










const HowItWorks: FC<HowItWorksProps> = ({ slice }) => {

  return (
    <div
      className="w-full flex flex-col max-w-6xl mx-auto md:py-8  px-4 items-center justify-center gap-8 mt-16"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h3 className="text-3xl font-bold md:text-5xl text-black text-center dark:text-white">
        <PrismicText field={slice.primary.first_heading} />
      </h3>
      <div className="grid md:grid-cols-2 grid-rows-[auto_auto_auto] gap-4 md:gap-8 lg:gap-12 w-full justify-items-between">
        {slice.primary.how.map((item, index) => (
          <div className="flex gap-2 w-full p-4 md:p-8 lg:p-12 bg-white dark:bg-neutral-900 rounded-lg shadow-md" key={index}>
            <span className="   text-7xl">{item.icon && Icons[item.icon]}</span>
            <div

              className="flex flex-col items-start justify-center gap-2 "
            >
              <h3 className="text-xl md:text-2xl text-transparent  bg-clip-text not-italic bg-gradient-to-r font-semibold from-muted-foreground to-foreground via-brand">
                <PrismicText field={item.heading} />
              </h3>
              <p className=" md:text-lg  font-semibold text-neutral-500 dark:text-neutral-400">
                <PrismicText field={item.body} />
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-8 w-full justify-center mt-8">
        <h2 className="text-2xl md:text-4xl text-center py-4 md:py-16  font-bold text-black dark:text-white">
          <PrismicText field={slice.primary.second_heading} />
        </h2>
        <PrismicNextImage
          field={slice.primary.image}
          quality={100}
          priority
          className="w-full object-contain hidden md:block dark:invert h-auto"
          
        />
        <PrismicNextImage
          field={slice.primary.mobile_image}
          priority
            quality={100}
          className="w-full dark:invert md:hidden block object-contain h-auto"
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default HowItWorks;

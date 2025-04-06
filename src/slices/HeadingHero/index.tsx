import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";

import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/app/components/ui/Bounded";
import ContactForm from "@/app/(submissions)/_components/ContactForm";

/**
 * Props for `HeadingHero`.
 */
export type HeadingHeroProps = SliceComponentProps<Content.HeadingHeroSlice>;

/**
 * Component for "HeadingHero" Slices.
 */
const HeadingHero: FC<HeadingHeroProps> = ({ slice }) => {
  return (
    <section
      className="relative"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="absolute inset-0 w-full -z-10 h-full bg-slate-950/60">
        <PrismicNextImage
          className="h-full w-full opacity-70 object-cover mix-blend-multiply"
          field={slice.primary.image}
        />
      </div>
      <Bounded >
        <div className="mx-auto space-y-2 md:space-y-4 text-amber-50 p-4 ml-0">

          {isFilled.richText(slice.primary.pagetype) && (
            <div className="text-balance  text-2xl md:text-4xl  font-semibold  ">
              <div className="top-20 left-0 rounded-full  dark:bg-slate-100 bg-brand transition-colors duration-200 h-1  w-1/5" />
              <PrismicText field={slice.primary.pagetype} />
            </div>
          )}
          {isFilled.richText(slice.primary.heading) && (
            <h1 className="text-balance text-4xl  font-semibold  md:text-5xl">
              <PrismicText field={slice.primary.heading} />
            </h1>
          )}

          {isFilled.richText(slice.primary.body) && (
            <div className="  max-w-4xl text-balance font-medium text-lg md:text-2xl">
              <PrismicRichText field={slice.primary.body} />
            </div>
          )}
        </div>

        


      </Bounded>
    </section>
  );
};

export default HeadingHero;

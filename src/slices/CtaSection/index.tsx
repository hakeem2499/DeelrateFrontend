import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import FeatureTitle from "@/app/components/ui/FeatureTitle";
import FeatureDescription from "@/app/components/ui/FeatureDescription";
import ButtonLink from "@/app/components/ui/ButtonLink";
import Bounded from "@/app/components/ui/Bounded";
import NormalButtonLink from "@/app/components/ui/NormalButtonLink";

/**
 * Props for `CtaSection`.
 */
export type CtaSectionProps = SliceComponentProps<Content.CtaSectionSlice>;

/**
 * Component for "CtaSection" Slices.
 */
const CtaSection: FC<CtaSectionProps> = ({ slice }) => {
  return (
    <Bounded
      className="relative w-full  gap-4"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="absolute inset-0 w-full -z-10 h-full bg-slate-950/60">
        <PrismicNextImage
          className="h-full w-full opacity-70 object-cover mix-blend-multiply"
          field={slice.primary.background_image}
        />
      </div>
      <div className="space-y-4 p-4 mr-0 my-auto mx-auto text-white items-end">
        <h5 className="text-2xl md:text-3xl font-semibold "><PrismicText field={slice.primary.heading} /></h5>
        <p className="text-lg text-balance max-w-lg font-medium"><PrismicText field={slice.primary.body} /></p>
        <NormalButtonLink field={slice.primary.link}>
          {slice.primary.label}
        </NormalButtonLink>

      </div>
    </Bounded>
  );
};

export default CtaSection;

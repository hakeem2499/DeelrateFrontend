import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/ui/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `AssetShowcase`.
 */
export type AssetShowcaseProps =
  SliceComponentProps<Content.AssetShowcaseSlice>;

/**
 * Component for "AssetShowcase" Slices.
 */
const AssetShowcase: FC<AssetShowcaseProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className="text-4xl md:text-5xl font-semibold text-center text-balance py-4">
        <PrismicText field={slice.primary.heading} />
      </h2>
      <div>
        {slice.primary.assets.map((item, index) => (
          <div key={index} className="wrapper">
            <div className="image-wrapper">
            <PrismicNextImage priority field={item.image} />
            </div>
            <div className="header-wrapper">
              <h3><PrismicText field={item.heading1} /></h3>
              <h3><PrismicNextLink field={item.link} /></h3>
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default AssetShowcase;

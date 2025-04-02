import { FC, JSX } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/ui/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { createClient } from "@/prismicio";

/**
 * Props for `AssetShowcase`.
 */
export type AssetShowcaseProps =
  SliceComponentProps<Content.AssetShowcaseSlice>;

/**
 * Component for "AssetShowcase" Slices.
 */

const fetchAssets = async (slice: Content.AssetShowcaseSlice) => {
  const client = createClient();

  // Fetch all services in parallel
  const assets = await Promise.all(
    slice.primary.assets.map(async (item) => {
      if (isFilled.contentRelationship(item.asset)) {
        return await client.getByID<Content.AssetsDocument>(item.asset.id);
      }
      return null; // Return null for invalid items
    })
  );

  // Filter out null values and return only valid services
  return assets.filter((asset) => asset !== null) as Content.AssetsDocument[];
};

const AssetShowcase: FC<AssetShowcaseProps> = async ({ slice }): Promise<JSX.Element> => {
  const assets = await fetchAssets(slice)
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className="text-4xl md:text-5xl font-semibold text-center text-balance py-4">
        <PrismicText field={slice.primary.heading} />
      </h2>
      <div>
        {assets.map((asset, index) => (
          <div key={index} className="wrapper">
            <div className="image-wrapper">
              <PrismicNextImage priority field={asset.data.image} />
            </div>
            <div className="header-wrapper">
              <h3><PrismicText field={asset.data.asset} /></h3>
              <h3><PrismicNextLink document={asset}>See More</PrismicNextLink></h3>
              <p className="text-lg font-semibold border-l-4 pl-2 md:pl-4  border-brand  lowercase">
                <PrismicText field={asset.data.description} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default AssetShowcase;

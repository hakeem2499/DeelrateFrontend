import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/ui/Bounded";
import { ScrollArea } from "@/components/ui/scroll-area";

/**
 * Props for `StickyScroll`.
 */
export type StickyScrollProps = SliceComponentProps<Content.StickyScrollSlice>;

/**
 * Component for "StickyScroll" Slices.
 */
const StickyScroll: FC<StickyScrollProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="policy-section max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl mx-auto ml-0 font-bold  mb-6">
          <PrismicText field={slice.primary.heading} />
        </h1>

        {/* Scrollable Content Container */}
        <div className="relative">
          {/* Top fade (optional) */}
          <div className="sticky top-0 h-6 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrollable content */}
          <ScrollArea className="overflow-y-auto max-h-[80dvh]  w-full  ">
            <div className="prose prose-gray max-w-none">
              <PrismicRichText field={slice.primary.content} />
            </div>
          </ScrollArea>

          {/* Bottom fade (optional) */}
          <div className="sticky bottom-0 h-6 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </Bounded>
  );
};

export default StickyScroll;

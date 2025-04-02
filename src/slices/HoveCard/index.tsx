import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { HoverEffect } from "./Card";
import Bounded from "@/app/components/ui/Bounded";

/**
 * Props for `HoveCard`.
 */
export type HoveCardProps = SliceComponentProps<Content.HoveCardSlice>;

/**
 * Component for "HoveCard" Slices.
 */
const HoveCard: FC<HoveCardProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <HoverEffect slice={slice}/>
    </Bounded>
  );
};

export default HoveCard;

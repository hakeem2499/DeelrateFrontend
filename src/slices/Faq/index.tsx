
import { FC } from "react";
import { Content } from "@prismicio/client";
import {  SliceComponentProps } from "@prismicio/react";


import Bounded from "@/app/components/ui/Bounded";

import Client from "./Client";

/**
 * Props for `Faq`.
 */
export type FaqProps = SliceComponentProps<Content.FaqSlice>;

/**
 * Component for "Faq" Slices.
 */



const Faq: FC<FaqProps> = ({ slice }) => {


  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Client slice={slice}/>
    </Bounded>
  );
};

export default Faq;
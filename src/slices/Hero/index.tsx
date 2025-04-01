
import { FC } from "react";
import { Content,  } from "@prismicio/client";
import {   SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/ui/Bounded";

import Client from "./Client";
import { SpotlightHero } from "@/app/components/ui/SpotlightHero";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      className="hero border-b-8 border-amber-50"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      
     <Client slice={slice}/>

    </Bounded >
  );
};

export default Hero;

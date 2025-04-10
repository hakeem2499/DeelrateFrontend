
import { FC } from "react";
import { Content,  } from "@prismicio/client";
import {   SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/ui/Bounded";

import Client from "./Client";

import clsx from "clsx";
import Image from "next/image";

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
      className={clsx("relative border-b-8 border-amber-50", slice.variation === 'default' ? 'hero' : '')}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === 'noImage' && (
        <Image
          src="/backgroundForAbout.svg"
          alt="Hero Background"
          width={1920}
          height={1080}
          className="absolute inset-0 object-cover w-full h-full -z-10 opacity-50"
          priority
          sizes="100vw"
        />
      ) }
     <Client slice={slice}/>

    </Bounded >
  );
};

export default Hero;

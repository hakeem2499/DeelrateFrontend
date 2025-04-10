import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/ui/Bounded";
import FeatureCard from "@/app/components/ui/FeatureCard";
import FeatureTitle from "@/app/components/ui/FeatureTitle";
import FeatureDescription from "@/app/components/ui/FeatureDescription";
import FeatureComponent from "@/app/components/ui/FeatureComponent";
import { ImageField } from "@prismicio/types";
import ContactForm from "@/app/(submissions)/_components/ContactForm";
import NewsletterForm from "@/app/(submissions)/_components/NewsletterForm";
import SaveSeatForm from "@/app/(submissions)/_components/SaveSeatForm";
import TypewriterEffectSmooth from "@/app/(submissions)/_components/ui/TypewriterEffect";

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

const featureComponentsClassname = {
  First: 'col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800',
  Second: 'border-b col-span-1 lg:col-span-2 dark:border-neutral-800',
  Third: 'col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800',
  Fourth: 'col-span-1 lg:col-span-3 border-b lg:border-none'
};

/**
 * Component for "Features" Slices.
 */
const Features: FC<FeaturesProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
        <div className="px-8">
          <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
            <PrismicText field={slice.primary.heading} />
          </h4>

          <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
            <PrismicText field={slice.primary.body} />
          </p>
        </div>

        <div className="relative ">
          <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
            {slice.primary.feature.map((feature, index) => (
              <FeatureCard key={index} className={featureComponentsClassname[feature.featureindex ?? "Fourth"]}>
                <FeatureTitle><PrismicText field={feature.title} /></FeatureTitle>
                <FeatureDescription><PrismicText field={feature.description} /></FeatureDescription>
                <div className=" h-full w-full"><FeatureComponent
                  FeatureIndex={feature.featureindex ?? "Second"}
                  hasImage={feature.hasimage}
                  image={feature.image} // Single image
                  slice={slice} // Image array

                /></div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
      {isFilled.group(slice.primary.words) && (

        <TypewriterEffectSmooth words={slice.primary.words.map(word => ({ text: word.word ?? "" }))} />
      )}
      <SaveSeatForm />
    </Bounded>
  );
};

export default Features;

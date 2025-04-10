import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/ui/Bounded";
import ButtonLink from "@/app/components/ui/ButtonLink";

/**
 * Props for `PageCta`.
 */
export type PageCtaProps = SliceComponentProps<Content.PageCtaSlice>;

/**
 * Component for "PageCta" Slices.
 */
const PageCta: FC<PageCtaProps> = ({ slice }) => {
  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="dark:bg-primary"
    >
      <Bounded >
        <div className="text-start text-brand text-xl md:text-2xl max-w-xl font-semibold ">
          <PrismicText field={slice.primary.description} />
        </div>
        <h2 className="text-3xl font-semibold md:text-5xl max-w-3xl  text-start ">

          <PrismicText field={slice.primary.heading} />
        </h2>

        <PrismicRichText components={{
          paragraph: ({ children }) => (
            <p className="mb-4 mt-8 max-w-3xl font-semibold  text-start text-lg">
              {children}
            </p>
          )
        }} field={slice.primary.body} />

        <ButtonLink field={slice.primary.link}>
          {slice.primary.label}
        </ButtonLink>
      </Bounded>
    </div>
  );
};

export default PageCta;

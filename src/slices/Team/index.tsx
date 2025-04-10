import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/ui/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { LinkedinIcon } from "@/app/components/layout/Footer";

/**
 * Props for `Team`.
 */
export type TeamProps = SliceComponentProps<Content.TeamSlice>;

/**
 * Component for "Team" Slices.
 */
const Team: FC<TeamProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

      <div className="grid md:grid-cols-3 lg:grid-cols-4 w-full gap-8 md:gap-12 place-items">
        {slice.primary.members.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-start relative group flex-col gap-2 w-full "
          >
            <PrismicNextImage
              field={item.image}
              quality={100}
              priority
              className="object-cover md:w-auto w-full h-60 rounded-lg"
            />
            <p className="text-lg md:text-xl font-semibold ">
              <PrismicText field={item.name} />
            </p>

            <p className="text-lg md:text-xl font-semibold text-neutral-500 dark:text-neutral-400">
              <PrismicText field={item.position} />
            </p>
            <PrismicNextLink field={item.linkedin_link} >

              <span className="text-lg md:text-2xl">
                <LinkedinIcon />
              </span>
            </PrismicNextLink>

          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Team;

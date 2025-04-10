import { FC, SVGProps } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/ui/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import ButtonLink, { ForwardSvg } from "@/app/components/ui/ButtonLink";

/**
 * Props for `OurStory`.
 */
export type OurStoryProps = SliceComponentProps<Content.OurStorySlice>;

/**
 * Component for "OurStory" Slices.
 */

const Icons = {
  Leadership: <Leadership />,
  Careers: <Careers />,
  Location: <Location />
}


export function Location(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>{/* Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ */}<path fill="currentColor" fillRule="evenodd" d="M9.206 3.182A9.25 9.25 0 0 0 2.78 11.25h4.48c.033-1.096.135-2.176.305-3.2c.207-1.254.515-2.41.91-3.4a9.3 9.3 0 0 1 .731-1.468M12 1.25a10.75 10.75 0 1 0 0 21.5a10.75 10.75 0 0 0 0-21.5m0 1.5c-.261 0-.599.126-.991.532c-.396.41-.791 1.051-1.141 1.925c-.347.869-.63 1.917-.824 3.089c-.155.94-.25 1.937-.282 2.954h6.476a22.5 22.5 0 0 0-.282-2.954c-.194-1.172-.477-2.22-.824-3.089c-.35-.874-.745-1.515-1.14-1.925c-.393-.406-.73-.532-.992-.532m4.74 8.5a24 24 0 0 0-.305-3.2c-.207-1.254-.515-2.41-.91-3.4a9.3 9.3 0 0 0-.732-1.468a9.24 9.24 0 0 1 3.748 2.277a9.25 9.25 0 0 1 2.678 5.791zm-1.502 1.5H8.762c.031 1.017.127 2.014.282 2.954c.194 1.172.477 2.22.824 3.089c.35.874.745 1.515 1.14 1.925c.393.406.73.532.992.532c.261 0 .599-.126.991-.532c.396-.41.791-1.051 1.141-1.925c.347-.869.63-1.917.824-3.089c.155-.94.25-1.937.282-2.954m-.444 8.068c.27-.434.515-.929.73-1.468c.396-.99.704-2.146.911-3.4a24 24 0 0 0 .304-3.2h4.48a9.25 9.25 0 0 1-6.426 8.068m-5.588 0a9.3 9.3 0 0 1-.73-1.468c-.396-.99-.704-2.146-.911-3.4a24 24 0 0 1-.304-3.2H2.78a9.25 9.25 0 0 0 6.425 8.068" clipRule="evenodd"></path></svg>
  )
}

export function Careers(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>{/* Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}<path fill="currentColor" d="M15 11h5q.425 0 .713-.288T21 10V7q0-.425-.288-.712T20 6h-5q-.425 0-.712.288T14 7v3q0 .425.288.713T15 11m2.5-2.25l1.85-1.3q.2-.15.425-.038t.225.363q0 .025-.175.35l-1.75 1.225q-.275.2-.575.2t-.575-.2l-1.75-1.225Q15.15 8.1 15 7.775q0-.25.225-.363t.425.038zM2 21q-.825 0-1.412-.587T0 19V5q0-.825.588-1.412T2 3h20q.825 0 1.413.588T24 5v14q0 .825-.587 1.413T22 21zm13.9-2H22V5H2v14h.1q1.05-1.875 2.9-2.937T9 15t4 1.063T15.9 19M9 14q1.25 0 2.125-.875T12 11t-.875-2.125T9 8t-2.125.875T6 11t.875 2.125T9 14m-4.45 5h8.9q-.85-.95-2.013-1.475T9 17t-2.425.525T4.55 19M9 12q-.425 0-.712-.288T8 11t.288-.712T9 10t.713.288T10 11t-.288.713T9 12m3 0"></path></svg>
  )
}

function Leadership(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>{/* Icon from Remix Icon by Remix Design - https://github.com/Remix-Design/RemixIcon/blob/master/License */}<path fill="currentColor" d="M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5m-6.5 3q.42.001.81.094a6 6 0 0 0-.301 1.575L6 16v.086a1.5 1.5 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.355L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14m13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.355-1.493L18.5 16q-.264.001-.5.085V16c0-.666-.108-1.306-.308-1.904c.258-.063.53-.096.808-.096m-13-6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-13 2a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m13 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M12 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></path></svg>
  )
}
const OurStory: FC<OurStoryProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex mx-auto ml-0 flex-col w-full gap-6 md:gap-8 md:flex-row justify-between items-center">
        <div className="flex flex-col items-start   justify-center gap-8 w-full md:w-1/2">
          <h3 className="text-3xl font-bold md:text-5xl text-black  dark:text-white">
            <PrismicText field={slice.primary.heading} />
          </h3>

          <PrismicRichText components={{
            paragraph: ({ children }) => (
              <p className=" font-semibold  text-start md:text-lg">
                {children}
              </p>
            )
          }} field={slice.primary.body} />

          <ButtonLink field={slice.primary.link}>
            {slice.primary.link.text}

          </ButtonLink>
        </div>
        <div className="w-full md:w-1/2">
          <PrismicNextImage
            field={slice.primary.ceo_image}
            quality={100}
            priority

            className="object-cover w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {isFilled.richText(slice.primary.ctalink_heading) && (
        <h3 className="text-3xl mt-16 font-semibold md:py-8 text-center md:text-5xl text-foreground dark:text-white">
          <PrismicText field={slice.primary.ctalink_heading} />
        </h3>
      )
      }
      <div className="grid md:grid-col-3 w-full  gap-4 md:gap-8 place-items">
        {slice.primary.links.map((item, index) => (
          <div
            key={index}
            className="flex relative group shadow-md border  hover:border-brand  transition-all duration-200 hover:shadow-2xl p-4 rounded-lg flex-col md:w-1/3 gap-4 w-full "
          >
            <span className="text-4xl md:text-5xl">{Icons[item.link_type ?? "Leadership"]}</span>
            <PrismicNextLink className="text-2xl md:text-4xl font-semibold" field={item.link} />
            <span className="transition-transform text-4xl duration-300 group-hover:text-brand group-hover:translate-x-2"><ForwardSvg /></span>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default OurStory;

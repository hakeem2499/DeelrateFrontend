"use client"; // Mark this as a Client Component

import { FC, useRef, useState, useEffect } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicText } from "@prismicio/react";

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import styles from "./index.module.css";
import Bounded from "@/app/components/ui/Bounded";
import CarouselControl from "@/app/components/ui/CarouselControl";



interface BlogClientProps {
  slice: Content.BlogSlice;
  Blog: Content.BlogDocument[] | undefined; // Allow undefined
}

const BlogClient: FC<BlogClientProps> = ({ slice, Blog }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState<boolean>(true);
  const [isAtEnd, setIsAtEnd] = useState<boolean>(false);

  // Update scroll state on mount and when Blog change
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (scroller) {
      const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = scroller;
        setIsAtStart(scrollLeft <= 0); // Account for potential rounding errors
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1); // Account for potential rounding errors
      };

      // Initial check
      handleScroll();

      // Add event listener
      scroller.addEventListener("scroll", handleScroll);

      // Cleanup
      return () => {
        scroller.removeEventListener("scroll", handleScroll);
      };
    }
  }, [Blog]);

  // Scroll by a specific offset
  const scrollBy = (offset: number) => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  // If Blog is undefined or empty, show a fallback message
  if (!Blog || Blog.length === 0) {
    return (
      <Bounded>
        <div className="text-center py-8">
          <p>No case studies found.</p>
        </div>
      </Bounded>
    );
  }

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex gap-4 md:gap-6 lg:gap-8 lg:mb-8 flex-col justify-between py-4 w-full items-center">
        {isFilled.richText(slice.primary.heading) && (
          <h2 className="hero__heading text-balance text-2xl font-semibold md:font-medium md:text-5xl">
            <PrismicText field={slice.primary.heading} />
          </h2>
        )}

        
      </div>
      <div className="grid overflow-hidden gap-4 items-center">
        <div
          className={styles.scroller}
          ref={scrollerRef}
          aria-live="polite"
        >
          {Blog.map(
            (case_study) =>
              case_study && (
                <div key={case_study.id} className={styles.scrollerItem}>
                  <div className="w-full md:w-1/2">
                    <PrismicNextImage
                      className="rounded-lg invert"
                      field={case_study.data.image}
                    />
                  </div>
                  <div className="flex w-full gap-4 md:w-1/2 flex-col">
                    <h4 className="text-balance text-brand text-2xl font-medium md:text-3xl">
                      <PrismicText field={case_study.data.heading} />
                    </h4>
                    <p className="font-medium">
                      {case_study.data.date}
                    </p>
                    <PrismicNextLink className="text-brand hover:text-inherit hover:underline transition-colors duration-200" document={case_study} >
                      Learn More
                    </PrismicNextLink>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="flex justify-center gap-4 items-center">
          <CarouselControl
            type="previous"
            title="Go to previous slide"
            handleClick={() => scrollBy(-scrollerRef.current!.clientWidth * 0.9)}
            disabled={isAtStart}
            aria-label="Previous"
          />


          <CarouselControl
            type="next"
            title="Go to next slide"
            handleClick={() => scrollBy(scrollerRef.current!.clientWidth * 0.9)}
            disabled={isAtEnd}
            aria-label="Next"
          />

        </div>
      </div>
    </Bounded>
  );
};

export default BlogClient;
'use client';
import { PrismicNextImage } from '@prismicio/next';
import { ImageField } from '@prismicio/client';
import useMediaQuery from '@/hooks/useMediaQuery';


type ResponsiveImageProps = {
  mobileImage: ImageField;
  desktopImage: ImageField;
  className?: string;
  priority?: boolean;
};

export const ResponsiveImage = ({
  mobileImage,
  desktopImage,
  className,
  priority = true
}: ResponsiveImageProps) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <div className={className}>
      {isDesktop ? (
        <PrismicNextImage
          field={desktopImage}
          quality={100}
          priority={priority}
          className="w-full object-contain h-auto"
          sizes="(max-width: 767px) 100vw, (min-width: 768px) 50vw"
        />
      ) : (
        <PrismicNextImage
          field={mobileImage}
          priority={priority}
            quality={100}
          className="w-full dark:invert object-contain h-auto"
          sizes="100vw"
        />
      )}
    </div>
  );
};
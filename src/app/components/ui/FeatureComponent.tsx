'use client';
import React, { SVGProps, useEffect, useRef } from 'react';
import { ImageField } from '@prismicio/types';
import { PrismicImage } from '@prismicio/react';
import Link from 'next/link';
import { motion } from 'motion/react';
import createGlobe from 'cobe';
import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';


type FeatureProps = {
    hasImage?: boolean;
    image?: ImageField; // Single Prismic image
    slice?: Content.FeaturesSlice; // Array of Prismic images
};



export function IconBrandYoutubeFilled(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.43em" height="1em" viewBox="0 0 256 180" {...props}>{/* Icon from SVG Logos by Gil Barbara - https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt */}<path fill="red" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"></path><path fill="#FFF" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"></path></svg>
    )
}

// Define individual feature components
const FirstFeature = ({ image }: FeatureProps) => (

    <div className="relative flex py-8 px-2 gap-10 h-full">
        <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
            <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
                {/* TODO */}
                <div className="mt-4">
                    <PrismicImage
                        field={image}
                        className="rounded-md"
                    />
                </div>
            </div>

            <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-background via-white dark:via-background to-transparent w-full pointer-events-none" />
            <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-background via-transparent to-transparent w-full pointer-events-none" />
        </div>
    </div>
);


const ThirdFeature = ({ image }: FeatureProps) => (
    <Link
        href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
        target="__blank"
        className="relative flex gap-10  h-full group/image"
    >
        <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
            <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
                {/* TODO */}
                <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
                <PrismicNextImage
                    priority
                    field={image}
                    width={800}
                    height={800}
                    className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
                />
            </div>
        </div>
    </Link>
);

const SecondFeature = ({ slice }: FeatureProps) => {
    const imageVariants = {
        whileHover: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
        whileTap: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
    };
    return (
        <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
            {/* TODO */}
            <div className="flex flex-row -ml-20">
                {slice?.primary.multipleimages.map((images, idx) => (
                    <motion.div
                        variants={imageVariants}
                        key={"images-first" + idx}
                        style={{
                            rotate: Math.random() * 20 - 10,
                        }}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                    >
                        <PrismicNextImage
                            field={images.image}
                            priority
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                            
                        />
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-row">
                {slice?.primary.multipleimages.map((images, idx) => (
                    <motion.div
                        key={"images-second" + idx}
                        style={{
                            rotate: Math.random() * 20 - 10,
                        }}
                        variants={imageVariants}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                    >
                        <PrismicImage
                            field={images.image}
                            
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                        />
                    </motion.div>
                ))}
            </div>

            <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-background to-transparent  h-full pointer-events-none" />
            <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-background  to-transparent h-full pointer-events-none" />
        </div>
    );
}

const FourthFeature = ({ hasImage }: FeatureProps) => {
    return (
        !hasImage && (
            <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
                <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
            </div>
        )
    );
};

export const Globe = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                // longitude latitude
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.01;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
            className={className}
        />
    );
};

// Create component map
const featureComponents = {
    First: FirstFeature,
    Second: SecondFeature,
    Third: ThirdFeature,
    Fourth: FourthFeature
};

type Props = {
    FeatureIndex: keyof typeof featureComponents;
    hasImage?: boolean;
    image?: ImageField;
    slice?: Content.FeaturesSlice;
    
}

const FeatureComponent = ({
    FeatureIndex,
    hasImage = false,
    image,
    slice,

}: Props) => {
    const Feature = featureComponents[FeatureIndex];

    return (
        <Feature

            hasImage={hasImage}
            image={image}
            slice={slice}
        />
    );
};

export default FeatureComponent;
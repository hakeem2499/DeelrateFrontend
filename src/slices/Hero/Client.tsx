'use client';


import ButtonLink from '@/app/components/ui/ButtonLink'
import { Content, isFilled } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next';
import * as prismic from "@prismicio/client";
import { PrismicRichText, PrismicText } from '@prismicio/react';
import { motion } from 'motion/react'
import React from 'react'

type Props = {}

const Client = ({ slice }: {
    slice: Content.HeroSlice
}) => {
    const renderedContent = () => {
        if (slice.variation === 'noImage') {
            return (


                <div className="flex flex-col gap-4">
                    {isFilled.richText(slice.primary.heading) && (
                        <h1 className="text-balance text-4xl mt-[25%] lg:mt-[15%] font-semibold text-brand md:text-7xl">
                            {(slice.primary.heading && prismic.asText(slice.primary.heading))
                                .split(" ")
                                .map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                            ease: "easeInOut",
                                        }}
                                        className="mr-2 inline-block"
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                        </h1>
                    )}

                    {isFilled.richText(slice.primary.body) && (
                        <motion.div initial={{
                            opacity: 0,
                        }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.3,
                                delay: 0.8,
                            }} className="hero__body mt-6 max-w-5xl text-balance font-medium text-lg md:text-2xl">
                            <PrismicRichText field={slice.primary.body} />
                        </motion.div>
                    )}

                    <motion.div initial={{
                        opacity: 0,
                    }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 1,
                        }} className="relative z-10 mt-8 flex ml-0 mx-auto flex-wrap items-center justify-center gap-4">
                        {isFilled.link(slice.primary.cta_link) && (
                            <ButtonLink
                                className="hero__button mt-8"
                                field={slice.primary.cta_link}
                            >
                                {slice.primary.link_label}
                            </ButtonLink>
                        )}
                    </motion.div>


                </div>

            )
        } else {



            return (

                <div className=" px-4   relative py-10 lg:py-16 lg:gap-4 lg:px-0 flex flex-col items-center justify-center  w-full lg:flex-row md:py-20">


                    <div className='lg:w-3/5'>

                        <h1 className="relative z-10 mx-auto max-w-4xl text-center lg:leading-16 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl dark:text-slate-100">
                            {(slice.primary.heading && prismic.asText(slice.primary.heading))
                                .split(" ")
                                .map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                            ease: "easeInOut",
                                        }}
                                        className="mr-2 inline-block"
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                        </h1>
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.3,
                                delay: 0.8,
                            }}
                            className="relative z-10 mx-auto max-w-xl py-4 text-center md:text-xl text-lg font-semibold text-neutral-600 dark:text-neutral-200"
                        >
                            <PrismicText field={slice.primary.body} />
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.3,
                                delay: 1,
                            }}
                            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
                        >
                            {isFilled.link(slice.primary.cta_link) && (
                                <ButtonLink
                                    className="hero__button mt-8"
                                    field={slice.primary.cta_link}
                                >
                                    {slice.primary.link_label}
                                </ButtonLink>
                            )}
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 1.2,
                        }}
                        className="relative z-10 mt-20 lg:mt-4 lg:w-2/5 "
                    >
                        <div className="w-full overflow-hidden ">
                            <div className="  rounded-ss-2xl  rounded-se-2xl border-b-primary border-4 border-transparent">
                                <PrismicNextImage className="w-full h-full object-cover" priority quality={100} field={slice.primary.image} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            )
        }
    }
    return renderedContent();
}

export default Client
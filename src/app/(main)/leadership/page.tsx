import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Bounded from "@/app/components/ui/Bounded";

export default async function Page() {
    const client = createClient();
    const page = await client.getSingle("our_leadership").catch(() => notFound());


    return (
        <Bounded>
            {isFilled.richText(page.data.title) && <h1 className="text-4xl font-bold md:text-5xl mx-auto ml" ><PrismicText field={page.data.heading} /></h1>}

            <SliceZone slices={page.data.slices} components={components} />
        </Bounded>)
}

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();
    const page = await client.getSingle("our_leadership").catch(() => notFound());


    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
        openGraph: {
            images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
        },
    };
}
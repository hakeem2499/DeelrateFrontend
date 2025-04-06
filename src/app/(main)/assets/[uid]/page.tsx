
import Bounded from '@/app/components/ui/Bounded';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { asText } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicText, SliceZone } from '@prismicio/react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';


type Params = { uid: string };

/**
 * Fetches the assets page data from Prismic.
 */
const fetchAssetsPage = async (uid: string) => {
    const client = createClient();
    return await client.getByUID('assets', uid).catch(() => notFound());
};


/**
 * Service Page Component.
 */
export default async function Page({ params }: { params: Promise<Params> }) {
    const resolvedParams = await params; // Await params to resolve the Promise
    const page = await fetchAssetsPage(resolvedParams.uid);

    return (
        <Bounded>
            <div className="w-full mt-16 grid place-items-center gap-4 text-center">
                
                <h1 className="text-5xl text-center text-balance font-semibold mt-4">
                    <PrismicText field={page.data.asset} />
                </h1>
                <p className="mb-4 mt-8 max-w-xl font-semibold text-start text-lg">
                    <PrismicText field={page.data.stats_data} />
                </p>
                <PrismicNextImage
                    field={page.data.image}
                    className="rounded-lg h-auto w-full object-cover"
                    quality={100}
                    priority
                />
            </div>
            <div className="mx-auto w-full">
                <SliceZone slices={page.data.slices} components={components} />
            </div>
            
        </Bounded>
    );
}

/**
 * Generates metadata for the assets page.
 */
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const resolvedParams = await params; // Await params to resolve the Promise
    const client = createClient();
    const page = await client.getByUID('assets', resolvedParams.uid).catch(() => null);

    if (!page) {
        return {
            title: 'Service Not Found',
            description: 'The requested assets does not exist.',
        };
    }

    return {
        title: `${page.data.meta_title || asText(page.data.asset) + ' assets'}`,
        description: page.data.meta_description,
    };
}

/**
 * Generates static paths for all assets pages.
 */
export async function generateStaticParams() {
    const client = createClient();
    const pages = await client.getAllByType('assets');

    return pages.map((page) => ({ uid: page.uid }));
}

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

        <SliceZone slices={page.data.slices} components={components} />

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
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import ContactForm from "../_components/ContactForm";
import SaveSeatForm from "../_components/SaveSeatForm";
import NewsletterForm from "../_components/NewsletterForm";
import Bounded from "@/app/components/ui/Bounded";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  let isSponsor = false;
  if (uid === "sponsor") {
    isSponsor = true;
  }
  const client = createClient();
  const page = await client
    .getByUID("submission_pages", uid)
    .catch(() => notFound());

  const FormComponents = {
    contact_us: ContactForm,
    sponsor: () => <ContactForm isSponsor={isSponsor} />,
    seat: SaveSeatForm,
    newsletter: () => <NewsletterForm image={page.data.image} />,
  }

  const Form = page.data.submission_type ? FormComponents[page.data.submission_type] : null;

  return (
    <div className=" min-h-screen"> {/* Make container relative for absolute children */}
      {/* SliceZone with full width */}
      <div className="relative z-0"> {/* Base content layer */}
        <SliceZone slices={page.data.slices} components={components} />
      </div>
  
      {/* Form positioned 20% from top */}
      <div className="absolute top-[20%] left-0 right-0 z-10"> {/* Overlay layer */}
        <Bounded className="mx-auto ">
          {Form && <Form />}
        </Bounded>
      </div>
    </div>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client
    .getByUID("submission_pages", uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("submission_pages");

  return pages.map((page) => ({ uid: page.uid }));
}
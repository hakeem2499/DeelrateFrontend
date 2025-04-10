// app/components/blogsServer.tsx
import { Content, isFilled } from "@prismicio/client";
import { createClient } from "@/prismicio";
import BlogClient from "./BlogClient";




const fetchBlogs = async (slice: Content.BlogSlice) => {
  const client = createClient();

  // Fetch all case studies
  const blogs = await Promise.all(
    slice.primary.blogs.map(async (item) => {
      if (isFilled.contentRelationship(item.blog)) {
        return await client.getByID<Content.BlogDocument>(item.blog.id);
      }
      return null;
    })
  );

  return blogs.filter((blog) => blog !== null) as Content.BlogDocument[];
};

export default async function blogsServer({ slice }: { slice: Content.BlogSlice }) {
  const blogs = await fetchBlogs(slice);

  return <BlogClient slice={slice} Blog={blogs} />;
}
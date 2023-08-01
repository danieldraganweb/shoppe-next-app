import Airtable from "airtable";
import { useEffect, useState } from "react";
import { BlogPostRecord } from "../../app/types";

// config
Airtable.configure({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY || "" });
const table = Airtable.base(
  process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || ""
).table("Blog");

// hook
export function useBlogPosts() {
  const [blogPosts, setBlogPosts] = useState<BlogPostRecord[]>([]);

  // fetcher
  const getAllBlogPosts = async () => {
    const records = await table.select().all();
    setBlogPosts(records as any);
    console.log(records);
  };

  // load on mount
  useEffect(() => {
    getAllBlogPosts();
  }, []);

  // export
  return { blogPosts };
}

// imports
import Airtable from "airtable";
import { useEffect, useState } from "react";
import { Record } from "../../app/types";

// config
Airtable.configure({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY || "" });
const table = Airtable.base(
  process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || ""
).table("Banners");

// hook
export function useBanners() {
  const [banners, setBanners] = useState<Record[]>([]);

  // fetcher
  const getBanners = async () => {
    const banners = await table.select().all();
    setBanners(banners as any);
    console.log(banners);
  };

  // load on mount
  useEffect(() => {
    getBanners();
  }, []);

  // export
  return { banners };
}

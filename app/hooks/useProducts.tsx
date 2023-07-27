// imports
import Airtable from "airtable";
import { useEffect, useState } from "react";
import { Record } from "../../app/types";

// config
Airtable.configure({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY || "" });
const table = Airtable.base(
  process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || ""
).table("Products");

// hook
export function useProducts() {
  const [products, setProducts] = useState<Record[]>([]);

  // fetcher
  const getAllTables = async () => {
    const records = await table.select().all();
    setProducts(records as any);
    console.log(records);
  };

  // load on mount
  useEffect(() => {
    getAllTables();
  }, []);

  // export
  return { products };
}

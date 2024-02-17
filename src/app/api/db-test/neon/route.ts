import { unstable_noStore } from "next/cache";
import { dbNeon } from "@/server/db";
import { products } from "@/server/db/schema-postgres";

export const runtime = "edge";

export async function GET() {
  unstable_noStore();

  const t0 = Date.now();
  const data = await dbNeon.select().from(products);
  const t1 = Date.now();

  return Response.json({
    time: t1 - t0,
    products: data,
  });
}

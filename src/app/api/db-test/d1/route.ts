import { unstable_noStore } from "next/cache";
import { api } from "@/trpc/server";

export const runtime = "edge";

export async function GET() {
  unstable_noStore();

  const t0 = Date.now();
  const res = await api.dbTest.allProducts.query();
  const t1 = Date.now();
  return Response.json({ time: t1 - t0, products: res });
}

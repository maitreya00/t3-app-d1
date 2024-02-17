import { unstable_noStore } from "next/cache";
import { dbPlanetscale } from "@/server/db";

export const runtime = "edge";

export async function GET() {
  unstable_noStore();

  const t0 = Date.now();
  const data = await dbPlanetscale.query.products.findMany();
  const t1 = Date.now();

  return Response.json({
    time: t1 - t0,
    products: data,
  });
}

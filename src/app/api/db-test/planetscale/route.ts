import { unstable_noStore } from "next/cache";
import { pscaleConnection } from "@/server/db";

export const runtime = "edge";

export async function GET() {
  unstable_noStore();

  const t0 = Date.now();
  const data = (await pscaleConnection.execute("SELECT * FROM product;")).rows;
  const t1 = Date.now();

  return Response.json({
    time: t1 - t0,
    products: data,
  });
}

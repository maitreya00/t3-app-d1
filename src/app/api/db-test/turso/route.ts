import { api } from "@/trpc/server";
import { unstable_noStore } from "next/cache";

export const runtime = "edge";

export async function GET() {
  unstable_noStore();

  const t0 = Date.now();
  const res = await api.dbTest.allProductsTurso.query();
  const t1 = Date.now();
  return Response.json({ time: t1 - t0, products: res });
}

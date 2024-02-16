import { unstable_noStore } from "next/cache";
import { api } from "@/trpc/server";

export const runtime = "edge";

export async function GET() {
  unstable_noStore();

  const regex = /mysql:\/\/([^:]+):([^@]+)@([^/]+)/;
  const matches = (process.env.PLANETSCALE_DB_URL ?? "").match(regex);
  if (!matches) throw new Error("Invalid PLANETSCALE_DB_URL");
  const config = {
    host: matches[3],
    username: matches[1],
    password: matches[2],
  };

  const t0 = Date.now();
  let out;
  try {
    const res = await api.dbTest.allProductsPlanetscale.query();
    out = res;
  } catch (e) {
    console.error(e);
    out = JSON.stringify(e);
  }

  const t1 = Date.now();
  return Response.json({ time: t1 - t0, out, config });
}

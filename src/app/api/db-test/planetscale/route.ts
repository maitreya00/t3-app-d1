/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { unstable_noStore } from "next/cache";
import { api } from "@/trpc/server";
import { connect } from "@planetscale/database";
import { dbD1, dbPlanetscale } from "@/server/db";

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
    fetch: (url: any, init: any) => {
      delete init.cache;
      return fetch(url, init);
    },
  };
  const connection = connect(config);
  const data = await connection.execute("SELECT * FROM product;");

  const t0 = Date.now();
  let out1, out2, err1, err2;
  try {
    const res1 = await api.dbTest.allProductsPlanetscale.query();
    out1 = res1;
  } catch (e) {
    console.error(e);
    err1 = JSON.stringify(e);
  }
  try {
    const res2 = await dbPlanetscale.query.products.findMany();
    out2 = res2;
  } catch (e) {
    console.error(e);
    err2 = JSON.stringify(e);
  }

  const t1 = Date.now();
  return Response.json({
    time: t1 - t0,
    out1: out1 ?? "NONE",
    out2: out2 ?? "NONE",
    err1,
    err2,
    config,
    anotherOut: data.rows,
  });
}

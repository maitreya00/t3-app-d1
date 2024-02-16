import { drizzle as drizzleD1 } from "drizzle-orm/d1";
import { drizzle as drizzlePlanetscale } from "drizzle-orm/planetscale-serverless";
import { Client, connect } from "@planetscale/database";
import * as sqliteSchema from "./schema-sqlite";
import * as mysqlSchema from "./schema-mysql";

export const dbD1 = drizzleD1(process.env.DB, { schema: sqliteSchema });

const regex = /mysql:\/\/([^:]+):([^@]+)@([^/]+)/;
const matches = (process.env.PLANETSCALE_DB_URL ?? "").match(regex);
if (!matches) throw new Error("Invalid PLANETSCALE_DB_URL");

// const config = {
//   username: matches[1],
//   password: matches[2],
//   host: matches[3],
//   fetch: (url: string, init: RequestInit<RequestInitCfProperties>) => {
//     // eslint-disable-next-line
//     delete (init as any).cache; // Remove cache header
//     return fetch(url, init);
//   },
// };
//
// const conn = connect(config);
const config = {
  host: matches[3],
  username: matches[1],
  password: matches[2],
  // eslint-disable-next-line
  fetch: (url: string, init: any) => {
    // eslint-disable-next-line
    delete init["cache"];
    // eslint-disable-next-line
    return fetch(url, init);
  },
};

const conn = connect(config);

export const dbPlanetscale = drizzlePlanetscale(conn, { schema: mysqlSchema });
//
// export const dbPlanetscale = drizzlePlanetscale(
//   new Client({
//     url: process.env.PLANETSCALE_DB_URL,
//   }).connection(),
//   { schema: mysqlSchema },
// );

import { drizzle as drizzleD1 } from "drizzle-orm/d1";
import { drizzle as drizzlePlanetscale } from "drizzle-orm/planetscale-serverless";
// import { drizzle as drizzlePostgres } from "drizzle-orm/postgres-js";
import { Client, connect } from "@planetscale/database";
import * as sqliteSchema from "./schema-sqlite";
import * as mysqlSchema from "./schema-mysql";
import { drizzle as drizzleTurso } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

// import postgres from "postgres";
// import { Pool } from "pg";

export const dbD1 = drizzleD1(process.env.DB, { schema: sqliteSchema });

const client = createClient({
  url: process.env.TURSO_DATABASE_URL ?? "",
  authToken: process.env.TURSO_DATABASE_AUTH_TOKEN ?? "",
});
export const tursoDb = drizzleTurso(client);
// export const dbPostgres = drizzlePostgres(
//   postgres(process.env.PG_DATABASE_URL ?? ""),
// );
// export const dbPostgres = drizzlePostgres(
//   postgres(process.env.PG_DATABASE_URL ?? "", {
//     prepare: false,
//   }),
// );
// export const dbPostgres = drizzlePostgres(
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
//   new Pool(process.env.PG_DATABASE_URL ?? ""),
// );

const regex = /mysql:\/\/([^:]+):([^@]+)@([^/]+)/;
const matches = (process.env.PLANETSCALE_DB_URL ?? "").match(regex);
if (!matches) throw new Error("Invalid PLANETSCALE_DB_URL");

const config = {
  username: matches[1],
  password: matches[2],
  host: matches[3],
  fetch: (url: string, init: RequestInit<RequestInitCfProperties>) => {
    // eslint-disable-next-line
    delete (init as any).cache; // Remove cache header
    return fetch(url, init);
  },
};

const conn = connect(config);
// const config = {
//   host: matches[3],
//   username: matches[1],
//   password: matches[2],
//   // eslint-disable-next-line
//   fetch: (url: string, init: any) => {
//     // eslint-disable-next-line
//     delete init["cache"];
//     // eslint-disable-next-line
//     return fetch(url, init);
//   },
// };

// const conn = connect(config);

// export const dbPlanetscale = drizzlePlanetscale(conn, { schema: mysqlSchema });
//
export const dbPlanetscale = drizzlePlanetscale(
  // @ts-expect-error assd
  new Client(config).connection(),
  // new Client({
  //   url: process.env.PLANETSCALE_DB_URL,
  //     fetch: (url: string, init: RequestInit<RequestInitCfProperties>) => {
  //       // eslint-disable-next-line
  //       delete (init as any).cache; // Remove cache header
  //       return fetch(url, init);
  //     },
  // }).connection(),
  { schema: mysqlSchema },
);

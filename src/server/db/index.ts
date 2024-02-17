import { drizzle as drizzleD1 } from "drizzle-orm/d1";
import { drizzle as drizzlePlanetscale } from "drizzle-orm/planetscale-serverless";
// import { drizzle as drizzlePostgres } from "drizzle-orm/postgres-js";
import { Client, connect } from "@planetscale/database";
import * as sqliteSchema from "./schema-sqlite";
import * as mysqlSchema from "./schema-mysql";
import { drizzle as drizzleTurso } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { neon } from "@neondatabase/serverless";
import { drizzle as drizzleNeon } from "drizzle-orm/neon-http";

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

export const pscaleConnection = new Client({
  url: process.env.PLANETSCALE_DB_URL,
  // @ts-expect-error asd
  fetch: (url: string, init: RequestInit<RequestInitCfProperties>) => {
    // eslint-disable-next-line
    delete (init as any).cache; // Remove cache header
    return fetch(url, init);
  },
}).connection();

export const dbPlanetscale = drizzlePlanetscale(pscaleConnection, {
  schema: mysqlSchema,
});

const sql = neon(process.env.NEON_DATABASE_URL!);
export const dbNeon = drizzleNeon(sql);

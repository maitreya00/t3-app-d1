import { drizzle as drizzleD1 } from "drizzle-orm/d1";
import { drizzle as drizzlePlanetscale } from "drizzle-orm/planetscale-serverless";
import { Client } from "@planetscale/database";
import * as sqliteSchema from "./schema-sqlite";
import * as mysqlSchema from "./schema-mysql";

export const dbD1 = drizzleD1(process.env.DB, { schema: sqliteSchema });

export const dbPlanetscale = drizzlePlanetscale(
  new Client({
    url: process.env.PLANETSCALE_DB_URL,
  }).connection(),
  { schema: mysqlSchema },
);

import { drizzle as drizzleD1 } from "drizzle-orm/d1";
import { drizzle as drizzlePlanetscale } from "drizzle-orm/planetscale-serverless";
import { Client } from "@planetscale/database";
import * as sqliteSchema from "./schema-sqlite";
import * as mysqlSchema from "./schema-mysql";

export const dbD1 = drizzleD1(process.env.DB, { schema: sqliteSchema });

export const dbPlanetscale = drizzlePlanetscale(
  new Client({
    url: 'mysql://svgej70ngk8wac9yy58f:pscale_pw_g7Bc75UnR4RltYJf4yI2R6T4BeT7IOsSHynpVkTp6Mv@aws.connect.psdb.cloud/dev?ssl={"rejectUnauthorized":true}',
  }).connection(),
  { schema: mysqlSchema },
);

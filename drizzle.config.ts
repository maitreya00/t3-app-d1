import { type Config } from "drizzle-kit";

// for d1
// export default {
//   schema: "./src/server/db/schema-sqlite.ts",
//   out: "./src/server/db/out",
// } satisfies Config;

// for planetscale
// export default {
//   schema: "./src/server/db/schema-mysql.ts",
//   out: "./src/server/db/out",
//   driver: "mysql2",
//   dbCredentials: {
//     uri: process.env.PLANETSCALE_DB_URL ?? "",
//   },
// } satisfies Config;
//

export default {
  schema: "./src/server/db/schema-postgres.ts",
  out: "./src/server/db/out",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.PG_DATABASE_URL ?? "",
  },
} satisfies Config;

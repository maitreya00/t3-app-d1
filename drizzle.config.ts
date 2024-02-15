import { type Config } from "drizzle-kit";

// for d1
// export default {
//   schema: "./src/server/db/schema-sqlite.ts",
//   out: "./src/server/db/out",
// } satisfies Config;

// for planetscale
export default {
  schema: "./src/server/db/schema-mysql.ts",
  out: "./src/server/db/out",
  driver: "mysql2",
  dbCredentials: {
    uri: 'mysql://3lzml4xlfqvu8nsgg5x4:pscale_pw_dFRjOsAU3abLyWMkufMTZSzh5lRg4ehwdplMgeYRNQ9@aws.connect.psdb.cloud/dev?ssl={"rejectUnauthorized":true}',
  },
} satisfies Config;

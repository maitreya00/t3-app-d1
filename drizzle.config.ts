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
    uri: 'mysql://svgej70ngk8wac9yy58f:pscale_pw_g7Bc75UnR4RltYJf4yI2R6T4BeT7IOsSHynpVkTp6Mv@aws.connect.psdb.cloud/dev?ssl={"rejectUnauthorized":true}',
  },
} satisfies Config;

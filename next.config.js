/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {};

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/dario-piotrowicz/next-on-pages/blob/8e93067/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === "development") {
  // @ts-ignore
  import("@cloudflare/next-on-pages/next-dev").then(({ setupDevBindings }) => {
    setupDevBindings({
      bindings: {
        // Add here the Cloudflare Bindings you want to have available during local development,
        // for more details on Bindings see: https://developers.cloudflare.com/pages/functions/bindings/)
        //
        // KV Example:
        // MY_KV: {
        //   type: 'kv',
        //   id: 'xxx',
        // }
        DB: {
          type: "d1",
          databaseId: "00000000-0000-0000-0000-000000000000",
        },
      },
    });
  });
}

export default config;

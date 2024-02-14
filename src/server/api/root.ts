// import { postRouter } from "@/server/api/routers/post";
import { dbTestRouter } from "@/server/api/routers/db-test";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  // post: postRouter,
  dbTest: dbTestRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/server/db";

export const dbTestRouter = createTRPCRouter({
  allProductsD1: publicProcedure.query(({ ctx }) => {
    return db.query.products.findMany();
  }),
});

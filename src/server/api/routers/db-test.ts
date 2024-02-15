import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { dbD1, dbPlanetscale } from "@/server/db";

export const dbTestRouter = createTRPCRouter({
  allProductsD1: publicProcedure.query(({ ctx }) => {
    return dbD1.query.products.findMany();
  }),
  allProductsPlanetscale: publicProcedure.query(({ ctx }) => {
    return dbPlanetscale.query.products.findMany();
  }),
});

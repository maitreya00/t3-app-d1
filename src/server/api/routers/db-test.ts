import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { dbD1, dbPlanetscale, dbPostgres } from "@/server/db";
import { users } from "@/server/db/schema-postgres";

export const dbTestRouter = createTRPCRouter({
  llProductsD1: publicProcedure.query(({ ctx }) => {
    return dbD1.query.products.findMany();
  }),
  allProductsPlanetscale: publicProcedure.query(({ ctx }) => {
    return dbPlanetscale.query.products.findMany();
  }),
  allProductsSupabase: publicProcedure.query(({ ctx }) => {
    return dbPostgres.select().from(users);
  }),
});

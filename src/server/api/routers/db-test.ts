import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { dbD1, dbPlanetscale, dbPostgres, tursoDb } from "@/server/db";
// import { users } from "@/server/db/schema-postgres";
import { products } from "@/server/db/schema-sqlite";

export const dbTestRouter = createTRPCRouter({
  allProductsD1: publicProcedure.query(({ ctx }) => {
    return dbD1.query.products.findMany();
  }),
  allProductsPlanetscale: publicProcedure.query(({ ctx }) => {
    return dbPlanetscale.query.products.findMany();
  }),
  // allProductsSupabase: publicProcedure.query(({ ctx }) => {
  //   return dbPostgres.select().from(users);
  // }),
  allProductsTurso: publicProcedure.query(({ ctx }) => {
    return tursoDb.select().from(products).all();
  }),
});

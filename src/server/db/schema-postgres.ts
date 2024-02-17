import { text, integer, serial, pgTable } from "drizzle-orm/pg-core";

export const products = pgTable("product", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  supplierId: integer("supplier_id").notNull(),
  categoryId: integer("category_id").notNull(),
  quantityPerUnit: text("quantity_per_unit").notNull(),
  unitPrice: integer("unit_price").notNull(),
  unitsInStock: integer("units_in_stock").notNull(),
  unitsOnOrder: integer("units_on_order").notNull(),
  reorderLevel: integer("reorder_level").notNull(),
  discontinued: integer("discontinued").notNull(),
});

import { text, integer, sqliteTable, numeric } from "drizzle-orm/sqlite-core";

export const products = sqliteTable("product", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  supplierId: integer("supplier_id").notNull(),
  categoryId: integer("category_id").notNull(),
  quantityPerUnit: text("quantity_per_unit").notNull(),
  unitPrice: numeric("unit_price").notNull(),
  unitsInStock: integer("units_in_stock").notNull(),
  unitsOnOrder: integer("units_on_order").notNull(),
  reorderLevel: integer("reorder_level").notNull(),
  discontinued: integer("discontinued").notNull(),
});

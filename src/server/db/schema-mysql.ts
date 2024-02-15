import { text, int, serial, mysqlTable } from "drizzle-orm/mysql-core";

export const products = mysqlTable("product", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  supplierId: int("supplier_id").notNull(),
  categoryId: int("category_id").notNull(),
  quantityPerUnit: text("quantity_per_unit").notNull(),
  unitPrice: int("unit_price").notNull(),
  unitsInStock: int("units_in_stock").notNull(),
  unitsOnOrder: int("units_on_order").notNull(),
  reorderLevel: int("reorder_level").notNull(),
  discontinued: int("discontinued").notNull(),
});

CREATE TABLE `product` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`supplier_id` integer NOT NULL,
	`category_id` integer NOT NULL,
	`quantity_per_unit` text NOT NULL,
	`unit_price` numeric NOT NULL,
	`units_in_stock` integer NOT NULL,
	`units_on_order` integer NOT NULL,
	`reorder_level` integer NOT NULL,
	`discontinued` integer NOT NULL
);

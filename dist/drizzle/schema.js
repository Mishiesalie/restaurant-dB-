"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRelations = exports.statusCatalogRelations = exports.orderStatusRelations = exports.orderMenuItemRelations = exports.categoryRelations = exports.menuItemRelations = exports.addressRelations = exports.restaurantOwnerRelations = exports.cityRelations = exports.restaurantRelations = exports.orderRelations = exports.driverRelations = exports.userRelations = exports.orders_table = exports.status_catalog_table = exports.order_status_table = exports.order_menu_item_table = exports.comment_table = exports.restaurant_owner_table = exports.state_table = exports.city_table = exports.category_table = exports.menu_items_table = exports.restaurant_table = exports.address_table = exports.driver_table = exports.users_table = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
//users
exports.users_table = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 100 }),
    contact_phone: (0, pg_core_1.varchar)("contact_phone", { length: 100 }),
    phone_verified: (0, pg_core_1.boolean)("phone_verified"),
    email: (0, pg_core_1.varchar)("email", { length: 100 }),
    email_verified: (0, pg_core_1.boolean)("email_verified"),
    password: (0, pg_core_1.varchar)("password", { length: 100 }),
    created_at: (0, pg_core_1.timestamp)("created_at"),
    updated_at: (0, pg_core_1.timestamp)("updated_at"),
});
//driver
exports.driver_table = (0, pg_core_1.pgTable)("driver", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    car_make: (0, pg_core_1.varchar)("car_make", { length: 100 }),
    car_model: (0, pg_core_1.varchar)("car_model", { length: 100 }),
    car_year: (0, pg_core_1.varchar)("car_year"),
    user_id: (0, pg_core_1.integer)("city_id").notNull().references(() => exports.users_table.id, { onDelete: "cascade" }),
    online: (0, pg_core_1.boolean)("online"),
    delivering: (0, pg_core_1.timestamp)("delivering"),
    created_at: (0, pg_core_1.timestamp)("created_at"),
    updated_at: (0, pg_core_1.timestamp)("updated_at"),
});
//address
exports.address_table = (0, pg_core_1.pgTable)("address", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    street_address_1: (0, pg_core_1.varchar)("street_address_1", { length: 100 }),
    street_address_2: (0, pg_core_1.varchar)("street_address_2", { length: 100 }),
    zip_code: (0, pg_core_1.varchar)("zip_code", { length: 100 }),
    delivery_instructions: (0, pg_core_1.varchar)("delivery_instructions", { length: 100 }),
    city_id: (0, pg_core_1.integer)("city_id").notNull().references(() => exports.city_table.id, { onDelete: "cascade" }),
    user_id: (0, pg_core_1.integer)("user_id").notNull().references(() => exports.users_table.id, { onDelete: "cascade" }),
    created_at: (0, pg_core_1.timestamp)("created_at"),
    updated_at: (0, pg_core_1.timestamp)("updated_at"),
});
//restaurant
exports.restaurant_table = (0, pg_core_1.pgTable)("restaurant", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 100 }),
    street_address: (0, pg_core_1.varchar)("street_address", { length: 100 }),
    zip_code: (0, pg_core_1.varchar)("zip_code", { length: 100 }),
    city_id: (0, pg_core_1.integer)("city_id").notNull().references(() => exports.city_table.id, { onDelete: "cascade" }),
    created_at: (0, pg_core_1.timestamp)("created_at"),
    updated_at: (0, pg_core_1.timestamp)("updated_at"),
});
//menu_items
exports.menu_items_table = (0, pg_core_1.pgTable)("menu_items", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 100 }),
    restaurant_id: (0, pg_core_1.integer)("restaurant_id").notNull().references(() => exports.restaurant_table.id, { onDelete: "cascade" }),
    category_id: (0, pg_core_1.integer)("cotegory_id").notNull().references(() => exports.category_table.id, { onDelete: "cascade" }),
    discription: (0, pg_core_1.varchar)("discription", { length: 100 }),
    ingredients: (0, pg_core_1.varchar)("ingredients", { length: 100 }),
    price: (0, pg_core_1.varchar)("price", { length: 100 }),
    active: (0, pg_core_1.boolean)("active"),
    created_at: (0, pg_core_1.timestamp)("created_at"),
    updated_at: (0, pg_core_1.timestamp)("updated_at"),
});
//category
exports.category_table = (0, pg_core_1.pgTable)("category", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 100 }),
});
//city
exports.city_table = (0, pg_core_1.pgTable)("city", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 100 }),
    state_id: (0, pg_core_1.integer)("state_id").notNull().references(() => exports.state_table.id, { onDelete: "cascade" }),
    address: (0, pg_core_1.varchar)("address", { length: 100 }),
    state: (0, pg_core_1.varchar)("state", { length: 100 }),
});
//state
exports.state_table = (0, pg_core_1.pgTable)("state", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 100 }),
    code: (0, pg_core_1.varchar)("code", { length: 100 }),
});
//restaurant owner
exports.restaurant_owner_table = (0, pg_core_1.pgTable)("restaurant_owner", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    restaurant_id: (0, pg_core_1.integer)("name").notNull().references(() => exports.restaurant_table.id, { onDelete: "cascade" }),
    owner_id: (0, pg_core_1.integer)("owner_id").notNull().references(() => exports.users_table.id, { onDelete: "cascade" }),
});
//comments
exports.comment_table = (0, pg_core_1.pgTable)("comment", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    user_id: (0, pg_core_1.integer)("user_id").notNull().references(() => exports.users_table.id, { onDelete: "cascade" }),
    order_id: (0, pg_core_1.integer)("order_id").notNull().references(() => exports.orders_table.id, { onDelete: "cascade" }),
    comment_text: (0, pg_core_1.varchar)("comment_text", { length: 100 }),
    is_compliant: (0, pg_core_1.boolean)("is_compliant"),
    is_praise: (0, pg_core_1.boolean)("is_praise"),
    created_at: (0, pg_core_1.timestamp)("created_at"),
    updated_at: (0, pg_core_1.timestamp)("updated_at"),
});
//order_menu_item
exports.order_menu_item_table = (0, pg_core_1.pgTable)("order_menu_item", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    order_id: (0, pg_core_1.integer)("order_id").notNull().references(() => exports.orders_table.id, { onDelete: "cascade" }),
    menu_item_id: (0, pg_core_1.integer)("menu_item_id").notNull().references(() => exports.menu_items_table.id, { onDelete: "cascade" }),
    quantity: (0, pg_core_1.integer)("quantity"),
    iteam_price: (0, pg_core_1.integer)("item_price"),
    price: (0, pg_core_1.integer)("price"),
    comment: (0, pg_core_1.varchar)("comment", { length: 100 }),
});
//order status
exports.order_status_table = (0, pg_core_1.pgTable)("order_status", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    order_id: (0, pg_core_1.integer)("order_id").notNull().references(() => exports.orders_table.id, { onDelete: "cascade" }),
    status_catalog_id: (0, pg_core_1.integer)("status_catalog_id").notNull().references(() => exports.status_catalog_table.id, { onDelete: "cascade" }),
    created_at: (0, pg_core_1.timestamp)("created_at")
});
//status catalog
exports.status_catalog_table = (0, pg_core_1.pgTable)("status_catalog", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    name: (0, pg_core_1.varchar)("name", { length: 100 }),
});
//orders
exports.orders_table = (0, pg_core_1.pgTable)("orders", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    restaurant_id: (0, pg_core_1.integer)("restaurant_id").notNull().references(() => exports.restaurant_table.id, { onDelete: "cascade" }),
    estimated_delivery_time: (0, pg_core_1.timestamp)("estimated_delivery_time"),
    actual_delivery_time: (0, pg_core_1.timestamp)("actual_delivery_time"),
    delivery_address_id: (0, pg_core_1.integer)("delivery_address_id").notNull().references(() => exports.address_table.id, { onDelete: "cascade" }),
    user_id: (0, pg_core_1.integer)("user_id").notNull().references(() => exports.users_table.id, { onDelete: "cascade" }),
    driver_id: (0, pg_core_1.integer)("driver_id").notNull().references(() => exports.driver_table.id, { onDelete: "cascade" }),
    price: (0, pg_core_1.integer)("price"),
    discount: (0, pg_core_1.integer)("discount"),
    final_price: (0, pg_core_1.integer)("final_price"),
    comment: (0, pg_core_1.varchar)("comment", { length: 100 }),
    created_at: (0, pg_core_1.timestamp)("created_at"),
    updated_at: (0, pg_core_1.timestamp)("updated_at"),
});
// relationships
// User relationships
// user to address (one to many)
// user to restaurantowner (one to many)
// user to driver (one to many)
// user to comment (one to many)
// user to order (one to many)
// user to driver (one to one)
exports.userRelations = (0, drizzle_orm_1.relations)(exports.users_table, ({ many }) => ({
    addresses: many(exports.address_table),
    restaurantOwners: many(exports.restaurant_owner_table),
    drivers: many(exports.driver_table),
    comments: many(exports.comment_table),
    orders: many(exports.orders_table)
}));
// Driver relationships
// driver to user (one to many)
// driver to order (one to many)
exports.driverRelations = (0, drizzle_orm_1.relations)(exports.driver_table, ({ one }) => ({
    user: one(exports.users_table, {
        fields: [exports.driver_table.user_id],
        references: [exports.users_table.id]
    }),
}));
// Order relationships
// order to ordermenuitems (one to many)
// order to orderstatus (one to many)
// order to restaurant (many to one)
// order to deliveryaddress (many to one)
// order to user (one to many)
// order to driver (one to one)
exports.orderRelations = (0, drizzle_orm_1.relations)(exports.orders_table, ({ one, many }) => ({
    restaurant: one(exports.restaurant_table, {
        fields: [exports.orders_table.restaurant_id],
        references: [exports.restaurant_table.id]
    }),
    deliveryAddress: one(exports.address_table, {
        fields: [exports.orders_table.delivery_address_id],
        references: [exports.address_table.id]
    }),
    user: one(exports.users_table, {
        fields: [exports.orders_table.user_id],
        references: [exports.users_table.id]
    }),
    driver: one(exports.driver_table, {
        fields: [exports.orders_table.driver_id],
        references: [exports.driver_table.id]
    }),
    orderMenuItems: many(exports.order_menu_item_table),
    orderStatus: many(exports.order_status_table)
}));
// Restaurant relationships : 
// Restaurant to City (One-to-One or Many-to-One)
// restaurant to menu_items (One-to-One or Many-one)
exports.restaurantRelations = (0, drizzle_orm_1.relations)(exports.restaurant_table, ({ one, many }) => ({
    city: one(exports.city_table, {
        fields: [exports.restaurant_table.city_id],
        references: [exports.city_table.id]
    }),
    menuItems: many(exports.menu_items_table),
    orders: many(exports.orders_table),
    owners: many(exports.restaurant_owner_table)
}));
// City relationships
//  City to Restaurant (One-to-One or Many-to-One)
// City to address (One-to-One )
exports.cityRelations = (0, drizzle_orm_1.relations)(exports.city_table, ({ one, many }) => ({
    state: one(exports.state_table, {
        fields: [exports.city_table.state_id],
        references: [exports.state_table.id]
    }),
    restaurants: many(exports.restaurant_table),
    addresses: many(exports.address_table)
}));
// Restaurant owner relationships
// Restaurant owner to users relationship (one to many)
// restaurant owner to restaurant relationship(one to many)
exports.restaurantOwnerRelations = (0, drizzle_orm_1.relations)(exports.restaurant_owner_table, ({ one }) => ({
    restaurant: one(exports.restaurant_table, {
        fields: [exports.restaurant_owner_table.restaurant_id],
        references: [exports.restaurant_table.id]
    }),
    owner: one(exports.users_table, {
        fields: [exports.restaurant_owner_table.owner_id],
        references: [exports.users_table.id]
    })
    // restaurant: many(restaurant_table),
    // addresses: many(address_table)
}));
// Address relationships
// Address to City (One-to-One or Many-to-One)
// address to orders (One-to-many)
exports.addressRelations = (0, drizzle_orm_1.relations)(exports.address_table, ({ one }) => ({
    city: one(exports.city_table, {
        fields: [exports.address_table.city_id],
        references: [exports.city_table.id]
    }),
    user: one(exports.users_table, {
        fields: [exports.address_table.user_id],
        references: [exports.users_table.id]
    })
}));
// Menu_Item relationships
// menu_item to order_menu item (one to many)
// menu_item to order (one to one)
// menu_item to restaurant(many to one)
exports.menuItemRelations = (0, drizzle_orm_1.relations)(exports.menu_items_table, ({ one, many }) => ({
    restaurant: one(exports.restaurant_table, {
        fields: [exports.menu_items_table.restaurant_id],
        references: [exports.restaurant_table.id]
    }),
    category: one(exports.category_table, {
        fields: [exports.menu_items_table.category_id],
        references: [exports.category_table.id]
    }),
    orderMenuItems: many(exports.order_menu_item_table),
    order: one(exports.orders_table, {
        fields: [exports.menu_items_table.id],
        references: [exports.orders_table.id]
    })
}));
// Category relationships
// category to menu_items(one to many)
exports.categoryRelations = (0, drizzle_orm_1.relations)(exports.category_table, ({ many }) => ({
    menuItems: many(exports.menu_items_table)
}));
// OrderMenuItem relationships
// ordermenuitems to menu_items(one to many or many to one)
// ordermenuitems to menu (one to many)
exports.orderMenuItemRelations = (0, drizzle_orm_1.relations)(exports.order_menu_item_table, ({ one }) => ({
    order: one(exports.orders_table, {
        fields: [exports.order_menu_item_table.order_id],
        references: [exports.orders_table.id]
    }),
    menuItem: one(exports.menu_items_table, {
        fields: [exports.order_menu_item_table.menu_item_id],
        references: [exports.menu_items_table.id]
    })
}));
// OrderStatus relationships
// orderstatus to order (one to many)
// orderstatus to statuscatalog (one to many)
exports.orderStatusRelations = (0, drizzle_orm_1.relations)(exports.order_status_table, ({ one }) => ({
    order: one(exports.orders_table, {
        fields: [exports.order_status_table.order_id],
        references: [exports.orders_table.id]
    }),
    statusCatalog: one(exports.status_catalog_table, {
        fields: [exports.order_status_table.status_catalog_id],
        references: [exports.status_catalog_table.id]
    })
}));
// StatusCatalog relationships
// statuscatalog to orderstatus (one to many)
// statuscatalog to statuscatalog (one to many)
exports.statusCatalogRelations = (0, drizzle_orm_1.relations)(exports.status_catalog_table, ({ many }) => ({
    orderStatuses: many(exports.order_status_table)
}));
// Comment relationships
// comment to user (one to many)
// comment to order (one to many)
exports.commentRelations = (0, drizzle_orm_1.relations)(exports.comment_table, ({ one }) => ({
    user: one(exports.users_table, {
        fields: [exports.comment_table.user_id],
        references: [exports.users_table.id]
    }),
    order: one(exports.orders_table, {
        fields: [exports.comment_table.order_id],
        references: [exports.orders_table.id]
    })
}));

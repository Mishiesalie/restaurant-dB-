import { pgTable, serial, text, varchar, integer , boolean, real, date, timestamp, primaryKey, pgEnum} from "drizzle-orm/pg-core";
import  {relations} from "drizzle-orm";



//users
export const users_table = pgTable("users",{
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }),
    contact_phone: varchar("contact_phone", { length: 100 }),
    phone_verified: boolean("phone_verified"),
    email: varchar("email", { length: 100 }),
    email_verified: boolean("email_verified"),
    password: varchar("password", { length: 100 }),
    created_at: date("created_at"),
    updated_at: date("updated_at"),
    
});



//driver
export const driver_table = pgTable("driver",{
    id: serial("id").primaryKey(),
    car_make: varchar("car_make", { length: 100 }),
    car_model: varchar("car_model", { length: 100 }),
    car_year: varchar("car_year"),
    user_id: integer("city_id").notNull().references(() => users_table.id, { onDelete: "cascade" }),
    online: boolean("online"),
    delivering: date("delivering"),
    created_at: date("created_at"),
    updated_at: date("updated_at"),
   
});


//address
export const address_table = pgTable("address",{
    id: serial("id").primaryKey(),
    street_address_1: varchar("street_address_1", { length: 100 }),
    street_address_2: varchar("street_address_2", { length: 100 }),
    zip_code: varchar("zip_code", { length: 100 }),
    delivery_instructions: varchar("delivery_instructions", { length: 100 }),
    city_id: integer("city_id").notNull().references(() => city_table.id, { onDelete: "cascade" }),
    user_id: integer("user_id").notNull().references(() => users_table.id, { onDelete: "cascade" }),
    created_at: date("created_at"),
    updated_at: date("updated_at"),
    
});


//restaurant
export const restaurant_table = pgTable("restaurant",{
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }),
    street_address: varchar("street_address", { length: 100 }),
    zip_code: varchar("zip_code", { length: 100 }),
    city_id: integer("city_id").notNull().references(() => city_table.id, { onDelete: "cascade" }),
    created_at: date("created_at"),
    updated_at: date("updated_at"),
});


//menu_items
export const menu_items_table = pgTable("menu_items",{
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }),
    restaurant_id: integer("restaurant_id").notNull().references(() => restaurant_table.id, { onDelete: "cascade" }),
    category_id: integer("cotegory_id").notNull().references(() => category_table.id, { onDelete: "cascade" }),
    discription: varchar("discription",{ length: 100 }),
    ingredients: varchar("ingredients",{ length: 100 }),
    price: varchar("price",{ length: 100 }),
    active: boolean("active"),
    created_at: date("created_at"),
    updated_at: date("updated_at"),
   
});



//category
export const category_table = pgTable("category",{
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }),
   
});



//city
export const city_table = pgTable("city",{
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }),
    state_id: integer("state_id",).notNull().references(() => state_table.id, { onDelete: "cascade" }),
    address: varchar("address", { length: 100 }),
    state: varchar("state", { length: 100 }),
    

   
});



//state
export const state_table = pgTable("state",{
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }),
    code: varchar("code", { length: 100 }),
});



//restaurant owner
export const restaurant_owner_table = pgTable("restaurant_owner",{
    id: serial("id").primaryKey(),
    restaurant_id: integer("name").notNull().references(() => restaurant_table.id, { onDelete: "cascade" }),
    owner_id: integer("owner_id").notNull().references(() => users_table.id, { onDelete: "cascade" }),
    
})


//comments
export const comment_table = pgTable("comment",{
    id: serial("id").primaryKey(),
    user_id: integer("user_id").notNull().references(() => users_table.id, { onDelete: "cascade" }),
    order_id: integer("order_id").notNull().references(() => orders_table.id, { onDelete: "cascade" }),
    comment_text: varchar("comment_text", { length: 100 }),
    is_compliant: boolean("is_compliant"),
    is_praise: boolean("is_praise"),
    created_at: date("created_at"),
    updated_at: date("updated_at"),
    
});



//order_menu_item
export const order_menu_item_table = pgTable("order_menu_item",{
    id: serial("id").primaryKey(),
    order_id: integer("order_id").notNull().references(() => orders_table.id, { onDelete: "cascade" }),
    menu_item_id: integer("menu_item_id").notNull().references(() => menu_items_table.id, { onDelete: "cascade" }),
    quantity: integer("quantity"),
    iteam_price: integer("item_price"),
    price: integer("price"),
    comment: varchar("comment", { length: 100 }),
    
});



//order status
export const order_status_table = pgTable("order_status",{
    id: serial("id").primaryKey(),
    order_id: integer("order_id").notNull().references(() => orders_table.id, { onDelete: "cascade" }),
    status_catalog_id: integer("status_catalog_id").notNull().references(() => status_catalog_table.id, { onDelete: "cascade" }),
    created_at: date("created_at")
    
});



//status catalog
export const status_catalog_table = pgTable("status_catalog",{
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }),
    
});


//orders
export const orders_table = pgTable("orders",{
    id: serial("id").primaryKey(),
    restaurant_id: integer("restaurant_id").notNull().references(() => restaurant_table.id, { onDelete: "cascade" }),
    estimated_delivery_time: timestamp("estimated_delivery_time"),
    actual_delivery_time: timestamp("actual_delivery_time"),
    delivery_address_id: integer("delivery_address_id").notNull().references(() => address_table.id, { onDelete: "cascade" }),
    user_id: integer("user_id").notNull().references(() => users_table.id, { onDelete: "cascade" }),
    driver_id: integer("driver_id").notNull().references(() => driver_table.id, { onDelete: "cascade" }),
    price: integer("price"),
    discount: integer("discount"),
    final_price: integer("final_price"),
    comment: varchar("comment", { length: 100 }),
    created_at: date("created_at"),
    updated_at: date("updated_at"),
   
});


// relationships

// User relationships
// user to address (one to many)
// user to restaurantowner (one to many)
// user to driver (one to many)
// user to comment (one to many)
// user to order (one to many)
// user to driver (one to one)
export const userRelations = relations(users_table, ({ many }) => ({
    addresses: many(address_table),
    restaurantOwners: many(restaurant_owner_table),
    drivers: many(driver_table),
    comments: many(comment_table),
    orders: many(orders_table)
}));

// Driver relationships
// driver to user (one to many)
// driver to order (one to many)
export const driverRelations = relations(driver_table, ({ one }) => ({
    user: one(users_table, {
        fields: [driver_table.user_id],
        references: [users_table.id]
    }),

}));


// Order relationships
// order to ordermenuitems (one to many)
// order to orderstatus (one to many)
// order to restaurant (many to one)
// order to deliveryaddress (many to one)
// order to user (one to many)
// order to driver (one to one)
export const orderRelations = relations(orders_table, ({ one, many }) => ({
    restaurant: one(restaurant_table, {
        fields: [orders_table.restaurant_id],
        references: [restaurant_table.id]
    }),
    deliveryAddress: one(address_table, {
        fields: [orders_table.delivery_address_id],
        references: [address_table.id]
    }),
    user: one(users_table, {
        fields: [orders_table.user_id],
        references: [users_table.id]
    }),
    driver: one(driver_table, {
        fields: [orders_table.driver_id],
        references: [driver_table.id]
    }),
    orderMenuItems: many(order_menu_item_table),
    orderStatus: many(order_status_table)
}));



// Restaurant relationships : 
// Restaurant to City (One-to-One or Many-to-One)
// restaurant to menu_items (One-to-One or Many-one)
export const restaurantRelations = relations(restaurant_table, ({ one, many }) => ({
    city: one(city_table, {
        fields: [restaurant_table.city_id],
        references: [city_table.id]
    }),
    menuItems: many(menu_items_table),
    orders: many(orders_table),
    owners: many(restaurant_owner_table)
}));


// City relationships
//  City to Restaurant (One-to-One or Many-to-One)
// City to address (One-to-One )
export const cityRelations = relations(city_table, ({ one, many }) => ({
    state: one(state_table, {
        fields: [city_table.state_id],
        references: [state_table.id]
    }),
    restaurants: many(restaurant_table),
    addresses: many(address_table)
}));


// Restaurant owner relationships
// Restaurant owner to users relationship (one to many)
// restaurant owner to restaurant relationship(one to many)
export const restaurantOwnerRelations = relations(restaurant_owner_table, ({ one }) => ({
    restaurant: one(restaurant_table, {
        fields: [restaurant_owner_table.restaurant_id],
        references: [restaurant_table.id]
    }),
    owner: one(users_table, {
        fields: [restaurant_owner_table.owner_id],
        references: [users_table.id]
    })
    // restaurant: many(restaurant_table),
    // addresses: many(address_table)
}));

// Address relationships
// Address to City (One-to-One or Many-to-One)
// address to orders (One-to-many)
export const addressRelations = relations(address_table, ({ one }) => ({
    city: one(city_table, {
        fields: [address_table.city_id],
        references: [city_table.id]
    }),
    user: one(users_table, {
        fields: [address_table.user_id],
        references: [users_table.id]
    })
}));

// Menu_Item relationships
// menu_item to order_menu item (one to many)
// menu_item to order (one to one)
// menu_item to restaurant(many to one)
export const menuItemRelations = relations(menu_items_table, ({ one, many }) => ({
    restaurant: one(restaurant_table, {
        fields: [menu_items_table.restaurant_id],
        references: [restaurant_table.id]
    }),
    category: one(category_table, {
        fields: [menu_items_table.category_id],
        references: [category_table.id]
    }),
    orderMenuItems: many(order_menu_item_table),
    order: one(orders_table, {
        fields: [menu_items_table.id],
        references: [orders_table.id]
    })
}));

// Category relationships
// category to menu_items(one to many)
export const categoryRelations = relations(category_table, ({ many }) => ({
    menuItems: many(menu_items_table)
}));

// OrderMenuItem relationships
// ordermenuitems to menu_items(one to many or many to one)
// ordermenuitems to menu (one to many)
export const orderMenuItemRelations = relations(order_menu_item_table, ({ one }) => ({
    order: one(orders_table, {
        fields: [order_menu_item_table.order_id],
        references: [orders_table.id]
    }),
    menuItem: one(menu_items_table, {
        fields: [order_menu_item_table.menu_item_id],
        references: [menu_items_table.id]
    })
}));


// OrderStatus relationships
// orderstatus to order (one to many)
// orderstatus to statuscatalog (one to many)
export const orderStatusRelations = relations(order_status_table, ({ one }) => ({
    order: one(orders_table, {
        fields: [order_status_table.order_id],
        references: [orders_table.id]
    }),
    statusCatalog: one(status_catalog_table, {
        fields: [order_status_table.status_catalog_id],
        references: [status_catalog_table.id]
    })
}));

// StatusCatalog relationships
// statuscatalog to orderstatus (one to many)
// statuscatalog to statuscatalog (one to many)
export const statusCatalogRelations = relations(status_catalog_table, ({ many }) => ({
    orderStatuses: many(order_status_table)
}));




// Comment relationships
// comment to user (one to many)
// comment to order (one to many)
export const commentRelations = relations(comment_table, ({ one }) => ({
    user: one(users_table, {
        fields: [comment_table.user_id],
        references: [users_table.id]
    }),
    order: one(orders_table, {
        fields: [comment_table.order_id],
        references: [orders_table.id]
    })
}));



// Typeof functions
export type cityRelationsType = typeof city_table.$inferInsert;
export type restaurantRelationsType = typeof restaurant_table.$inferInsert;
export type restaurantOwnerRelationsType = typeof restaurant_owner_table.$inferInsert;
export type addressRelationsType = typeof address_table.$inferInsert;
export type menuItemRelationsType = typeof menu_items_table.$inferInsert;
export type categoryRelationsType = typeof category_table.$inferInsert;
export type orderMenuItemRelationsType = typeof order_menu_item_table.$inferInsert;
export type orderRelationsType = typeof orders_table.$inferInsert;
export type orderStatusRelationsType = typeof order_status_table.$inferInsert;
export type statusCatalogRelationsType = typeof status_catalog_table.$inferInsert;
export type userRelationsType = typeof users_table.$inferInsert;
export type driverRelationsType = typeof driver_table.$inferInsert;
export type commentRelationsType = typeof comment_table.$inferInsert;
export type stateRelationsType = typeof state_table.$inferInsert;

export type cityselect = typeof city_table.$inferSelect;
export type restaurantselect = typeof restaurant_table.$inferSelect;
export type restaurantOwnerselect = typeof restaurant_owner_table.$inferSelect;
export type addressselect = typeof address_table.$inferSelect;
export type menuItemselect = typeof menu_items_table.$inferSelect;
export type categoryselect = typeof category_table.$inferSelect;
export type orderMenuItemselect = typeof order_menu_item_table.$inferSelect;
export type orderselect = typeof orders_table.$inferSelect;
export type orderStatusselect = typeof order_status_table.$inferSelect;
export type statusCatalogselect = typeof status_catalog_table.$inferSelect;
export type userselect = typeof users_table.$inferSelect;
export type driverselect = typeof driver_table.$inferSelect;
export type commentselect = typeof comment_table.$inferSelect;
export type stateselect = typeof state_table.$inferSelect;




export const roleEnum = pgEnum("role", ["admin", "user"])

export const login_table = pgTable("login", {
    login_id: serial("id").primaryKey(),
    user_id: integer("user_id").notNull().references(() => users_table.id, { onDelete: "cascade" }),
    password: varchar("password", { length: 100 }),
    username: varchar("username", { length: 100 }),
    role: roleEnum("role").default("user")
});

export const loginRelations = relations(login_table, ({ one }) => ({
    user: one(users_table, {
        fields: [login_table.user_id],
        references: [users_table.id]
    })
}));


export type loginRelationsType = typeof login_table.$inferInsert;

export type loginselect = typeof login_table.$inferSelect;
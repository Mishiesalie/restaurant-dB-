"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleterestaurantownerService = exports.updaterestaurantownerService = exports.createrestaurantownerService = exports.getrestaurantownerService = exports.restaurantownerService = void 0;
const expressions_1 = require("drizzle-orm/expressions");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
//get users from the database
const restaurantownerService = async (limit) => {
    if (limit) {
        return await db_1.db.query.restaurant_owner_table.findMany({
            limit: limit
        });
    }
    return;
    await db_1.db.query.restaurant_owner_table.findMany();
};
exports.restaurantownerService = restaurantownerService;
const getrestaurantownerService = async (id) => {
    return await db_1.db.query.restaurant_owner_table.findFirst({
        where: (0, expressions_1.eq)(schema_1.restaurant_owner_table.id, id)
    });
};
exports.getrestaurantownerService = getrestaurantownerService;
const createrestaurantownerService = async (restaurantowner) => {
    await db_1.db.insert(schema_1.restaurant_owner_table).values(restaurantowner);
    return "restaurantowner created successfully";
};
exports.createrestaurantownerService = createrestaurantownerService;
const updaterestaurantownerService = async (id, restaurantowner) => {
    await db_1.db.update(schema_1.restaurant_owner_table).set(restaurantowner).where((0, expressions_1.eq)(schema_1.restaurant_owner_table.id, id));
    return "restaurantowner updated successfully";
};
exports.updaterestaurantownerService = updaterestaurantownerService;
const deleterestaurantownerService = async (id) => {
    await db_1.db.delete(schema_1.restaurant_owner_table).where((0, expressions_1.eq)(schema_1.restaurant_owner_table.id, id));
    return "restaurantowner deleted successfully";
};
exports.deleterestaurantownerService = deleterestaurantownerService;

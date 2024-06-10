"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleterestaurantService = exports.updaterestaurantService = exports.createrestaurantService = exports.getrestaurantService = exports.restaurantService = void 0;
const expressions_1 = require("drizzle-orm/expressions");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
//get users from the database
const restaurantService = async (limit) => {
    if (limit) {
        return await db_1.db.query.restaurant_table.findMany({
            limit: limit
        });
    }
    return;
    await db_1.db.query.restaurant_table.findMany();
};
exports.restaurantService = restaurantService;
const getrestaurantService = async (id) => {
    return await db_1.db.query.restaurant_table.findFirst({
        where: (0, expressions_1.eq)(schema_1.restaurant_table.id, id)
    });
};
exports.getrestaurantService = getrestaurantService;
const createrestaurantService = async (restaurant) => {
    await db_1.db.insert(schema_1.restaurant_table).values(restaurant);
    return "restaurant created successfully";
};
exports.createrestaurantService = createrestaurantService;
const updaterestaurantService = async (id, restaurant) => {
    await db_1.db.update(schema_1.restaurant_table).set(restaurant).where((0, expressions_1.eq)(schema_1.restaurant_table.id, id));
    return "restaurant updated successfully";
};
exports.updaterestaurantService = updaterestaurantService;
const deleterestaurantService = async (id) => {
    await db_1.db.delete(schema_1.restaurant_table).where((0, expressions_1.eq)(schema_1.restaurant_table.id, id));
    return "restaurant deleted successfully";
};
exports.deleterestaurantService = deleterestaurantService;

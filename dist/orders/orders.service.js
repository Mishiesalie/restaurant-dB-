"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteordersService = exports.updateordersService = exports.createordersService = exports.getordersService = exports.orderService = void 0;
const expressions_1 = require("drizzle-orm/expressions");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
//get users from the database
const orderService = async (limit) => {
    if (limit) {
        return await db_1.db.query.orders_table.findMany({
            limit: limit
        });
    }
    return;
    await db_1.db.query.orders_table.findMany();
};
exports.orderService = orderService;
const getordersService = async (id) => {
    return await db_1.db.query.orders_table.findFirst({
        where: (0, expressions_1.eq)(schema_1.orders_table.id, id)
    });
};
exports.getordersService = getordersService;
const createordersService = async (user) => {
    await db_1.db.insert(schema_1.orders_table).values(user);
    return "orders created successfully";
};
exports.createordersService = createordersService;
const updateordersService = async (id, user) => {
    await db_1.db.update(schema_1.orders_table).set(user).where((0, expressions_1.eq)(schema_1.orders_table.id, id));
    return "orders updated successfully";
};
exports.updateordersService = updateordersService;
const deleteordersService = async (id) => {
    await db_1.db.delete(schema_1.orders_table).where((0, expressions_1.eq)(schema_1.orders_table.id, id));
    return "orders deleted successfully";
};
exports.deleteordersService = deleteordersService;

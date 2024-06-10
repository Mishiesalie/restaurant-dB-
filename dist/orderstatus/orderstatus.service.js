"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteorderstatusService = exports.updateorderstatusService = exports.createorderstatusService = exports.getorderstatusService = exports.orderstatusService = void 0;
const expressions_1 = require("drizzle-orm/expressions");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
//get orderstatus from the database
const orderstatusService = async (limit) => {
    if (limit) {
        return await db_1.db.query.order_status_table.findMany({
            limit: limit
        });
    }
    return;
    await db_1.db.query.order_status_table.findMany();
};
exports.orderstatusService = orderstatusService;
const getorderstatusService = async (id) => {
    return await db_1.db.query.order_status_table.findFirst({
        where: (0, expressions_1.eq)(schema_1.order_status_table.id, id)
    });
};
exports.getorderstatusService = getorderstatusService;
const createorderstatusService = async (orderstatus) => {
    await db_1.db.insert(schema_1.order_status_table).values(orderstatus);
    return "orderstatus created successfully";
};
exports.createorderstatusService = createorderstatusService;
const updateorderstatusService = async (id, orderstatus) => {
    await db_1.db.update(schema_1.order_status_table).set(orderstatus).where((0, expressions_1.eq)(schema_1.order_status_table.id, id));
    return "orderstatus updated successfully";
};
exports.updateorderstatusService = updateorderstatusService;
const deleteorderstatusService = async (id) => {
    await db_1.db.delete(schema_1.order_status_table).where((0, expressions_1.eq)(schema_1.order_status_table.id, id));
    return "orderstatus deleted successfully";
};
exports.deleteorderstatusService = deleteorderstatusService;

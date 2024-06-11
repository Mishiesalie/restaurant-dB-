"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressService = void 0;
const db_1 = require("../drizzle/db");
//get users from the database
const addressService = async (limit) => {
    if (limit) {
        return await db_1.db.query.address_table.findMany({
            limit: limit
        });
    }
    return;
    await db_1.db.query.address_table.findMany();
};
exports.addressService = addressService;

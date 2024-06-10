"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletestateService = exports.updatestateService = exports.createstateService = exports.getstateService = exports.stateService = void 0;
const expressions_1 = require("drizzle-orm/expressions");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
//get users from the database
const stateService = async (limit) => {
    if (limit) {
        return await db_1.db.query.state_table.findMany({
            limit: limit
        });
    }
    return await db_1.db.query.state_table.findMany();
};
exports.stateService = stateService;
const getstateService = async (id) => {
    return await db_1.db.query.state_table.findFirst({
        where: (0, expressions_1.eq)(schema_1.state_table.id, id)
    });
};
exports.getstateService = getstateService;
const createstateService = async (user) => {
    await db_1.db.insert(schema_1.state_table).values(user);
    return "state created successfully";
};
exports.createstateService = createstateService;
const updatestateService = async (id, user) => {
    await db_1.db.update(schema_1.state_table).set(user).where((0, expressions_1.eq)(schema_1.state_table.id, id));
    return "state updated successfully";
};
exports.updatestateService = updatestateService;
const deletestateService = async (id) => {
    await db_1.db.delete(schema_1.state_table).where((0, expressions_1.eq)(schema_1.state_table.id, id));
    return "state deleted successfully";
};
exports.deletestateService = deletestateService;

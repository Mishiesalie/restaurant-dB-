"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletedriverService = exports.updatedriverService = exports.createdriverService = exports.getdriverService = exports.driverService = void 0;
const expressions_1 = require("drizzle-orm/expressions");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
//get drivers from the database
const driverService = async (limit) => {
    if (limit) {
        return await db_1.default.query.driver_table.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.driver_table.findMany();
};
exports.driverService = driverService;
const getdriverService = async (id) => {
    return await db_1.default.query.driver_table.findFirst({
        where: (0, expressions_1.eq)(schema_1.driver_table.id, id)
    });
};
exports.getdriverService = getdriverService;
const createdriverService = async (driver) => {
    await db_1.default.insert(schema_1.driver_table).values(driver);
    return "driver created successfully";
};
exports.createdriverService = createdriverService;
const updatedriverService = async (id, driver) => {
    await db_1.default.update(schema_1.driver_table).set(driver).where((0, expressions_1.eq)(schema_1.driver_table.id, id));
    return "driver updated successfully";
};
exports.updatedriverService = updatedriverService;
const deletedriverService = async (id) => {
    await db_1.default.delete(schema_1.driver_table).where((0, expressions_1.eq)(schema_1.driver_table.id, id));
    return "driver deleted successfully";
};
exports.deletedriverService = deletedriverService;

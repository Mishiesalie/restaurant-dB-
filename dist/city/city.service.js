"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletecityService = exports.updatecityService = exports.createcityService = exports.getcityService = exports.cityService = void 0;
const expressions_1 = require("drizzle-orm/expressions");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
//get users from the database
const cityService = async (limit) => {
    if (limit) {
        return await db_1.default.query.city_table.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.city_table.findMany();
};
exports.cityService = cityService;
const getcityService = async (id) => {
    return await db_1.default.query.city_table.findFirst({
        where: (0, expressions_1.eq)(schema_1.city_table.id, id)
    });
};
exports.getcityService = getcityService;
const createcityService = async (user) => {
    await db_1.default.insert(schema_1.city_table).values(user);
    return "city created successfully";
};
exports.createcityService = createcityService;
const updatecityService = async (id, user) => {
    await db_1.default.update(schema_1.city_table).set(user).where((0, expressions_1.eq)(schema_1.city_table.id, id));
    return "city updated successfully";
};
exports.updatecityService = updatecityService;
const deletecityService = async (id) => {
    await db_1.default.delete(schema_1.city_table).where((0, expressions_1.eq)(schema_1.city_table.id, id));
    return "city deleted successfully";
};
exports.deletecityService = deletecityService;

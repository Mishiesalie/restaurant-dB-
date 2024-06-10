"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryService = void 0;
const db_1 = __importDefault(require("../drizzle/db"));
//get users from the database
const categoryService = async (limit) => {
    if (limit) {
        return await db_1.default.query.category_table.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.category_table.findMany();
};
exports.categoryService = categoryService;

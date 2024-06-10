"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletemenuItemService = exports.updatemenuItemService = exports.createmenuItemService = exports.getmenuItemService = exports.menuItemService = void 0;
const expressions_1 = require("drizzle-orm/expressions");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
//get users from the database
const menuItemService = async (limit) => {
    if (limit) {
        return await db_1.default.query.menu_items_table.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.menu_items_table.findMany();
};
exports.menuItemService = menuItemService;
const getmenuItemService = async (id) => {
    return await db_1.default.query.menu_items_table.findFirst({
        where: (0, expressions_1.eq)(schema_1.menu_items_table.id, id)
    });
};
exports.getmenuItemService = getmenuItemService;
const createmenuItemService = async (menuItem) => {
    await db_1.default.insert(schema_1.menu_items_table).values(menuItem);
    return "menuItem created successfully";
};
exports.createmenuItemService = createmenuItemService;
const updatemenuItemService = async (id, menuItem) => {
    await db_1.default.update(schema_1.menu_items_table).set(menuItem).where((0, expressions_1.eq)(schema_1.menu_items_table.id, id));
    return "menuItem updated successfully";
};
exports.updatemenuItemService = updatemenuItemService;
const deletemenuItemService = async (id) => {
    await db_1.default.delete(schema_1.menu_items_table).where((0, expressions_1.eq)(schema_1.menu_items_table.id, id));
    return "menuItem deleted successfully";
};
exports.deletemenuItemService = deletemenuItemService;

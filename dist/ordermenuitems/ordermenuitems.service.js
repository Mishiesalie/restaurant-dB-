"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteorderMenuItemService = exports.updateorderMenuItemService = exports.createorderMenuItemService = exports.getorderMenuItemService = exports.orderMenuItemService = void 0;
const expressions_1 = require("drizzle-orm/expressions");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
//get orderMenuItem from the database
const orderMenuItemService = async (limit) => {
    if (limit) {
        return await db_1.default.query.order_menu_item_table.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.order_menu_item_table.findMany();
};
exports.orderMenuItemService = orderMenuItemService;
const getorderMenuItemService = async (id) => {
    return await db_1.default.query.order_menu_item_table.findFirst({
        where: (0, expressions_1.eq)(schema_1.order_menu_item_table.id, id)
    });
};
exports.getorderMenuItemService = getorderMenuItemService;
const createorderMenuItemService = async (orderMenuItem) => {
    await db_1.default.insert(schema_1.order_menu_item_table).values(orderMenuItem);
    return "orderMenuItem created successfully";
};
exports.createorderMenuItemService = createorderMenuItemService;
const updateorderMenuItemService = async (id, orderMenuItem) => {
    await db_1.default.update(schema_1.order_menu_item_table).set(orderMenuItem).where((0, expressions_1.eq)(schema_1.order_menu_item_table.id, id));
    return "orderMenuItem updated successfully";
};
exports.updateorderMenuItemService = updateorderMenuItemService;
const deleteorderMenuItemService = async (id) => {
    await db_1.default.delete(schema_1.order_menu_item_table).where((0, expressions_1.eq)(schema_1.order_menu_item_table.id, id));
    return "orderMenuItem deleted successfully";
};
exports.deleteorderMenuItemService = deleteorderMenuItemService;

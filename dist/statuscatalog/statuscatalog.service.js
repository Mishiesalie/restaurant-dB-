"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletestatusCatalogService = exports.updatestatusCatalogService = exports.createstatusCatalogService = exports.getstatusCatelogService = exports.statuscatalogService = void 0;
const expressions_1 = require("drizzle-orm/expressions");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
//get users from the database
const statuscatalogService = async (limit) => {
    if (limit) {
        return await db_1.default.query.status_catalog_table.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.status_catalog_table.findMany();
};
exports.statuscatalogService = statuscatalogService;
const getstatusCatelogService = async (id) => {
    return await db_1.default.query.status_catalog_table.findFirst({
        where: (0, expressions_1.eq)(schema_1.status_catalog_table.id, id)
    });
};
exports.getstatusCatelogService = getstatusCatelogService;
const createstatusCatalogService = async (statusCatalog) => {
    await db_1.default.insert(schema_1.status_catalog_table).values(statusCatalog);
    return "statusCatalog created successfully";
};
exports.createstatusCatalogService = createstatusCatalogService;
const updatestatusCatalogService = async (id, statusCatalog) => {
    await db_1.default.update(schema_1.status_catalog_table).set(statusCatalog).where((0, expressions_1.eq)(schema_1.status_catalog_table.id, id));
    return "statusCatalog updated successfully";
};
exports.updatestatusCatalogService = updatestatusCatalogService;
const deletestatusCatalogService = async (id) => {
    await db_1.default.delete(schema_1.status_catalog_table).where((0, expressions_1.eq)(schema_1.status_catalog_table.id, id));
    return "statusCatalog deleted successfully";
};
exports.deletestatusCatalogService = deletestatusCatalogService;

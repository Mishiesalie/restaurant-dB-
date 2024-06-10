"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentService = void 0;
const db_1 = __importDefault(require("../drizzle/db"));
//get users from the database
const commentService = async (limit) => {
    if (limit) {
        return await db_1.default.query.comment_table.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.comment_table.findMany();
};
exports.commentService = commentService;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsRouter = void 0;
const hono_1 = require("hono");
const comments_controller_1 = require("./comments.controller");
exports.commentsRouter = new hono_1.Hono();
//get all users      api/users
exports.commentsRouter.get("/comments", comments_controller_1.listcomment);

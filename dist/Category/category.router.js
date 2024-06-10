"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const hono_1 = require("hono");
const category_controller_1 = require("./category.controller");
exports.categoryRouter = new hono_1.Hono();
//get all users      api/users
exports.categoryRouter.get("/category", category_controller_1.listcategory);

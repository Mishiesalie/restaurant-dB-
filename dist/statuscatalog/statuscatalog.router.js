"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statuscatalogRouter = void 0;
const hono_1 = require("hono");
const statuscatalog_controller_1 = require("./statuscatalog.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
exports.statuscatalogRouter = new hono_1.Hono();
//get all users      api/users
exports.statuscatalogRouter.get("/statuscatalog", statuscatalog_controller_1.liststatuscatalog);
//get a single user    api/users/1
exports.statuscatalogRouter.get("/users/:id", statuscatalog_controller_1.getstatusCatelog);
// create a user 
exports.statuscatalogRouter.post("/users", (0, zod_validator_1.zValidator)('json', validators_1.statusCatelogSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.success ? result.data : { error: 'Validation failed' }, result.success ? 200 : 400);
    }
}), statuscatalog_controller_1.createstatusCatelog);
//update a user
exports.statuscatalogRouter.put("/users/:id", statuscatalog_controller_1.updatestatusCatelog);
exports.statuscatalogRouter.delete("/users/:id", statuscatalog_controller_1.deletestatusCatelog);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantownerRouter = void 0;
const hono_1 = require("hono");
const restaurantowner_controller_1 = require("./restaurantowner.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
exports.restaurantownerRouter = new hono_1.Hono();
//get all restaurantowner      api/users
exports.restaurantownerRouter.get("/restaurantowner", restaurantowner_controller_1.listrestaurantowner);
//get a single restaurantowner    api/users/1
exports.restaurantownerRouter.get("/restaurantowner/:id", restaurantowner_controller_1.getrestaurantowner);
// create a restaurantowner 
exports.restaurantownerRouter.post("/restaurantowner", (0, zod_validator_1.zValidator)('json', validators_1.restaurantownerSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.success ? result.data : { error: 'Validation failed' }, result.success ? 200 : 400);
    }
}), restaurantowner_controller_1.createrestaurantowner);
//update a restaurantowner
exports.restaurantownerRouter.put("/restaurantowner/:id", restaurantowner_controller_1.updaterestaurantowner);
exports.restaurantownerRouter.delete("/restaurantowner/:id", restaurantowner_controller_1.deleterestaurantowner);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantRouter = void 0;
const hono_1 = require("hono");
const restaurant_controller_1 = require("./restaurant.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
exports.restaurantRouter = new hono_1.Hono();
//get all restaurant     
exports.restaurantRouter.get("/restaurant", restaurant_controller_1.listrestaurant);
//get a single restaurant    
exports.restaurantRouter.get("/users/:id", restaurant_controller_1.getrestaurant);
// create a restaurant 
exports.restaurantRouter.post("/users", (0, zod_validator_1.zValidator)('json', validators_1.restaurantSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.success ? result.data : { error: 'Validation failed' }, result.success ? 200 : 400);
    }
}), restaurant_controller_1.createrestaurant);
//update a restaurant
exports.restaurantRouter.put("/users/:id", restaurant_controller_1.updaterestaurant);
exports.restaurantRouter.delete("/users/:id", restaurant_controller_1.deleterestaurant);

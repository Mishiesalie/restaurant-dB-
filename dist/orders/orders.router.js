"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersRouter = void 0;
const hono_1 = require("hono");
const orders_controller_1 = require("./orders.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
exports.ordersRouter = new hono_1.Hono();
//get all orders
exports.ordersRouter.get("/orders", orders_controller_1.listorder);
//get a single order
exports.ordersRouter.get("/orders/:id", orders_controller_1.getorders);
// create a user 
exports.ordersRouter.post("/orders", (0, zod_validator_1.zValidator)('json', validators_1.orderstatusSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), orders_controller_1.createorders);
//update a user
exports.ordersRouter.put("/orders/:id", orders_controller_1.updateorders);
exports.ordersRouter.delete("/orders/:id", orders_controller_1.deleteorders);

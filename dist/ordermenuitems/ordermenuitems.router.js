"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderMenuItemRouter = void 0;
const hono_1 = require("hono");
const ordermenuitems_controller_1 = require("./ordermenuitems.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
exports.orderMenuItemRouter = new hono_1.Hono();
//get all orderMenuItem      
exports.orderMenuItemRouter.get("/ordermenuitems", ordermenuitems_controller_1.orderMenuItemstate);
//get a single orderMenuItem    
exports.orderMenuItemRouter.get("/orderMenuItem/:id", ordermenuitems_controller_1.getorderMenuItem);
// create a orderMenuItem 
exports.orderMenuItemRouter.post("/orderMenuItem", (0, zod_validator_1.zValidator)('json', validators_1.orderMenuItemSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), ordermenuitems_controller_1.createorderMenuItem);
//update a orderMenuItem
exports.orderMenuItemRouter.put("/orderMenuItem/:id", ordermenuitems_controller_1.updateorderMenuItem);
exports.orderMenuItemRouter.delete("/orderMenuItem/:id", ordermenuitems_controller_1.deleteorderMenuItem);

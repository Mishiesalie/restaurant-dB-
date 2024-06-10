"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderstatusRouter = void 0;
const hono_1 = require("hono");
const orderstatus_controller_1 = require("./orderstatus.controller");
// const { zValidator } = await import("@hono/zod-validator");
const validators_1 = require("../validators");
const zod_validator_1 = require("@hono/zod-validator");
// Now, use the imported function directly
(0, zod_validator_1.zValidator)('json', validators_1.orderstatusSchema, (result, c) => {
    if (!result.success) {
        // Check if success is false before accessing error
        if ('error' in result) {
            return c.json(result.error, 400);
        }
        else {
            // Handle the case when success is true but error is missing
            return c.json({ message: 'Validation failed' }, 400);
        }
    }
});
exports.orderstatusRouter = new hono_1.Hono();
//get all orderstatus      api/orderstatus
exports.orderstatusRouter.get("/orderstatus", orderstatus_controller_1.listorderstatus);
//get a single orderstatus    api/orderstatus/1
exports.orderstatusRouter.get("/users/:id", orderstatus_controller_1.getorderstatus);
// create a orderstatus 
exports.orderstatusRouter.post("/orderstatus", (0, zod_validator_1.zValidator)('json', validators_1.orderstatusSchema, (result, c) => {
    if (!result.success) {
        // Check if success is false before accessing error
        if ('error' in result) {
            return c.json(result.error, 400);
        }
        else {
            // Handle the case when success is true but error is missing
            return c.json({ message: 'Validation failed' }, 400);
        }
    }
}), orderstatus_controller_1.createorderstatus);
//update a orderstatus
exports.orderstatusRouter.put("/orderstatus/:id", orderstatus_controller_1.updateorderstatus);
exports.orderstatusRouter.delete("/orderstatus/:id", orderstatus_controller_1.deleteorderstatus);

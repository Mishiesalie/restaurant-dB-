"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateRouter = void 0;
const hono_1 = require("hono");
const state_controller_1 = require("./state.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
exports.stateRouter = new hono_1.Hono();
//get all users      api/users
exports.stateRouter.get("/state", state_controller_1.liststate);
//get a single user    api/users/1
exports.stateRouter.get("/users/:id", state_controller_1.getstate);
// create a user 
exports.stateRouter.post("/users", (0, zod_validator_1.zValidator)('json', validators_1.stateSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.success ? result.data : { error: 'Validation failed' }, result.success ? 200 : 400);
    }
}), state_controller_1.createstate);
//update a user
exports.stateRouter.put("/users/:id", state_controller_1.updatestate);
//delete a user
exports.stateRouter.delete("/users/:id", state_controller_1.deletestate);
// stateRouter.post("/users", zValidator('json', stateSchema, (result, c) => {
//     if (!result.success) {
//         return c.json(result.error, 400)
//     }
// }), creatstate)

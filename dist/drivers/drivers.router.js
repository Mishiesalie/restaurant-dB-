"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driversRouter = void 0;
const hono_1 = require("hono");
const drivers_controller_1 = require("./drivers.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
exports.driversRouter = new hono_1.Hono();
//get all driver      
exports.driversRouter.get("/drivers", drivers_controller_1.listdrivers);
//get a single driver    
exports.driversRouter.get("/driver/:id", drivers_controller_1.getdriver);
// create a driver 
exports.driversRouter.post("/driver", (0, zod_validator_1.zValidator)('json', validators_1.driverSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), drivers_controller_1.createdriver);
//update a driver
exports.driversRouter.put("/driver/:id", drivers_controller_1.updatedriver);
exports.driversRouter.delete("/driver/:id", drivers_controller_1.deletedriver);

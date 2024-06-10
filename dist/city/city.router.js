"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityRouter = void 0;
const hono_1 = require("hono");
const city_controller_1 = require("./city.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
exports.cityRouter = new hono_1.Hono();
//get all city
exports.cityRouter.get("/city", city_controller_1.listcity);
//get a single city    
exports.cityRouter.get("/city/:id", city_controller_1.getcity);
// create a city 
exports.cityRouter.post("/city", (0, zod_validator_1.zValidator)('json', validators_1.citySchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), city_controller_1.createcity);
//update a city
exports.cityRouter.put("/users/:id", city_controller_1.updatecity);
exports.cityRouter.delete("/users/:id", city_controller_1.deletecity);

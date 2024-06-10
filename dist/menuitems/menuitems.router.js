"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuItemsRouter = void 0;
const hono_1 = require("hono");
const menuitems_controller_1 = require("./menuitems.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
exports.menuItemsRouter = new hono_1.Hono();
//get all menuItem   
exports.menuItemsRouter.get("/menuitems", menuitems_controller_1.listmenuItems);
//get a single menuItem  
exports.menuItemsRouter.get("/menuItem/:id", menuitems_controller_1.getmenuItem);
// create a menuItem 
exports.menuItemsRouter.post("/menuItem", (0, zod_validator_1.zValidator)('json', validators_1.menuItemSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), menuitems_controller_1.createmenuItem);
//update a menuItem
exports.menuItemsRouter.put("/menuItem/:id", menuitems_controller_1.updatemenuItem);
exports.menuItemsRouter.delete("/menuItem/:id", menuitems_controller_1.deletemenuItem);

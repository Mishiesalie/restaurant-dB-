"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteorderMenuItem = exports.updateorderMenuItem = exports.createorderMenuItem = exports.getorderMenuItem = exports.orderMenuItemstate = void 0;
const ordermenuitems_service_1 = require("./ordermenuitems.service");
const orderMenuItemstate = async (c) => {
    try {
        //limit the number of orderMenuItem to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, ordermenuitems_service_1.orderMenuItemService)(limit);
        if (data == null || data.length == 0) {
            return c.text("orderMenuItems not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.orderMenuItemstate = orderMenuItemstate;
const getorderMenuItem = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const orderMenuItem = await (0, ordermenuitems_service_1.getorderMenuItemService)(id);
    if (orderMenuItem == undefined) {
        return c.text("orderMenuItem not found", 404);
    }
    return c.json(orderMenuItem, 200);
};
exports.getorderMenuItem = getorderMenuItem;
const createorderMenuItem = async (c) => {
    try {
        const orderMenuItem = await c.req.json();
        const createdorderMenuItem = await (0, ordermenuitems_service_1.createorderMenuItemService)(orderMenuItem);
        if (!createdorderMenuItem)
            return c.text("orderMenuItem not created", 404);
        return c.json({ msg: createdorderMenuItem }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createorderMenuItem = createorderMenuItem;
const updateorderMenuItem = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const orderMenuItem = await c.req.json();
    try {
        // search for the orderMenuItem
        const searchedorderMenuItem = await (0, ordermenuitems_service_1.getorderMenuItemService)(id);
        if (searchedorderMenuItem == undefined)
            return c.text("orderMenuItem not found", 404);
        // get the data and update it
        const res = await (0, ordermenuitems_service_1.updateorderMenuItemService)(id, orderMenuItem);
        // return a success message
        if (!res)
            return c.text("orderMenuItem not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateorderMenuItem = updateorderMenuItem;
const deleteorderMenuItem = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the orderMenuItem
        const orderMenuItem = await (0, ordermenuitems_service_1.getorderMenuItemService)(id);
        if (orderMenuItem == undefined)
            return c.text("User not found", 404);
        //deleting the orderMenuItem
        const res = await (0, ordermenuitems_service_1.deleteorderMenuItemService)(id);
        if (!res)
            return c.text("orderMenuItem not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteorderMenuItem = deleteorderMenuItem;

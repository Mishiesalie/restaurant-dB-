"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteorders = exports.updateorders = exports.createorders = exports.getorders = exports.listorder = void 0;
const orders_service_1 = require("./orders.service");
const listorder = async (c) => {
    try {
        //limit the number of users to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, orders_service_1.orderService)(limit);
        if (data == null || data.length == 0) {
            return c.text("orders not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listorder = listorder;
const getorders = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const orders = await (0, orders_service_1.getordersService)(id);
    if (orders == undefined) {
        return c.text("orders not found", 404);
    }
    return c.json(orders, 200);
};
exports.getorders = getorders;
const createorders = async (c) => {
    try {
        const user = await c.req.json();
        const createdorders = await (0, orders_service_1.createordersService)(user);
        if (!createdorders)
            return c.text("orders not created", 404);
        return c.json({ msg: createdorders }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createorders = createorders;
const updateorders = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const user = await c.req.json();
    try {
        // search for the user
        const searchedUser = await (0, orders_service_1.getordersService)(id);
        if (searchedUser == undefined)
            return c.text("User not found", 404);
        // get the data and update it
        const res = await (0, orders_service_1.updateordersService)(id, user);
        // return a success message
        if (!res)
            return c.text("orders not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateorders = updateorders;
const deleteorders = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the orders
        const user = await (0, orders_service_1.getordersService)(id);
        if (user == undefined)
            return c.text("orders not found", 404);
        //deleting the orders
        const res = await (0, orders_service_1.deleteordersService)(id);
        if (!res)
            return c.text("orders not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteorders = deleteorders;

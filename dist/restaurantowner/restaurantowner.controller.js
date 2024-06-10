"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleterestaurantowner = exports.updaterestaurantowner = exports.createrestaurantowner = exports.getrestaurantowner = exports.listrestaurantowner = void 0;
const restaurantowner_service_1 = require("./restaurantowner.service");
const listrestaurantowner = async (c) => {
    try {
        //limit the number of users to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, restaurantowner_service_1.restaurantownerService)(limit);
        if (data == null || data.length == 0) {
            return c.text("restaurantowner not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listrestaurantowner = listrestaurantowner;
const getrestaurantowner = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const restaurantowner = await (0, restaurantowner_service_1.getrestaurantownerService)(id);
    if (restaurantowner == undefined) {
        return c.text("restaurantowner not found", 404);
    }
    return c.json(restaurantowner, 200);
};
exports.getrestaurantowner = getrestaurantowner;
const createrestaurantowner = async (c) => {
    try {
        const restaurantowner = await c.req.json();
        const createdrestaurantowner = await (0, restaurantowner_service_1.createrestaurantownerService)(restaurantowner);
        if (!createdrestaurantowner)
            return c.text("restaurantowner not created", 404);
        return c.json({ msg: createdrestaurantowner }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createrestaurantowner = createrestaurantowner;
const updaterestaurantowner = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const restaurantowner = await c.req.json();
    try {
        // search for the restaurantowner
        const searchedrestaurantowner = await (0, restaurantowner_service_1.getrestaurantownerService)(id);
        if (searchedrestaurantowner == undefined)
            return c.text("restaurantowner not found", 404);
        // get the data and update it
        const res = await (0, restaurantowner_service_1.updaterestaurantownerService)(id, restaurantowner);
        // return a success message
        if (!res)
            return c.text("restaurantowner not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updaterestaurantowner = updaterestaurantowner;
const deleterestaurantowner = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the restaurantowner
        const restaurantowner = await (0, restaurantowner_service_1.getrestaurantownerService)(id);
        if (restaurantowner == undefined)
            return c.text("restaurantowner not found", 404);
        //deleting the restaurantowner
        const res = await (0, restaurantowner_service_1.deleterestaurantownerService)(id);
        if (!res)
            return c.text("restaurantowner not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleterestaurantowner = deleterestaurantowner;

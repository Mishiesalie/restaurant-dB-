"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleterestaurant = exports.updaterestaurant = exports.createrestaurant = exports.getrestaurant = exports.listrestaurant = void 0;
const restaurant_service_1 = require("./restaurant.service");
const listrestaurant = async (c) => {
    try {
        //limit the number of users to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, restaurant_service_1.restaurantService)(limit);
        if (data == null || data.length == 0) {
            return c.text("restaurant not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listrestaurant = listrestaurant;
const getrestaurant = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const restaurant = await (0, restaurant_service_1.getrestaurantService)(id);
    if (restaurant == undefined) {
        return c.text("restaurant not found", 404);
    }
    return c.json(restaurant, 200);
};
exports.getrestaurant = getrestaurant;
const createrestaurant = async (c) => {
    try {
        const restaurant = await c.req.json();
        const createdrestaurant = await (0, restaurant_service_1.createrestaurantService)(restaurant);
        if (!createdrestaurant)
            return c.text("restaurant not created", 404);
        return c.json({ msg: createdrestaurant }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createrestaurant = createrestaurant;
const updaterestaurant = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const restaurant = await c.req.json();
    try {
        // search for the restaurant
        const searchedrestaurant = await (0, restaurant_service_1.getrestaurantService)(id);
        if (searchedrestaurant == undefined)
            return c.text("User not found", 404);
        // get the data and update it
        const res = await (0, restaurant_service_1.updaterestaurantService)(id, restaurant);
        // return a success message
        if (!res)
            return c.text("restaurant not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updaterestaurant = updaterestaurant;
const deleterestaurant = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the restaurant
        const restaurant = await (0, restaurant_service_1.getrestaurantService)(id);
        if (restaurant == undefined)
            return c.text("restaurant not found", 404);
        //deleting the restaurant
        const res = await (0, restaurant_service_1.deleterestaurantService)(id);
        if (!res)
            return c.text("restaurant not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleterestaurant = deleterestaurant;

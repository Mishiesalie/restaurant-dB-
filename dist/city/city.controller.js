"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletecity = exports.updatecity = exports.createcity = exports.getcity = exports.listcity = void 0;
const city_service_1 = require("./city.service");
const listcity = async (c) => {
    try {
        //limit the number of users to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, city_service_1.cityService)(limit);
        if (data == null || data.length == 0) {
            return c.text("city not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listcity = listcity;
const getcity = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const city = await (0, city_service_1.getcityService)(id);
    if (city == undefined) {
        return c.text("city not found", 404);
    }
    return c.json(city, 200);
};
exports.getcity = getcity;
const createcity = async (c) => {
    try {
        const city = await c.req.json();
        const createdcity = await (0, city_service_1.createcityService)(city);
        if (!createdcity)
            return c.text("city not created", 404);
        return c.json({ msg: createdcity }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createcity = createcity;
const updatecity = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const city = await c.req.json();
    try {
        // search for the user
        const searchedUser = await (0, city_service_1.getcityService)(id);
        if (searchedUser == undefined)
            return c.text("city not found", 404);
        // get the data and update it
        const res = await (0, city_service_1.updatecityService)(id, city);
        // return a success message
        if (!res)
            return c.text("city not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updatecity = updatecity;
const deletecity = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the city
        const city = await (0, city_service_1.getcityService)(id);
        if (city == undefined)
            return c.text("city not found", 404);
        //deleting the city
        const res = await (0, city_service_1.deletecityService)(id);
        if (!res)
            return c.text("city not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deletecity = deletecity;

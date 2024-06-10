"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletedriver = exports.updatedriver = exports.createdriver = exports.getdriver = exports.listdrivers = void 0;
const drivers_service_1 = require("./drivers.service");
const listdrivers = async (c) => {
    try {
        //limit the number of users to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, drivers_service_1.driverService)(limit);
        if (data == null || data.length == 0) {
            return c.text("drivers not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listdrivers = listdrivers;
const getdriver = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const driver = await (0, drivers_service_1.getdriverService)(id);
    if (driver == undefined) {
        return c.text("driver not found", 404);
    }
    return c.json(driver, 200);
};
exports.getdriver = getdriver;
const createdriver = async (c) => {
    try {
        const driver = await c.req.json();
        const createddriver = await (0, drivers_service_1.createdriverService)(driver);
        if (!createddriver)
            return c.text("driver not created", 404);
        return c.json({ msg: createddriver }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createdriver = createdriver;
const updatedriver = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const driver = await c.req.json();
    try {
        // search for the driver
        const searcheddriver = await (0, drivers_service_1.getdriverService)(id);
        if (searcheddriver == undefined)
            return c.text("driver not found", 404);
        // get the data and update it
        const res = await (0, drivers_service_1.updatedriverService)(id, driver);
        // return a success message
        if (!res)
            return c.text("driver not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updatedriver = updatedriver;
const deletedriver = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the driver
        const driver = await (0, drivers_service_1.getdriverService)(id);
        if (driver == undefined)
            return c.text("driver not found", 404);
        //deleting the driver
        const res = await (0, drivers_service_1.deletedriverService)(id);
        if (!res)
            return c.text("driver not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deletedriver = deletedriver;

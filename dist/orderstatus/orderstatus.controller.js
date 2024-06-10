"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteorderstatus = exports.updateorderstatus = exports.createorderstatus = exports.getorderstatus = exports.listorderstatus = void 0;
const orderstatus_service_1 = require("./orderstatus.service");
const listorderstatus = async (c) => {
    try {
        //limit the number of users to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, orderstatus_service_1.orderstatusService)(limit);
        if (data == null || data.length == 0) {
            return c.text("orderstatus not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listorderstatus = listorderstatus;
const getorderstatus = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const orderstatus = await (0, orderstatus_service_1.getorderstatusService)(id);
    if (orderstatus == undefined) {
        return c.text("orderstatus not found", 404);
    }
    return c.json(orderstatus, 200);
};
exports.getorderstatus = getorderstatus;
const createorderstatus = async (c) => {
    try {
        const orderstatus = await c.req.json();
        const createdorderstatus = await (0, orderstatus_service_1.createorderstatusService)(orderstatus);
        if (!createdorderstatus)
            return c.text("orderstatus not created", 404);
        return c.json({ msg: createdorderstatus }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createorderstatus = createorderstatus;
const updateorderstatus = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const orderstatus = await c.req.json();
    try {
        // search for the orderstatus
        const searchedUser = await (0, orderstatus_service_1.getorderstatusService)(id);
        if (searchedUser == undefined)
            return c.text("orderstatus not found", 404);
        // get the data and update it
        const res = await (0, orderstatus_service_1.updateorderstatusService)(id, orderstatus);
        // return a success message
        if (!res)
            return c.text("orderstatus not updated", 404);
        orderstatus;
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateorderstatus = updateorderstatus;
const deleteorderstatus = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the orderstatus
        const orderstatus = await (0, orderstatus_service_1.getorderstatusService)(id);
        if (orderstatus == undefined)
            return c.text("orderstatus not found", 404);
        //deleting the orderstatus
        const res = await (0, orderstatus_service_1.deleteorderstatusService)(id);
        if (!res)
            return c.text("orderstatus not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteorderstatus = deleteorderstatus;

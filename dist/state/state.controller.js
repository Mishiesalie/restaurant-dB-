"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletestate = exports.updatestate = exports.createstate = exports.getstate = exports.liststate = void 0;
const state_service_1 = require("./state.service");
const liststate = async (c) => {
    try {
        //limit the number of users to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, state_service_1.stateService)(limit);
        if (data == null || data.length == 0) {
            return c.text("state not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.liststate = liststate;
const getstate = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const state = await (0, state_service_1.getstateService)(id);
    if (state == undefined) {
        return c.text("state not found", 404);
    }
    return c.json(state, 200);
};
exports.getstate = getstate;
const createstate = async (c) => {
    try {
        const state = await c.req.json();
        const createdstate = await (0, state_service_1.createstateService)(state);
        if (!createdstate)
            return c.text("state not created", 404);
        return c.json({ msg: createdstate }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createstate = createstate;
const updatestate = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const state = await c.req.json();
    try {
        // search for the user
        const searchedstate = await (0, state_service_1.getstateService)(id);
        if (searchedstate == undefined)
            return c.text("state not found", 404);
        // get the data and update it
        const res = await (0, state_service_1.updatestateService)(id, state);
        // return a success message
        if (!res)
            return c.text("state not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updatestate = updatestate;
const deletestate = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the user
        const state = await (0, state_service_1.getstateService)(id);
        if (state == undefined)
            return c.text("state not found", 404);
        //deleting the user
        const res = await (0, state_service_1.deletestateService)(id);
        if (!res)
            return c.text("state not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deletestate = deletestate;

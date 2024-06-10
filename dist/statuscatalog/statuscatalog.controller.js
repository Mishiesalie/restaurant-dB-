"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletestatusCatelog = exports.updatestatusCatelog = exports.createstatusCatelog = exports.getstatusCatelog = exports.liststatuscatalog = void 0;
const statuscatalog_service_1 = require("./statuscatalog.service");
const liststatuscatalog = async (c) => {
    try {
        //limit the number of users to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, statuscatalog_service_1.statuscatalogService)(limit);
        if (data == null || data.length == 0) {
            return c.text("statuscatalog not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.liststatuscatalog = liststatuscatalog;
const getstatusCatelog = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const statusCatelog = await (0, statuscatalog_service_1.getstatusCatelogService)(id);
    if (statusCatelog == undefined) {
        return c.text("statusCatelog not found", 404);
    }
    return c.json(statusCatelog, 200);
};
exports.getstatusCatelog = getstatusCatelog;
const createstatusCatelog = async (c) => {
    try {
        const statusCatelog = await c.req.json();
        const createdstatusCatelog = await (0, statuscatalog_service_1.createstatusCatalogService)(statusCatelog);
        if (!createdstatusCatelog)
            return c.text("statusCatelog not created", 404);
        return c.json({ msg: createdstatusCatelog }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createstatusCatelog = createstatusCatelog;
const updatestatusCatelog = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const statusCatelog = await c.req.json();
    try {
        // search for the statusCatelog
        const searchedstatusCatelog = await (0, statuscatalog_service_1.getstatusCatelogService)(id);
        if (searchedstatusCatelog == undefined)
            return c.text("statusCatelog not found", 404);
        // get the data and update it
        const res = await (0, statuscatalog_service_1.updatestatusCatalogService)(id, statusCatelog);
        // return a success message
        if (!res)
            return c.text("statusCatelog not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updatestatusCatelog = updatestatusCatelog;
const deletestatusCatelog = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the statusCatelog
        const statusCatelog = await (0, statuscatalog_service_1.getstatusCatelogService)(id);
        if (statusCatelog == undefined)
            return c.text("statusCatelog not found", 404);
        //deleting the statusCatelog
        const res = await (0, statuscatalog_service_1.deletestatusCatalogService)(id);
        if (!res)
            return c.text("statusCatelog not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deletestatusCatelog = deletestatusCatelog;

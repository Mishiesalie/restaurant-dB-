"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listcategory = void 0;
const category_service_1 = require("./category.service");
const listcategory = async (c) => {
    try {
        //limit the number of users to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, category_service_1.categoryService)(limit);
        if (data == null || data.length == 0) {
            return c.text("category not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listcategory = listcategory;

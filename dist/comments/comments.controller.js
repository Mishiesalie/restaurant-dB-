"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listcomment = void 0;
const comments_service_1 = require("./comments.service");
const listcomment = async (c) => {
    try {
        //limit the number of users to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, comments_service_1.commentService)(limit);
        if (data == null || data.length == 0) {
            return c.text("comments not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listcomment = listcomment;

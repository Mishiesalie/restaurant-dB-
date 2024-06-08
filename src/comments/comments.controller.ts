import { Context } from "hono";
import { commentService } from "./comments.service";

export const listcomment = async (c: Context) => {
    try {
        //limit the number of users to be returned

        const limit = Number(c.req.query('limit'))

        const data = await commentService(limit);
        if (data == null || data.length == 0) {
            return c.text("comments not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
import { Context } from "hono";
import { categoryService } from "./category.service";

export const listcategory = async (c: Context) => {
    try {
        //limit the number of users to be returned

        const limit = Number(c.req.query('limit'))

        const data = await categoryService(limit);
        if (data == null || data.length == 0) {
            return c.text("category not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
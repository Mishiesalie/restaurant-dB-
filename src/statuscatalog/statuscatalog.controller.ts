import { Context } from "hono";
import { statuscatalogService } from "./statuscatalog.service";

export const liststatuscatalog = async (c: Context) => {
    try {
        //limit the number of users to be returned

        const limit = Number(c.req.query('limit'))

        const data = await statuscatalogService(limit);
        if (data == null || data.length == 0) {
            return c.text("statuscatalog not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
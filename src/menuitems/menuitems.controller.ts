import { Context } from "hono";
import { menuItemService } from "./menuitems.service";

export const listmenuItems = async (c: Context) => {
    try {
        //limit the number of users to be returned

        const limit = Number(c.req.query('limit'))

        const data = await menuItemService(limit);
        if (data == null || data.length == 0) {
            return c.text("Menu_items not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
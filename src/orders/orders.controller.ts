import { Context } from "hono";
import { orderService } from "./orders.service";

export const listorder = async (c: Context) => {
    try {
        //limit the number of users to be returned

        const limit = Number(c.req.query('limit'))

        const data = await orderService(limit);
        if (data == null || data.length == 0) {
            return c.text("orders not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
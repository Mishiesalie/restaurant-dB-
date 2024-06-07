import { Context } from "hono";
import { restaurantownerService } from "./restaurantowner.service";

export const listrestaurantowner = async (c: Context) => {
    try {
        //limit the number of users to be returned

        const limit = Number(c.req.query('limit'))

        const data = await restaurantownerService(limit);
        if (data == null || data.length == 0) {
            return c.text("restaurantowner not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
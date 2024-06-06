import { Context } from "hono";
import { cityService } from "./city.service";

export const listUsers = async (c: Context) => {
    try {
        //limit the number of users to be returned

        const limit = Number(c.req.query('limit'))

        const data = await cityService(limit);
        if (data == null || data.length == 0) {
            return c.text("User not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

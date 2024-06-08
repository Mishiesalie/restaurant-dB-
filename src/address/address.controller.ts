import { Context } from "hono";
import { addressService } from "./address.service";

export const listaddress = async (c: Context) => {
    try {
        //limit the number of users to be returned

        const limit = Number(c.req.query('limit'))

        const data = await addressService(limit);
        if (data == null || data.length == 0) {
            return c.text("address not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
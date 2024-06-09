import { Context } from "hono";
import { orderstatusService, getorderstatusService, createorderstatusService, updateorderstatusService, deleteorderstatusService } from "./orderstatus.service";

export const listorderstatus = async (c: Context) => {
    try {
        //limit the number of users to be returned

        const limit = Number(c.req.query('limit'))

        const data = await orderstatusService(limit);
        if (data == null || data.length == 0) {
            return c.text("orderstatus not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const getorderstatus = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const orderstatus = await getorderstatusService(id);
    if (orderstatus == undefined) {
        return c.text("orderstatus not found", 404);
    }
    return c.json(orderstatus, 200);
}
export const createorderstatus = async (c: Context) => {
    try {
        const orderstatus = await c.req.json();
        const createdorderstatus = await createorderstatusService(orderstatus);


        if (!createdorderstatus) return c.text("orderstatus not created", 404);
        return c.json({ msg: createdorderstatus }, 201);

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const updateorderstatus = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const orderstatus = await c.req.json();
    try {
        // search for the orderstatus
        const searchedUser = await getorderstatusService(id);
        if (searchedUser == undefined) return c.text("orderstatus not found", 404);
        // get the data and update it
        const res = await updateorderstatusService(id, orderstatus);
        // return a success message
        if (!res) return c.text("orderstatus not updated", 404);
orderstatus
        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const deleteorderstatus = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    try {
        //search for the orderstatus
        const orderstatus = await getorderstatusService(id);
        if (orderstatus == undefined) return c.text("orderstatus not found", 404);
        //deleting the orderstatus
        const res = await deleteorderstatusService(id);
        if (!res) return c.text("orderstatus not deleted", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
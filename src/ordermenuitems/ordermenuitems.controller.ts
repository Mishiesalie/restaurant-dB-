import { Context } from "hono";
import { orderMenuItemService, getorderMenuItemService, createorderMenuItemService, updateorderMenuItemService, deleteorderMenuItemService } from "./ordermenuitems.service";

export const orderMenuItemstate = async (c: Context) => {
    try {
        //limit the number of orderMenuItem to be returned

        const limit = Number(c.req.query('limit'))

        const data = await orderMenuItemService(limit);
        if (data == null || data.length == 0) {
            return c.text("orderMenuItems not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const getorderMenuItem = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const orderMenuItem = await getorderMenuItemService(id);
    if (orderMenuItem == undefined) {
        return c.text("orderMenuItem not found", 404);
    }
    return c.json(orderMenuItem, 200);
}
export const createorderMenuItem = async (c: Context) => {
    try {
        const orderMenuItem = await c.req.json();
        const createdorderMenuItem = await createorderMenuItemService(orderMenuItem);


        if (!createdorderMenuItem) return c.text("orderMenuItem not created", 404);
        return c.json({ msg: createdorderMenuItem }, 201);

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const updateorderMenuItem = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const orderMenuItem = await c.req.json();
    try {
        // search for the orderMenuItem
        const searchedorderMenuItem = await getorderMenuItemService(id);
        if (searchedorderMenuItem == undefined) return c.text("orderMenuItem not found", 404);
        // get the data and update it
        const res = await updateorderMenuItemService(id, orderMenuItem);
        // return a success message
        if (!res) return c.text("orderMenuItem not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const deleteorderMenuItem = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    try {
        //search for the orderMenuItem
        const orderMenuItem = await getorderMenuItemService(id);
        if (orderMenuItem == undefined) return c.text("User not found", 404);
        //deleting the orderMenuItem
        const res = await deleteorderMenuItemService(id);
        if (!res) return c.text("orderMenuItem not deleted", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
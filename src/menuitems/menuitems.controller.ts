import { Context } from "hono";
import { menuItemService, getmenuItemService, createmenuItemService, updatemenuItemService, deletemenuItemService } from "./menuitems.service";

export const listmenuItems = async (c: Context) => {
    try {
        //limit the number of menuItem to be returned

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

export const getmenuItem = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const menuItem = await getmenuItemService(id);
    if (menuItem == undefined) {
        return c.text("menuItem not found", 404);
    }
    return c.json(menuItem, 200);
}
export const createmenuItem = async (c: Context) => {
    try {
        const menuItem = await c.req.json();
        const createdmenuItem = await createmenuItemService(menuItem);


        if (!createdmenuItem) return c.text("menuItem not created", 404);
        return c.json({ msg: createdmenuItem }, 201);

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const updatemenuItem = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const menuItem = await c.req.json();
    try {
        // search for the menuItem
        const searchedmenuItem = await getmenuItemService(id);
        if (searchedmenuItem == undefined) return c.text("menuItem not found", 404);
        // get the data and update it
        const res = await updatemenuItemService(id, menuItem);
        // return a success message
        if (!res) return c.text("menuItem not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const deletemenuItem = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    try {
        //search for the menuItem
        const menuItem = await getmenuItemService(id);
        if (menuItem == undefined) return c.text("menuItem not found", 404);
        //deleting the menuItem
        const res = await deletemenuItemService(id);
        if (!res) return c.text("menuItem not deleted", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
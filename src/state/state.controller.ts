import { Context } from "hono";
import { stateService , getstateService, createstateService, updatestateService, deletestateService} from "./state.service";

export const liststate = async (c: Context) => {
    try {
        //limit the number of users to be returned

        const limit = Number(c.req.query('limit'))

        const data = await stateService(limit);
        if (data == null || data.length == 0) {
            return c.text("state not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}


export const getstate = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const state = await getstateService(id);
    if (state == undefined) {
        return c.text("state not found", 404);
    }
    return c.json(state, 200);
}
export const createstate = async (c: Context) => {
    try {
        const state = await c.req.json();
        const createdstate = await createstateService(state);


        if (!createdstate) return c.text("state not created", 404);
        return c.json({ msg: createdstate }, 201);

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const updatestate = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const state = await c.req.json();
    try {
        // search for the user
        const searchedstate = await getstateService(id);
        if (searchedstate == undefined) return c.text("state not found", 404);
        // get the data and update it
        const res = await updatestateService(id, state);
        // return a success message
        if (!res) return c.text("state not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const deletestate = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    try {
        //search for the user
        const state = await getstateService(id);
        if (state == undefined) return c.text("state not found", 404);
        //deleting the user
        const res = await deletestateService(id);
        if (!res) return c.text("state not deleted", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
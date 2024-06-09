import { Context } from "hono";
import { statuscatalogService, createstatusCatalogService, getstatusCatelogService, updatestatusCatalogService, deletestatusCatalogService} from "./statuscatalog.service";

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


export const getstatusCatelog = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const statusCatelog = await getstatusCatelogService(id);
    if (statusCatelog == undefined) {
        return c.text("statusCatelog not found", 404);
    }
    return c.json(statusCatelog, 200);
}
export const createstatusCatelog = async (c: Context) => {
    try {
        const statusCatelog = await c.req.json();
        const createdstatusCatelog = await createstatusCatalogService(statusCatelog);


        if (!createdstatusCatelog) return c.text("statusCatelog not created", 404);
        return c.json({ msg: createdstatusCatelog }, 201);

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const updatestatusCatelog = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const statusCatelog = await c.req.json();
    try {
        // search for the statusCatelog
        const searchedstatusCatelog = await getstatusCatelogService(id);
        if (searchedstatusCatelog == undefined) return c.text("statusCatelog not found", 404);
        // get the data and update it
        const res = await updatestatusCatalogService(id, statusCatelog);
        // return a success message
        if (!res) return c.text("statusCatelog not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const deletestatusCatelog = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    try {
        //search for the statusCatelog
        const statusCatelog = await getstatusCatelogService(id);
        if (statusCatelog == undefined) return c.text("statusCatelog not found", 404);
        //deleting the statusCatelog
        const res = await deletestatusCatalogService(id);
        if (!res) return c.text("statusCatelog not deleted", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
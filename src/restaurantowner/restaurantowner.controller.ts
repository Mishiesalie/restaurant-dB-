import { Context } from "hono";
import { restaurantownerService, getrestaurantownerService, createrestaurantownerService, updaterestaurantownerService, deleterestaurantownerService } from "./restaurantowner.service";

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

export const getrestaurantowner = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const restaurantowner = await getrestaurantownerService(id);
    if (restaurantowner == undefined) {
        return c.text("restaurantowner not found", 404);
    }
    return c.json(restaurantowner, 200);
}
export const createrestaurantowner = async (c: Context) => {
    try {
        const restaurantowner = await c.req.json();
        const createdrestaurantowner = await createrestaurantownerService(restaurantowner);


        if (!createdrestaurantowner) return c.text("restaurantowner not created", 404);
        return c.json({ msg: createdrestaurantowner }, 201);

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const updaterestaurantowner = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const restaurantowner = await c.req.json();
    try {
        // search for the restaurantowner
        const searchedrestaurantowner = await getrestaurantownerService(id);
        if (searchedrestaurantowner == undefined) return c.text("restaurantowner not found", 404);
        // get the data and update it
        const res = await updaterestaurantownerService(id, restaurantowner);
        // return a success message
        if (!res) return c.text("restaurantowner not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const deleterestaurantowner = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    try {
        //search for the restaurantowner
        const restaurantowner = await getrestaurantownerService(id);
        if (restaurantowner == undefined) return c.text("restaurantowner not found", 404);
        //deleting the restaurantowner
        const res = await deleterestaurantownerService(id);
        if (!res) return c.text("restaurantowner not deleted", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
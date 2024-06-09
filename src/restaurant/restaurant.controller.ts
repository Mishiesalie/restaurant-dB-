import { Context } from "hono";
import { restaurantService, createrestaurantService, getrestaurantService, updaterestaurantService, deleterestaurantService } from "./restaurant.service";

export const listrestaurant = async (c: Context) => {
    try {
        //limit the number of users to be returned

        const limit = Number(c.req.query('limit'))

        const data = await restaurantService(limit);
        if (data == null || data.length == 0) {
            return c.text("restaurant not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const getrestaurant = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const restaurant = await getrestaurantService(id);
    if (restaurant == undefined) {
        return c.text("restaurant not found", 404);
    }
    return c.json(restaurant, 200);
}
export const createrestaurant = async (c: Context) => {
    try {
        const restaurant = await c.req.json();
        const createdrestaurant = await createrestaurantService(restaurant);


        if (!createdrestaurant) return c.text("restaurant not created", 404);
        return c.json({ msg: createdrestaurant }, 201);

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const updaterestaurant = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const restaurant = await c.req.json();
    try {
        // search for the restaurant
        const searchedrestaurant = await getrestaurantService(id);
        if (searchedrestaurant == undefined) return c.text("User not found", 404);
        // get the data and update it
        const res = await updaterestaurantService(id, restaurant);
        // return a success message
        if (!res) return c.text("restaurant not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const deleterestaurant = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    try {
        //search for the restaurant
        const restaurant = await getrestaurantService(id);
        if (restaurant == undefined) return c.text("restaurant not found", 404);
        //deleting the restaurant
        const res = await deleterestaurantService(id);
        if (!res) return c.text("restaurant not deleted", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}
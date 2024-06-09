import { eq } from "drizzle-orm/expressions";
import db from "../drizzle/db";
import { restaurantRelationsType, restaurant_table, restaurantselect} from "../drizzle/schema";


//get users from the database
export const restaurantService = async (limit?: number): Promise<restaurantRelationsType[] | null> => {
    if (limit) {
        return await db.query.restaurant_table.findMany({
            limit: limit
        });
    }
    return await db.query.restaurant_table.findMany();
}

export const getrestaurantService = async (id: number): Promise<restaurantRelationsType | undefined> => {
    return await db.query.restaurant_table.findFirst({
        where: eq(restaurant_table.id, id)
    })
}

export const createrestaurantService = async (restaurant: restaurantRelationsType) => {
    await db.insert(restaurant_table).values(restaurant)
    return "restaurant created successfully";
}

export const updaterestaurantService = async (id: number, restaurant: restaurantRelationsType) => {
    await db.update(restaurant_table).set(restaurant).where(eq(restaurant_table.id, id))
    return "restaurant updated successfully";
}

export const deleterestaurantService = async (id: number) => {
    await db.delete(restaurant_table).where(eq(restaurant_table.id, id))
    return "restaurant deleted successfully";
}


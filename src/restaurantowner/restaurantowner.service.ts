import { eq } from "drizzle-orm/expressions";
import db from "../drizzle/db";
import { restaurantOwnerRelationsType, restaurant_owner_table, restaurantOwnerselect} from "../drizzle/schema";


//get users from the database
export const restaurantownerService = async (limit?: number): Promise<restaurantOwnerRelationsType[] | null> => {
    if (limit) {
        return await db.query.restaurant_owner_table.findMany({
            limit: limit
        });
    }
    return await db.query.restaurant_owner_table.findMany();
}


export const getrestaurantownerService = async (id: number): Promise<restaurantOwnerRelationsType | undefined> => {
    return await db.query.restaurant_owner_table.findFirst({
        where: eq(restaurant_owner_table.id, id)
    })
}

export const createrestaurantownerService = async (restaurantowner: restaurantOwnerRelationsType) => {
    await db.insert(restaurant_owner_table).values(restaurantowner)
    return "restaurantowner created successfully";
}

export const updaterestaurantownerService = async (id: number, restaurantowner: restaurantOwnerRelationsType) => {
    await db.update(restaurant_owner_table).set(restaurantowner).where(eq(restaurant_owner_table.id, id))
    return "restaurantowner updated successfully";
}

export const deleterestaurantownerService = async (id: number) => {
    await db.delete(restaurant_owner_table).where(eq(restaurant_owner_table.id, id))
    return "restaurantowner deleted successfully";
}

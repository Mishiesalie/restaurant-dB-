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

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
import db from "../drizzle/db";
import { cityRelationsType, city_table, cityselect} from "../drizzle/schema";


//get users from the database
export const cityService = async (limit?: number): Promise<cityRelationsType[] | null> => {
    if (limit) {
        return await db.query.city_table.findMany({
            limit: limit
        });
    }
    return await db.query.city_table.findMany();
}

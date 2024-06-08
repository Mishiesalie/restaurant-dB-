import db from "../drizzle/db";
import { driverRelationsType, driver_table, driverselect} from "../drizzle/schema";


//get users from the database
export const driverService = async (limit?: number): Promise<driverRelationsType[] | null> => {
    if (limit) {
        return await db.query.driver_table.findMany({
            limit: limit
        });
    }
    return await db.query.driver_table.findMany();
}

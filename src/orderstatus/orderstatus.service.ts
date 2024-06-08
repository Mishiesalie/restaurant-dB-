import db from "../drizzle/db";
import { orderStatusRelationsType, order_status_table, orderStatusselect} from "../drizzle/schema";


//get users from the database
export const orderstatusService = async (limit?: number): Promise<orderStatusRelationsType[] | null> => {
    if (limit) {
        return await db.query.order_status_table.findMany({
            limit: limit
        });
    }
    return await db.query.order_status_table.findMany();
}
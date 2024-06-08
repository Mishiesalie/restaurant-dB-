import db from "../drizzle/db";
import { orderRelationsType, orders_table, orderselect} from "../drizzle/schema";


//get users from the database
export const orderService = async (limit?: number): Promise<orderRelationsType[] | null> => {
    if (limit) {
        return await db.query.orders_table.findMany({
            limit: limit
        });
    }
    return await db.query.orders_table.findMany();
}
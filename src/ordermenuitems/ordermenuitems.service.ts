import db from "../drizzle/db";
import { orderMenuItemRelationsType, order_menu_item_table, orderMenuItemselect} from "../drizzle/schema";


//get users from the database
export const orderMenuItemService = async (limit?: number): Promise<orderMenuItemRelationsType[] | null> => {
    if (limit) {
        return await db.query.order_menu_item_table.findMany({
            limit: limit
        });
    }
    return await db.query.order_menu_item_table.findMany();
}

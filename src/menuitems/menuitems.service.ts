import db from "../drizzle/db";
import { menuItemRelationsType, menu_items_table, menuItemselect} from "../drizzle/schema";


//get users from the database
export const menuItemService = async (limit?: number): Promise<menuItemRelationsType[] | null> => {
    if (limit) {
        return await db.query.menu_items_table.findMany({
            limit: limit
        });
    }
    return await db.query.menu_items_table.findMany();
}
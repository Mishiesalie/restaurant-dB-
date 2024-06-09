import { eq } from "drizzle-orm/expressions";
import db from "../drizzle/db";
import { orderMenuItemRelationsType, order_menu_item_table, orderMenuItemselect} from "../drizzle/schema";


//get orderMenuItem from the database
export const orderMenuItemService = async (limit?: number): Promise<orderMenuItemRelationsType[] | null> => {
    if (limit) {
        return await db.query.order_menu_item_table.findMany({
            limit: limit
        });
    }
    return await db.query.order_menu_item_table.findMany();
}

export const getorderMenuItemService = async (id: number): Promise<orderMenuItemRelationsType | undefined> => {
    return await db.query.order_menu_item_table.findFirst({
        where: eq(order_menu_item_table.id, id)
    })
}

export const createorderMenuItemService = async (orderMenuItem: orderMenuItemRelationsType) => {
    await db.insert(order_menu_item_table).values(orderMenuItem)
    return "orderMenuItem created successfully";
}

export const updateorderMenuItemService = async (id: number, orderMenuItem: orderMenuItemRelationsType) => {
    await db.update(order_menu_item_table).set(orderMenuItem).where(eq(order_menu_item_table.id, id))
    return "orderMenuItem updated successfully";
}

export const deleteorderMenuItemService = async (id: number) => {
    await db.delete(order_menu_item_table).where(eq(order_menu_item_table.id, id))
    return "orderMenuItem deleted successfully";
}

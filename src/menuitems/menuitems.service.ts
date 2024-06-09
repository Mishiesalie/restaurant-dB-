import { eq } from "drizzle-orm/expressions";
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

export const getmenuItemService = async (id: number): Promise<menuItemRelationsType | undefined> => {
    return await db.query.menu_items_table.findFirst({
        where: eq(menu_items_table.id, id)
    })
}

export const createmenuItemService = async (menuItem: menuItemRelationsType) => {
    await db.insert(menu_items_table).values(menuItem)
    return "menuItem created successfully";
}

export const updatemenuItemService = async (id: number, menuItem: menuItemRelationsType) => {
    await db.update(menu_items_table).set(menuItem).where(eq(menu_items_table.id, id))
    return "menuItem updated successfully";
}

export const deletemenuItemService = async (id: number) => {
    await db.delete(menu_items_table).where(eq(menu_items_table.id, id))
    return "menuItem deleted successfully";
}

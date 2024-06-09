import { eq } from "drizzle-orm/expressions";
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

export const getordersService = async (id: number): Promise<orderRelationsType | undefined> => {
    return await db.query.orders_table.findFirst({
        where: eq(orders_table.id, id)
    })
}

export const createordersService = async (user: orderRelationsType) => {
    await db.insert(orders_table).values(user)
    return "orders created successfully";
}

export const updateordersService = async (id: number, user: orderRelationsType) => {
    await db.update(orders_table).set(user).where(eq(orders_table.id, id))
    return "orders updated successfully";
}

export const deleteordersService = async (id: number) => {
    await db.delete(orders_table).where(eq(orders_table.id, id))
    return "orders deleted successfully";
}

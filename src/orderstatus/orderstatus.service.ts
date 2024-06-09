import { eq } from "drizzle-orm/expressions";
import db from "../drizzle/db";
import { orderStatusRelationsType, order_status_table, orderStatusselect} from "../drizzle/schema";


//get orderstatus from the database
export const orderstatusService = async (limit?: number): Promise<orderStatusRelationsType[] | null> => {
    if (limit) {
        return await db.query.order_status_table.findMany({
            limit: limit
        });
    }
    
    return await db.query.order_status_table.findMany();
}


export const getorderstatusService = async (id: number): Promise<orderStatusRelationsType | undefined> => {
    return await db.query.order_status_table.findFirst({
        where: eq(order_status_table.id, id)
    })
}

export const createorderstatusService = async (orderstatus: orderStatusRelationsType) => {
    await db.insert(order_status_table).values(orderstatus)
    return "orderstatus created successfully";
}

export const updateorderstatusService = async (id: number, orderstatus: orderStatusRelationsType) => {
    await db.update(order_status_table).set(orderstatus).where(eq(order_status_table.id, id))
    return "orderstatus updated successfully";
}

export const deleteorderstatusService = async (id: number) => {
    await db.delete(order_status_table).where(eq(order_status_table.id, id))
    return "orderstatus deleted successfully";
}

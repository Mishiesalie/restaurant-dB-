import { eq } from "drizzle-orm/expressions";
import db from "../drizzle/db";
import { stateRelationsType, state_table, stateselect} from "../drizzle/schema";


//get users from the database
export const stateService = async (limit?: number): Promise<stateRelationsType[] | null> => {
    if (limit) {
        return await db.query.state_table.findMany({
            limit: limit
        });
    }
    return await db.query.state_table.findMany();
}

export const getstateService = async (id: number): Promise<stateRelationsType | undefined> => {
    return await db.query.state_table.findFirst({
        where: eq(state_table.id, id)
    })
}

export const createstateService = async (user: stateRelationsType) => {
    await db.insert(state_table).values(user)
    return "state created successfully";
}

export const updatestateService = async (id: number, user: stateRelationsType) => {
    await db.update(state_table).set(user).where(eq(state_table.id, id))
    return "state updated successfully";
}

export const deletestateService = async (id: number) => {
    await db.delete(state_table).where(eq(state_table.id, id))
    return "state deleted successfully";
}

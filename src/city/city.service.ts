import { eq } from "drizzle-orm/expressions";
import db from "../drizzle/db";
import { cityRelationsType, city_table, cityselect} from "../drizzle/schema";


//get users from the database
export const cityService = async (limit?: number): Promise<cityRelationsType[] | null> => {
    if (limit) {
        return await db.query.city_table.findMany({
            limit: limit
        });
    }
    return await db.query.city_table.findMany();
}


export const getcityService = async (id: number): Promise<cityRelationsType | undefined> => {
    return await db.query.city_table.findFirst({
        where: eq(city_table.id, id)
    })
}

export const createcityService = async (user: cityRelationsType) => {
    await db.insert(city_table).values(user)
    return "city created successfully";
}

export const updatecityService = async (id: number, user: cityRelationsType) => {
    await db.update(city_table).set(user).where(eq(city_table.id, id))
    return "city updated successfully";
}

export const deletecityService = async (id: number) => {
    await db.delete(city_table).where(eq(city_table.id, id))
    return "city deleted successfully";
}

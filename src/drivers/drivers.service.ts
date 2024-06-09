import { eq } from "drizzle-orm/expressions";
import db from "../drizzle/db";
import { driverRelationsType, driver_table, driverselect} from "../drizzle/schema";


//get drivers from the database
export const driverService = async (limit?: number): Promise<driverRelationsType[] | null> => {
    if (limit) {
        return await db.query.driver_table.findMany({
            limit: limit
        });
    }
    return await db.query.driver_table.findMany();
}

export const getdriverService = async (id: number): Promise<driverRelationsType | undefined> => {
    return await db.query.driver_table.findFirst({
        where: eq(driver_table.id, id)
    })
}

export const createdriverService = async (driver: driverRelationsType) => {
    await db.insert(driver_table).values(driver)
    return "driver created successfully";
}

export const updatedriverService = async (id: number, driver: driverRelationsType) => {
    await db.update(driver_table).set(driver).where(eq(driver_table.id, id))
    return "driver updated successfully";
}

export const deletedriverService = async (id: number) => {
    await db.delete(driver_table).where(eq(driver_table.id, id))
    return "driver deleted successfully";
}

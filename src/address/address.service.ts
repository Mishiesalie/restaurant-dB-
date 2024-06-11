import { db} from "../drizzle/db";
import { addressRelationsType, address_table, addressselect} from "../drizzle/schema";


//get users from the database
export const addressService = async (limit?: number): Promise<addressRelationsType[] | null> => {
    if (limit) {
        return await db.query.address_table.findMany({
            limit: limit
        });
    }
    return; await db.query.address_table.findMany();
}

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

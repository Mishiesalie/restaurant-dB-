import db from "../drizzle/db";
import { categoryRelationsType, category_table, categoryselect} from "../drizzle/schema";


//get users from the database
export const categoryService = async (limit?: number): Promise<categoryRelationsType[] | null> => {
    if (limit) {
        return await db.query.category_table.findMany({
            limit: limit
        });
    }
    return await db.query.category_table.findMany();
}

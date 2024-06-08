import db from "../drizzle/db";
import { commentRelationsType, comment_table, commentselect} from "../drizzle/schema";


//get users from the database
export const commentService = async (limit?: number): Promise<commentRelationsType[] | null> => {
    if (limit) {
        return await db.query.comment_table.findMany({
            limit: limit
        });
    }
    return await db.query.comment_table.findMany();
}

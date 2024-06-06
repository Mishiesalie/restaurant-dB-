import db from "../drizzle/db";
import { userRelationsType,userselect, users_table} from "../drizzle/schema";


//get users from the database
export const usersService = async (limit?: number): Promise<userRelationsType[] | null> => {
    if (limit) {
        return await db.query.users_table.findMany({
            limit: limit
        });
    }
    return await db.query.users_table.findMany();
}

//create new users
export const createUserService = async (user: userRelationsType) => {
    await db.insert(users_table).values(user)
    return "User created successfully";
}

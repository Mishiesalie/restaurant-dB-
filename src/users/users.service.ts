import { eq } from "drizzle-orm/expressions";
import { db} from "../drizzle/db";
import { userRelationsType,userselect, users_table} from "../drizzle/schema";


//get users from the database
export const usersService = async (limit?: number): Promise<userRelationsType[] | null> => {
    if (limit) {
        return await db.query.users_table.findMany({
            limit: limit
        });
    }
    return; await db.query.users_table.findMany();
}

//create new users
// export const createUserService = async (user: userRelationsType) => {
//     await db.insert(users_table).values(user)
//     return "User created successfully";
// }

export const getUserService = async (id: number): Promise<userRelationsType | undefined> => {
    return await db.query.users_table.findFirst({
        where: eq(users_table.id, id)
    })
}

export const createUserService = async (user: userRelationsType) => {
    await db.insert(users_table).values(user)
    return "User created successfully";
}

export const updateUserService = async (id: number, user: userRelationsType) => {
    await db.update(users_table).set(user).where(eq(users_table.id, id))
    return "User updated successfully";
}

export const deleteUserService = async (id: number) => {
    await db.delete(users_table).where(eq(users_table.id, id))
    return "User deleted successfully";
}

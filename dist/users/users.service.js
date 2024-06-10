"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserService = exports.updateUserService = exports.createUserService = exports.getUserService = exports.usersService = void 0;
const expressions_1 = require("drizzle-orm/expressions");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
//get users from the database
const usersService = async (limit) => {
    if (limit) {
        return await db_1.db.query.users_table.findMany({
            limit: limit
        });
    }
    return;
    await db_1.db.query.users_table.findMany();
};
exports.usersService = usersService;
//create new users
// export const createUserService = async (user: userRelationsType) => {
//     await db.insert(users_table).values(user)
//     return "User created successfully";
// }
const getUserService = async (id) => {
    return await db_1.db.query.users_table.findFirst({
        where: (0, expressions_1.eq)(schema_1.users_table.id, id)
    });
};
exports.getUserService = getUserService;
const createUserService = async (user) => {
    await db_1.db.insert(schema_1.users_table).values(user);
    return "User created successfully";
};
exports.createUserService = createUserService;
const updateUserService = async (id, user) => {
    await db_1.db.update(schema_1.users_table).set(user).where((0, expressions_1.eq)(schema_1.users_table.id, id));
    return "User updated successfully";
};
exports.updateUserService = updateUserService;
const deleteUserService = async (id) => {
    await db_1.db.delete(schema_1.users_table).where((0, expressions_1.eq)(schema_1.users_table.id, id));
    return "User deleted successfully";
};
exports.deleteUserService = deleteUserService;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const hono_1 = require("hono");
const users_controller_1 = require("./users.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
exports.usersRouter = new hono_1.Hono();
//get all users      api/users
exports.usersRouter.get("/users", users_controller_1.listUsers);
exports.usersRouter.post("/users", (0, zod_validator_1.zValidator)('json', validators_1.userSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.success ? result.data : { error: 'Validation failed' }, result.success ? 200 : 400);
    }
}), users_controller_1.createUser);
exports.usersRouter.get("/users/:id", users_controller_1.getUser);
// create a user 
exports.usersRouter.post("/users", (0, zod_validator_1.zValidator)('json', validators_1.userSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.success ? result.data : { error: 'Validation failed' }, result.success ? 200 : 400);
    }
}), users_controller_1.createUser);
//update a user
exports.usersRouter.put("/users/:id", users_controller_1.updateUser);
exports.usersRouter.delete("/users/:id", users_controller_1.deleteUser);
const users = [
    {
        id: 1,
        name: "Omoro",
        contact_phone: "0702216778",
        phone_verified: true,
        email: "omoro@gmail.com",
        email_verified: true,
        password: "123",
        created_at: "2009-12-12",
        updated_at: "2009-12-17",
    },
    {
        id: 2,
        name: "Omo",
        contact_phone: "0702223278",
        phone_verified: true,
        email: "omo@gmail.com",
        email_verified: true,
        password: "123",
        created_at: "2009-11-11",
        updated_at: "2009-12-10",
    },
    {
        id: 3,
        name: "Sally",
        contact_phone: "0735716778",
        phone_verified: true,
        email: "sally@gmail.com",
        email_verified: true,
        password: "123",
        created_at: "2010-11-11",
        updated_at: "2010-12-10",
    },
    {
        id: 4,
        name: "Sam",
        contact_phone: "0735716434",
        phone_verified: true,
        email: "sam@gmail.com",
        email_verified: false,
        password: "123",
        created_at: "2010-09-11",
        updated_at: "2010-10-10",
    }
];
// Get all users api/users
exports.usersRouter.get("/users", (c) => {
    return c.json(users, 200);
});
// Get a single user api/users/:id
exports.usersRouter.get("/users/:id", (c) => {
    const id = Number(c.req.param("id"));
    const user = users.find(user => user.id === id);
    if (!user) {
        return c.text("User not found", 404);
    }
    return c.json(user, 200);
});
// Create a user
exports.usersRouter.post("/users", async (c) => {
    const user = await c.req.json();
    if (!user) {
        return c.text("Invalid user", 400);
    }
    // Add user to the list
    users.push(user);
    return c.json(user, 201);
});

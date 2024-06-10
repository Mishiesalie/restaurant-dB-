
import { Hono } from "hono";
import { type Context } from "hono";
import { listUsers, createUser, getUser, updateUser, deleteUser} from "./users.controller"
import { zValidator } from "@hono/zod-validator";
import { userSchema } from "../validators";

export const usersRouter = new Hono();

//get all users      api/users
usersRouter.get("/users", listUsers);

usersRouter.post("/users", zValidator('json', userSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.success? result.data : { error: 'Validation failed' }, result.success? 200 : 400);
    }
}), createUser)

usersRouter.get("/users/:id", getUser)
// create a user 
usersRouter.post("/users", zValidator('json', userSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.success? result.data : { error: 'Validation failed' }, result.success? 200 : 400);
    }
}), createUser)

//update a user
usersRouter.put("/users/:id", updateUser)


usersRouter.delete("/users/:id", deleteUser)











const users: Tusers[] = [
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

interface Tusers {
    id: number,
    name: string,
    contact_phone: string,
    phone_verified: boolean,
    email: string,
    email_verified: boolean,
    password: string,
    created_at: string,
    updated_at: string
}

// Get all users api/users
usersRouter.get("/users", (c: Context) => {
    return c.json(users, 200);
});

// Get a single user api/users/:id
usersRouter.get("/users/:id", (c: Context) => {
    const id = Number(c.req.param("id"));
    const user = users.find(user => user.id === id);

    if (!user) {
        return c.text("User not found", 404);
    }
    return c.json(user, 200);
});

// Create a user
usersRouter.post("/users", async (c: Context) => {
    const user: Tusers = await c.req.json();
    if (!user) {
        return c.text("Invalid user", 400);
    }

    // Add user to the list
    users.push(user);
    return c.json(user, 201);
});

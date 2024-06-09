import { Hono } from "hono";
import { type Context } from "hono";
import { liststate, getstate, createstate, updatestate, deletestate} from "./state.controller"
import { zValidator } from "@hono/zod-validator";
import { stateSchema } from "../validators";

export const stateRouter = new Hono();

//get all users      api/users
stateRouter.get("/state", liststate);

//get a single user    api/users/1
stateRouter.get("/users/:id", getstate)

// create a user 
stateRouter.post("/users", zValidator('json', stateSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createstate)

//update a user
stateRouter.put("/users/:id", updatestate)

//delete a user
stateRouter.delete("/users/:id", deletestate)


// stateRouter.post("/users", zValidator('json', stateSchema, (result, c) => {
//     if (!result.success) {
//         return c.json(result.error, 400)
//     }
// }), creatstate)


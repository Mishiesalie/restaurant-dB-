import { Hono } from "hono";
import { type Context } from "hono";
import { liststate} from "./state.controller"
import { zValidator } from "@hono/zod-validator";


export const stateRouter = new Hono();

//get all users      api/users
stateRouter.get("/state", liststate);


// stateRouter.post("/users", zValidator('json', stateSchema, (result, c) => {
//     if (!result.success) {
//         return c.json(result.error, 400)
//     }
// }), creatstate)

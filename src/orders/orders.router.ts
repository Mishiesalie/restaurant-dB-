import { Hono } from "hono";
import { type Context } from "hono";
import { createorders, deleteorders, getorders, listorder, updateorders} from "./orders.controller"
import { zValidator } from "@hono/zod-validator";


export const ordersRouter = new Hono();

//get all orders
ordersRouter.get("/orders", listorder);

//get a single order
ordersRouter.get("/orders/:id", getorders)
// create a user 
ordersRouter.post("/orders", zValidator('json', ordersSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createorders)
//update a user
ordersRouter.put("/orders/:id", updateorders)

ordersRouter.delete("/orders/:id", deleteorders)
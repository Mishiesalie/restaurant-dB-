import { Hono } from "hono";
import { type Context } from "hono";
import { orderMenuItemstate, getorderMenuItem, createorderMenuItem, updateorderMenuItem, deleteorderMenuItem} from "./ordermenuitems.controller"
import { zValidator } from "@hono/zod-validator";
import { orderMenuItemSchema } from "../validators";


export const orderMenuItemRouter = new Hono();

//get all orderMenuItem      
orderMenuItemRouter.get("/ordermenuitems", orderMenuItemstate);

//get a single orderMenuItem    
orderMenuItemRouter.get("/orderMenuItem/:id", getorderMenuItem)
// create a orderMenuItem 
orderMenuItemRouter.post("/orderMenuItem", zValidator('json', orderMenuItemSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createorderMenuItem)
//update a orderMenuItem
orderMenuItemRouter.put("/orderMenuItem/:id", updateorderMenuItem)

orderMenuItemRouter.delete("/orderMenuItem/:id", deleteorderMenuItem)
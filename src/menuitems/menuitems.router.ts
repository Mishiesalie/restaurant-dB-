import { Hono } from "hono";
import { type Context } from "hono";
import { listmenuItems, getmenuItem, updatemenuItem, createmenuItem, deletemenuItem} from "./menuitems.controller"
import { zValidator } from "@hono/zod-validator";
import { menuItemSchema } from "../validators"


export const menuItemsRouter = new Hono();

//get all menuItem   
menuItemsRouter.get("/menuitems", listmenuItems);

//get a single menuItem  
menuItemsRouter.get("/menuItem/:id", getmenuItem)
// create a menuItem 
menuItemsRouter.post("/menuItem", zValidator('json', menuItemSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createmenuItem)
//update a menuItem
menuItemsRouter.put("/menuItem/:id", updatemenuItem)

menuItemsRouter.delete("/menuItem/:id", deletemenuItem)
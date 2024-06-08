import { Hono } from "hono";
import { type Context } from "hono";
import { listmenuItems} from "./menuitems.controller"
import { zValidator } from "@hono/zod-validator";


export const menuItemsRouter = new Hono();

//get all users      api/users
menuItemsRouter.get("/menuitems", listmenuItems);
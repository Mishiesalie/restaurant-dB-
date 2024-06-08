import { Hono } from "hono";
import { type Context } from "hono";
import { orderMenuItemstate} from "./ordermenuitems.controller"
import { zValidator } from "@hono/zod-validator";


export const orderMenuItemRouter = new Hono();

//get all users      api/users
orderMenuItemRouter.get("/ordermenuitems", orderMenuItemstate);
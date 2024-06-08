import { Hono } from "hono";
import { type Context } from "hono";
import { listorder} from "./orders.controller"
import { zValidator } from "@hono/zod-validator";


export const ordersRouter = new Hono();

//get all users      api/users
ordersRouter.get("/orders", listorder);
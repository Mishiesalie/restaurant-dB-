import { Hono } from "hono";
import { type Context } from "hono";
import { listorderstatus} from "./orderstatus.controller"
import { zValidator } from "@hono/zod-validator";


export const orderstatusRouter = new Hono();

//get all users      api/users
orderstatusRouter.get("/orderstatus", listorderstatus);
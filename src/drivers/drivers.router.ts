import { Hono } from "hono";
import { type Context } from "hono";
import { listdrivers} from "./drivers.controller"
import { zValidator } from "@hono/zod-validator";


export const driversRouter = new Hono();

//get all users      api/users
driversRouter.get("/drivers", listdrivers);

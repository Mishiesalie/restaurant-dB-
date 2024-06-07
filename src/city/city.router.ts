import { Hono } from "hono";
import { type Context } from "hono";
import { listcity} from "./city.controller"
import { zValidator } from "@hono/zod-validator";


export const cityRouter = new Hono();

//get all users      api/users
cityRouter.get("/state", listcity);
import { Hono } from "hono";
import { type Context } from "hono";
import { listaddress} from "./address.controller"
import { zValidator } from "@hono/zod-validator";


export const addressRouter = new Hono();

//get all users      api/users
addressRouter.get("/address", listaddress);
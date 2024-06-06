import { Hono } from "hono";
import { type Context } from "hono";
import { listUsers} from "./city.controller"
import { zValidator } from "@hono/zod-validator";
import { userSchema } from "../validators";

export const cityRouter = new Hono();

//get all users      api/users
cityRouter.get("/city", listUsers);
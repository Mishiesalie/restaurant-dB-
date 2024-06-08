import { Hono } from "hono";
import { type Context } from "hono";
import { listcomment} from "./comments.controller"
import { zValidator } from "@hono/zod-validator";


export const commentsRouter = new Hono();

//get all users      api/users
commentsRouter.get("/comments", listcomment);
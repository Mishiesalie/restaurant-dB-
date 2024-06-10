"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRouter = void 0;
const hono_1 = require("hono");
const address_controller_1 = require("./address.controller");
exports.addressRouter = new hono_1.Hono();
//get all users      api/users
exports.addressRouter.get("/address", address_controller_1.listaddress);

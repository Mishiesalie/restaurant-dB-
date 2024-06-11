"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
require("dotenv/config");
const auth_service_1 = require("./auth.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("hono/jwt");
const registerUser = async (c) => {
    try {
        const login = await c.req.json();
        const pass = login.password;
        const hashedPassword = await bcrypt_1.default.hash(pass, 10);
        login.password = hashedPassword;
        const createdUser = await (0, auth_service_1.createloginService)(login);
        if (!createdUser)
            return c.text("login not created", 404);
        return c.json({ msg: createdUser }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.registerUser = registerUser;
const loginUser = async (c) => {
    try {
        const login = await c.req.json();
        //check login exist
        const loginExist = await (0, auth_service_1.LoginService)(login);
        if (loginExist === null)
            return c.json({ error: "login not found" }, 404); // not found         
        const loginMatch = await bcrypt_1.default.compare(login.password, login?.password);
        if (!loginMatch) {
            return c.json({ error: "Invalid credentials" }, 401); // unauthorized
        }
        else {
            // create a payload
            const payload = {
                sub: loginExist?.username,
                role: loginExist?.role,
                exp: Math.floor(Date.now() / 1000) + (60 * 180) // 3 hour  => SESSION EXPIRATION
            };
            let secret = process.env.JWT_SECRET; // secret key
            const token = await (0, jwt_1.sign)(payload, secret); // create a JWT token
            let user = loginExist?.user;
            let role = loginExist?.role;
            return c.json({ token, user: { role, ...user } }, 200); // return token and user details
        }
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.loginUser = loginUser;
// export const register = async (c: Context) => {
//     try {
//         const user = await c.req.json();
//         const message = await registerUser(user);
//         return c.json({ msg: message }, 201);
//     } catch (error: any) {
//         return c.json({ error: error.message }, 400);
//     }
// };
// export const login = async (c: Context) => {
//     try {
//         const { email, password } = await c.req.json();
//         const { token, user } = await loginUser(email, password);
//         return c.json({ token, user }, 200);
//     } catch (error: any) {
//         return c.json({ error: error.message }, 400);
//     }
// };

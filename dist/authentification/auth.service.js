"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = exports.createloginService = void 0;
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const drizzle_orm_1 = require("drizzle-orm");
const createloginService = async (login) => {
    await db_1.db.insert(schema_1.login_table).values(login);
    return "login created successfully";
};
exports.createloginService = createloginService;
const LoginService = async (login) => {
    const { username, password } = login;
    return await db_1.db.query.login_table.findFirst({
        columns: {
            username: true,
            role: true,
            password: true
        }, where: (0, drizzle_orm_1.sql) ` ${schema_1.login_table.username} = ${username}`,
        with: {
            user: {
                columns: {
                    name: true,
                    phone: true,
                    address: true,
                    id: true
                }
            }
        }
    });
};
exports.LoginService = LoginService;
// const secret = process.env.SECRET;
// const expiresIn = process.env.EXPIRES
// export const registerUser = async (user: userRelationsType) =>{
//     //check if the user already exists
//     const existingUser = await db.query.users_table.findFirst({
//         where: eq(users_table.email, user.email)
//     });
//     if (existingUser){
//         throw new Error('User already exists');
//     }
//     //Hash the password
//     const hashedPassword = await bcrypt.hash(user.password, 10);
//     await db.insert(users_table).values({...user, password: hashedPassword});
//     return 'User registered successfully';
// };
// export const loginUser = async(email: string, password: string) =>{
//     const user = await db.query.users_table.findFirst({
//         where: eq(users_table.email, email)
//     });
//     if(!user){
//         throw new Error('User not found');
//     }
//     const isPasswordValid = await bcrypt.compare(password,user.password);
//     if(!isPasswordValid){
//         throw new Error('Invalid password');
//     }
//     const token = jwt.sign({id: user.id, email: user.email}, secret!, {expiresIn});
//     return {token, user};
// };
// export const verifyToken = (token: string) => {
//     try {
//         return jwt.verify(token, secret!);
//     } catch (error) {
//         throw new Error('Invalid token');
//     }
// };
// import bcrypt from 'bcryptjs';
// import jwt from "jsonwebtoken";
// import  {db} from "../drizzle/db";
// import { Users,userRelationsType, userselect } from '../drizzle/schema';
// import {eq} from 'drizzle-orm';
// const secret = process.env.SECRET;
// const expiresIn = process.env.EXPIRES;
// export const registerUser = async (user: userRelationsType) =>{
//     //... rest of the code
// };
// export const loginUser = async(email: string, password: string) =>{
//     //... rest of the code
// };
// export const verifyToken = (token: string) => {
//     //... rest of the code
// };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaddress = void 0;
const address_service_1 = require("./address.service");
const listaddress = async (c) => {
    try {
        //limit the number of users to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, address_service_1.addressService)(limit);
        if (data == null || data.length == 0) {
            return c.text("address not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listaddress = listaddress;

import * as jwt from "jsonwebtoken";
import { UsersModel } from "../model/UsersModel";
import { PRIVATE_KEY } from "./jwtPrivateKey";

export function generateToken(user: UsersModel) {
    return jwt.sign({
        "sub": user.id,
        "username": user.username,
        "firstName": user.firstName,
        "lastName": user.lastName
    }, PRIVATE_KEY, { expiresIn: "2h" });
}
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { PRIVATE_KEY } from "../2-dal/jwtPrivateKey";

export async function verifyUser(req: Request, res: Response, next: NextFunction) {
    try {
        let token: any = req.headers.authorization?.substring(7);
        let res = verify(token, PRIVATE_KEY);
        // console.log(res);
        next();
    } catch (e) {
        // console.log('Verify user problem' + e)
        res.status(401).send('not verified');
    }
}

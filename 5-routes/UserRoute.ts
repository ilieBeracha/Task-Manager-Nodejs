import express from "express";
import { generateToken } from "../2-dal/jwt";
import { addUser, getUsers, getUsersCollab } from "../4-logic/usersLogic";
import { UsersModel } from "../model/UsersModel";
import { hashedPassword } from "../2-dal/hashedPassword";

export const UserRoute = express.Router();

UserRoute.get('/users', async (req, res) => {
    const users = await getUsers();
    res.json(users);
})

UserRoute.post('/users/collab', async (req, res) => {
    const { body } = req.body;
    try {
        let user = await getUsersCollab(body);
        // console.log(body);

        if (user) {
            res.status(200).json(user)
        } else {
            res.status(401).json('no user')
        }
    } catch (e) {
        res.status(400).json(e)
    }


})

UserRoute.post('/users/register', async (req, res) => {
    try {
        const user: UsersModel = req.body;
        user.password = hashedPassword(user.password)
        await addUser(user)
        const token = generateToken(user)
        res.json(token)
    } catch (e) {
        res.status(400).send(e)
        // console.log(e);
    }
})

UserRoute.post('/users/login', async (req, res) => {
    let users: any = await getUsers();
    users = users[0]
    let username = req.body.username;
    let password = req.body.password;
    try {
        const user = users.find((u: UsersModel) => u.username === username && u.password === hashedPassword(password));
        if (user) {
            const token = generateToken(user)
            res.status(200).json(token)
        } else {
            res.status(404).send("no user")
        }
    } catch (e) {
        res.status(400).send({ message: e })
    }
})


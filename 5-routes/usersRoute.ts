import express from "express";
import { generateToken } from "../2-dal/jwt";
import { addTask, addUser, deleteTask, getTasks, getUsers, updateTask } from "../4-logic/usersLogic";
import { UsersModel } from "../model/UsersModel";

export const UserRoute = express.Router();

UserRoute.get('/users', async (req, res) => {
    const users: UsersModel[] = await getUsers();
    res.send(users);
})

UserRoute.post('/users/register', async (req, res) => {
    try {
        const user = req.body;
        const token = generateToken(user)
        await addUser(user)
        res.json(token)
    } catch (e) {
        res.status(400).send(e)
    }
})

UserRoute.post('/users/login', async (req, res) => {
    const users = await getUsers();
    try {
        const user = users.find((u) => u.username === req.body.username && u.password === req.body.password);
        if (user) {
            const token = generateToken(user)
            console.log(token)
            res.status(200).json(token)
        } else {
            res.status(404).send("no user")
        }
    } catch (e) {
        res.status(400).send({ message: e })
    }
})

UserRoute.post('/users/tasks/add/:id', async (req, res) => {
    const id = req.params.id;
    const taskBody = req.body
    await addTask(id, taskBody);
})

UserRoute.get('/users/tasks/:id', async (req, res) => {
    const { id } = req.params
    const userPosts = await getTasks(id)
    res.json(userPosts)

})

UserRoute.delete('/users/tasks/delete/:taskId/:userId', async (req, res) => {
    const { taskId } = req.params;
    const { userId } = req.params;
    await deleteTask(taskId, userId);
});

UserRoute.put('/users/tasks/update/:id',async (req, res) => {
    const task = req.body;
    const id = req.params.id;
    await updateTask(id, task)
})
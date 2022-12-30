import express from "express";
import { generateToken } from "../2-dal/jwt";
// import { addTask, addUser, deleteTask, getTasks, getUsers, updateTask } from "../4-logic/usersLogic";
import { addTaskSql, addUserSql, deleteTaskSql, getTasksById, getUsersSql, updateTaskSql } from "../4-logic/usersLogicSql";
import { TaskModel, UsersModel } from "../model/UsersModel";

export const UserRouteSql = express.Router();


UserRouteSql.get('/users', async (req, res) => {
    const users = await getUsersSql();
    res.json(users);
})

UserRouteSql.post('/users/register', async (req, res) => {
    try {
        const user = req.body;
        const token = generateToken(user)
        await addUserSql(user)
        res.json(token)
    } catch (e) {
        res.status(400).send(e)
    }
})

UserRouteSql.post('/users/login', async (req, res) => {
    let users: any = await getUsersSql();
    users = users[0]
    let username = req.body.username;
    let password = req.body.password;    
    try {
        const user = users.find((u: UsersModel) => u.username === username && u.password === password);
        if (user) {
            const token = generateToken(user)
            // console.log(token)
            res.status(200).json(token)
        } else {
            res.status(404).send("no user")
        }
    } catch (e) {
        res.status(400).send({ message: e })
    }
})


UserRouteSql.post('/users/tasks/add/:id', async (req, res) => {
    const id = req.params.id;
    const taskBody = req.body
    await addTaskSql(+id, taskBody);
})

UserRouteSql.get('/users/tasks/:id', async (req, res) => {
    const { id } = req.params
    const userPosts = await getTasksById(+id)
    res.json(userPosts);
})

UserRouteSql.delete('/users/tasks/delete/:taskId', async (req, res) => {
    const { taskId } = req.params;
    // const { userId } = req.params;
    await deleteTaskSql(+taskId);
});

UserRouteSql.put('/users/tasks/update/:id', async (req, res) => {
    const task: TaskModel = req.body;
    // const taskId = task.taskId
    const id = +req.params.id;
    console.log(id);
    
    await updateTaskSql(id, task)
});

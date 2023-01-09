import express from "express";
import { generateToken } from "../2-dal/jwt";
import { addUser, getUsers } from "../4-logic/usersLogic";
import { UsersModel } from "../model/UsersModel";
import { hashedPassword } from "../2-dal/hashedPassword";

export const UserRoute = express.Router();

UserRoute.get('/users', async (req, res) => {
    const users = await getUsers();
    res.json(users);
})

UserRoute.post('/users/register', async (req, res) => {
    try {
        const user:UsersModel = req.body;
        console.log(user);
        user.password = hashedPassword(user.password)
        console.log(user)
        
        await addUser(user)
        const token = generateToken(user)
        res.json(token)
    } catch (e) {
        res.status(400).send(e)
        console.log(e);
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


// UserRoute.post('/users/tasks/add/:id', verifyUser, async (req, res) => {
//     const id = req.params.id;
//     const taskBody = req.body
//     await addTaskSql(+id, taskBody);
// })

// UserRoute.get('/users/tasks/:id', verifyUser, async (req, res) => {
//     const { id } = req.params
//     console.log(id)
//     const userPosts = await getTasksById(+id)
//     res.json(userPosts);
// })

// UserRoute.delete('/users/tasks/delete/:taskId', verifyUser, async (req, res) => {
//     const { taskId } = req.params;
//     // const { userId } = req.params;
//     await deleteTaskSql(+taskId);
// });

// UserRouteSql.put('/users/tasks/update/:id', verifyUser, async (req, res) => {
//     const task: TaskModel = req.body;
//     console.log(task.indexPriority)
//     const id = +req.params.id;
//     await updateTaskSql(id, task)
//     res.json(task)
// });
// UserRouteSql.put('/users/tasks/edit/:id', verifyUser, async (req, res) => {
//     const task: TaskModel = req.body;
//     const id = +req.params.id;
//     await updateTaskEditSql(id, task)
//     res.json(task)
// });


import express from "express";
import { verifyUser } from "../3-middleware/verifyUser";
import { addTask, deleteTask, getTasksById, updateTaskEdit, updateTask } from "../4-logic/tasksLogic";
import { TaskModel } from "../model/UsersModel";

export const TasksRoute = express.Router()

TasksRoute.post('/tasks/add/:id', verifyUser, async (req, res) => {
    const id = req.params.id;    
    const taskBody = req.body
    await addTask(+id, taskBody);
})

TasksRoute.get('/tasks/:id', verifyUser, async (req, res) => {
    const { id } = req.params
    // console.log(id)
    const userPosts = await getTasksById(+id)
    res.json(userPosts);
})

TasksRoute.delete('/tasks/delete/:taskId', verifyUser, async (req, res) => {
    const { taskId } = req.params;
    // const { userId } = req.params;
    await deleteTask(+taskId);
});

TasksRoute.put('/tasks/update/:id', verifyUser, async (req, res) => {
    const task: TaskModel = req.body;
    // console.log(task.indexPriority)
    const id = +req.params.id;
    await updateTask(id, task)
    res.json(task)
});


TasksRoute.put('/tasks/edit/:id', verifyUser, async (req, res) => {
    const task: TaskModel = req.body;
    const id = +req.params.id;
    await updateTaskEdit(id, task)
    res.json(task)
});


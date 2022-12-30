// import { getAllUsers, saveAllUsers } from "../2-dal/dal";
// import { UsersModel, TaskModel } from "../model/UsersModel";
// import uniqid from 'uniqid';

// export async function getUsers() {
//     return await getAllUsers()
// }

// export async function addUser(user: UsersModel) {
//     const users: UsersModel[] = await getUsers();
//     user.id = uniqid()
//     user.tasks = [];
//     users.push(user);
//     await saveAllUsers(users)
// }


// export async function getTasks(id: string) {
//     const users: UsersModel[] = await getUsers();
//     const user = users.find((u) => u.id === id);
//     return user?.tasks

// }

// export async function addTask(id: string, task: TaskModel) {
//     const users: UsersModel[] = await getUsers();
//     const user = users.find((u) => u.id === id);
//     if (user) {
//         task.taskId = uniqid()
//         user.tasks?.push(task);
//         await saveAllUsers(users);
//     } else {
//         throw new Error(`User with id ${id} not found`);
//     }
// }

// export async function deleteTask(Taskid: string, userId: string) {
//     console.log(Taskid, userId);
//     const users = await getUsers();
//     try {
//         const userIndex = users.findIndex((u) => u.id === userId);
//         if (userIndex !== -1) {
//             const user = users[userIndex];
//             user.tasks = user.tasks?.filter((t) => t.taskId !== Taskid);
//             users[userIndex] = user;
//             await saveAllUsers(users);
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }

// export async function updateTask(userId: string, taskChanged: TaskModel) {
//     try {
//         const users: UsersModel[] = await getUsers();
//         const userIndex = users.findIndex((u) => u.id === userId);
//         if (userIndex !== -1) {
//             const user: any = users[userIndex];
//             const taskIndex: any = user.tasks?.findIndex((t: any) => t.taskId === taskChanged.taskId);            
//             if (taskIndex !== -1) {
//                 console.log(taskChanged);
//                 user.tasks[taskIndex] = taskChanged;
//                 await saveAllUsers(users);
//             }
//         }
//     } catch (e) {
//         console.error(e);
//     }
// }


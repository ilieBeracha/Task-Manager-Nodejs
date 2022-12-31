import { execute } from "../2-dal/dalSql"
import { TaskModel, UsersModel } from "../model/UsersModel";

export async function getUsersSql() {
    const query = `SELECT * FROM users`;
    const results = await execute(query);
    return results;
};

export async function addUserSql(user: UsersModel) {
    const { firstName, lastName, email, username, password } = user
    const query = `INSERT INTO users(firstName,lastName,email,username,password) VALUES('${firstName}','${lastName}','${email}','${username}','${password}')`
    const results = await execute(query)
    return results;
};

export async function getTasksById(id: number) {
    const query = `SELECT id, taskName, taskContent, DATE_FORMAT(taskDate, '%Y-%m-%d') as taskDate, taskPriority, taskStatus, label FROM tasks WHERE userId = ${id}`
    const results = await execute(query);
    return results[0];
};

export async function addTaskSql(id: number, task: TaskModel) {
    const { taskName, taskContent, taskDate, taskPriority, taskStatus, label } = task
    const query = `INSERT INTO tasks(userId,taskName,taskContent,taskDate,taskPriority,taskStatus,label) VALUES('${id}','${taskName}','${taskContent}','${taskDate}','${taskPriority}','${taskStatus}','${label}')`
    const [result] = await execute(query);
    return result;
}

export async function deleteTaskSql(Taskid: number) {
    const query = `DELETE FROM tasks WHERE id = ${Taskid}`;
    const [result] = await execute(query);
    return result;
}

export async function updateTaskSql(id:number,taskChanged: TaskModel) {
    const { taskName, taskContent, taskDate, taskPriority, taskStatus,label } = taskChanged    
    const query = `UPDATE tasks SET taskName = '${taskName}',taskContent ='${taskContent}',taskDate = '${taskDate}',taskPriority = '${taskPriority}',taskStatus = '${taskStatus}',label = '${label}' WHERE id = '${id}'`
    const [result] = await execute(query);
    return result;

}

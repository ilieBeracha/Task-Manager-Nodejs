import { execute } from "../2-dal/dalSql"
import { TaskModel } from "../model/UsersModel";


export async function getTasksById(id: number) {
    // console.log(id);
    
    const query = `SELECT id ,taskName ,taskContent , DATE_FORMAT(taskDate, '%Y-%m-%d') as taskDate ,taskPriority,taskStatus,label,imageUrl FROM tasks WHERE userId = ${id} order by indexPriority asc, indexPriorityTimeStamp desc `
    const results = await execute(query);
    return results[0];
};

export async function addTask(id: number, task: TaskModel) {
    // console.log(id);
    
    const { taskName, taskContent, taskDate, taskPriority, taskStatus, label } = task
    const query = `INSERT INTO tasks(userId,taskName,taskContent,taskDate,taskPriority,taskStatus,label) VALUES(${id},?,?,?,?,?,?)`
    const [result] = await execute(query, [taskName, taskContent, taskDate, taskPriority, taskStatus, label]);
    return result;
}

export async function deleteTask(Taskid: number) {
    const query = `DELETE FROM tasks WHERE id = ${Taskid}`;
    const [result] = await execute(query);
    return result;
}

export async function updateTask(id: number, taskChanged: TaskModel) {
    const { taskName, taskContent, taskDate, taskPriority, taskStatus, label, indexPriority, indexPriorityTimeStamp } = taskChanged
    const query = `UPDATE tasks SET taskName = ?,taskContent =?,taskDate = ?,taskPriority = ?,taskStatus = ?,label = ?,indexPriority = ?,indexPriorityTimeStamp= ? WHERE id = '${id}'`
    const [result] = await execute(query, [taskName, taskContent, taskDate, taskPriority, taskStatus, label, indexPriority, indexPriorityTimeStamp]);
    return result;
}
export async function updateTaskEdit(id: number, taskChanged: TaskModel) {
    const { taskName, taskContent, taskDate, taskPriority, taskStatus, label } = taskChanged
    const query = `UPDATE tasks SET taskName = ?,taskContent = ?,taskDate = ?,taskPriority = ?,taskStatus = ?,label = ? WHERE id = ${id}`
    const [result] = await execute(query, [taskName, taskContent, taskDate, taskPriority, taskStatus, label]);
    return result;
}
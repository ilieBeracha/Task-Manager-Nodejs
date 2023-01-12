export interface UsersModel {
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    email: string
    tasks?: TaskModel[]
}

export interface TaskModel {
    taskName: string,
    taskContent: string,
    taskDate: string,
    taskPriority:string
    taskId?: number
    taskStatus: string
    label:string,
    indexPriority:number,
    indexPriorityTimeStamp:number,
    imageUrl:string
}
export interface UsersModel {
    id: string,
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
    taskHour: string,
    taskId?: string
    taskStatus: string
}
// import fs from "fs/promises";
// import { UsersModel } from "../model/UsersModel";

// const USERS_FILE = "./1-assets/users.json";

// export async function getAllUsers(): Promise<UsersModel[]> {
//     try {
//         const users = await fs.readFile(USERS_FILE)
//         return JSON.parse(users.toString())
//     } catch (error) {
//         console.error(error)
//         return []
//     }
// }

// export async function saveAllUsers(users: UsersModel[]) {
//     await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2))
// }
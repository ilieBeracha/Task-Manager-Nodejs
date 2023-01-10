import { OkPacket } from "mysql2";
import { execute } from "../2-dal/dalSql"
import { UsersModel } from "../model/UsersModel";

export async function getUsers() {
    const query = `SELECT * FROM users`;
    const results = await execute(query);
    return results;
};

export async function getUsersCollab(username:string){
    const query = `SELECT id,firstName, lastName, email, username FROM users WHERE username like '%${username}%'`;
    const results = await execute(query);
    return results[0];
}

export async function addUser(user: UsersModel) {
    const { firstName, lastName, email, username, password } = user
    const query = `INSERT INTO users(firstName,lastName,email,username,password) VALUES(?,?,?,?,?)`
    const results = await execute<OkPacket>(query, [firstName, lastName, email, username, password])
    user.id = results[0].insertId;
    return results;
};




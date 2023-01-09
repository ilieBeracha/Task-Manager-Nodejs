import { OkPacket } from "mysql2";
import { execute } from "../2-dal/dalSql"
import { hashedPassword } from "../2-dal/hashedPassword";
import { TaskModel, UsersModel } from "../model/UsersModel";

export async function getUsers() {
    const query = `SELECT * FROM users`;
    const results = await execute(query);
    return results;
};

export async function addUser(user: UsersModel) {
    const { firstName, lastName, email, username, password } = user
    const query = `INSERT INTO users(firstName,lastName,email,username,password) VALUES(?,?,?,?,?)`
    const results = await execute<OkPacket>(query, [firstName, lastName, email, username, password])
    user.id = results[0].insertId;
    return results;
};




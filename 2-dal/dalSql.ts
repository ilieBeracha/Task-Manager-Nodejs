import mySql, { OkPacket, RowDataPacket } from 'mysql2';

const pool = mySql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'task_manager'
});

export function execute<T>(query: string,param?:any[]) {
    return pool.promise().execute<T & RowDataPacket[]>(query,param);
};



// const response = await openai.listEngines();





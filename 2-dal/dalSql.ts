import mySql from 'mysql2';

const pool = mySql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'task_manager'
});

export function execute(query: string) {
    return pool.promise().execute(query);
};





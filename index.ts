import sql from 'mysql2';
import express, { json } from "express";
import cors from 'cors';
// import { UserRoute } from "./5-routes/usersRoute";
import { UserRouteSql } from './5-routes/sqlUserRoute';

const server = express();

server.use(json());
server.use(cors({
    allowedHeaders: ['*'],
    origin: ['http://localhost:3000']
}));

// server.use('/api',UserRoute);
server.use(UserRouteSql);


server.listen(3080,() => console.log("listening..."))



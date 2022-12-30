import sql from 'mysql2';
import express, { json } from "express";
const cors = require('cors')
// import { UserRoute } from "./5-routes/usersRoute";
import { UserRouteSql } from './5-routes/sqlUserRoute';

const server = express();

server.use(cors());
server.use(json());

// server.use('/api',UserRoute);
server.use(UserRouteSql);


server.listen(3080,() => console.log("listening..."))



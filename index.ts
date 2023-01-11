import express, { json } from "express";
import cors from 'cors';
// import { UserRoute } from "./5-routes/usersRoute";
import { UserRoute } from './5-routes/UserRoute';
import * as dotenv from 'dotenv'
import { TasksRoute } from "./5-routes/TasksRoute";
import { hashedPassword } from "./2-dal/hashedPassword";
import { openAiServer } from "./5-routes/openAiRoute";
dotenv.config()

const server = express();

server.use(json());

server.use(cors({
    allowedHeaders: ['*'],
    origin: ['http://localhost:3000']
}));

// server.use('/api',UserRoute);
server.use(UserRoute);
server.use(TasksRoute);
server.use(openAiServer);


server.listen(3080, () => console.log(`listening...`))

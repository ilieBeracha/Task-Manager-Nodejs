import express, { json } from "express";
const cors = require('cors')
import { UserRoute } from "./5-routes/usersRoute";

const server = express();

server.use(cors());
server.use(json());

server.use('/api',UserRoute);

server.listen(3050,() => console.log("listening..."))
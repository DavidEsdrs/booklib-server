import "reflect-metadata";
import "express-async-errors";
import "dotenv";
import "../data";
import express from "express";
import { router } from "./routes";

const server = express();

server.use(express.json());
server.use(router);

const port = process.env.SERVER_PORT ?? 3000;

server.listen(port, () => console.log("running..."));
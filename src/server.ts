import "reflect-metadata";
import "express-async-errors";
import "dotenv";
import "../data";
import express from "express";
import { router } from "./routes";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";

const server = express();

server.use(cors());
server.use(express.json());
server.use(router);

server.use(errorHandler);

const port = process.env.SERVER_PORT ?? 3000;

server.listen(port, () => console.log("running..."));
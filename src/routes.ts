import { Router } from "express";
import buildCreateBook from "./useCases/books/create/buildCreateBook";

const router = Router();

router.post("/books", (req, res) => buildCreateBook().handle(req, res));

export { router };